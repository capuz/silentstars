---
repo: "unjs/unrouting"
name: "unrouting"
description: "Making filesystem routing universal"
readmeQualityOk: true
url: "https://github.com/unjs/unrouting"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 201
forks: 9
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 21
recentReleases: 1
createdAt: "2024-01-31T10:14:44Z"
lastCommitAt: "2026-11-02T13:38:26Z"
lastReleaseAt: "2026-08-12T14:59:53Z"
status: "thriving"
tags: ["funded"]
healthScore: 87
undervaluedScore: 38
maintainers: ["renovate[bot]", "danielroe", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/75908e4e4d456c55d057f40b5c658e75510a4eeb6148a785dbcab39fe928896e/unjs/unrouting"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# 📍 unrouting

> Universal filesystem routing

`unrouting` parses file paths into a route tree and emits route definitions for any framework router. It handles nested routes, dynamic params, catchalls, optional segments, route groups, layer merging, and more – as a standalone, framework-agnostic library.

## Status

In active development. The core pipeline (parse, tree, emit) is functional and used by Nuxt.

- [x] Generic route parsing covering major filesystem routing patterns
  - [x] [Nuxt](https://github.com/nuxt/nuxt) / [unplugin-vue-router](https://github.com/posva/unplugin-vue-router)
  - [ ] [SvelteKit](https://kit.svelte.dev/docs/routing)
  - [ ] [Next.js](https://nextjs.org/docs/app/building-your-application/routing)
- [x] Route tree with nesting, layer merging, group transparency
- [x] Layer priority (multiple roots with configurable file precedence)
- [x] Incremental tree updates (`addFile`/`removeFile` for dev server HMR)
- [x] Pluggable route name generation
- [x] Route ordering by segment priority (static > dynamic > optional > catchall)
- [x] Named view support (`@viewName` convention)
- [x] Mode variant support (`.client`, `.server`, configurable)
- [x] Duplicate…
