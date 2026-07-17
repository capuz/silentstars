---
repo: "wmzhai/alpaca-rust"
name: "alpaca-rust"
description: "High-Performance Rust Client for Alpaca Market Data and Trading APIs"
readmeQualityOk: true
url: "https://github.com/wmzhai/alpaca-rust"
homepage: "https://wmzhai.github.io/alpaca-rust/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [73, 20]
stars: 20
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-04-08T05:55:45Z"
lastCommitAt: "2026-07-17T05:57:47Z"
lastReleaseAt: "2026-06-29T17:18:08Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 47
maintainers: ["wmzhai"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e4b7fc57101ff5efe19288a05b8c32580822514280a5db047ace3480d5e5fc6/wmzhai/alpaca-rust"
---

# alpaca-rust

`alpaca-rust` is a Rust workspace for Alpaca HTTP SDKs, market-time semantics,
provider-neutral option models, and high-level convenience facades.

The published Rust surface is organized into three layers:

- Foundation SDK: `alpaca-core`, `alpaca-rest-http`, `alpaca-data`, `alpaca-trade`, `alpaca-mock`
- Semantic core: `alpaca-time`, `alpaca-option`
- Convenience facade: `alpaca-facade`

Primary entry points depend on what you are building:

- use `alpaca-data` for direct market-data HTTP access
- use `alpaca-trade` for direct trading HTTP access
- use `alpaca-time` and `alpaca-option` for reusable domain semantics
- use `alpaca-facade` when you want the higher-level composition layer

Optional TypeScript companions are provided as workspace conveniences:

- `@alpaca/time` from `packages/alpaca-time`
- `@alpaca/option` from `packages/alpaca-option`
- `@alpaca/trade` from `packages/alpaca-trade` (shared trade execution type only)

These companions are plus features inside the workspace, not the recommended
published system surface.

Quick links:

- Repository: <https://github.com/wmzhai/alpaca-rust>
- GitHub Pages: <https://wmzhai.github.io/alpaca-rust/>
-…
