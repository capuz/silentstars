---
repo: "theMackabu/ant"
name: "ant"
description: "javascript for 🐜's, a tiny runtime with big ambitions"
readmeQualityOk: true
url: "https://github.com/theMackabu/ant"
homepage: "https://antjs.org"
language: "C"
languages: ["C"]
languagePcts: [79]
topics: ["javascript", "nodejs", "npm", "typescript", "ant"]
stars: 334
forks: 14
openIssues: 3
closedIssues: 15
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-11-20T23:17:01Z"
lastCommitAt: "2026-07-11T05:56:02Z"
lastReleaseAt: "2026-01-21T00:10:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 29
maintainers: ["theMackabu", "github-actions[bot]", "nealol"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1100903148/1e980ce4-b6ae-42cc-9381-3624ff062f9e"
discussionCount: 1
---

# 🐜 Ant

_An ant carries 50× its weight. So does this one._

Ant is a lightweight, high-performance JavaScript runtime built from scratch. <br>
Built to carry more than it weighs while delivering near-V8 speeds.

```bash
$ ls -lh ant
-rwxr-xr-x⠀8.5M⠀ant*

# built with -Os
-rwxr-xr-x⠀4.1M⠀ant*
```

## Table of contents

- [Why Ant?](#why-ant)
- [Installation](#installation)
- [Benchmarks](#benchmarks)
- [Spec conformance](#spec-conformance)
- [Building Ant](#building-ant)
- [Security](#security)
- [Community](#community)
- [Contributing to Ant](#contributing-to-ant)

## Why Ant?

|                     | Ant        | Node    | Bun    | Deno   |
| ------------------- | ---------- | ------- | ------ | ------ |
| Binary size         | **~8 MB**  | ~120 MB | ~60 MB | ~90 MB |
| Cold start          | **~5 ms**  | ~31 ms  | ~13 ms | ~25 ms |
| Engine              | Ant Silver | V8      | JSC    | V8     |
| JIT                 | ✓          | ✓       | ✓      | ✓      |
| WinterTC conformant | ✓          | partial | ✓      | ✓      |

Ant is designed for environments where size and startup time matter: serverless functions, edge computing, embedded systems, CLI tools, and anywhere you'd…
