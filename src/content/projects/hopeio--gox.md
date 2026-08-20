---
repo: "hopeio/gox"
name: "gox"
description: "Extensions to the standard library"
readmeQualityOk: true
url: "https://github.com/hopeio/gox"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2024-07-18T02:43:03Z"
lastCommitAt: "2026-08-20T04:09:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 68
maintainers: ["liov"]
openGraphImageUrl: "https://opengraph.githubassets.com/38dc3d14c4c83a02e8e1b0c0aec7985c35548847e32653353be55b60fefead63/hopeio/gox"
---

# gox

[中文文档](https://github.com/hopeio/gox/blob/HEAD/README.zh-CN.md)

```bash
go get github.com/hopeio/gox@latest
```

A modular Go library of production-ready building blocks. Every top-level folder is its own package — pull in a task engine, an ID generator, an HTTP client, or a zero-copy string helper without dragging the rest.

## Why it exists

The Go standard library is excellent and incomplete for day-to-day services. Teams re-implement the same pieces: worker pools with backpressure, Snowflake IDs, JSON that can swap backends, LRU caches, GORM pagination, fluent HTTP clients, zap logging, flag+env binding.

**gox** collects those pieces as independent packages with familiar, stdlib-like APIs.

## What you can do

| Need | Package | Capability |
|------|---------|------------|
| Run many jobs safely | `scheduler` | Generic `Engine[KEY]`: workers, priority, child tasks, rate limits, pending queue backpressure |
| Generate IDs | `idgen` | Snowflake (`Generate`), UniqueID, Base32/58/62/64 |
| Faster / swap JSON | `encoding/json` | Same API; `-tags sonic` or `-tags go_json` |
| Avoid copies | `strings`, `unsafe` | `ToBytes` / `FromBytes`, `Cast` / `CastSlice` |
| Call HTTP…
