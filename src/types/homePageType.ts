import type { BlogCategoryName, BlogCategorySlug } from './blog'

export interface PostCardModel {
  slug: string
  title: string
  category: BlogCategoryName
  categorySlug: BlogCategorySlug
  publishTime: string
  heroImage: {
    name: string
    url: string
  }
}
