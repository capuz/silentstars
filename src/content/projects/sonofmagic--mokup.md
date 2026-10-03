---
repo: "sonofmagic/mokup"
name: "mokup"
description: "Fast, composable mock tooling"
readmeQualityOk: true
url: "https://github.com/sonofmagic/mokup"
homepage: "https://mokup.icebreaker.top/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["hono", "mock", "mock-server"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-15T12:22:57Z"
lastCommitAt: "2026-10-03T22:02:59Z"
lastReleaseAt: "2026-01-19T17:19:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 75
undervaluedScore: 28
maintainers: ["sonofmagic", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/662cae4dd9c05ff0cba0aeff9204ae05c09634ab3c8c5df5bce9390f7c95c8c4/sonofmagic/mokup"
fundingLinks: ["CUSTOM:https://github.com/sonofmagic/sponsors"]
discussionCount: 1
---

## Why mokup

- File-based routing via filename suffixes like `users.get.json`.
- JSON/JSONC and TS/JS handlers powered by Hono Context.
- Works in Vite dev, CLI builds (workers), and runtime adapters.
- Built-in headers, status, delays, and middleware hooks.

## Requirements

- Node.js `^20.19.0 || >=22.12.0`

## Upgrade Notes

- Published packages are ESM-only. CommonJS `require()` is no longer supported.
- Internal build packages now use `tsdown` on top of Rolldown.
- Shared build helpers are exposed from `@mokup/shared/rolldown`.

## Quick start

Create `mock/users.get.json`:

```json
{ "ok": true }
```

Create `mock/login.post.ts`:

```ts
export default async (c) => {
  const body = await c.req.json().catch(() => ({}))
  return { ok: true, user: body }
}
```

Tip: you can use `defineHandler` for better IntelliSense:

```ts
import { defineHandler } from 'mokup'

export default defineHandler(async (c) => {
  const body = await c.req.json().catch(() => ({}))
  return { ok: true, user: body }
})
```

Follow the docs at https://mokup.icebreaker.top/ for Vite and CLI setup.
Upgrade details:…
