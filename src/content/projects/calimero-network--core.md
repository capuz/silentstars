---
repo: "calimero-network/core"
name: "core"
description: "Calimero - Peer-to-peer application platform with local-first governance, CRDT state sync, and WASM execution."
url: "https://github.com/calimero-network/core"
homepage: "https://calimero-network.github.io/core/"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 165
forks: 36
openIssues: 78
closedIssues: 624
watchers: 2
contributors: 29
recentReleases: 0
createdAt: "2024-01-22T13:55:34Z"
lastCommitAt: "2026-06-29T07:23:34Z"
lastReleaseAt: "2025-08-11T16:35:37Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 45
maintainers: ["chefsale", "meroreviewer[bot]", "rtb-12"]
openGraphImageUrl: "https://opengraph.githubassets.com/692ef7f6c1b1ab4332052e3bd2d794514fe74e9d3063d540d3b06388473442f1/calimero-network/core"
discussionCount: 6
---

# Calimero Core

Peer-to-peer application platform with local-first governance, CRDT state sync, and WASM execution.

> **Full documentation**: <https://calimero-network.github.io/core/> — organized into four tracks: **Build** (write apps), **Operate** (run nodes), **Protocol Reference** (reimplement / understand the model), and **Contribute** (work on core).

## Components

| Crate | Description |
|-------|-------------|
| **calimero-node** | NodeManager actor -- orchestrates network events, sync, blobs |
| **calimero-context** | ContextManager actor -- contexts, groups, governance DAGs |
| **calimero-network** | NetworkManager actor -- libp2p swarm, gossipsub, streams |
| **calimero-store** | Column-family KV abstraction over RocksDB |
| **calimero-runtime** | Wasmer WASM execution engine with 50+ host functions |
| **calimero-server** | Axum HTTP server -- REST, JSON-RPC, WS, SSE |
| **calimero-sdk** | App development SDK with proc macros |
| **mero-auth** | JWT auth service with pluggable providers |
| **calimero-dag** | Generic in-memory causal DAG |
| **calimero-storage** | CRDT collections and storage interface |
| **merod** | Node daemon (init, config, run) |
| **meroctl**…
