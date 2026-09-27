---
repo: "nasa-runtime/nasa-runtime-rust"
name: "nasa-runtime-rust"
description: "NASA backend Rust runtime component library. Business combines features through the nasa facade package: Web/gRPC, Mapper, transactions, caching, Redis, Kafka, WebSocket, configuration, service discovery, scheduling, circuit breaker, monitoring and degradation, telemetry, logging, encryption and key management, OAuth/authorization/audit, idempotency, Outbox/Inbox and basic tools."
originalDescription: "Nasa 服务端 Rust 运行时组件库,业务以 nasa 门面包按特性组合:Web/gRPC、Mapper、事务、缓存、Redis、Kafka、WebSocket、配置、服务发现、调度、熔断、监控降级、遥测、日志、加密与密钥、OAuth/授权/审计、幂等、Outbox/Inbox 及基础工具。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/nasa-runtime/nasa-runtime-rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-18T14:17:32Z"
lastCommitAt: "2026-09-27T09:28:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 46
maintainers: ["Nasa666999"]
openGraphImageUrl: "https://opengraph.githubassets.com/46efd9b1da404ca36237bdcd7f0129146e8fb79a12eb5c19bc2d4dd934a25dff/nasa-runtime/nasa-runtime-rust"
---

# nasa-runtime-rust

NASA Rust shared library is a set of infrastructure packages combined by features.
**The sole entry point for businesses is the facade package `nasa`**: business projects only depend on `nasa`, then optionally enable features such as Saga, mapping, transactions, caching, Redis, RedisJob, cross-replica business quota, WebSocket, configuration, service discovery, etc.
The remaining members are used for implementation and macro expansion; business projects are not recommended to directly depend on them by default.
Application simultaneously provides a business initialization barrier before Ready and ordered asynchronous cleanup before business resources are closed; business does not need to separately set up signal handling or shutdown callback collections.
Redis partitioned consumption separates persistent takeover from local execution: different Redis sources always use independent Runners, same source can be divided by `source`, `group`, `stream` for scheduling and capacity; business key order overrides handler, ACK and precise retry.
Reliable Saga client places business facts and initiation intent in the same database transaction, and lets the dispatcher…
