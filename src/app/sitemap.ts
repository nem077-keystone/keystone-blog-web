import { BLOG_HOME_PAGE } from '@/constants/links'
import { getAllPosts } from '@/lib/blog/content'
import { BLOG_CATEGORY_SLUGS } from '@/types/blog'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: `${BLOG_HOME_PAGE}/`,
    lastModified: new Date(),
  }

  const posts = getAllPosts().map((post) => ({
    url: `${BLOG_HOME_PAGE}/${post.slug}`,
    lastModified: new Date(post.updatedAt),
  }))

  const categories = BLOG_CATEGORY_SLUGS.map((category) => ({
    url: `${BLOG_HOME_PAGE}/categories/${category}`,
    lastModified: new Date(),
  }))

  return [home, ...posts, ...categories]
}
