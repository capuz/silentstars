---
repo: "alfredmouelle/create-stack"
name: "create-stack"
description: "create-stack assembles a SaaS project for Next.js, TanStack Start or RasenganJS from a tested reference application, then makes the first commit only after install, format, typecheck and lint pass."
readmeQualityOk: true
url: "https://github.com/alfredmouelle/create-stack"
homepage: "https://create-stack.alfredmouelle.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["better-auth", "boilerplate", "clerk", "cli", "convex", "create-app", "drizzle", "framework-agnostic", "monorepo", "nextjs"]
stars: 6
forks: 0
openIssues: 9
closedIssues: 49
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-22T00:17:51Z"
lastCommitAt: "2026-10-21T20:00:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 56
maintainers: ["alfredmouelle"]
openGraphImageUrl: "https://opengraph.githubassets.com/888ce7c08f750e88c407533eb158c0af98cfb824f870b6fa7e1dc50abdbfdd1c/alfredmouelle/create-stack"
discussionCount: 0
---

# create-stack

> create-stack assembles a SaaS project for Next.js, TanStack Start or RasenganJS
> preview from a tested reference application, then makes the first commit only
> after install, format, typecheck and lint pass.

```bash
pnpm dlx @alfredmouelle/create-stack@latest my-app
```

Flags, `create-stack add` and the stack builder are on the
[website](https://create-stack.alfredmouelle.com/docs).

## This repository

This pnpm and Turborepo monorepo develops the CLI and everything it copies.

| Path | What lives here |
|---|---|
| `cli/` | The published `@alfredmouelle/create-stack` CLI |
| `apps/*-base/` | Reference applications, one per framework, containing every stack part it supports |
| `packages/<capability>/` | Capabilities, each with a `capability.json` manifest and tests |
| `skills/` | [Agent skills](https://github.com/alfredmouelle/create-stack/blob/HEAD/skills/README.md): `/create-stack` and `/add-capability` |
| `marketing/` | The website |

Replaceable integrations (mailer, storage, cache, logger, analytics) are **ports**:
application code depends on the port, and the composition root selects the adapter.
Integrations with one useful provider (Inngest jobs,…
