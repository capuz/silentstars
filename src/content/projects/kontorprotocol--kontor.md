---
repo: "KontorProtocol/Kontor"
name: "Kontor"
description: "Kontor Protocol indexer"
readmeQualityOk: true
url: "https://github.com/KontorProtocol/Kontor"
homepage: "https://kontor.network"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
stars: 7
forks: 2
openIssues: 11
closedIssues: 52
watchers: 2
contributors: 7
recentReleases: 1
createdAt: "2025-02-26T15:26:58Z"
lastCommitAt: "2026-10-27T09:17:04Z"
lastReleaseAt: "2026-10-17T03:50:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 83
maintainers: ["wilfreddenton", "adamkrellenstein", "ouziel-slama"]
openGraphImageUrl: "https://opengraph.githubassets.com/091f244b8d13bab299597672373d87361c1189f99610ece0517f6b233c482d62/KontorProtocol/Kontor"
---

# Kontor

> **⚠️ WARNING: This code is experimental and pre-release. Use at your own risk.**

This repo contains the indexer for the [Kontor Protocol](https://docs.kontor.network/), comprised of:

- **Bitcoin follower**: Reconciles streams of block data from Bitcoin's ZMQ socket and RPC API.
- **Bitcoin block parser**: Extracts Kontor `Inst`ructions from Bitcoin transactions and converts them into `Op`erations.
- **Reactor (event loop)**: Synchronizes `Op`erations and handles them.
- **WASM Component Model-based Runtime**: Deterministically runs `Call` `Op`erations on smart-contract WASM components.
- **HTTP API**: Exposes indexer data, supports "view" (read-only contract call) functionality, and provides endpoints for the composition of Bitcoin transactions with embedded Kontor `Inst`ructions.
- **WebSocket API**: Emits contract call results enabling applications to build and maintain their own derived state by reacting to incremental updates and deliver a real-time experience to end-users.

## Workspaces

### `core`

- `indexer`: Builds into the `kontor` binary, the primary executable for the Kontor Protocol.
- `stdlib` and `testlib`: Crates used when developing contracts.
-…
