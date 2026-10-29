# Legacy Blog Content Migration Design

## Goal

Migrate all legacy blog records from `temporary/data.json` into the local Markdown architecture, including historical slugs, metadata, homepage Heroes, Hero images, and body images.

The migration must preserve public article URLs, produce deterministic files, and leave an auditable report for resources that cannot be localized.

## Source Data

The source contains 115 records across the six supported categories:

- Hardware Wallet: 41
- Crypto Security: 38
- Partnerships: 14
- Enterprise: 10
- Bitcoin: 8
- Other: 4

The file is not strict JSON because some Markdown escape sequences are invalid JSON escapes. The migration will use a tolerant parser and normalize these observed legacy field variants:

- `body_text` or `body*text`
- `strapi_id` or `strapi*id`
- `updated_at` or `updated*at`

Every source record has a non-empty slug and there are no duplicate slugs. Three slugs contain uppercase characters. All slugs must be preserved exactly so existing public URLs remain valid.

## Migration Script

Create a reusable script at `scripts/migrate-legacy-posts.mjs`. The script will:

1. Parse and normalize the legacy input.
2. Validate record count, categories, slugs, dates, and required source fields.
3. Plan deterministic Markdown and asset destinations.
4. Download and validate image responses into a staging directory.
5. Generate all Markdown and the homepage configuration in staging.
6. Replace the generated content and asset targets only after all required work succeeds.
7. Write `temporary/migration-report.json` with counts, generated paths, fallbacks, and failed optional image downloads.

Rerunning the script against unchanged input must produce the same Markdown paths, front matter, homepage configuration, and local image references. Generated article directories may be replaced, but unrelated files outside the six content directories and `public/images/blog/` must not be touched.

## Markdown File Naming

The Markdown filename is derived from the article title as lowercase kebab-case, not from the article slug.

Examples:

- `Shipping Data Retention Policy` becomes `shipping-data-retention-policy.md`.
- `Keystone vs Ledger: Best Hardware Wallet in 2024` becomes `keystone-vs-ledger-best-hardware-wallet-in-2024.md`.

Unicode text is normalized, punctuation is removed, whitespace and separators become a single hyphen, and leading or trailing hyphens are removed. If normalization produces an empty name, use `article-<strapi-id>.md`. If two records in one category produce the same filename, append `-<strapi-id>` to both conflicting names as needed.

The original source slug is written unchanged to Front Matter. Filename normalization must never alter the public URL.

## Category Mapping

Map source category values to directories as follows:

| Source category | Target directory |
| --- | --- |
| Hardware Wallet | `hardware-wallet/` |
| Crypto Security | `crypto-security/` |
| Bitcoin | `bitcoin/` |
| Partnerships | `partnerships/` |
| Enterprise | `enterprise/` |
| Other | `other/` |

Any unknown category is a fatal validation error.

## Front Matter Mapping

Each generated Markdown file uses the supported local format:

```yaml
---
title: "<source title>"
slug: "<source slug, unchanged>"
summary: "<resolved summary>"
publishedAt: "<source published_at>"
updatedAt: "<source updated_at or updated*at>"
heroImage: "/images/blog/<category>/<slug>/hero.<ext>"
locale: "<source locale or en>"
seo:
  title: "<source seo.metaTitle when non-empty>"
  description: "<source seo.metaDescription when non-empty>"
  canonicalURL: "<source seo.canonicalURL when non-empty>"
---
```

Omit the `seo` mapping when all three supported values are empty. Serialize all Front Matter strings as JSON-compatible double-quoted strings. Extend the local Front Matter parser so quoted strings correctly decode escapes produced by `JSON.stringify`.

Resolve summaries in this order:

1. Non-empty source `summary`.
2. Non-empty `seo.metaDescription`.
3. The first non-empty body paragraph after removing Markdown formatting, links, images, and HTML, truncated to approximately 200 characters without leaving trailing whitespace.
4. The article title.

Record the selected summary source for each article in the migration report.

## Homepage Heroes

After normalizing dates, order all migrated posts by `updatedAt` descending with slug as a deterministic tie-breaker. Configure:

- newest post as `heroPost`;
- second newest as `subHeroFirst`;
- third newest as `subHeroSecond`.

Values in `content/homepage.json` use the generated Markdown paths relative to `content/blog/`. Preserve the existing homepage description value.

## Image Localization

Each article owns an asset directory:

```text
public/images/blog/<category>/<slug>/
```

Hero images:

- Download the source `hero_image.data.attributes.url`.
- Save it as `hero.<source-or-content-type-extension>`.
- A missing or failed Hero download is fatal because generated Front Matter requires a valid local Hero path.

Body images:

- Discover Markdown image tokens without treating ordinary links as images.
- Attempt to download images from both `keyst.one` and external image hosts.
- Reuse downloaded bytes for repeated source URLs while writing article-owned copies.
- Preserve and sanitize a meaningful source filename when possible.
- Infer a missing extension from the response `Content-Type`.
- Avoid collisions within an article by appending a deterministic numeric suffix.
- Replace successful source URLs in the Markdown body with root-relative local paths.
- Preserve the original URL when an optional body image fails and record the failure.

Downloads use bounded concurrency, request timeouts, and retries. A response must be successful and contain an image content type. The script must not download ordinary hyperlinks.

## Failure and Atomicity

Fatal conditions include:

- source parsing failure after tolerant parsing;
- a record count other than 115;
- an unknown category;
- missing or duplicate slugs;
- invalid required dates;
- missing body content;
- unsafe or conflicting target paths that cannot be resolved deterministically;
- any missing or failed Hero image download;
- generated content failing the local repository validation.

Body image failures are non-fatal and remain remote. The migration report lists the article, source URL, and error.

Use a temporary staging directory. Do not replace final content or assets until parsing, required downloads, Markdown generation, and repository validation all succeed. Clean staging data after success or failure.

## Verification

Verification must confirm:

- exactly 115 generated Markdown files;
- category counts match the source distribution;
- every source slug appears exactly once and is unchanged;
- all generated filenames are title-derived kebab-case and unique within their category;
- all summaries are non-empty and report their fallback source;
- the three homepage Hero references resolve;
- every generated Hero path exists locally;
- successful body image references point to existing local files;
- failed body image references are listed in the report;
- the content repository can parse and query every migrated article;
- Jest, TypeScript, lint, and the production build pass, subject only to external font network availability already present in the project.

The report will include source and generated counts, category counts, exact preserved slugs, the three selected Hero posts, image totals, image failures, filename conflict resolutions, and summary fallback totals.
