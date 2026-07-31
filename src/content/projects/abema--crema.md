---
repo: "abema/crema"
name: "crema"
description: "A Go cache library with probabilistic revalidation and singleflight loading"
readmeQualityOk: true
url: "https://github.com/abema/crema"
homepage: "https://pkg.go.dev/github.com/abema/crema"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["cache", "go", "golang", "golang-lru", "memcached", "redis", "ristretto", "valkey"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-01-13T04:35:25Z"
lastCommitAt: "2026-07-31T06:29:47Z"
lastReleaseAt: "2026-01-30T23:20:07Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 49
maintainers: ["kurochan", "dependabot[bot]", "hono0130"]
openGraphImageUrl: "https://opengraph.githubassets.com/328ff5301ae81e95cb340823b0591f5dff5c47d1126be99d15c462fb052ddbc6/abema/crema"
discussionCount: 0
---

# crema ☕️

A Go cache library with probabilistic revalidation and optional singleflight
loading. It smooths refreshes near TTL expiry while deduplicating concurrent
loads.

</p>

## Features

- Smooth probabilistic revalidation near expiry
- Built-in singleflight loader (can be disabled)
- Zero external dependencies in the core module
- Pluggable storage (`CacheProvider`) and storage codecs (`CacheStorageCodec`)

Core functionality is covered by a high level of automated tests.

## Revalidation Algorithm

Within the revalidation window, the cache reloads with probability

```math
p(t)=1-e^{-k(w-t)}
```

where `t` is the remaining time and `w` the configured revalidation window. The
steepness `k` is set so that $`p(0)=0.999`$, so the probability is $`0`$ when an
entry enters the window and approaches $`0.999`$ as expiry nears. This avoids a
fixed refresh point and helps smooth spikes near expiry.

How widely reloads actually spread depends on how often the key is requested:
because the probability is drawn per request, frequently requested keys tend to
reload earlier in the window than rarely requested ones.

This design is inspired by the following references:

- [Cache Stampede:…
