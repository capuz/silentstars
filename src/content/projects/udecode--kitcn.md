---
repo: "udecode/kitcn"
name: "kitcn"
description: "Convex + Better Auth + tRPC + Drizzle + TanStack Query + shadcn"
readmeQualityOk: true
url: "https://github.com/udecode/kitcn"
homepage: "https://kitcn.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
stars: 435
forks: 33
openIssues: 1
closedIssues: 54
watchers: 4
contributors: 11
recentReleases: 0
createdAt: "2025-07-27T13:07:28Z"
lastCommitAt: "2026-08-17T04:17:47Z"
lastReleaseAt: "2026-01-23T20:54:39Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 38
maintainers: ["zbeyens", "MikeyZhang75"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a62f0c45623ff88d313850b301890dc9067225d5ebd5a9821b97914adcc58cb/udecode/kitcn"
discussionCount: 9
---

# kitcn

Type-safe Convex framework with a tRPC-style server API, Drizzle-style ORM, and TanStack Query client integration.

## Docs

[kitcn.dev](https://kitcn.dev)

## What You Get

- cRPC procedure builder (`kitcn/server`)
- Drizzle-style ORM for Convex (`kitcn/orm`)
- React + TanStack Query integration with real-time updates (`kitcn/react`)
- Next.js server helpers for RSC/auth (`kitcn/auth/nextjs`, `kitcn/rsc`)
- Better Auth adapter utilities (`kitcn/auth`, `kitcn/auth/client`, `kitcn/auth/config`, `kitcn/auth/http`)
- Rate limiting plugin (`kitcn/ratelimit`)
- CLI with codegen, registry, runtime analysis (`kitcn` bin)

## Quick Start

```bash
npx kitcn@latest init -t next --yes
```

Then follow the [Quickstart](https://kitcn.dev/docs/quickstart).

## Local Dev

```bash
bun install
bun typecheck
bun run test
bun run lint
```

## Example App

The canonical reference app lives in [example](https://github.com/udecode/kitcn/blob/HEAD/example). It demonstrates current best-practice usage across auth, cRPC, ORM, HTTP routes, and TanStack Query.
