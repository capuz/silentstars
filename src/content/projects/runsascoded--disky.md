---
repo: "runsascoded/disky"
name: "disky"
description: "Examine/Visualize disk-space usage"
readmeQualityOk: true
url: "https://github.com/runsascoded/disky"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [51, 47]
topics: ["data-viz", "disk-space", "plotly", "tree-map"]
stars: 5
forks: 0
openIssues: 5
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2021-10-03T19:33:15Z"
lastCommitAt: "2026-11-03T18:41:50Z"
lastReleaseAt: "2026-10-16T19:50:19Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 79
maintainers: ["ryan-williams"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7d5c46ec2cdd4f4ee402daa1c8abdbc753fcd5b4079147bc3183e535da41eba/runsascoded/disky"
---

# disk-tree

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

## CLI

```bash
disk-tree --help
# Commands:
#   bulk-list       Bulk-list `URI` (e.g. `gcs://bucket`) to sharded listing parquet at `--out`.
#   import          Import one or more buckets from listing parquet(s) as…
