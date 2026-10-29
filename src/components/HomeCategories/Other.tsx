'use client'

import React from 'react'
import type { BlogPostSummary } from '@/types/blog'
import { CategoryName, PostItem, Posts } from './Other.style'
import { toPostCard } from '@/app/[post]/utils'

interface Props {
  title: string
  posts: BlogPostSummary[]
}

export function OtherCategories({ title, posts }: Props) {
  return (
    <>
      <CategoryName>{title}</CategoryName>
      <Posts>
        {posts.map((post) => (
          <PostItem post={toPostCard(post)} key={post.slug} />
        ))}
      </Posts>
    </>
  )
}
