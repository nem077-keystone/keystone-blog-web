export const BLOG_CATEGORY_NAMES = {
  'hardware-wallet': 'Hardware Wallet',
  'crypto-security': 'Crypto Security',
  bitcoin: 'Bitcoin',
  partnerships: 'Partnerships',
  enterprise: 'Enterprise',
  other: 'Other',
} as const

export type BlogCategorySlug = keyof typeof BLOG_CATEGORY_NAMES
export type BlogCategoryName = (typeof BLOG_CATEGORY_NAMES)[BlogCategorySlug]

export const BLOG_CATEGORY_SLUGS = Object.keys(
  BLOG_CATEGORY_NAMES
) as BlogCategorySlug[]

export interface BlogSeo {
  title?: string
  description?: string
  canonicalURL?: string
}

export interface BlogPost {
  sourcePath: string
  title: string
  slug: string
  summary: string
  publishedAt: string
  updatedAt: string
  heroImage: string
  locale: string
  categorySlug: BlogCategorySlug
  category: BlogCategoryName
  body: string
  seo?: BlogSeo
}

export type BlogPostSummary = Omit<BlogPost, 'body'>

export interface HomepageContent {
  description: string
  heroPost: BlogPostSummary | null
  subHeroFirst: BlogPostSummary | null
  subHeroSecond: BlogPostSummary | null
  latests: BlogPostSummary[]
}
