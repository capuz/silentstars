---
repo: "easynet-cn/batata"
name: "batata"
description: "Batata is a high-performance, Rust-based service discovery and configuration management platform for cloud-native applications. It provides full API compatibility with Nacos V2/V3 and Consul, serving as a production-ready drop-in replacement"
readmeQualityOk: true
url: "https://github.com/easynet-cn/batata"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["async", "cloud-native", "configuration-management", "encryption", "high-performance", "kubernetes", "load-balancing", "microservices", "multi-tenant", "observability"]
stars: 29
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-11-29T05:52:15Z"
lastCommitAt: "2026-11-15T08:18:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 53
maintainers: ["easynet-cn"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fcff0fddc19377b6e3ea882503d445dfb255b80f149fb7d2bc23116b0b05186/easynet-cn/batata"
---

# Batata

**Batata** is a high-performance service discovery, configuration management and
service management platform written in Rust. It is a drop-in replacement for
[Nacos](https://nacos.io/) (V2/V3), with additional compatibility for
[Consul](https://www.consul.io/) and [Apollo](https://github.com/apolloconfig/apollo).

[中文文档](https://github.com/easynet-cn/batata/blob/HEAD/README_CN.md)

## Why Batata

- **Rust-native** — starts in ~1-2s and runs in ~50-100MB, versus 30-60s and 1-2GB for Java Nacos
- **Drop-in compatible** — Nacos V2/V3 APIs, plus Consul and Apollo compatibility layers
- **Zero-dependency start** — embedded RocksDB mode needs no external database
- **Production ready** — implements ~98% of Nacos features; Raft-based clustering, RBAC, rate limiting

## Features

**Core**

- Configuration management with real-time updates, history/rollback, gray release
- Service discovery with registration, health checks, subscribe/push
- Namespace isolation for multi-tenancy
- Cluster mode with Raft consensus (CP) and distro protocol (AP)

**Protocol compatibility**

- **Nacos** — full V2 and V3 API compatibility (V1 intentionally unsupported)
- **Consul** — Agent, Health,…
