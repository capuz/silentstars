---
repo: "dgattey/dg"
name: "dg"
description: "The home for everything Dylan. It's the wild west out there."
readmeQualityOk: true
url: "https://github.com/dgattey/dg"
homepage: "https://gattey.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["static-site", "portfolio-website", "cloudflare", "nextjs", "next", "vercel"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2016-03-18T06:09:31Z"
lastCommitAt: "2026-10-26T09:17:06Z"
lastReleaseAt: "2021-04-24T08:22:44Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 75
maintainers: ["dgattey"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad55e877781fc02645392774e449f393649d54429033a078be930ddb1a52f212/dgattey/dg"
---

# Dylan Gattey

Hi :wave: This is an overengineered way to show past projects / experiment with new tech. It's a lightweight, mobile-friendly React app in Typescript, powered by [Next](https://nextjs.org/docs/getting-started) and hosted on [Vercel](https://vercel.com). It's a monorepo using [pnpm](https://pnpm.io) workspaces and [Turbo](https://turbo.run).

## :hammer: Commands

- `turbo dev` start dev server (see [Dev workflow](#dev-workflow) below)
- `turbo build` prod build (CI)
- `turbo build:serve` prod build + serve (local testing)
- `turbo build:analyze` bundle size analysis
- `turbo check` Biome lint + format
- `turbo check:types` typecheck
- `turbo test` unit tests (Jest)
- `turbo graphql:schema` refresh Contentful GraphQL schema for editor tooling
- `turbo migrate` run migrations
- `turbo migrate:generate -- --name <name>` create migration
- `turbo migrate:status` show migration status
- `turbo migrate:undo` rollback last migration
- `turbo clean` clean caches, generated files, and `.env`
- `turbo topo --graph=graph.html` monorepo dependency graph

### Dev workflow

`turbo dev` runs these steps in order before starting the Next.js dev server:

1. `**dg#env**` - Generates…
