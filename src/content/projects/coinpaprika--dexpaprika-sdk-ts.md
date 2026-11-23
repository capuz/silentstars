---
repo: "coinpaprika/dexpaprika-sdk-ts"
name: "dexpaprika-sdk-ts"
description: "Official DexPaprika SDK for TypeScript/JavaScript: Real-time DEX data across blockchains with built-in caching and TypeScript support."
readmeQualityOk: true
url: "https://github.com/coinpaprika/dexpaprika-sdk-ts"
homepage: "https://docs.dexpaprika.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["api-client", "blockchain", "crypto", "cryptocurrency", "defi", "dex", "dexpaprika", "javascript", "sdk", "typescript"]
stars: 36
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2025-04-09T08:14:49Z"
lastCommitAt: "2026-11-23T12:22:49Z"
lastReleaseAt: "2026-10-16T08:42:01Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 74
undervaluedScore: 44
maintainers: ["donbagger", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/554dc86373eb73fbdeda909d3f4f965d40bdbc1ae1d8a7a6d1083fdc118a53ab/coinpaprika/dexpaprika-sdk-ts"
---

# DexPaprika SDK

The official JavaScript client library for the [DexPaprika API](https://api.dexpaprika.com), providing easy access to decentralized exchange data across multiple blockchain networks.

Developed and maintained by [Coinpaprika](https://coinpaprika.com).

## Installation

```bash
npm install dexpaprika-sdk
```

## Important: migration notices

**Breaking change, unreleased**: The API removed `GET /networks/{network}/dexes/{dex}/pools` (now HTTP 410). `pools.listByDex()` keeps its arguments but is backed by the unified search endpoint with a `dex_name` filter, so it returns the cursor-paginated shape `{ results, has_next_page, next_cursor }` instead of `{ pools, page_info }`.
