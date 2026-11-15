---
repo: "thednp/dommatrix"
name: "dommatrix"
description: "A Typescript sourced DOMMatrix shim for Node.js apps and legacy browsers."
readmeQualityOk: true
url: "https://github.com/thednp/dommatrix"
homepage: "https://thednp.github.io/dommatrix"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["dommatrix", "shim", "legacy-browsers", "nodejs", "javascript", "polyfill", "cssmatrix", "3d-matrix", "dommatrix-shim", "typescript"]
stars: 26
forks: 2
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-09-10T21:01:27Z"
lastCommitAt: "2026-11-15T11:18:23Z"
lastReleaseAt: "2026-08-03T22:05:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 75
undervaluedScore: 40
maintainers: ["thednp"]
openGraphImageUrl: "https://opengraph.githubassets.com/e004dac9a2e9f507bef9f1223fac244da68eafce93a60033eb049f9cb9bafec0/thednp/dommatrix"
fundingLinks: ["GITHUB:https://github.com/thednp"]
---

# @thednp/dommatrix

A TypeScript sourced [DOMMatrix](https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix) shim for **Node.js** apps and legacy browsers.

## Table of Contents

- [Features](#features)
- [Benchmarks](#benchmarks)
- [Demo](#demo)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
- [CSSMatrix vs native DOMMatrix](#cssmatrix-vs-native-dommatrix)
- [Alternatives](#alternatives)
- [History](#history)
- [Thanks](#thanks)
- [License](#license)

## Features

- **Zero runtime dependencies** — the entire library is a single file
- **Node.js compatible** — no `DOMMatrix` / `DOMPoint` globals required, works in legacy browsers too
- **Full transform string parsing** — `matrix()`, `matrix3d()`, `translate*()`, `rotate*()`, `rotate3d()`, `scale*()`, `skew*()`, `perspective()` with `deg` / `grad` / `rad` / `turn` / `px` units, via `fromString()` or the constructor
- **2D & 3D** — the `m11`-`m44` / `a`-`f` properties, `matrix()` / `matrix3d()` string output
- **Immutable and mutable APIs** — `translate()` returns a new matrix, `translateSelf()` mutates in place, same as native `DOMMatrix`
- **TypeScript** — bundled type…
