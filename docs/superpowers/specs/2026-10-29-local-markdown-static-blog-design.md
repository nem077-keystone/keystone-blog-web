# Local Markdown Static Blog Design

## Goal

Replace the Strapi-backed blog data flow with build-time local Markdown content while preserving the current Next.js deployment model and public page URLs.

Historical Strapi content migration and `output: 'export'` deployment are explicitly outside this change. The README will record static export as follow-up work.

## Content Structure

Blog content lives under `content/blog/` in six fixed, kebab-case category directories:

```text
content/
  homepage.json
  blog/
    hardware-wallet/
    crypto-security/
    bitcoin/
    partnerships/
    enterprise/
    other/
```

The category is derived from the parent directory. It is not repeated in Markdown front matter, preventing directory and metadata values from drifting apart.

Each article is a `.md` file with YAML front matter followed by Markdown body content:

```markdown
---
title: 'Article title'
slug: 'article-slug'
summary: 'Short article summary'
updatedAt: '2026-10-29'
heroImage: '/images/blog/hardware-wallet/article-slug/hero.webp'
locale: 'en'
seo:
  title: 'Optional SEO title'
  description: 'Optional SEO description'
  canonicalURL: 'https://blog.keyst.one/article-slug'
---

Article body.
```

Required fields are `title`, `slug`, `summary`, `updatedAt`, and `heroImage`. `publishedAt` is optional and is used only when an article needs to preserve a distinct historical first-publication date. When it is omitted, the repository resolves `publishedAt` to `updatedAt`, so downstream page models and structured data always receive a valid publication date. `locale` defaults to `en`. The entire `seo` object and each of its properties are optional.

The existence of a Markdown file in one of the six scanned category directories means the article is published. There is no local draft-state field. Authors who need a draft keep the file outside the scanned category directories.

A non-published example Markdown template will be included for authors to copy. The loader will only scan `.md` files directly within the six category directories, so the template will live outside those directories.

## Homepage Configuration

`content/homepage.json` stores the homepage description and three paths relative to `content/blog/`:

```json
{
  "description": "",
  "heroPost": null,
  "subHeroFirst": null,
  "subHeroSecond": null
}
```

When populated, a Hero value uses a path such as `hardware-wallet/article-slug.md`. A configured path must resolve to one of the scanned articles.

All three Hero values may remain `null` while the repository has no local content. Missing Hero values are omitted from the homepage rather than preventing the build. The latest-articles section is independent of the Hero selection and contains all articles ordered by `updatedAt` descending.

If the homepage description is empty, the application uses this built-in fallback:

> Latest news, development and security tips to safeguard your crypto assets with Keystone.

## Image Organization

Article assets live under the public directory and mirror the content category and article slug:

```text
public/images/blog/<category>/<article-slug>/hero.webp
public/images/blog/<category>/<article-slug>/<body-image>.<ext>
```

Front matter stores a root-relative public URL such as `/images/blog/hardware-wallet/article-slug/hero.webp`. Keeping every article's assets together prevents filename collisions and makes an article easy to move or remove.

## Build-Time Content Module

A server-only content module will be the single source of blog data. It will:

1. Scan the six allowed category directories at build time.
2. Parse YAML front matter and Markdown body content.
3. Derive the display category from the directory.
4. Validate required fields, the required `updatedAt` date, an optional `publishedAt` date, root-relative image paths, unique slugs, and homepage references.
5. Return all articles sorted by `updatedAt` descending, articles for a category, an article by slug, and resolved homepage content.

The module will expose typed domain objects directly. It will not preserve the Strapi `data.attributes` response wrapper. Page and component types will be simplified to consume the local domain model.

No browser bundle may import the filesystem content module. Server pages load content and pass serializable article summaries to client components only where client-side behavior is still necessary.

## Page Behavior

- The homepage, category pages, post detail pages, metadata, structured data, and sitemap all use the build-time content module.
- Existing routes remain unchanged: `/`, `/categories/<category>`, and `/<post-slug>`.
- Post routes are generated from local slugs using `generateStaticParams` and no longer force dynamic rendering.
- Page display dates and JSON-LD `datePublished` use the resolved publication date: an explicit `publishedAt` when present, otherwise `updatedAt`.
- Category routes continue to be generated for all six configured categories, including empty categories.
- Home latest articles are ordered by `updatedAt` descending.
- Category articles use the same `updatedAt` descending order.
- Client-side SWR fetching and Load More controls are removed. All available cards are rendered in the generated page, eliminating runtime blog data requests.
- An unknown post uses Next.js `notFound()` so it produces the normal 404 response.

## SEO Defaults

When optional SEO fields are not configured, the post model uses:

- Title: `<article title> | Keystone Hardware Wallet`
- Description: article `summary`, falling back to `title` if needed
- Canonical URL: `https://blog.keyst.one/<slug>`
- Open Graph title, description, and URL: the resolved SEO values above
- Open Graph image: the article `heroImage`
- Hero image alternative text: the article title

Homepage metadata uses the resolved homepage description and the existing homepage title and Open Graph conventions.

## Failure Behavior

The initial empty content structure must build successfully. `null` Hero paths and empty category directories are valid.

Once content is added, these conditions fail the build with a message containing the relevant file and field:

- malformed or missing required front matter;
- an invalid `updatedAt` value or an invalid non-empty `publishedAt` value;
- an image URL that is not root-relative;
- a duplicate article slug;
- an unknown category directory passed to the loader;
- a non-null homepage path that is absolute, escapes `content/blog/`, has an unsupported category, or does not resolve to an article.

This strict behavior prevents silently publishing incomplete or mismatched content.

## Strapi and Credential Cleanup

The implementation removes:

- the blog API proxy route;
- the Strapi/backend API utility and its legacy response adapters;
- all `WEBSITE_API_URL`, Strapi token, API token, and API key references that are no longer used;
- the README instructions to copy Vercel environment variables or export `GITHUB_TOKEN`;
- SWR and query-string dependencies if repository-wide usage checks confirm they are no longer required;
- components, types, imports, and helper code made unreachable by the local content flow.

Public domain configuration used by the main-site links and image metadata remains because it is unrelated to the removed blog API and is not a secret.

Ignored local `.env` files are not deleted automatically. They are outside version control and may contain unrelated developer settings. The repository will no longer require or document blog backend credentials.

## Testing and Verification

Automated tests will cover:

- Markdown parsing and category derivation;
- `updatedAt` descending ordering;
- lookup by slug and category;
- homepage Hero path resolution, including nullable Heroes;
- default locale and SEO fallbacks;
- optional `publishedAt` fallback to `updatedAt`, while preserving explicit historical publication dates;
- duplicate slugs, invalid dates, invalid image paths, and invalid homepage references;
- post presentation conversion where existing rendering tests require it.

Repository verification includes the unit test suite, lint checks, a production build with the empty starter content, and a repository-wide search confirming removed Strapi/API references and unused dependencies.

## Documentation

The README will explain:

- the local directory layout;
- the complete Front Matter format and defaults in English;
- every supported top-level and nested SEO field in a table with `Field`, `Description`, `Required`, `Default or fallback`, and `Example` columns;
- how to add an article and its images;
- how to configure the three homepage Heroes;
- the sorting rule used by home and category pages;
- local development and verification commands;
- that deployment remains unchanged for this work and true static export is deferred.

The README example and `content/article-template.md` include every supported field, including optional `publishedAt` and all three `seo` properties. The field table excludes `category` because category is derived from the parent directory and is not valid Front Matter. Required values use `Yes` or `No`, and all descriptions, fallbacks, and examples are written in English.
