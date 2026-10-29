import { CategoryModuleWrapper, CategoryName, Posts } from './index.style'
import React, { FC } from 'react'
import CategoryCard from '../CategoryCard'
import { toPostCard } from '@/app/[post]/utils'
import type { BlogPostSummary } from '@/types/blog'

interface CategoryModuleProps {
  category: string
  posts: BlogPostSummary[]
}
const CategoryModule: FC<CategoryModuleProps> = ({ category, posts }) => {
  if (posts.length === 0) return null
  return (
    <CategoryModuleWrapper>
      <CategoryName>{category}</CategoryName>
      <Posts>
        {posts.map((post) => (
          <CategoryCard post={toPostCard(post)} key={post.slug} />
        ))}
      </Posts>
    </CategoryModuleWrapper>
  )
}

export default CategoryModule
