import React from 'react'
import { notFound } from 'next/navigation'
import { getHomepageContent, getPostsByCategory } from '@/lib/blog/content'
import HomeLayout from '@/components/Layout/home'
import { OtherCategories } from '@/components/HomeCategories/Other'
import { BLOG_HOME_PAGE, IMAGE_CDN } from '@/constants/links'
import type { Metadata } from 'next'
import {
  BLOG_CATEGORY_NAMES,
  BLOG_CATEGORY_SLUGS,
} from '@/types/blog'
import type { BlogCategorySlug } from '@/types/blog'

interface CategoriesPageProps {
  params: { category: string }
}

const isCategorySlug = (value: string): value is BlogCategorySlug =>
  BLOG_CATEGORY_SLUGS.includes(value as BlogCategorySlug)

export function generateMetadata({ params }: CategoriesPageProps): Metadata {
  if (!isCategorySlug(params.category)) return {}
  const title = BLOG_CATEGORY_NAMES[params.category]
  const description = getHomepageContent().description
  const categoryURL = `${BLOG_HOME_PAGE}/categories/${params.category}`

  return {
    title: `${title} | Keystone's Blog`,
    description,
    alternates: { canonical: categoryURL },
    openGraph: {
      siteName: 'Keystone\'s Blog',
      type: 'article',
      title,
      description,
      images: [`${IMAGE_CDN}/homepage.png`],
      url: categoryURL,
    },
  }
}

export function generateStaticParams() {
  return BLOG_CATEGORY_SLUGS.map((category) => ({ category }))
}

export default function CategoryPage({ params }: CategoriesPageProps) {
  if (!isCategorySlug(params.category)) notFound()

  const title = BLOG_CATEGORY_NAMES[params.category]
  const posts = getPostsByCategory(params.category)
  const description = getHomepageContent().description

  return (
    <HomeLayout description={description}>
      <OtherCategories title={title} posts={posts} />
    </HomeLayout>
  )
}
