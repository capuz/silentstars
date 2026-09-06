---
repo: "forinda/kick-js"
name: "kick-js"
description: "A declarative progressive backend framework"
readmeQualityOk: true
url: "https://github.com/forinda/kick-js"
homepage: "https://kickjs.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["api", "expressjs", "kickjs", "typescript", "zod", "dependency-injection", "joi", "mongoose", "vite", "vitejs"]
stars: 15
forks: 1
openIssues: 5
closedIssues: 100
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-19T23:43:28Z"
lastCommitAt: "2026-09-06T08:04:40Z"
lastReleaseAt: "2026-03-20T11:35:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 67
maintainers: ["forinda", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/787b07c14091d21b9c935ccb63a7bbb3d4c4b6b94837c004e945f76e9efdd72e/forinda/kick-js"
discussionCount: 2
---

</a>
</p>

  A production-grade, decorator-driven Node.js framework for TypeScript — runs on Express, Fastify, or h3, swap the engine in one line.
</p>

</p>

NestJS ergonomics without the complexity — decorators, DI, module system, code generators, and end-to-end type safety, powered by Zod and Vite.

## Install

```bash
pnpm add @forinda/kickjs express reflect-metadata zod
pnpm add -D @forinda/kickjs-cli
```

Or scaffold a new project:

```bash
npx @forinda/kickjs-cli new my-api
cd my-api && pnpm dev
```

Or a fullstack workspace — KickJS API + Vite/React frontend, typed end to end:

```bash
npx @forinda/kickjs-cli new my-app --template fullstack
cd my-app && pnpm dev   # server + web in parallel; rename a server field and the frontend stops compiling
```

## Hello World

A fresh `kick new my-api` scaffolds a complete project. Here are the files that matter, exactly as the CLI generates them:

```ts
// src/modules/hello/hello.service.ts
import { Service } from '@forinda/kickjs'

@Service()
export class HelloService {
  greet(name: string) {
    return { message: `Hello ${name} from KickJS!`, timestamp: new Date().toISOString() }
  }

  greetAll(names: string[]) {
    return…
