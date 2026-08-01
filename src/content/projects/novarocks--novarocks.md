---
repo: "NovaRocks/NovaRocks"
name: "NovaRocks"
description: "NovaRocks is a Rust-based compute engine project under the StarRocks ecosystem.  It is currently an independent project and keeps FE protocol compatibility through a C++ shim layer, with execution semantics implemented in Rust. At this stage, the repository is intended for learning and experimentation, not production use."
readmeQualityOk: true
url: "https://github.com/NovaRocks/NovaRocks"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["starrocks"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-02-24T05:40:20Z"
lastCommitAt: "2026-08-01T06:14:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 44
maintainers: ["HangyuanLiu"]
openGraphImageUrl: "https://opengraph.githubassets.com/25f04d47402ce8739c8f5d480d72bf7655d853e8f8cb4bab4fd61882f1290674/NovaRocks/NovaRocks"
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
   - `standalone` exposes a MySQL-compatible endpoint for SQL clients and
     SQL regression tests.
   - The standalone engine has its own SQL catalog/session layer and external
     Iceberg catalog registry. It does not own a native internal table type.

NovaRocks is still experimental and is not production-ready. It is useful for
learning StarRocks-style execution internals, iterating on connector and
Iceberg semantics, and running local SQL
experiments on macOS/Linux without maintaining a full StarRocks FE/BE cluster.…
