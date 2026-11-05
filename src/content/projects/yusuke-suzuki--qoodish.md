---
repo: "yusuke-suzuki/qoodish"
name: "qoodish"
description: "Qoodish web app"
readmeQualityOk: true
url: "https://github.com/yusuke-suzuki/qoodish"
homepage: "https://qoodish.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 10
forks: 2
openIssues: 1
closedIssues: 33
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2017-04-28T14:14:45Z"
lastCommitAt: "2026-11-05T00:21:11Z"
lastReleaseAt: "2025-09-29T15:23:19Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 78
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bf3f9440346a4b2555d0e1a23847809620e7620fbfdb0967e095b14c0400dbd/yusuke-suzuki/qoodish"
---

# Qoodish

https://qoodish.com

This repository is a pnpm workspace of four Cloudflare Workers under `apps/` and one shared package under `packages/`:

- [`api`](https://github.com/yusuke-suzuki/qoodish/blob/HEAD/apps/api/README.md): the API, a Hono app that keeps its records in D1 through Drizzle ORM
- [`web`](https://github.com/yusuke-suzuki/qoodish/blob/HEAD/apps/web/README.md): the web app, a Next.js app deployed through [OpenNext](https://opennext.js.org/cloudflare)
- [`admin`](https://github.com/yusuke-suzuki/qoodish/blob/HEAD/apps/admin/README.md): the moderation dashboard
- [`synthetics`](https://github.com/yusuke-suzuki/qoodish/blob/HEAD/apps/synthetics/README.md): scheduled checks against production
- [`api-contract`](https://github.com/yusuke-suzuki/qoodish/blob/HEAD/packages/api-contract): the JSON shapes of the API's responses, shared by the API and the apps that call it

Each app's README covers how to run, test and deploy it.

## Installation

```bash
pnpm install
```

## Checks

From the repository root:

```bash
pnpm lint        # Biome, across the repository
pnpm typecheck   # TypeScript, in every workspace
pnpm test        # unit tests, in the workspaces that…
