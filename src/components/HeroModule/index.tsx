import React, { FC } from 'react'
import { HeroModuleWrapper } from './index.style'
import type { PostCardModel } from '../../types/homePageType'
import HeroCard from '../HeroCard'
import SubHeroCard from '../SubHeroCard'

interface HeroModuleProps {
  heroPost: PostCardModel | null
  subHeroFirst: PostCardModel | null
  subHeroSecond: PostCardModel | null
}
const HeroModule: FC<HeroModuleProps> = ({
  heroPost,
  subHeroFirst,
  subHeroSecond,
}) => {
  if (!heroPost && !subHeroFirst && !subHeroSecond) return null
  return (
    <HeroModuleWrapper>
      {heroPost && <HeroCard post={heroPost} />}
      {subHeroFirst && <SubHeroCard post={subHeroFirst} />}
      {subHeroSecond && <SubHeroCard post={subHeroSecond} />}
    </HeroModuleWrapper>
  )
}

export default HeroModule
