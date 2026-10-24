---
repo: "bonguynvan/bo-grid"
name: "bo-grid"
description: "The data grid for busy markets. A light, fast Svelte 5 grid for live price boards: flashes and deltas, virtual scroll, pinned rows, pivot and tree, editing, and a web component."
readmeQualityOk: true
url: "https://github.com/bonguynvan/bo-grid"
homepage: "https://bonguynvan.github.io/bo-grid/"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [52, 30]
topics: ["accessibility", "data-grid", "datagrid", "datatable", "fintech", "grid", "market-data", "pivot-table", "realtime", "sparklines"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-06-05T21:42:49Z"
lastCommitAt: "2026-10-24T08:08:20Z"
lastReleaseAt: "2026-10-24T07:56:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 62
maintainers: ["bonguynvan"]
openGraphImageUrl: "https://opengraph.githubassets.com/02e6b186be28eba043cba466e9459f04d559cb1392145f43ecb8322715ec041a/bonguynvan/bo-grid"
fundingLinks: ["GITHUB:https://github.com/bonguynvan"]
discussionCount: 0
---

# bo-grid

**The data grid for busy markets.**

A fast, lightweight Svelte 5 data grid for trading screens, with a custom
element for every other framework.

**[Live demo](https://bonguynvan.github.io/bo-grid/)** ·
**[Guide](https://github.com/bonguynvan/bo-grid/blob/HEAD/docs/guide.md)** ·
**[API reference](https://bonguynvan.github.io/bo-grid/api.html)** ·
**[Benchmarks](https://github.com/bonguynvan/bo-grid/blob/HEAD/BENCHMARKS.md)** ·
**[Changelog](https://github.com/bonguynvan/bo-grid/blob/HEAD/CHANGELOG.md)**

## Why bo-grid

- **Fast under load.** A 1,000-symbol price board at 30,000 ticks a second
  stays at about 12 ms of main-thread work per frame, with every changed cell
  flashing. [How it's measured](https://github.com/bonguynvan/bo-grid/blob/HEAD/BENCHMARKS.md)
- **Built for trading.** Tick flashes, price-limit colours, tick-aware
  formatting, a depth ladder with click-to-trade, and order book and
  time-and-sales helpers.
- **Complete.** Sorting, filtering, grouping, pivot, tree data, editing,
  clipboard and Excel export, all in one MIT package.
- **Small and SSR-safe.** About 46 KB gzip, no runtime dependencies, and clean
  server rendering in SvelteKit.
-…
