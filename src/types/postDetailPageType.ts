import type { HeadingItem } from '@/app/[post]/utils/markdown'
import type { BlogCategoryName, BlogCategorySlug } from './blog'

export interface PostDetailModel {
  bodyHtml: string
  headings: HeadingItem[]
  title: string
  summary: string
  category: BlogCategoryName
  categorySlug: BlogCategorySlug
  publishTime: string
  locale: string
  slug: string
  heroImage: {
    url: string
    alt: string
  }
  seo: {
    title: string
    description: string
    canonicalURL: string
  }
}
