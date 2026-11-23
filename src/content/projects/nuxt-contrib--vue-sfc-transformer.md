---
repo: "nuxt-contrib/vue-sfc-transformer"
name: "vue-sfc-transformer"
description: "Tools for minimal TypeScript transpilation of Vue SFCs"
readmeQualityOk: true
url: "https://github.com/nuxt-contrib/vue-sfc-transformer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 28
forks: 3
openIssues: 2
closedIssues: 10
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-04-04T10:15:35Z"
lastCommitAt: "2026-11-23T10:27:53Z"
lastReleaseAt: "2025-04-08T02:22:28Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 59
maintainers: ["renovate[bot]", "danielroe", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8f7ad955256a654259863d11d0be2d1b4ee2b002f3e74d83de6547f836d6879/nuxt-contrib/vue-sfc-transformer"
---

# vue-sfc-transformer

> Tools for minimal TypeScript transpilation of Vue SFCs

## Usage

Install package:

```sh
# npm
npm install vue-sfc-transformer vue @vue/compiler-core

# pnpm
pnpm install vue-sfc-transformer vue @vue/compiler-core
```

A TypeScript transpiler is needed to strip types from script blocks and template expressions. `rolldown` and `esbuild` are both optional peer dependencies; install whichever suits your setup. The `mkdist` loader uses `rolldown/utils` when it is available, and `esbuild` otherwise (or when mkdist's `esbuild` options are set).
