import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { DEFAULT_HOMEPAGE_DESCRIPTION, createBlogRepository } from './content'
import { BLOG_CATEGORY_SLUGS } from '@/types/blog'

const createFixture = () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'keystone-blog-'))
  for (const category of BLOG_CATEGORY_SLUGS) {
    fs.mkdirSync(path.join(root, 'blog', category), { recursive: true })
  }
  fs.writeFileSync(
    path.join(root, 'homepage.json'),
    JSON.stringify({
      description: '',
      heroPost: 'hardware-wallet/newer-post.md',
      subHeroFirst: null,
      subHeroSecond: null,
    })
  )
  return root
}

const article = (overrides: Record<string, string | undefined> = {}) => {
  const fields = {
    title: 'Article title',
    slug: 'article-slug',
    summary: 'Article summary',
    publishedAt: '2024-03-20',
    updatedAt: '2024-03-20',
    heroImage: '/images/blog/bitcoin/article-slug/hero.webp',
    ...overrides,
  }
  const publishedAt =
    fields.publishedAt === undefined
      ? ''
      : `publishedAt: "${fields.publishedAt}"\n`
  return `---
title: "${fields.title}"
slug: "${fields.slug}"
summary: "${fields.summary}"
${publishedAt}updatedAt: "${fields.updatedAt}"
heroImage: "${fields.heroImage}"
seo:
  description: "SEO description"
---

Body content.`
}

describe('local blog content repository', () => {
  const roots: string[] = []

  afterEach(() => {
    for (const root of roots.splice(0)) {
      fs.rmSync(root, { recursive: true, force: true })
    }
  })

  test('sorts posts, derives categories, defaults locale, and resolves heroes', () => {
    const root = createFixture()
    roots.push(root)
    fs.writeFileSync(
      path.join(root, 'blog/hardware-wallet/newer-post.md'),
      article({ slug: 'newer-post', updatedAt: '2024-04-20' })
    )
    fs.writeFileSync(
      path.join(root, 'blog/bitcoin/older-post.md'),
      article({ slug: 'older-post', updatedAt: '2024-03-20' })
    )

    const repository = createBlogRepository(root)
    expect(repository.getAllPosts().map(({ slug }) => slug)).toEqual([
      'newer-post',
      'older-post',
    ])
    expect(repository.getPostsByCategory('bitcoin')).toHaveLength(1)
    expect(repository.getPostBySlug('newer-post')?.category).toBe(
      'Hardware Wallet'
    )
    expect(repository.getPostBySlug('newer-post')?.locale).toBe('en')
    expect(repository.getPostBySlug('newer-post')?.seo?.description).toBe(
      'SEO description'
    )

    const homepage = repository.getHomepageContent()
    expect(homepage.heroPost?.slug).toBe('newer-post')
    expect(homepage.subHeroFirst).toBeNull()
    expect(homepage.description).toBe(DEFAULT_HOMEPAGE_DESCRIPTION)
  })

  test.each([
    ['invalid date', { updatedAt: 'not-a-date' }, 'updatedAt'],
    ['invalid publication date', { publishedAt: 'not-a-date' }, 'publishedAt'],
    ['invalid image', { heroImage: 'relative/hero.webp' }, 'heroImage'],
    ['missing title', { title: '' }, 'title'],
  ])('rejects %s', (_name, overrides, expectedField) => {
    const root = createFixture()
    roots.push(root)
    fs.writeFileSync(
      path.join(root, 'blog/hardware-wallet/newer-post.md'),
      article(overrides)
    )
    expect(() => createBlogRepository(root).getAllPosts()).toThrow(
      new RegExp(`newer-post\\.md.*${expectedField}`)
    )
  })

  test.each([
    ['omitted', undefined],
    ['empty', ''],
  ])('falls back to updatedAt when publishedAt is %s', (_name, publishedAt) => {
    const root = createFixture()
    roots.push(root)
    fs.writeFileSync(
      path.join(root, 'blog/hardware-wallet/newer-post.md'),
      article({
        slug: 'newer-post',
        publishedAt,
        updatedAt: '2024-04-20',
      })
    )

    const post = createBlogRepository(root).getPostBySlug('newer-post')
    expect(post?.publishedAt).toBe('2024-04-20T00:00:00.000Z')
    expect(post?.updatedAt).toBe('2024-04-20T00:00:00.000Z')
  })

  test('preserves an explicit historical publishedAt', () => {
    const root = createFixture()
    roots.push(root)
    fs.writeFileSync(
      path.join(root, 'blog/hardware-wallet/newer-post.md'),
      article({
        slug: 'newer-post',
        publishedAt: '2024-03-20',
        updatedAt: '2024-04-20',
      })
    )

    const post = createBlogRepository(root).getPostBySlug('newer-post')
    expect(post?.publishedAt).toBe('2024-03-20T00:00:00.000Z')
    expect(post?.updatedAt).toBe('2024-04-20T00:00:00.000Z')
  })

  test('rejects duplicate slugs', () => {
    const root = createFixture()
    roots.push(root)
    fs.writeFileSync(
      path.join(root, 'blog/hardware-wallet/newer-post.md'),
      article({ slug: 'duplicate' })
    )
    fs.writeFileSync(
      path.join(root, 'blog/bitcoin/duplicate.md'),
      article({ slug: 'duplicate' })
    )
    expect(() => createBlogRepository(root).getAllPosts()).toThrow(
      /duplicate\.md.*duplicate slug/
    )
  })

  test('decodes JSON-compatible double-quoted front matter', () => {
    const root = createFixture()
    roots.push(root)
    fs.writeFileSync(
      path.join(root, 'blog/hardware-wallet/quoted.md'),
      article({
        title: 'A \\"quoted\\" title',
        slug: 'quoted',
        summary: 'Path \\\\ value',
      })
    )

    const post = createBlogRepository(root).getPostBySlug('quoted')
    expect(post?.title).toBe('A "quoted" title')
    expect(post?.summary).toBe('Path \\ value')
  })

  test.each(['missing.md', '../article-template.md'])(
    'rejects invalid homepage reference %s',
    (heroPost) => {
      const root = createFixture()
      roots.push(root)
      fs.writeFileSync(
        path.join(root, 'homepage.json'),
        JSON.stringify({
          description: '',
          heroPost,
          subHeroFirst: null,
          subHeroSecond: null,
        })
      )
      expect(() => createBlogRepository(root).getHomepageContent()).toThrow(
        /homepage\.json.*heroPost/
      )
    }
  )
})
