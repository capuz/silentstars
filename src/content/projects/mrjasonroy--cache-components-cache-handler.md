---
repo: "mrjasonroy/cache-components-cache-handler"
name: "cache-components-cache-handler"
description: "A Nextjs Cache Components Cache Handler "
url: "https://github.com/mrjasonroy/cache-components-cache-handler"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 47
forks: 6
openIssues: 2
closedIssues: 7
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2025-11-11T06:03:09Z"
lastCommitAt: "2026-06-24T23:37:49Z"
lastReleaseAt: "2026-02-04T04:45:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 21
maintainers: ["mrjasonroy", "SerMedvid", "bholly24"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f931bc351ec6e08a40d4434479f09b40b1ff008f6d5db3cba9d12ab7bb539b3/mrjasonroy/cache-components-cache-handler"
---

# Cache Components Cache Handler

Cache handler for Next.js 16+ with support for Cache Components and "use cache" directive.

> Why another cache handler? I was originally going to contribute to [fortedigital/nextjs-cache-handler](https://github.com/fortedigital/nextjs-cache-handler) but that project is focused on backwards compatibility and carries a lot of legacy baggage. This repo is a ground-up rewrite that:
> - Targets **Next.js 16+ only** (Cache Components, `"use cache"`, `cacheLife`, etc.)
> - Ships with **true E2E coverage** (Playwright + Next 16) for every backend
> - Keeps the surface area small: zero-config memory handler for dev, Redis/Valkey/ElastiCache factory for prod
> - Provides an AI-first workflow so contributors (human or agent) can ship confidently

**📦 [View on npm](https://www.npmjs.com/package/@mrjasonroy/cache-components-cache-handler) | 🚀 [Releases](https://github.com/mrjasonroy/cache-components-cache-handler/releases)**

## What This Does

Implements Next.js 16+ caching APIs:
- `"use cache"` directive
- `cacheLife()` - Configure cache lifetime
- `cacheTag()` - Tag cache entries
- `revalidateTag()` - Invalidate by tags
- `updateTag()` - Update tags
-…
