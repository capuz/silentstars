---
repo: "danielroe/fnv1a-64"
name: "fnv1a-64"
description: "Tiny, fast, dependency-free 64-bit FNV-1a string hash for Node and the browser."
readmeQualityOk: true
url: "https://github.com/danielroe/fnv1a-64"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [74, 26]
topics: ["64-bit", "fnv", "fnv-1a", "fnv1a", "hash", "non-cryptographic"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-15T10:23:40Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2026-07-27T21:14:18Z"
status: "thriving"
tags: ["funded"]
healthScore: 72
undervaluedScore: 20
maintainers: ["renovate[bot]", "danielroe", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/danielroe/fnv1a-64"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# fnv1a-64

> Tiny, fast, dependency-free 64-bit [FNV-1a](http://www.isthe.com/chongo/tech/comp/fnv/) string hash for Node and the browser.

The core computes a true 64-bit hash in two 32-bit lanes with plain JS numbers. It's ~320B gzipped (minified) and hashes a short key in ~36ns.

> [!IMPORTANT]
>
> FNV-1a is a fast, **non-cryptographic** hash. It's useful for hash tables, cache keys, checksums, and bucketing, but do not use it for anything security-sensitive: it is not collision-resistant against an adversary and offers no preimage resistance.

## Why

I created this for [Nuxt](https://github.com/nuxt/nuxt) due to particular constraints (fast, small, browser-use, no collisions), but you should consider using one of these other packages if you don't have the same constraints I did:

| Package | Width | Gzip | Notes |
| --- | --- | --- | --- |
| `fnv1a`, `object-code` | 32-bit | tiny | collides at ~50k distinct keys |
| [`fnv1a52`](https://github.com/SukkaW/fnv1a52) | 52-bit | tiny | faster than this package; fits in a JS `number` |
| `@sindresorhus/fnv1a` | 64-bit | ~1KB | BigInt, ~20x slower |
| `fnv-lite` | 128-bit | ~1.4KB | byte arrays, ~40x slower |
| `fnv-plus` | multi |…
