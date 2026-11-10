---
repo: "wangxy051-ai/bazi-time-audit-kit"
name: "bazi-time-audit-kit"
description: "Reproducible DST fixtures, a civil-time ambiguity checker, and a calculation audit checklist for Four Pillars charts."
readmeQualityOk: true
url: "https://github.com/wangxy051-ai/bazi-time-audit-kit"
homepage: "https://clearbazichart.com/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 0
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-26T14:22:50Z"
lastCommitAt: "2026-10-26T14:24:20Z"
status: "quiet"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 23
maintainers: ["wangxy051-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d5ad0f0222f808036561f2f1edcc1ab3db293463bad912bac851395029caa24/wangxy051-ai/bazi-time-audit-kit"
promoted: true
postedAt: "2026-11-03T12:54:13.102Z"
---

# Bazi Time Audit Kit

Small reusable fixtures and a dependency-free command-line checker for inspecting ambiguous or nonexistent civil birth times before interpreting a Four Pillars chart.

## Included

- `dst-cases.csv`: synthetic New York spring-gap, autumn-fold and ordinary-time cases, with provenance per row.
- `resolve-local-time.mjs`: resolves a local minute to zero, one or multiple UTC candidates using Node's installed IANA/Intl data.
- `test.mjs`: regression checks for a skipped time, repeated time, ordinary time and invalid inputs.
- `calculation-checklist.md`: an audit checklist for comparing chart calculation conventions.
- `sources.md`: original timekeeping references and scope of the observations.
- `dst-fold.svg`: an original diagram of the paired autumn-hour experiment.

## Run

Requires Node.js 20 or newer with Intl time-zone data. No packages, credentials, network calls or real birth details are required.

```sh
node test.mjs
node resolve-local-time.mjs 2024-11-03T01:30 America/New_York
```

The repeated-hour example returns UTC candidates `2024-11-03T05:30:00.000Z` and `2024-11-03T06:30:00.000Z`. A gap returns no candidates rather than inventing a time.

## What…
