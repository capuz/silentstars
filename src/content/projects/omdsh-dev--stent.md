---
repo: "omdsh-dev/stent"
name: "stent"
description: "灵感来源于MC Fabric的Cordis/DSH hook处理器"
readmeQualityOk: true
url: "https://github.com/omdsh-dev/stent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["dsh", "dsh-plugin"]
stars: 18
forks: 1
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-08-06T08:46:22Z"
lastCommitAt: "2026-08-25T04:09:25Z"
lastReleaseAt: "2026-08-20T16:21:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 50
maintainers: ["inschrift-spruch-raum"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfc6395720ec5053121fe31cb50126a3ed1d9e1777026dd402efe22660e45e56/omdsh-dev/stent"
---

# RFC: dsh-external-stent — repository purpose, architecture, and decision record

English | [中文](https://github.com/omdsh-dev/stent/blob/HEAD/README.zh.md)

- Status: **living document** (each section records the decision and its history)
- Scope: this standalone Stent extension workspace
- Upstream anchors: deepseek-harness snapshots `7b9644f2` (0812) / `9f9e2782a4` (0813),
  fork tip `65bcaf9902` (`feat-stent`)

This document explains *why* this repository is shaped the way it is. Every
non-obvious arrangement below was reached through a concrete failure recorded
in the commit history; the sections follow the repository's evolution rather
than its file layout.

---

## 1. Purpose: an external Stent extension, not a fork

deepseek-harness is a private monorepo. The Stent/Mixin extension layer lives
there as three implementation packages, but a consumer cannot install them from
the registry. This repository externalizes those three packages and publishes
the `@oh-my-dsh/stent-pack` carrier so consumers can install the complete bundle
through the official plugin channel:

```
dsh plugin --profile <p> add @oh-my-dsh/stent-pack
```

**Boundary (hard rule):** the workspace contains…
