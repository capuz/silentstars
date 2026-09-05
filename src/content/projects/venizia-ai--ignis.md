---
repo: "VENIZIA-AI/ignis"
name: "ignis"
description: "Hono-based Infrastructure"
readmeQualityOk: true
url: "https://github.com/VENIZIA-AI/ignis"
homepage: "https://venizia-ai.github.io/ignis"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-11-16T02:29:42Z"
lastCommitAt: "2026-09-05T07:48:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 60
maintainers: ["phatnt199", "venizia-developer"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb150f56e9f1e8e9eaf9c80da4e06d30504241eb4da1f8c814206037d2c5e004/VENIZIA-AI/ignis"
discussionCount: 3
---

<br />

# :fire: IGNIS

**LoopBack 4's architecture. Hono's speed.**

[Documentation](https://ignis.venizia.ai) &#8226;
[Quickstart](https://ignis.venizia.ai/guides/get-started/5-minute-quickstart) &#8226;
[Core API](https://ignis.venizia.ai/references/) &#8226;
[Examples](#examples) &#8226;
[Changelog](https://ignis.venizia.ai/changelogs/)

</div>

---

Enterprise TypeScript server infrastructure: decorator-driven dependency injection, the repository
pattern, and a component system - running on Hono at ~140k req/s with Drizzle's type-safe SQL.

You write controllers, services, and repositories. IGNIS wires them, validates every request against
Zod, and generates the OpenAPI spec from the same schemas.

## Install

```bash
bun add @venizia/ignis @venizia/ignis-helpers hono @hono/zod-openapi drizzle-orm pg
bun add -d typescript tsc-alias @venizia/dev-configs @types/bun
```

> [!IMPORTANT]
> `experimentalDecorators` and `emitDecoratorMetadata` must be `true` in your `tsconfig.json`, declared
> **inline** - Bun does not resolve them through `extends`, and `@inject` is silently dropped without them.
> Copy them from `@venizia/dev-configs/tsconfig.common.json`.

## Hello world…
