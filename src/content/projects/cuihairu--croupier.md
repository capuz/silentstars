---
repo: "cuihairu/croupier"
name: "croupier"
description: "Croupier is a Server / Agent / SDK platform for game operations and control, designed for multiple games and multiple environments within a single game company."
readmeQualityOk: true
url: "https://github.com/cuihairu/croupier"
homepage: "https://cuihairu.github.io/croupier/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [55, 29]
topics: ["clickhouse", "game", "game-analytics", "game-backend", "game-telemetry", "golang", "jaeger", "liveops", "logging", "metrics"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 6
createdAt: "2024-07-31T10:19:15Z"
lastCommitAt: "2026-10-13T10:34:33Z"
lastReleaseAt: "2026-06-02T03:06:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 85
maintainers: ["cuihairu"]
openGraphImageUrl: "https://opengraph.githubassets.com/6dc79386612feb3958d96c034c69f0cc13b0a7cb10f6d0a8d8836542778e6652/cuihairu/croupier"
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
