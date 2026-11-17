---
repo: "shopnex-ai/shopnex"
name: "shopnex"
description: "Open-source Shopify alternative – self-hosted ecommerce with Liquid themes, admin dashboard and app SDK"
readmeQualityOk: true
url: "https://github.com/shopnex-ai/shopnex"
homepage: "https://shopnex.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["ecommerce", "shopify", "headless", "liquid", "ecommerce-platform", "shopify-alternative", "dropshipping", "astro", "e-commerce", "multi-tenant"]
stars: 370
forks: 58
openIssues: 15
closedIssues: 37
watchers: 9
contributors: 7
recentReleases: 7
createdAt: "2025-03-14T13:45:04Z"
lastCommitAt: "2026-11-17T14:49:44Z"
lastReleaseAt: "2026-10-30T08:29:20Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 41
maintainers: ["ArseniyX", "dependabot[bot]", "hskl18"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb32a9a8a73fcda82028c5d098d4d377cad89b2e8ddd943e280d131a20c33489/shopnex-ai/shopnex"
discussionCount: 6
---

## Quick start

Requires [Node](https://nodejs.org) 22.22+. No Docker, no clone, no database to install.

```sh
npx create-shopnex@latest my-shop
```

Open http://localhost:3000, follow the setup wizard, and your storefront is on http://localhost:4321.

- Add optional apps: `--with stripe,cj,shippo`.
- Everything lives in the `my-shop` folder (`.env`, embedded database in `.pglite/`). Delete it to start over.
- It's a trial setup. For production, set `DATABASE_URL` to PostgreSQL or see the [self-hosting guide](https://github.com/shopnex-ai/shopnex/blob/HEAD/apps/docs/content/docs/self-hosting/install.mdx).

## What you get

- **Admin**: products, collections, orders, discounts, shipping, taxes, staff and settings in the browser
- **Storefront**: a bundled Astro storefront with Liquid themes, or bring your own through the typed REST Storefront API
- **Hosted checkout**: shipping rates, payment methods, discount codes, order confirmation
- **Extensible**: scoped API tokens, signed webhooks, embedded apps and an app marketplace. No third-party code in the core
- **Multi-tenant**: one shop by default, many with `TENANCY_MODE`
- **Yours**: MIT licensed, no platform fees, all data in…
