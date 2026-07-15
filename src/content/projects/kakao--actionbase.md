---
repo: "kakao/actionbase"
name: "actionbase"
description: "One database for user-user (follows), user-item (likes), and item-item (related items) interactions — precomputed, served in real-time"
readmeQualityOk: true
url: "https://github.com/kakao/actionbase"
homepage: "https://actionbase.io"
language: "Kotlin"
languages: ["Kotlin", "Java"]
languagePcts: [62, 31]
topics: ["database", "low-latency", "real-time", "graphdb", "high-throughput", "oltp", "scalability"]
stars: 222
forks: 15
openIssues: 24
closedIssues: 71
watchers: 2
contributors: 22
recentReleases: 5
createdAt: "2025-11-11T01:36:04Z"
lastCommitAt: "2026-07-15T05:54:27Z"
lastReleaseAt: "2026-05-07T06:21:40Z"
status: "thriving"
tags: ["needs_contributors", "release_machine"]
healthScore: 92
undervaluedScore: 36
maintainers: ["em3s", "zipdoki", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fcc556f0dc9909ff224085bedb8ad2b19c69f9a0c138172d92c1a1f3e3c3a6a/kakao/actionbase"
---

# Actionbase

**One database for user–user, user–item, and item–item interactions — precomputed at write time, served as simple lookups.**<br />
**1M+ req/min in production at Kakao. Built on HBase.**

[Documentation](https://actionbase.io) · [Open-sourced](https://actionbase.io/blog/open-source-announcement/) · [Why we built this](https://github.com/kakao/actionbase/issues/358) · [Production stories](https://actionbase.io/stories/kakaotalk-gift-wish/)

## Why Actionbase

Follows, likes, recent views, related content — they are all **interaction data**. They look simple, but at scale, real-time counts, toggle consistency, and ordered relationship reads turn into bottlenecks, and teams end up rebuilding caches, indexes, and dual-write pipelines from scratch every time.

Actionbase consolidates these into **one database for interactions**. Every interaction is expressed in the same model — *source → action → target* — and the combination of source and target naturally yields three axes:

- **User–User (U2U)** — follow/unfollow, follower/following counts, timeline scans
- **User–Item (U2I)** — likes/bookmarks, view history, bidirectional counters
- **Item–Item (I2I)** — related…
