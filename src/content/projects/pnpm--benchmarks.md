---
repo: "pnpm/benchmarks"
name: "benchmarks"
description: "Benchmarks of JavaScript Package Managers"
readmeQualityOk: true
url: "https://github.com/pnpm/benchmarks"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
topics: ["benchmark", "package-manager", "pnpm", "npm", "yarn"]
stars: 433
forks: 28
openIssues: 8
closedIssues: 12
watchers: 5
contributors: 49
recentReleases: 0
createdAt: "2016-10-15T12:18:35Z"
lastCommitAt: "2026-10-27T09:16:36Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 33
maintainers: ["github-actions[bot]", "zkochan"]
openGraphImageUrl: "https://opengraph.githubassets.com/8492751078c009060b8408ef13bf846271693287f92e334f60dba065c04e2488/pnpm/benchmarks"
---

# Benchmarks of JavaScript Package Managers

The current numbers are in [benchmarks.json](https://github.com/pnpm/benchmarks/blob/HEAD/benchmarks.json), and are published as a page at [pnpm.io/benchmarks](https://pnpm.io/benchmarks).

This repository measures; it does not present. It writes one file — `benchmarks.json` — carrying the numbers, the version of every tool they were measured with, and the conditions they were measured under. Which of them a reader is shown, what the columns and rows are called, how the charts look and what the prose around them says are all decided in [pnpm/pnpm.io](https://github.com/pnpm/pnpm.io), which reads that file and renders the page from it (`scripts/update-benchmarks.mjs` there). Wording and presentation change far more often than the measurement does, and keeping them apart means neither drags the other through a benchmark run.

## Usage

```
pnpm install
pnpm run benchmark
```

A run measures every package manager, appends the timings to `results/<manager>/<version>/<fixture>.yaml`, and rewrites `benchmarks.json` from them. The published number for a tool at a version is the minimum of the samples recorded for it — the statistic lives here…
