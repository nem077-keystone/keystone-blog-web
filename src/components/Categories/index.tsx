import { CategoriesWrapper, CategoryLable } from './index.style'
import React from 'react'
import { BLOG_CATEGORY_NAMES, BLOG_CATEGORY_SLUGS } from '@/types/blog'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const Categories: React.FC = () => {
  const params = useParams()

  return (
    <CategoriesWrapper>
      <Link href="/" key="home">
        <CategoryLable $actived={!params?.category}>Home</CategoryLable>
      </Link>
      {BLOG_CATEGORY_SLUGS.map((category) => (
        <Link href={`/categories/${category}`} key={category}>
          <CategoryLable
            $actived={params?.category === category}
            key={category}
          >
            {BLOG_CATEGORY_NAMES[category]}
          </CategoryLable>
        </Link>
      ))}
    </CategoriesWrapper>
  )
}

export default Categories
