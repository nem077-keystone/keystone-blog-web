import fs from 'node:fs'
import path from 'node:path'
import {
  BLOG_CATEGORY_NAMES,
  BLOG_CATEGORY_SLUGS,
} from '@/types/blog'
import type {
  BlogCategorySlug,
  BlogPost,
  BlogPostSummary,
  BlogSeo,
  HomepageContent,
} from '@/types/blog'

export const DEFAULT_HOMEPAGE_DESCRIPTION =
  'Latest news, development and security tips to safeguard your crypto assets with Keystone.'

interface HomepageConfig {
  description: string
  heroPost: string | null
  subHeroFirst: string | null
  subHeroSecond: string | null
}

interface ParsedFrontMatter {
  title?: string
  slug?: string
  summary?: string
  publishedAt?: string
  updatedAt?: string
  heroImage?: string
  locale?: string
  seo?: BlogSeo
}

export interface BlogRepository {
  getAllPosts(): BlogPostSummary[]
  getPostBySlug(_slug: string): BlogPost | null
  getPostsByCategory(_category: BlogCategorySlug): BlogPostSummary[]
  getHomepageContent(): HomepageContent
}

const REQUIRED_FIELDS = [
  'title',
  'slug',
  'summary',
  'publishedAt',
  'updatedAt',
  'heroImage',
] as const

const TOP_LEVEL_FIELDS = new Set([...REQUIRED_FIELDS, 'locale', 'seo'])
const SEO_FIELDS = new Set(['title', 'description', 'canonicalURL'])

function parseScalar(value: string, sourcePath: string, field: string) {
  const trimmed = value.trim()
  if (!trimmed) return ''

  const quote = trimmed[0]
  if (quote === '"' || quote === '\'') {
    if (trimmed.at(-1) !== quote) {
      throw new Error(`${sourcePath}: ${field} has an unterminated quoted value`)
    }
    return trimmed.slice(1, -1)
  }

  if (['[', ']', '{', '}', ',', '&', '*', '!', '|', '>'].includes(quote)) {
    throw new Error(`${sourcePath}: ${field} uses unsupported YAML syntax`)
  }
  return trimmed
}

function parseFrontMatter(fileContents: string, sourcePath: string) {
  const match = fileContents.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  if (!match) {
    throw new Error(`${sourcePath}: expected YAML front matter between --- lines`)
  }

  const data: ParsedFrontMatter = {}
  let inSeo = false

  const lines = match[1].split(/\r?\n/)
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]
    if (!line.trim() || line.trimStart().startsWith('#')) continue
    if (line.includes('\t')) {
      throw new Error(`${sourcePath}: line ${index + 2} contains an unsupported tab`)
    }

    const nested = line.match(/^ {2}([A-Za-z][A-Za-z0-9]*):\s*(.*)$/)
    if (nested) {
      if (!inSeo || !SEO_FIELDS.has(nested[1])) {
        throw new Error(`${sourcePath}: unsupported nested field ${nested[1]}`)
      }
      data.seo ??= {}
      const key = nested[1] as keyof BlogSeo
      if (data.seo[key] !== undefined) {
        throw new Error(`${sourcePath}: duplicate field seo.${key}`)
      }
      data.seo[key] = parseScalar(nested[2], sourcePath, `seo.${key}`)
      continue
    }

    const topLevel = line.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.*)$/)
    if (!topLevel || !TOP_LEVEL_FIELDS.has(topLevel[1])) {
      throw new Error(`${sourcePath}: unsupported front matter line ${index + 2}`)
    }

    const key = topLevel[1] as keyof ParsedFrontMatter
    if (key === 'seo') {
      if (topLevel[2].trim()) {
        throw new Error(`${sourcePath}: seo must be a nested mapping`)
      }
      if (data.seo !== undefined) {
        throw new Error(`${sourcePath}: duplicate field seo`)
      }
      data.seo = {}
      inSeo = true
      continue
    }

    inSeo = false
    if (data[key] !== undefined) {
      throw new Error(`${sourcePath}: duplicate field ${key}`)
    }
    const writableData = data as Record<string, unknown>
    writableData[key] = parseScalar(
      topLevel[2],
      sourcePath,
      key
    )
  }

  return {
    data,
    body: fileContents.slice(match[0].length).trim(),
  }
}

function requiredString(
  data: ParsedFrontMatter,
  field: (typeof REQUIRED_FIELDS)[number],
  sourcePath: string
) {
  const value = data[field]
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`${sourcePath}: missing required field ${field}`)
  }
  return value.trim()
}

function normalizeDate(value: string, sourcePath: string, field: string) {
  const timestamp = Date.parse(value)
  if (Number.isNaN(timestamp)) {
    throw new Error(`${sourcePath}: ${field} must be a valid date`)
  }
  return new Date(timestamp).toISOString()
}

function toSummary(post: BlogPost): BlogPostSummary {
  const { body: _body, ...summary } = post
  return summary
}

function readHomepageConfig(contentRoot: string): HomepageConfig {
  const configPath = path.join(contentRoot, 'homepage.json')
  let value: unknown
  try {
    value = JSON.parse(fs.readFileSync(configPath, 'utf8'))
  } catch (error) {
    throw new Error(
      `${configPath}: unable to read valid JSON (${(error as Error).message})`
    )
  }

  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`${configPath}: expected a JSON object`)
  }

  const record = value as Record<string, unknown>
  const description = record.description
  if (typeof description !== 'string') {
    throw new Error(`${configPath}: description must be a string`)
  }

  const config: HomepageConfig = {
    description,
    heroPost: null,
    subHeroFirst: null,
    subHeroSecond: null,
  }
  for (const key of ['heroPost', 'subHeroFirst', 'subHeroSecond'] as const) {
    const item = record[key]
    if (item !== null && typeof item !== 'string') {
      throw new Error(`${configPath}: ${key} must be a string or null`)
    }
    config[key] = item as string | null
  }
  return config
}

export function createBlogRepository(
  contentRoot = path.join(process.cwd(), 'content')
): BlogRepository {
  let cachedPosts: BlogPost[] | null = null

  const loadPosts = () => {
    if (cachedPosts) return cachedPosts

    const posts: BlogPost[] = []
    const slugs = new Map<string, string>()

    for (const categorySlug of BLOG_CATEGORY_SLUGS) {
      const directory = path.join(contentRoot, 'blog', categorySlug)
      if (!fs.existsSync(directory)) continue

      const files = fs
        .readdirSync(directory, { withFileTypes: true })
        .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
        .map((entry) => entry.name)
        .sort()

      for (const filename of files) {
        const absolutePath = path.join(directory, filename)
        const sourcePath = path.posix.join(categorySlug, filename)
        const { data, body } = parseFrontMatter(
          fs.readFileSync(absolutePath, 'utf8'),
          sourcePath
        )

        const slug = requiredString(data, 'slug', sourcePath)
        const existingPath = slugs.get(slug)
        if (existingPath) {
          throw new Error(
            `${sourcePath}: duplicate slug ${slug}; already used by ${existingPath}`
          )
        }
        slugs.set(slug, sourcePath)

        const heroImage = requiredString(data, 'heroImage', sourcePath)
        if (!heroImage.startsWith('/') || heroImage.startsWith('//')) {
          throw new Error(`${sourcePath}: heroImage must be a root-relative path`)
        }

        posts.push({
          sourcePath,
          title: requiredString(data, 'title', sourcePath),
          slug,
          summary: requiredString(data, 'summary', sourcePath),
          publishedAt: normalizeDate(
            requiredString(data, 'publishedAt', sourcePath),
            sourcePath,
            'publishedAt'
          ),
          updatedAt: normalizeDate(
            requiredString(data, 'updatedAt', sourcePath),
            sourcePath,
            'updatedAt'
          ),
          heroImage,
          locale: data.locale?.trim() || 'en',
          categorySlug,
          category: BLOG_CATEGORY_NAMES[categorySlug],
          body,
          seo: data.seo,
        })
      }
    }

    posts.sort(
      (a, b) =>
        Date.parse(b.updatedAt) - Date.parse(a.updatedAt) ||
        a.slug.localeCompare(b.slug)
    )
    cachedPosts = posts
    return posts
  }

  const resolveHomepagePost = (
    configuredPath: string | null,
    field: keyof Pick<
      HomepageConfig,
      'heroPost' | 'subHeroFirst' | 'subHeroSecond'
    >
  ) => {
    if (configuredPath === null) return null

    const normalized = path.posix.normalize(configuredPath)
    if (
      path.posix.isAbsolute(configuredPath) ||
      normalized.startsWith('../') ||
      normalized !== configuredPath ||
      !normalized.endsWith('.md')
    ) {
      throw new Error(
        `${path.join(contentRoot, 'homepage.json')}: ${field} must be a normalized Markdown path relative to content/blog`
      )
    }

    const post = loadPosts().find((item) => item.sourcePath === normalized)
    if (!post) {
      throw new Error(
        `${path.join(contentRoot, 'homepage.json')}: ${field} references missing article ${configuredPath}`
      )
    }
    return toSummary(post)
  }

  return {
    getAllPosts: () => loadPosts().map(toSummary),
    getPostBySlug: (slug) =>
      loadPosts().find((post) => post.slug === slug) ?? null,
    getPostsByCategory: (category) => {
      if (!BLOG_CATEGORY_SLUGS.includes(category)) {
        throw new Error(`Unknown blog category: ${category}`)
      }
      return loadPosts()
        .filter((post) => post.categorySlug === category)
        .map(toSummary)
    },
    getHomepageContent: () => {
      const config = readHomepageConfig(contentRoot)
      return {
        description: config.description.trim() || DEFAULT_HOMEPAGE_DESCRIPTION,
        heroPost: resolveHomepagePost(config.heroPost, 'heroPost'),
        subHeroFirst: resolveHomepagePost(
          config.subHeroFirst,
          'subHeroFirst'
        ),
        subHeroSecond: resolveHomepagePost(
          config.subHeroSecond,
          'subHeroSecond'
        ),
        latests: loadPosts().map(toSummary),
      }
    },
  }
}

const repository = createBlogRepository()

export const getAllPosts = repository.getAllPosts
export const getPostBySlug = repository.getPostBySlug
export const getPostsByCategory = repository.getPostsByCategory
export const getHomepageContent = repository.getHomepageContent
