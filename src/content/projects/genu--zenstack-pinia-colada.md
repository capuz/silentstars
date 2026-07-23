---
repo: "genu/zenstack-pinia-colada"
name: "zenstack-pinia-colada"
description: "ZenStack plugin for Pinia Colada"
readmeQualityOk: true
url: "https://github.com/genu/zenstack-pinia-colada"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-10T19:38:17Z"
lastCommitAt: "2026-07-23T06:15:09Z"
lastReleaseAt: "2026-01-06T16:52:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 55
maintainers: ["renovate[bot]", "genu"]
openGraphImageUrl: "https://opengraph.githubassets.com/c38a743b92cacbdbf267503170b19dee4f7a8d3123c62791a2e9461a862a9c1a/genu/zenstack-pinia-colada"
---

# ZenStack Pinia Colada

[Pinia Colada](https://pinia-colada.esm.dev/) client for [ZenStack](https://zenstack.dev) - The Smart Data Fetching Layer for Vue 3.

## Features

- 🔐 **Type-safe** - Full TypeScript support with automatic type inference
- ⚡️ **Automatic caching** - Smart caching powered by Pinia Colada
- 🔄 **Optimistic updates** - Update UI before server responds
- 🎯 **Automatic invalidation** - Cache invalidation based on data relationships
- 📦 **Zero config** - Works out of the box with your ZenStack schema
- 🌳 **Tree-shakeable** - Only bundle what you use

## Installation

```bash
npm install zenstack-pinia-colada @pinia/colada pinia
# or
pnpm add zenstack-pinia-colada @pinia/colada pinia
# or
yarn add zenstack-pinia-colada @pinia/colada pinia
```

## Prerequisites

1. You need a ZenStack project set up (v3.0.0 or higher). See [ZenStack documentation](https://zenstack.dev/docs/welcome) for details.
2. Generate your ZenStack schema using `npx zenstack generate`

**Note:** This library requires ZenStack v3 to be installed in your project. The library will use your installed version of ZenStack packages.

## Quick Start

### 1. Setup Pinia Colada

```typescript
//…
