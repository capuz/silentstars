---
repo: "unjs/exsolve"
name: "exsolve"
description: "Module resolution utilities based on Node.js upstream implementation. "
readmeQualityOk: true
url: "https://github.com/unjs/exsolve"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 84
forks: 8
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 23
recentReleases: 0
createdAt: "2025-02-24T19:48:35Z"
lastCommitAt: "2026-10-03T09:23:26Z"
lastReleaseAt: "2025-02-26T00:19:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 28
maintainers: ["pi0", "renovate[bot]", "pi0x"]
openGraphImageUrl: "https://opengraph.githubassets.com/b85e157e292ae23cbf228dc47b6c95d719006941d946338ecc43fcaaeef5fbfb/unjs/exsolve"
---

# exsolve

> Module resolution utilities for Node.js (based on previous work in [unjs/mlly](https://github.com/unjs/mlly), [wooorm/import-meta-resolve](https://github.com/wooorm/import-meta-resolve), and the upstream [Node.js](https://github.com/nodejs/node) implementation).

This library exposes an API similar to [`import.meta.resolve`](https://nodejs.org/api/esm.html#importmetaresolvespecifier) based on Node.js's upstream implementation and [resolution algorithm](https://nodejs.org/api/esm.html#esm_resolution_algorithm). It supports all built-in functionalities—import maps, export maps, CJS, and ESM—with some additions:

- Pure JS with no native dependencies (only Node.js is required).
- Built-in resolve [cache](#resolve-cache).
- Throws an error (or [try](#try)) if the resolved path does not exist in the filesystem.
- Can override the default [conditions](#conditions).
- Can resolve [from](#from) one or more parent URLs.
- Can resolve with custom [suffixes](#suffixes).
- Can resolve with custom [extensions](#extensions).

## Usage

Install the package:

```sh
# ✨ Auto-detect (npm, yarn, pnpm, bun, deno)
npx nypm install exsolve
```

Import:

```ts
// ESM import
import {…
