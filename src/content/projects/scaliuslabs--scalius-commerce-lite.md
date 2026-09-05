---
repo: "scaliuslabs/scalius-commerce-lite"
name: "scalius-commerce-lite"
description: "The Open-Source Commerce Engine."
readmeQualityOk: true
url: "https://github.com/scaliuslabs/scalius-commerce-lite"
homepage: "https://scalius.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 17
forks: 6
openIssues: 0
closedIssues: 124
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-22T08:11:53Z"
lastCommitAt: "2026-09-05T07:49:28Z"
lastReleaseAt: "2025-12-24T08:07:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 61
maintainers: ["abdurrobbadhon"]
openGraphImageUrl: "https://opengraph.githubassets.com/0754a7ca61a79c86725c15f995d2a0fa72a5d51dd92576a4ac9fe283cd29377e/scaliuslabs/scalius-commerce-lite"
---

</a>
</p>

<h1 align="center">
  Scalius Commerce Lite
</h1>

<h4 align="center">
</h4>

  Full-stack e-commerce platform — admin dashboard, storefront, and API — deployed as Cloudflare Workers. Turborepo monorepo with TanStack Start, Astro, Hono, and portable D1, TursoDB, or PostgreSQL storage.
</p>

  </a>
  </a>
  </a>
</p>

  </a>
  </a>
  </a>
</p>

## Overview

Scalius Commerce Lite is a **Turborepo monorepo** containing three Cloudflare Workers and five shared packages. The admin dashboard and storefront reach the API through **Cloudflare Service Bindings** (zero-latency RPC in production).

```text
apps/
  admin-v2/       # @scalius/admin-v2 — TanStack Start admin dashboard (Cloudflare Worker)
  api/            # @scalius/api — Hono standalone API + queue consumer (Cloudflare Worker)
  storefront/     # @scalius/storefront — Astro 7 SSR customer store (Cloudflare Worker)
packages/
  api-client/     # @scalius/api-client — Generated SDK from OpenAPI spec
  core/           # @scalius/core — domain modules, auth, integrations, FTS5 search
  database/       # @scalius/database — Drizzle schema and migrations
  shared/         # @scalius/shared — shared utilities and rendering…
