---
repo: "cuihairu/croupier"
name: "croupier"
description: "Croupier is a universal GM (Game Master) backend system designed for game operations. It supports integration with multi-language game servers and provides a unified management interface along with powerful extensibility."
readmeQualityOk: true
url: "https://github.com/cuihairu/croupier"
homepage: "https://cuihairu.github.io/croupier/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [55, 29]
topics: ["clickhouse", "game", "game-analytics", "game-backend", "game-telemetry", "golang", "jaeger", "liveops", "logging", "metrics"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 6
createdAt: "2024-07-31T10:19:15Z"
lastCommitAt: "2026-10-09T18:48:27Z"
lastReleaseAt: "2026-06-02T03:06:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 86
maintainers: ["cuihairu"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2e856c1e625e9c8facf64734d3e033cff799f5e88b3fdd3f24a78b0c151f4d1/cuihairu/croupier"
discussionCount: 1
postedAt: "2026-10-04T10:09:15.128Z"
---

[English](https://github.com/cuihairu/croupier/blob/HEAD/README.md) | [中文](https://github.com/cuihairu/croupier/blob/HEAD/README.zh.md)

Croupier is a Server / Agent / SDK platform for game operations and control, intended by default for multiple games and multiple environments within a single game company. The architecture has converged on a unified session transport:

- `Agent <-> Server`: TCP session by default, with TLS enabled by default
- `SDK <-> Agent`: TCP session by default, TLS off by default and enabled on demand
- Both links share the same session transport foundation and differ only in the first handshake message and business semantics

## Online Demo

URL: https://croupier.cuihairu.site/

| Account | Password  |
| ------- | --------- |
| `admin` | `admin123`|

> [Demo environment: all data is fake and is reset from time to time. Do not enter any real information.]

## Highlights

- Single-company, multi-game, multi-environment scope model: the standard business boundary is `gameId + env`
- Separation of business scope and run target: `scope` expresses ownership, `target` expresses deployment and execution location
- Unified function registration, dispatch,…
