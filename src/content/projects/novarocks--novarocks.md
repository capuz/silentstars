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
lastCommitAt: "2026-09-21T09:14:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 47
maintainers: ["HangyuanLiu"]
openGraphImageUrl: "https://opengraph.githubassets.com/49cf7385a91c881976932d6a2b0629c3fa7f5b07d97688a5550cd891840d2b96/NovaRocks/NovaRocks"
---

# NovaRocks

NovaRocks is a Rust-native analytical query engine. Its production runtime is
the native NovaRocks FE/BE role model; one binary starts a `fe`, `be`, or
`all-in-one` role through the `standalone` command.

- `fe` owns the MySQL SQL entrypoint, planning, and distributed coordination.
- `be` owns local fragment execution and the native gRPC boundary.
- `all-in-one` is a test and local-development convenience. It keeps the FE/BE
  application boundary rather than adding a direct-call shortcut.

The binary's sealed active Connector providers are Iceberg and Paimon. Iceberg
supports the existing read/write surface; Paimon currently supports bounded
snapshot reads for append-only and `deduplicate` primary-key tables. The
StarRocks connector source is retained only as retired reference code: it has no
active read capability, and Server rejects legacy `[connector.starrocks]`
configuration.

NovaRocks is still experimental and is not production-ready. It is useful for
iterating on distributed execution, connector, Iceberg, and Paimon semantics and for
running local SQL experiments on macOS/Linux.

## Current Scope

Implemented or actively exercised areas include:

- Native…
