---
repo: "brandhaug/b2b-saas-starter"
name: "b2b-saas-starter"
description: "Cloudflare-first B2B SaaS monorepo starter. TanStack Start, Effect v4, Drizzle on D1, Better Auth, Alchemy v2, REST + MCP, React Email, Storybook, Vitest, Playwright, oxlint, oxfmt, Vite+, pnpm."
readmeQualityOk: true
url: "https://github.com/brandhaug/b2b-saas-starter"
homepage: "https://b2b-saas-starter-web.brandhaug.workers.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["monorepo", "starter", "typescript", "alchemy", "b2b", "better-auth", "cloudflare", "cloudflare-workers", "d1", "drizzle-orm"]
stars: 40
forks: 5
openIssues: 0
closedIssues: 37
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-05-31T20:48:34Z"
lastCommitAt: "2026-09-04T08:09:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["brandhaug"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6e5efabd870f059c212ace6b0706ca687db9eac758bf0a77a1d164d9bdc6616/brandhaug/b2b-saas-starter"
---

# B2B SaaS Starter

Cloudflare-first B2B SaaS monorepo. TanStack Start, Effect v4, Drizzle on D1, Better Auth, Alchemy v2, REST + MCP, React Email, Storybook, Vitest, Playwright, oxlint, oxfmt, Vite+, pnpm.

## About

A starter repository for shipping a B2B SaaS on Cloudflare's platform without making the early architectural decisions yourself. The public homepage showcases the repo and its architecture. The authenticated reference application demonstrates workspaces, members/RBAC, API tokens, webhooks, notifications, audit events, and a Better Auth admin dashboard — proving the foundation works end-to-end before you fork.

## Features

- **TanStack Start** web app (SSR + server functions) on a Cloudflare Worker, plus a separate Worker for public REST and MCP.
- **Effect v4** application layer in [`packages/capabilities`](https://github.com/brandhaug/b2b-saas-starter/blob/HEAD/packages/capabilities) shared across web, API, MCP, background, and tests.
- **Drizzle ORM** over a single shared Cloudflare **D1** database, with Better Auth tables included.
- **Better Auth** with email/password, username, and the admin plugin.
- **Alchemy v2** IaC in…
