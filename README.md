# Keystone Blog Web

Keystone Blog Web is a Next.js blog whose articles are stored as local
Markdown and loaded during the build. It does not call a blog CMS or backend
API at runtime.

## Development

Use Node.js `22.23.4` (the minimum supported version is also enforced by
`package.json`):

```bash
nvm use
```

Then install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

`NEXT_PUBLIC_CDN_DOMAIN` is optional. It defaults to `keyst.one` and can be
overridden when a deployment uses a different public asset domain.

Useful verification commands:

```bash
pnpm test
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

## Content directories

Articles live in one of six fixed category directories:

```text
content/blog/
├── hardware-wallet/
├── crypto-security/
├── bitcoin/
├── partnerships/
├── enterprise/
└── other/
```

The directory determines the article category. Do not add a `category` field
to the article. The home and category lists are ordered by `updatedAt`, newest
first. Article slugs must be unique across all categories.

## Add an article

Copy `content/article-template.md` into the appropriate category directory and
rename it to a descriptive filename. The filename is used only by the content
loader; the public URL comes from `slug`.

Every article uses this YAML Front Matter format:

```markdown
---
title: "Article title"
slug: "article-slug"
summary: "Short article summary"
publishedAt: "2026-10-29"
updatedAt: "2026-10-29"
heroImage: "/images/blog/hardware-wallet/article-slug/hero.webp"
locale: "en"
seo:
  title: "Optional SEO title"
  description: "Optional SEO description"
  canonicalURL: "https://blog.keyst.one/article-slug"
---

Write the article body in Markdown.
```

Required fields are `title`, `slug`, `summary`, `publishedAt`, `updatedAt`, and
`heroImage`. `locale` defaults to `en`. The `seo` mapping and all of its fields
are optional. When SEO fields are omitted, the site uses:

- title: `<article title> | Keystone Hardware Wallet`;
- description: the article summary, then the title as a final fallback;
- canonical URL: `https://blog.keyst.one/<slug>`;
- Open Graph image: the article hero image.

The supported Front Matter format intentionally stays small: string values,
plus the two-space-indented `seo` mapping shown above. Arrays, tabs, aliases,
multiline YAML values, and deeper nesting are rejected with a build error.

## Images

Store each article's hero and body images together under `public`:

```text
public/images/blog/<category>/<article-slug>/hero.webp
public/images/blog/<category>/<article-slug>/<body-image>.<ext>
```

Reference them from Markdown with root-relative URLs, for example
`/images/blog/hardware-wallet/article-slug/hero.webp`.

## Homepage Heroes

Configure the three optional Hero positions in `content/homepage.json`. Paths
are relative to `content/blog/`:

```json
{
  "description": "",
  "heroPost": "hardware-wallet/article-slug.md",
  "subHeroFirst": "bitcoin/second-article.md",
  "subHeroSecond": null
}
```

A Hero value may be `null`. A non-null value must point to an existing article
or the build fails. Leaving `description` empty uses the built-in Keystone Blog
description.

## Deployment

This migration keeps the existing Next.js deployment model. Enabling a fully
static `output: 'export'` build is deferred until the deployment setup is
updated.
