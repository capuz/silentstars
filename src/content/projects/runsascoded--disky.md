---
repo: "runsascoded/disky"
name: "disky"
description: "Examine/Visualize disk-space usage"
readmeQualityOk: true
url: "https://github.com/runsascoded/disky"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [49, 47]
topics: ["data-viz", "disk-space", "plotly", "tree-map"]
stars: 5
forks: 0
openIssues: 5
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2021-10-03T19:33:15Z"
lastCommitAt: "2026-11-19T04:42:40Z"
lastReleaseAt: "2026-10-16T19:50:19Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 79
maintainers: ["ryan-williams"]
openGraphImageUrl: "https://opengraph.githubassets.com/52576a2d15137bf271eaa2714503684ef43bf92761a64d6fb356f65a09d19910/runsascoded/disky"
---

# disky

Cloud storage analyzer: a scanning/indexing CLI for S3 / R2 / GCS buckets, and a Cloudflare-hosted treemap site (`site/`) over its indexes.

- [Install](#install)
- [Site](#site)
- [CLI](#cli)
  - [Examples](#examples)
- [Notes](#notes)
  - [Output](#output)
  - [Performance](#performance)

## Install

From a clone (one uv workspace: the engine plus the `dt-cloud` overlay in `cloud/`):

```bash
uv sync                                     # engine (`disk-tree` CLI)
uv sync --all-packages --all-extras         # + dt-cloud, every extra
```

## Site

`site/` is a Vite + React app with Cloudflare Pages Functions over a path index of each scan (in R2 / GCS, with D1 for the index footers): treemaps you can drill into, filter, diff between scans, and an age lens. Zero-dependency DIY-SVG/canvas ([`@open-athena/treemap`](https://github.com/runsascoded/disky/blob/HEAD/packages/treemap)), no chart lib. Try it on the [live `r2://ctbk` demo](https://r2.rbw.sh/r2/ctbk).
