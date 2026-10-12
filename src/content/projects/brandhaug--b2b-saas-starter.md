---
repo: "brandhaug/b2b-saas-starter"
name: "b2b-saas-starter"
description: "Cloudflare-first B2B SaaS monorepo starter. TanStack Start, Effect v4, Drizzle on D1, Better Auth, Alchemy v2, REST + MCP, React Email, Storybook, Vitest, Playwright, oxlint, oxfmt, Vite+, pnpm."
readmeQualityOk: true
url: "https://github.com/brandhaug/b2b-saas-starter"
homepage: "https://b2b-saas-starter-web.brandhaug.workers.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["monorepo", "starter", "typescript", "alchemy", "b2b", "better-auth", "cloudflare", "cloudflare-workers", "d1", "drizzle-orm"]
stars: 51
forks: 7
openIssues: 6
closedIssues: 67
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-05-31T20:48:34Z"
lastCommitAt: "2026-10-12T11:15:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 56
maintainers: ["brandhaug"]
openGraphImageUrl: "https://opengraph.githubassets.com/55a99548d286e231e9a061c323578b71aa47298c191ed04b96f96de7e0c95989/brandhaug/b2b-saas-starter"
---

# B2B SaaS Starter

A Cloudflare-first repository for building a B2B SaaS with TanStack Start, Effect v4, Drizzle D1, Better Auth, and Alchemy.

The public site explains the repository. The Reference Application demonstrates workspaces, membership and permissions, billing, API tokens, webhooks, notifications, audit events, and account administration.

## Run locally

Install the [Vite+ CLI](https://viteplus.dev), which manages the pinned Node and pnpm toolchain:

```bash
vp install
cp .env.example .env
pnpm run dev
```

Open <http://localhost:3071>. Optional providers stay inactive until configured. For credential sign-in, [migrate and seed local D1](https://github.com/brandhaug/b2b-saas-starter/blob/HEAD/docs/setup.md#database), then restart the dev server.

## Architecture

Three Workers share the business-use-case layer in [packages/capabilities](https://github.com/brandhaug/b2b-saas-starter/blob/HEAD/packages/capabilities), with billing and email-delivery infrastructure in their dedicated packages:

- `apps/web`: public content, authenticated UI, server functions, and Better Auth.
- `apps/api`: REST and MCP interfaces over the same workspace operations.
- `apps/background`:…
