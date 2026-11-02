---
repo: "nuxt/module-builder"
name: "module-builder"
description: "Complete solution to build and ship Nuxt modules."
readmeQualityOk: true
url: "https://github.com/nuxt/module-builder"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["nuxt", "nuxt-module"]
stars: 277
forks: 38
openIssues: 24
closedIssues: 113
watchers: 5
contributors: 50
recentReleases: 0
createdAt: "2021-12-03T10:40:14Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2024-06-19T08:54:17Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 92
undervaluedScore: 33
maintainers: ["renovate[bot]", "danielroe", "JustusBaumhove"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/nuxt/module-builder"
---

# 📦 Nuxt Module Builder

> The complete solution to build and ship [Nuxt modules](https://nuxt.com/modules).

## Features

- Compatible with Nuxt 3 and Nuxt Kit
- Unified build with [unjs/unbuild](https://github.com/unjs/unbuild)
- Automated build config using last module spec
- Typescript and ESM support
- Auto generated types and shims for `@nuxt/schema`

We recommend to checkout the [Nuxt modules author guide](https://nuxt.com/docs/guide/going-further/modules) before starting with the module-builder.

## Requirements

For a user to use a module generated from module-builder, it's recommended they have:
- Node.js >= 18.x. _Latest Node LTS preferred_
- Nuxt 3+.

## Quick start

Get started with our [module starter](https://github.com/nuxt/starter/tree/module):

```bash
npm create nuxt -- -t module my-module
```

## Project structure

The module builder requires a special project structure. You can check out the [module template](https://github.com/nuxt/starter/tree/module).

### `src/module.ts`

The entrypoint for module definition.

A default export using `defineNuxtModule` and `ModuleOptions` type export is expected.

You could also optionally export `ModuleHooks` or…
