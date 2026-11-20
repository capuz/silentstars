---
repo: "javahongxi/jaws"
name: "jaws"
description: "Lightweight RPC framework with 140K QPS over TCP, a single port that adaptively serves bare TCP / HTTP/2 / HTTP/1.1, and a self-developed Wire protocol interoperable with gRPC"
originalDescription: "轻量级 RPC 框架，TCP 协议 14 万 QPS，单端口自适应裸 TCP / HTTP/2 / HTTP/1.1，自研 Wire 协议与 gRPC 互通"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/javahongxi/jaws"
homepage: "https://blog.csdn.net/javahongxi"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["rpc", "netty", "netty4", "hessian2", "fastjson2", "nacos", "http2", "java", "microservices", "dubbo"]
stars: 17
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-05-22T02:15:04Z"
lastCommitAt: "2026-11-20T11:59:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 76
undervaluedScore: 64
maintainers: ["javahongxi"]
openGraphImageUrl: "https://opengraph.githubassets.com/853f0727616bd6fc55183dc0f7cc5b136937a903700e8a60a3eaaecad7444cca/javahongxi/jaws"
---

# Jaws Framework 🦈

> Named after *Jaws* (《大白鲨》) — **J**ava **A**sync **W**ire **S**ervice: the Java ecosystem, asynchronous invocation, wire-level protocol, and service governance. These four words are exactly the four-layer anatomy of an RPC framework.

Jaws is a lightweight RPC framework with a **core of over 30,000 lines that you can read from start to finish**. At about 1/7 the code size of Dubbo's core skeleton, it fully implements the core mechanisms of an industrial-grade RPC. It supports Netty TCP and HTTP/2 multi-transport, peer-level interoperability with the gRPC wire format, three streaming call types, adaptive load balancing, and high-availability fault tolerance. Measured performance is about 140K QPS. The goal is to become a **benchmark for RPC skeletons**: after reading the Jaws source, reading Dubbo will be much faster.
