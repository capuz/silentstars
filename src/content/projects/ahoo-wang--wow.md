---
repo: "Ahoo-Wang/Wow"
name: "Wow"
description: "Modern Reactive CQRS Architecture Microservice development framework based on DDD and EventSourcing | 基于 DDD & EventSourcing 的现代响应式 CQRS 架构微服务开发框架"
readmeQualityOk: true
url: "https://github.com/Ahoo-Wang/Wow"
homepage: "https://wow.ahoo.me/"
language: "TypeScript"
languages: ["TypeScript", "Kotlin"]
languagePcts: [53, 45]
topics: ["cqrs", "domain-driven-design", "event-driven", "event-sourcing", "microservice", "reactive-programming", "high-performance", "ddd", "architecture", "elasticsearch"]
stars: 304
forks: 38
openIssues: 9
closedIssues: 31
watchers: 7
contributors: 8
recentReleases: 0
createdAt: "2023-04-15T05:28:03Z"
lastCommitAt: "2026-10-21T23:36:13Z"
lastReleaseAt: "2023-05-18T12:47:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 39
maintainers: ["Ahoo-Wang"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/628167080/2f05799f-f51b-4c72-b04c-6d02a0d03f4b"
---

> **Wow 10.0 is in pre-release on this branch.** The stable 9.x line lives on the [`v9`](https://github.com/Ahoo-Wang/Wow/tree/v9) branch, and its documentation at [wow.ahoo.me](https://wow.ahoo.me/).

---

## What Wow Gives You

Wow turns each write into an observable domain flow:

```text
HTTP command → aggregate decision → domain event → sourced state → projection / saga
```

You define commands, events, aggregate rules, and sourcing handlers. Wow supplies the reactive command pipeline, event persistence, snapshots, wait stages, projections, sagas, generated metadata, WebFlux routes, and a Given → When → Expect test DSL.

This is most useful when business rules, state history, multiple read models, or cross-aggregate workflows justify Event Sourcing. For simple CRUD where one database transaction already expresses the whole problem, the added event-evolution and eventual-consistency costs may not pay off.

## 30-Minute First-Slice Target

1. Create or clone the [Wow Project Template](https://github.com/Ahoo-Wang/wow-project-template).
2. Run `./gradlew :domain:check`, then start `./gradlew :server:run` with the documented in-memory configuration.
3. Follow the [Quick…
