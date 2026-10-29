# Local Markdown Static Blog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all Strapi blog reads with validated local Markdown content loaded at build time while preserving current routes and deployment behavior.

**Architecture:** A server-only repository scans six fixed `content/blog` directories, parses YAML front matter, validates content, and exposes typed lookup functions. Server pages consume those functions during static generation and pass serializable view models to presentation components; no browser-side blog fetching remains.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript 5, Node.js filesystem APIs, a focused local YAML Front Matter parser, `marked`, Jest, Testing Library

**Spec:** `docs/superpowers/specs/2026-10-29-local-markdown-static-blog-design.md`

## Global Constraints

- Preserve `/`, `/categories/<category>`, and `/<post-slug>` URLs.
- Keep the current Next.js deployment model; do not add `output: 'export'`.
- Derive categories from the six fixed kebab-case directories, never from front matter.
- Sort home and category article lists by `updatedAt` descending.
- Permit empty content directories and `null` homepage Hero references.
- Fail the build for malformed content or invalid non-null homepage references.
- Do not migrate or download historical Strapi content.
- Do not delete ignored local `.env` files.

## File Structure

- `content/homepage.json`: homepage description and nullable Hero article paths.
- `content/article-template.md`: authoring example that the scanner never publishes.
- `content/blog/<category>/.gitkeep`: six tracked empty category directories.
- `src/types/blog.ts`: canonical local content and presentation types.
- `src/lib/blog/content.ts`: parsing, validation, sorting, lookup, and homepage resolution.
- `src/lib/blog/content.test.ts`: repository behavior and validation tests using temporary fixtures.
- `src/app/[post]/utils/postConverter.ts`: local post to card/detail view-model conversion.
- Existing pages and card modules: render the new typed models without API wrappers.
- `README.md`: authoring workflow and deferred static-export note.

---

### Task 1: Create and validate the local content repository

**Files:**
- Create: `content/homepage.json`
- Create: `content/article-template.md`
- Create: `content/blog/hardware-wallet/.gitkeep`
- Create: `content/blog/crypto-security/.gitkeep`
- Create: `content/blog/bitcoin/.gitkeep`
- Create: `content/blog/partnerships/.gitkeep`
- Create: `content/blog/enterprise/.gitkeep`
- Create: `content/blog/other/.gitkeep`
- Create: `src/types/blog.ts`
- Create: `src/lib/blog/content.ts`
- Create: `src/lib/blog/content.test.ts`

**Interfaces:**
- Produces: `BlogPost`, `BlogPostSummary`, `HomepageContent`, `BlogCategorySlug`, and `BlogCategoryName` types.
- Produces: `createBlogRepository(contentRoot?: string): BlogRepository` for isolated tests and the default repository.
- Produces: `getAllPosts()`, `getPostBySlug(slug)`, `getPostsByCategory(categorySlug)`, and `getHomepageContent()` exports for pages.

- [ ] **Step 1: Define the supported front matter syntax**

Support the documented string fields plus one two-space-indented `seo` mapping. Reject arrays, deeper nesting, tabs, duplicate keys, and unsupported YAML constructs with a filename-specific error. This avoids a runtime dependency while preserving the agreed authoring format.

- [ ] **Step 2: Write failing repository tests**

Create temporary content trees inside each test and cover the public interface. The core assertions must include:

```ts
const repository = createBlogRepository(fixtureRoot)

expect(repository.getAllPosts().map(({ slug }) => slug)).toEqual([
  'newer-post',
  'older-post',
])
expect(repository.getPostsByCategory('bitcoin')).toHaveLength(1)
expect(repository.getPostBySlug('newer-post')?.category).toBe('Hardware Wallet')
expect(repository.getPostBySlug('newer-post')?.locale).toBe('en')

const homepage = repository.getHomepageContent()
expect(homepage.heroPost?.slug).toBe('newer-post')
expect(homepage.subHeroFirst).toBeNull()
expect(homepage.description).toBe(
  'Latest news, development and security tips to safeguard your crypto assets with Keystone.'
)
```

Add table-driven failing cases whose messages include the source filename for missing `title`, invalid `updatedAt`, non-root-relative `heroImage`, duplicate `slug`, and a missing configured Hero path. Add a traversal case such as `../article-template.md` and assert that it throws.

- [ ] **Step 3: Run the tests and confirm the repository is missing**

Run:

```bash
pnpm test -- --runInBand src/lib/blog/content.test.ts
```

Expected: FAIL because `@/lib/blog/content` and its exports do not exist.

- [ ] **Step 4: Define the canonical blog types**

Create `src/types/blog.ts` with these exact shapes:

```ts
export type BlogCategorySlug =
  | 'hardware-wallet'
  | 'crypto-security'
  | 'bitcoin'
  | 'partnerships'
  | 'enterprise'
  | 'other'

export type BlogCategoryName =
  | 'Hardware Wallet'
  | 'Crypto Security'
  | 'Bitcoin'
  | 'Partnerships'
  | 'Enterprise'
  | 'Other'

export interface BlogSeo {
  title?: string
  description?: string
  canonicalURL?: string
}

export interface BlogPost {
  sourcePath: string
  title: string
  slug: string
  summary: string
  publishedAt: string
  updatedAt: string
  heroImage: string
  locale: string
  categorySlug: BlogCategorySlug
  category: BlogCategoryName
  body: string
  seo?: BlogSeo
}

export type BlogPostSummary = Omit<BlogPost, 'body'>

export interface HomepageContent {
  description: string
  heroPost: BlogPostSummary | null
  subHeroFirst: BlogPostSummary | null
  subHeroSecond: BlogPostSummary | null
  latests: BlogPostSummary[]
}
```

- [ ] **Step 5: Implement the repository**

In `src/lib/blog/content.ts`, define the category map and repository interface:

```ts
const CATEGORY_NAMES: Record<BlogCategorySlug, BlogCategoryName> = {
  'hardware-wallet': 'Hardware Wallet',
  'crypto-security': 'Crypto Security',
  bitcoin: 'Bitcoin',
  partnerships: 'Partnerships',
  enterprise: 'Enterprise',
  other: 'Other',
}

export interface BlogRepository {
  getAllPosts(): BlogPostSummary[]
  getPostBySlug(slug: string): BlogPost | null
  getPostsByCategory(category: BlogCategorySlug): BlogPostSummary[]
  getHomepageContent(): HomepageContent
}
```

`createBlogRepository(contentRoot = path.join(process.cwd(), 'content'))` must lazily read `blog/<category>/*.md`, parse the constrained YAML Front Matter format, normalize each valid date using `new Date(value).toISOString()`, reject duplicate slugs, and cache the result per repository instance. Use this deterministic comparator:

```ts
posts.sort(
  (a, b) =>
    Date.parse(b.updatedAt) - Date.parse(a.updatedAt) ||
    a.slug.localeCompare(b.slug)
)
```

Validate `homepage.json` as an object. Resolve non-null Hero paths only after confirming that they are normalized relative paths, remain within `<contentRoot>/blog`, and match a scanned article `sourcePath`. Use the specified fallback description when `description.trim()` is empty.

- [ ] **Step 6: Add the empty starter content and author template**

Write `content/homepage.json` as:

```json
{
  "description": "",
  "heroPost": null,
  "subHeroFirst": null,
  "subHeroSecond": null
}
```

Write `content/article-template.md` using the exact front matter documented in the design spec and a short example heading/body. Add `.gitkeep` to all six category directories.

- [ ] **Step 7: Run repository tests**

Run:

```bash
pnpm test -- --runInBand src/lib/blog/content.test.ts
```

Expected: PASS for parsing, defaults, sorting, lookup, nullable Heroes, and validation failures.

- [ ] **Step 8: Commit the content foundation**

```bash
git add content src/types/blog.ts src/lib/blog
git commit -m "feat: add local markdown content repository"
```

---

### Task 2: Replace legacy response adapters with local view models

**Files:**
- Modify: `src/app/[post]/utils/postConverter.ts`
- Modify: `src/app/[post]/utils/index.ts`
- Modify: `src/app/[post]/Content.tsx`
- Modify: `src/app/[post]/ShareMedia.tsx`
- Modify: `src/components/HeroModule/index.tsx`
- Modify: `src/components/HeroCard/index.tsx`
- Modify: `src/components/SubHeroCard/index.tsx`
- Modify: `src/components/CategoryCard/index.tsx`
- Modify: `src/components/CategoryModule/index.tsx`
- Modify: `src/components/HomeCategories/All.tsx`
- Modify: `src/components/HomeCategories/Other.tsx`
- Delete: `src/components/Layout/utils.ts`
- Replace: `src/types/homePageType.ts`
- Replace: `src/types/postDetailPageType.ts`
- Delete: `src/types/categoriesPageType.ts`
- Modify: `src/app/[post]/index.test.tsx`

**Interfaces:**
- Consumes: `BlogPost`, `BlogPostSummary`, and `HomepageContent` from Task 1.
- Produces: `PostCardModel` and `PostDetailModel` presentation types.
- Produces: `toPostCard(post: BlogPostSummary): PostCardModel` and `toPostDetail(post: BlogPost): PostDetailModel`.

- [ ] **Step 1: Replace the broken detail test with converter and rendering tests**

Use a typed local post fixture and assert:

```ts
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
```

Render `Content` with `article={post}`, `postModel={detail}`, and `minutesToRead={1}`; assert the title, summary, and body appear.

- [ ] **Step 2: Run the detail test to verify it fails against legacy types**

Run:

```bash
pnpm test -- --runInBand src/app/\[post\]/index.test.tsx
```

Expected: FAIL because the local converter exports and model fields do not exist.

- [ ] **Step 3: Implement presentation models and converters**

Define these presentation types in `src/types/homePageType.ts` and `src/types/postDetailPageType.ts` without any `data.attributes` wrappers:

```ts
export interface PostCardModel {
  slug: string
  title: string
  category: BlogCategoryName
  categorySlug: BlogCategorySlug
  publishTime: string
  heroImage: { name: string; url: string }
}

export interface PostDetailModel {
  bodyHtml: string
  headings: HeadingItem[]
  title: string
  summary: string
  category: BlogCategoryName
  categorySlug: BlogCategorySlug
  publishTime: string
  slug: string
  heroImage: { url: string; alt: string }
  seo: { title: string; description: string; canonicalURL: string }
}
```

`toPostCard` maps the image alt/name to `post.title`. `toPostDetail` parses Markdown exactly once using the existing heading renderer plus `marked-alert`, and applies the approved SEO fallback rules.

- [ ] **Step 4: Make presentation components consume local models**

Update card props to `PostCardModel`. Update `HeroModule` props to nullable cards and render only configured cards:

```tsx
return heroPost || subHeroFirst || subHeroSecond ? (
  <HeroModuleWrapper>
    {heroPost && <HeroCard post={heroPost} />}
    {subHeroFirst && <SubHeroCard post={subHeroFirst} />}
    {subHeroSecond && <SubHeroCard post={subHeroSecond} />}
  </HeroModuleWrapper>
) : null
```

Make `AllCategories` and `OtherCategories` server-compatible presentational functions: remove `'use client'`, SWR, state, loading, pagination, and buttons. Accept complete arrays, map through `toPostCard`, and render all posts.

Update `Content` to use `article.category` and `postModel.bodyHtml`; remove its second `marked` parse. Correct the category breadcrumb to `/categories/${postModel.categorySlug}`. Update `ShareMedia` to accept `BlogPost` and read its local fields.

- [ ] **Step 5: Run component tests and type checking**

Run:

```bash
pnpm test -- --runInBand src/app/\[post\]/index.test.tsx
pnpm exec tsc --noEmit
```

Expected: the targeted test passes. Type checking may still report page imports from the old API; record those for Task 3, but there must be no errors in the files changed by this task.

- [ ] **Step 6: Commit the presentation refactor**

```bash
git add src/app/\[post\] src/components src/types
git commit -m "refactor: render local blog post models"
```

---

### Task 3: Generate every blog route from local content

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/categories/[category]/page.tsx`
- Modify: `src/app/[post]/page.tsx`
- Modify: `src/app/sitemap.ts`

**Interfaces:**
- Consumes: Task 1 repository exports and Task 2 converters/components.
- Produces: statically generated home, category, post, metadata, structured-data, and sitemap output.

- [ ] **Step 1: Switch the homepage to `getHomepageContent()`**

Remove `getPosts`, API imports, pagination, and hidden all-post links. Resolve metadata and page content from the local homepage object. Pass `HomepageContent` to `AllCategories`; it renders nullable configured Heroes and every `latests` item.

- [ ] **Step 2: Switch categories to local summaries**

Build `generateStaticParams()` from the six category slugs, not enum keys:

```ts
return BLOG_CATEGORY_SLUGS.map((category) => ({ category }))
```

Validate the route category against that list and call `notFound()` for an invalid value. Use `getPostsByCategory(category)` and `getHomepageContent().description`; remove pagination and Hero API reads.

- [ ] **Step 3: Make post pages fully static**

Remove `dynamic = 'force-dynamic'` and `revalidate = 0`. Generate params from `getAllPosts()`. In metadata and page rendering, call `getPostBySlug(params.post)` and use `notFound()` for a missing article. Convert with `toPostDetail` and calculate reading time from `article.body`.

Update BlogPosting JSON-LD to read `article.heroImage`, `article.publishedAt`, and `article.updatedAt`, and use the resolved detail SEO description.

- [ ] **Step 4: Switch sitemap generation**

Use `getAllPosts()` directly:

```ts
const posts = getAllPosts().map((post) => ({
  url: `${BLOG_HOME_PAGE}/${post.slug}`,
  lastModified: formatDateTime(post.updatedAt),
}))
```

Generate category URLs from the category slug constants. Do not introduce runtime network calls.

- [ ] **Step 5: Verify static route compilation**

Run:

```bash
pnpm exec tsc --noEmit
pnpm build
```

Expected: TypeScript passes and the production build succeeds with six empty category routes, an empty homepage article list, and no generated post routes.

- [ ] **Step 6: Commit static page generation**

```bash
git add src/app
git commit -m "feat: generate blog pages from markdown"
```

---

### Task 4: Remove the Strapi/API path, stale UI, and credentials documentation

**Files:**
- Delete: `src/utils/api.ts`
- Delete: `src/app/api/blog/[...path]/route.ts`
- Delete: `src/components/Loading/index.tsx`
- Delete: `src/components/Loading/index.style.ts`
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Modify: `README.md`
- Modify or delete: any additional files proven unused by repository-wide searches

**Interfaces:**
- Consumes: completed local content flow from Tasks 1-3.
- Produces: a repository with no blog backend, SWR pagination, or backend credential requirement.

- [ ] **Step 1: Prove the legacy modules have no remaining callers**

Run:

```bash
rg -n "@/utils/api|useSWR|swr/infinite|Loading|WEBSITE_API_URL|GITHUB_TOKEN|Strapi|strapi|from 'qs'|from \"qs\"" src README.md package.json
```

Expected: matches are limited to files scheduled for deletion, stale documentation, and dependency declarations. Investigate any other caller before removing its dependency.

- [ ] **Step 2: Delete the API and stale loading code**

Delete the two API files/directories and the loading component files. Remove any now-empty directories. Do not delete notification/media components because sharing still uses them.

- [ ] **Step 3: Remove dependencies that are no longer imported**

Run:

```bash
pnpm remove swr qs
```

Expected: `swr` and `qs` disappear from `package.json` and the lockfile. If the Step 1 search found a legitimate remaining import, retain that specific dependency and document the reason in the commit.

- [ ] **Step 4: Rewrite the README as the authoring guide**

Include the six directory names, full YAML example, category derivation, image path convention, Hero JSON example, `updatedAt` sorting rule, `pnpm install`, `pnpm dev`, `pnpm test`, `pnpm lint`, and `pnpm build`. State explicitly:

```md
## Deployment

This migration keeps the existing Next.js deployment model. Enabling a fully
static `output: 'export'` build is deferred until the deployment setup is
updated.
```

Remove instructions to copy Vercel environment variables and export `GITHUB_TOKEN`.

- [ ] **Step 5: Verify credential and network cleanup**

Run:

```bash
rg -n --hidden -g '!node_modules/**' -g '!.next/**' -g '!.git/**' \
  'WEBSITE_API_URL|STRAPI|Strapi|strapi|API_TOKEN|API_KEY|GITHUB_TOKEN|/api/blog|fetch\(' .
```

Expected: no runtime or documentation matches. Mentions in the approved design/plan history are acceptable documentation of the migration, not active credentials; no secret values may be present anywhere tracked.

- [ ] **Step 6: Commit cleanup and documentation**

```bash
git add -A
git commit -m "chore: remove Strapi blog integration"
```

---

### Task 5: Final regression and content-authoring verification

**Files:**
- Modify: only files required to correct failures found by this task

**Interfaces:**
- Consumes: all previous tasks.
- Produces: verified static-blog architecture ready for authors to add Markdown.

- [ ] **Step 1: Run the complete automated suite**

Run:

```bash
pnpm test -- --runInBand
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

Expected: every command exits successfully. Fix root causes and rerun the failed command until it passes.

- [ ] **Step 2: Verify an article through the entire build locally**

Temporarily copy the author template into `content/blog/bitcoin/verification-post.md`, set valid dates/image path, and point `heroPost` at it. Run the repository test and production build; verify the build output includes `/verification-post` and `/categories/bitcoin`.

Remove the temporary article and restore all three Hero fields to `null` using `apply_patch`. Run `pnpm build` once more to prove the committed empty starter state succeeds.

- [ ] **Step 3: Review the final diff and tracked files**

Run:

```bash
git status --short
git diff --check
git diff --stat HEAD~4
git ls-files | rg '(^|/)\.env|secret|token' || true
```

Expected: no temporary verification content, whitespace errors, tracked environment files, or unexpected unrelated changes.

- [ ] **Step 4: Commit any final corrections**

If Step 1-3 required changes:

```bash
git add -A
git commit -m "test: verify local markdown blog build"
```

If no corrections were required, do not create an empty commit.
