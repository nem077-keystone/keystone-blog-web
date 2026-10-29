import type { PostDetailModel } from '@/types/postDetailPageType'
import type { BlogPost, BlogPostSummary } from '@/types/blog'
import type { PostCardModel } from '@/types/homePageType'
import { BLOG_HOME_PAGE } from '@/constants/links'
import markedAlert from 'marked-alert'
import { getHeadings, getMarkDownParser } from './markdown'

export const getPublishTime = (publishAt: string) => {
  const date = new Date(publishAt)
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })
  return formattedDate
}

const postBodyConverter = (postBody: string): string => {
  const markDownParser = getMarkDownParser(postBody)
  markDownParser.use(markedAlert())
  return markDownParser.parse(postBody) as string
}

export const toPostCard = (post: BlogPostSummary): PostCardModel => ({
  slug: post.slug,
  title: post.title,
  category: post.category,
  categorySlug: post.categorySlug,
  publishTime: getPublishTime(post.publishedAt),
  heroImage: {
    name: post.title,
    url: post.heroImage,
  },
})

export const toPostDetail = (post: BlogPost): PostDetailModel => {
  return {
    bodyHtml: postBodyConverter(post.body),
    headings: getHeadings(post.body),
    summary: post.summary,
    title: post.title,
    category: post.category,
    categorySlug: post.categorySlug,
    publishTime: getPublishTime(post.publishedAt),
    locale: post.locale,
    slug: post.slug,
    heroImage: {
      url: post.heroImage,
      alt: post.title,
    },
    seo: {
      title: post.seo?.title || `${post.title} | Keystone Hardware Wallet`,
      description: post.seo?.description || post.summary || post.title,
      canonicalURL: post.seo?.canonicalURL || `${BLOG_HOME_PAGE}/${post.slug}`,
    },
  }
}
