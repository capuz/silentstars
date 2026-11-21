---
repo: "rocketflare-dev/rocketflare"
name: "rocketflare"
description: "Rocketflare — multi-tenant SaaS starter: Hono API + React UI on Cloudflare Workers, CLI, shared zod contracts"
readmeQualityOk: true
url: "https://github.com/rocketflare-dev/rocketflare"
homepage: "https://rocketflare.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["ai-agents", "b2b-saas", "boilerplate", "cloudflare", "cloudflare-workers", "drizzle-orm", "hono", "internal-tools", "multi-tenancy", "multi-tenant"]
stars: 14
forks: 2
openIssues: 29
closedIssues: 32
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-09-01T14:00:26Z"
lastCommitAt: "2026-11-21T13:30:41Z"
lastReleaseAt: "2026-09-18T19:14:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 53
maintainers: ["cliftonc", "robinbowes"]
openGraphImageUrl: "https://opengraph.githubassets.com/24c1f4af1fc91f21f5d0048a4fe1a6c65c94a48b21a7573ead1a5b5523e94847/rocketflare-dev/rocketflare"
discussionCount: 0
---

Rocketflare is one repository that already solves the platform work every internal or B2B product
needs before its first real feature: tenancy, sign-in, roles and permissions, background jobs,
realtime, file storage, opt-in analytics dashboards, an AI layer (chat, agents, retrieval) and a CLI —
running as a single Cloudflare Worker over Postgres, with a React UI and a shared contract package
that keeps the API, the UI and the CLI in agreement. The first local run needs **zero external
credentials**, and the codebase is written to be driven by a coding agent: `CLAUDE.md`,
`.claude/rules/`, per-directory guides and a "how it works" reference mean the next feature is a
contract → schema → route → page (→ command) loop, not a platform project.

> See **[Rocketpod](https://github.com/rocketflare-dev/rocketpod)** for a version of Rocketflare that
> runs without Cloudflare (Node in containers, Postgres for everything). It often lags behind
> Rocketflare in features ([`docs/DEPLOY.md`](https://github.com/rocketflare-dev/rocketflare/blob/HEAD/docs/DEPLOY.md) "Running somewhere other than
> Cloudflare").
