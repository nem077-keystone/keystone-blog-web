'use client'

import React from 'react'
import HeroModule from '@/components/HeroModule'
import CategoryModule from '@/components/CategoryModule'
import type { HomepageContent } from '@/types/blog'
import { toPostCard } from '@/app/[post]/utils'

export function AllCategories({ homepage }: { homepage: HomepageContent }) {
  return (
    <>
      <HeroModule
        heroPost={homepage.heroPost ? toPostCard(homepage.heroPost) : null}
        subHeroFirst={
          homepage.subHeroFirst ? toPostCard(homepage.subHeroFirst) : null
        }
        subHeroSecond={
          homepage.subHeroSecond ? toPostCard(homepage.subHeroSecond) : null
        }
      />
      <CategoryModule category="Latest articles" posts={homepage.latests} />
    </>
  )
}
