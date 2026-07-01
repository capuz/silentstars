---
repo: "NovaRocks/NovaRocks"
name: "NovaRocks"
description: "NovaRocks is a Rust-based compute engine project under the StarRocks ecosystem.  It is currently an independent project and keeps FE protocol compatibility through a C++ shim layer, with execution semantics implemented in Rust. At this stage, the repository is intended for learning and experimentation, not production use."
url: "https://github.com/NovaRocks/NovaRocks"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["starrocks"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-02-24T05:40:20Z"
lastCommitAt: "2026-07-01T07:06:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 44
maintainers: ["HangyuanLiu"]
openGraphImageUrl: "https://opengraph.githubassets.com/d88abe13dbb5219ac8550571ffdca2c16003683a8c0659b8fc4f776831a5ebef/NovaRocks/NovaRocks"
---

# NovaRocks

NovaRocks is a Rust-native analytical query engine that started as a
StarRocks BE-compatible runtime and has evolved into a system that can also run
independently without StarRocks FE.

The project currently has two first-class execution modes:

1. **StarRocks-compatible backend mode**
   - StarRocks FE keeps producing plans and talking through FE-compatible
     heartbeat, backend thrift, and brpc/internal-service protocols.
   - A C++ shim handles brpc compatibility; Rust owns plan lowering, execution,
     exchange, connectors, and result handling.

2. **Standalone SQL engine mode**
   - NovaRocks can parse and execute SQL without StarRocks FE.
   - `standalone-server` exposes a MySQL-compatible endpoint for SQL clients and
     SQL regression tests.
   - The standalone engine has its own in-process catalog, Iceberg catalog
     registry, managed-lake metadata store, and connector-backed DDL/DML flows.

NovaRocks is still experimental and is not production-ready. It is useful for
learning StarRocks-style execution internals, iterating on connector and
Iceberg semantics, testing managed-lake behavior, and running local SQL
experiments on macOS/Linux without…
