---
repo: "orca-zhang/ecache"
name: "ecache"
description: "🦄【Lightweight local in-memory cache】🤏Under 300 lines of code ⌚️Integrate in 30s 🚀High performance, minimalist design, concurrency-safe 🌈Supports LRU and LRU-2 modes 🦖Supports distributed consistency [ecache] Extremely easy, ultra fast, concurrency-safe and support distributed consistency. Similar to bigcache, cachego, freecache, gcache, gocache, groupcache, lrucache."
originalDescription: "🦄【轻量级本地内存缓存】🤏代码少于300行⌚️30s接入🚀高性能、极简设计、并发安全🌈支持LRU 和 LRU-2模式 🦖支持分布式一致性 [ecache] Extremely easy, ultra fast, concurrency-safe and support distributed consistency. Similar to bigcache, cachego, freecache, gcache, gocache, groupcache, lrucache."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/orca-zhang/ecache"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["lru-cache", "golang", "go", "cache", "bigcache", "freecache", "cachego", "gcache", "groupcache", "gocache"]
stars: 264
forks: 29
openIssues: 6
closedIssues: 3
watchers: 7
contributors: 2
recentReleases: 0
createdAt: "2021-12-19T04:55:20Z"
lastCommitAt: "2026-11-13T11:23:44Z"
lastReleaseAt: "2025-05-28T03:39:19Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 16
maintainers: ["orca-zhang"]
openGraphImageUrl: "https://opengraph.githubassets.com/68f283f7e07709ce00fe928fe587f1e708c747da26651ddf8f593dd147fb0232/orca-zhang/ecache"
discussionCount: 3
---

[English README | 英文说明](https://github.com/orca-zhang/ecache/blob/HEAD/README_en.md)

# 🦄 ecache

## Features

- 🤏 Under 300 lines of code, integrate in 30s
- 🚀 High performance, minimalist design, concurrency-safe
- 🌈 Supports two modes: `LRU` and [`LRU-2`](#LRU-2模式)
- 🦖 Additional [small components](#分布式一致性组件) for distributed consistency

## Benchmark Performance

> :snail: means very slow, :airplane: means fast, :rocket: means very fast

> [👁️‍🗨️Click to see test cases](https://github.com/benchplus/gocache) [👁️‍🗨️Click to see results](https://benchplus.github.io/gocache/dev/bench/) (for cache hit rate, lower values are better)

> GC pause test results [code provided by `bigcache`](https://github.com/allegro/bigcache-bench) (lower values are better)

### Currently being validated under high traffic in production
- [`Verified`] WeChat official account backend (several hundred QPS): user info, order info, configuration info
- [`Verified`] Push system (tens of thousands of QPS): adjustable system configuration, message deduplication, fixed info caching
- [`Verified`] Comment system (tens of thousands of QPS): user info, distributed consistency component

## How to Use…
