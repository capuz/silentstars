---
repo: "ivanball/MMCA.Common"
name: "MMCA.Common"
description: "MMCA — Modular Monolith Clean Architecture framework for .NET 10.0"
readmeQualityOk: true
url: "https://github.com/ivanball/MMCA.Common"
homepage: "https://ivanball.github.io/platform.html"
language: "C#"
languages: ["C#"]
languagePcts: [97]
topics: ["aspire", "clean-architecture", "cqrs", "csharp", "ddd", "dotnet", "dotnet-10", "modular-monolith"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-03-24T13:51:42Z"
lastCommitAt: "2026-08-30T00:42:14Z"
lastReleaseAt: "2026-07-25T22:07:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 53
maintainers: ["ivanball", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1190658420/bb217571-9505-47a2-be0d-09a44fc14008"
discussionCount: 0
---

# MMCA: Modular Monolith Clean Architecture

A .NET 10 framework for building a modular monolith you can extract services out of later, without a rewrite.

[**Cleavestack**](https://cleavestack.com/) is the commercial home of MMCA: build as one, ship as many.

## Why it exists

Most teams face the same fork: start as a monolith and pay for it when you need to scale a piece of it, or start with microservices and pay for it immediately. MMCA takes the first path and removes the later cost. Modules are discovered and registered in dependency order, each owns its own database and transactional outbox from day one, and application code talks to abstractions (`IMessageBus`, `INavigationPopulator`, repositories) while transport choices stay at the edges. Lifting a module into its own gRPC service changes hosting and configuration, not your handlers.

What comes in the box:

- **DDD + CQRS** with rich aggregates, static factories returning `Result<T>`, and a Scrutor decorator pipeline (feature gate, logging, caching, validation, transactions) that wraps every handler without touching one.
- **The Result railway** instead of exceptions for expected failures, mapped consistently to HTTP…
