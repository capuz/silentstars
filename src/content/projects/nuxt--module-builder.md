---
repo: "nuxt/module-builder"
name: "module-builder"
description: "Complete solution to build and ship Nuxt modules."
readmeQualityOk: true
url: "https://github.com/nuxt/module-builder"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["nuxt", "nuxt-module"]
stars: 277
forks: 39
openIssues: 3
closedIssues: 136
watchers: 5
contributors: 51
recentReleases: 0
createdAt: "2021-12-03T10:40:14Z"
lastCommitAt: "2026-11-17T14:40:42Z"
lastReleaseAt: "2024-06-19T08:54:17Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 40
maintainers: ["renovate[bot]", "danielroe", "userquin"]
openGraphImageUrl: "https://opengraph.githubassets.com/c76aa77e490823ee4799732a61d3132814923bf28af57c0f1750d40955d81251/nuxt/module-builder"
---

# 📦 Nuxt Module Builder

> The complete solution to build and ship [Nuxt modules](https://nuxt.com/modules).

## Features

- Builds modules for Nuxt 3 and later, with no configuration for the [module starter](https://github.com/nuxt/starter/tree/module) layout
- Builds with [tsdown](https://tsdown.dev) through the `builder()` plugin: bundles the module entry, and transpiles the runtime directory file by file
- Generates declarations against the module's own `.nuxt`, for `.ts` and `.vue` files alike
- Writes the type shims that give `nuxt.config` autocompletion for the module's options and hooks
- Lets a playground run the module's sources while `package.json` publishes `dist`, and checks the published paths before every build

## Quick start

Create a module from the [module starter](https://github.com/nuxt/starter/tree/module):

```bash
npm create nuxt -- -t module my-module
```

Building a module requires Node `^22.18.0 || ^24.11.0 || >=26.0.0`, with `tsdown` and `typescript` installed alongside `@nuxt/module-builder`. Apps that install a built module need Nuxt 3 or later.

## Documentation

- [Getting started](https://github.com/nuxt/module-builder/blob/HEAD/docs/index.md)
-…
