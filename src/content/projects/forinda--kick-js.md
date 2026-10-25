---
repo: "forinda/kick-js"
name: "kick-js"
description: "Modern type-safe backend framework, powered by Vite. Built for developer experience. Pluggable as you need."
readmeQualityOk: true
url: "https://github.com/forinda/kick-js"
homepage: "https://kickjs.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["api", "expressjs", "kickjs", "typescript", "zod", "dependency-injection", "joi", "mongoose", "vite", "vitejs"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 105
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-19T23:43:28Z"
lastCommitAt: "2026-10-25T08:40:34Z"
lastReleaseAt: "2026-03-20T11:35:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 71
maintainers: ["forinda", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1925d85a803e1307f2816270f0b2c40257086d725c91f96d2ec744e765760e6a/forinda/kick-js"
discussionCount: 2
---

Modern type-safe backend framework, powered by Vite.<br />
  Built for developer experience. Pluggable as you need.

NestJS ergonomics without the complexity: decorators, DI, modules, code generators, and end-to-end type safety.

## Install

```bash
pnpm add @forinda/kickjs express reflect-metadata zod
pnpm add -D @forinda/kickjs-cli
```

Or scaffold a new project:

```bash
npx @forinda/kickjs-cli new my-api
cd my-api && npm run dev   # or pnpm dev / yarn dev / bun run dev, for the package manager you picked
```

Or a fullstack workspace — KickJS API + Vite/React frontend, typed end to end:

```bash
pnpm dlx @forinda/kickjs-cli new my-app --template fullstack --pm pnpm
cd my-app && pnpm dev   # server + web in parallel; rename a server field and the frontend stops compiling
```

With npm, yarn or bun, run `dev:server` and `dev:web` in two terminals instead (`npm run dev:server`).

## Hello World

```ts
// src/modules/hello/hello.controller.ts
import { Controller, Get, type Ctx } from '@forinda/kickjs'

@Controller()
export class HelloController {
  @Get('/')
  index(ctx: Ctx<KickRoutes.HelloController['index']>) {
    return { message: 'Hello from KickJS!' } // sent as JSON; type…
