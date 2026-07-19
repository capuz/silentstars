---
repo: "javahongxi/jaws"
name: "jaws"
description: "High-performance RPC framework built on Netty 🦈"
originalDescription: "High-performance RPC framework built on Netty 🦈"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/javahongxi/jaws"
homepage: "https://blog.csdn.net/javahongxi"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["rpc", "rpc-framework", "netty", "netty4", "curator", "hessian2", "fastjson2", "nacos", "micrometer-tracing"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2020-05-22T02:15:04Z"
lastCommitAt: "2026-07-19T06:11:52Z"
lastReleaseAt: "2026-05-29T02:32:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 69
maintainers: ["javahongxi"]
openGraphImageUrl: "https://opengraph.githubassets.com/846dd3c776c7802a54f6da4fe594f0889311dc85390d56c31ff14dd691b979d2/javahongxi/jaws"
---

# Jaws Framework 🦈

Jaws is a high-performance RPC framework based on Java 17 and Netty, providing complete microservice communication capabilities such as service registration and discovery, load balancing, and fault tolerance.

## Features

- **Custom Protocol** — Jaws binary protocol based on Netty, supports fastjson2 / hessian2 serialization
- **injvm Protocol** — Direct invocation within the JVM, zero network overhead, suitable for local development and testing
- **Service Registration and Discovery** — ZooKeeper / Nacos registration center, supports heartbeat renewal and failure reconnection
- **Spring Boot Starter** — `@EnableJaws` + `@JawsService` / `@JawsReference` annotations, ready to use
- **Multiple Load Balancing** — random, roundRobin, leastActive, shortestResponse, consistentHash
- **High Availability and Fault Tolerance** — failover (failover switching), failfast (quick failure)
- **SPI Extension** — All core components (Protocol, Cluster, LoadBalance, Filter, Serialization, etc.) are pluggable via SPI
- **Graceful Shutdown** — Four-stage shutdown (stop receiving → wait for in-flight requests → unregister from the registration center → close connections),…
