---
repo: "oxc-project/oxc-browserslist"
name: "oxc-browserslist"
description: "Rust port of browserslist"
readmeQualityOk: true
url: "https://github.com/oxc-project/oxc-browserslist"
homepage: "https://docs.rs/oxc-browserslist"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 62
forks: 2
openIssues: 0
closedIssues: 14
watchers: 3
contributors: 20
recentReleases: 0
createdAt: "2024-05-27T02:12:10Z"
lastCommitAt: "2026-10-16T08:26:40Z"
lastReleaseAt: "2024-12-14T11:33:50Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 54
maintainers: ["oxc-guard[bot]", "renovate[bot]", "Boshen"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ddd29900eb9519c4e8a3d801f16f76a6871877bb38c2f108d8c3d88762e04cf/oxc-project/oxc-browserslist"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/oxc"]
---

# oxc-browserslist

Rust port of [Browserslist](https://github.com/browserslist/browserslist), forked from [browserslist-rs](https://github.com/browserslist/browserslist-rs).

The original crate did not meet the criteria of `oxc`, the following changes are made:

- reduced compilation speed from one minute to a few seconds
- improved some runtime performance, e.g. [improve sort method](https://github.com/oxc-project/oxc-browserslist/pull/28), [precompute versions](https://github.com/oxc-project/oxc-browserslist/pull/10)
- removed all unnecessary, heavy or slow dependencies: `nom`, `time`, `ahash`, `chrono`, `either`, `indexmap`, `itertools`, `once_cell`, `string_cache`, `serde_json`
- reduced binary size through data compression and removal of config file support. 588.3K (this crate) vs 3.2M (original crate).

## Usage

See [docs.rs/oxc-browserslist](https://docs.rs/oxc-browserslist).

## Limitation

The following features are not supported, to align with Vite:

- Config file loading (`.browserslistrc`, `package.json` `browserslist` field)
- Environment variables (`BROWSERSLIST`, `BROWSERSLIST_CONFIG`, `BROWSERSLIST_ENV`)
- `extends` query (e.g. `extends…
