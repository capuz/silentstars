---
repo: "Ahoo-Wang/CoSky"
name: "CoSky"
description: "High-performance, low-cost microservice governance platform. Service Discovery and Configuration Service | 高性能、低成本微服务治理平台"
readmeQualityOk: true
url: "https://github.com/Ahoo-Wang/CoSky"
homepage: "https://cosky.ahoo.me/"
language: "Kotlin"
languages: ["Kotlin", "TypeScript"]
languagePcts: [66, 31]
topics: ["microservice", "configuration-management", "configuration", "service-discovery", "service-registry", "redis", "spring-cloud-config", "spring-cloud", "cloud", "native"]
stars: 95
forks: 19
openIssues: 4
closedIssues: 86
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2021-04-22T15:59:29Z"
lastCommitAt: "2026-11-07T22:50:40Z"
lastReleaseAt: "2021-05-15T12:48:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 50
maintainers: ["Ahoo-Wang", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/70dae57ee7b94adceda4bb4ed79b13cf8dce0aac91e715ecf0a436b51b862a43/Ahoo-Wang/CoSky"
---

# [CoSky](https://github.com/Ahoo-Wang/CoSky): Configuration and Service Discovery

> **[Documentation](https://cosky.ahoo.me/)** | [中文文档](https://cosky.ahoo.me/zh/) | [中文 README](https://github.com/Ahoo-Wang/CoSky/blob/HEAD/README.zh-CN.md)

> [!IMPORTANT]
> **8.0 is in alpha.** `8.0.0-alpha.4` is a preview with no compatibility promise: its API, wire format and Redis keys may still change, so don't run it for real yet. The stable release is 6.x, and `ahoowang/cosky:latest` is still 6.x. It is maintained on the [`v6`](https://github.com/Ahoo-Wang/CoSky/tree/v6) branch, which takes bug fixes only, and its documentation is in that branch's [`wiki/`](https://github.com/Ahoo-Wang/CoSky/tree/v6/wiki/guide).

CoSky provides **configuration management** and **service discovery** for microservices. A small server sits in front of **Redis**, and applications talk only to that server.

- **Reads from memory.** Each application keeps a local view that a Watch stream keeps current, so reading a Config or choosing an instance costs no network round trip.
- **Keeps working through failures.** Clients serve what they know when the server is away, and restart from a snapshot on disk. A mass…
