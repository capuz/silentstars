---
repo: "plvo/create-faster"
name: "create-faster"
description: "⚡ Initialize any project with one CLI command - from single apps to complete monorepos"
readmeQualityOk: true
url: "https://github.com/plvo/create-faster"
homepage: "https://create.plvo.dev"
language: "TypeScript"
languages: ["TypeScript", "Handlebars"]
languagePcts: [50, 40]
topics: ["cli", "react", "turborepo", "typescript", "starter", "templates"]
stars: 29
forks: 1
openIssues: 3
closedIssues: 32
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-10-18T19:32:31Z"
lastCommitAt: "2026-10-14T08:58:24Z"
lastReleaseAt: "2026-02-11T15:55:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 59
maintainers: ["plvo", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d84e37e755d8f5a0d14011bc6c47b79ad01c357f92cef46a1ed26b84ec19277/plvo/create-faster"
discussionCount: 0
---

A modern CLI scaffolding tool that generates production-ready full-stack projects with multiple framework combinations. Unlike traditional scaffolding tools, create-faster enables you to create multiple applications simultaneously with automatic monorepo orchestration.

Visit https://create.plvo.dev/docs for more details.

## Key Features

- **Multiple frameworks**: Next.js, Expo, TanStack Start, Hono
- **Automatic monorepo**: Turborepo configuration for 2+ apps
- **Modular system**: 11+ optional modules (shadcn/ui, Better Auth, TanStack Query, MDX, PWA, etc.)
- **Database support**: PostgreSQL, MySQL with Prisma or Drizzle ORM
- **Linters**: Biome or ESLint with stack-specific configs
- **Developer tools**: Husky git hooks
- **Dual modes**: Interactive prompts or CLI flags for automation
- **Type-safe**: Full TypeScript support with strict configuration
- **Auto-generated CLI commands**: Copy-paste ready command to recreate projects

*More features coming soon, check [the roadmap](https://create.plvo.dev/docs/roadmap) for more details.*

## Usage Examples

### Interactive Mode

```bash
# Using your favorite package manager
npm create faster
pnpm create faster
bun create faster…
