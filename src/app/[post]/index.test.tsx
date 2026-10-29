import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Content from './Content'
import { toPostDetail } from './utils'
import type { BlogPost } from '@/types/blog'

jest.mock('@/hooks/useMobile', () => () => true)
jest.mock('./ShareMedia', () => () => null)

const post: BlogPost = {
  sourcePath: 'bitcoin/this-is-a-post.md',
  body: 'This is a post',
  title: 'title',
  category: 'Bitcoin',
  categorySlug: 'bitcoin',
  summary: 'summary',
  updatedAt: '2024-03-20T05:30:57.799Z',
  publishedAt: '2024-03-20T05:30:57.799Z',
  locale: 'en',
  slug: 'this-is-a-post',
  heroImage: '/images/blog/bitcoin/post/hero.webp',
}

describe('local post detail', () => {
  test('applies presentation and SEO defaults', () => {
    const detail = toPostDetail(post)
    expect(detail.publishTime).toBe('Mar 20, 2024')
    expect(detail.heroImage).toEqual({
      url: '/images/blog/bitcoin/post/hero.webp',
      alt: 'title',
    })
    expect(detail.seo).toEqual({
      title: 'title | Keystone Hardware Wallet',
      description: 'summary',
      canonicalURL: 'https://blog.keyst.one/this-is-a-post',
    })
    expect(detail.bodyHtml).toContain('<p>This is a post</p>')
  })

  test('renders local article content', () => {
    render(
      <Content
        article={post}
        postModel={toPostDetail(post)}
        minutesToRead={1}
      />
    )
    expect(screen.getByText(post.title)).toBeInTheDocument()
    expect(screen.getByText(post.summary)).toBeInTheDocument()
    expect(screen.getByText(post.body)).toBeInTheDocument()
  })
})
