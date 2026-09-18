---
repo: "rosenthall/stryi-chain"
name: "stryi-chain"
description: "blockchain prototype on rust"
readmeQualityOk: true
url: "https://github.com/rosenthall/stryi-chain"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["axum", "blokchain", "ci", "grpc-rust", "libp2p", "p2p", "p2p-network", "rust", "rust-blockchain", "rust-blockchain-development"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-01-15T12:17:21Z"
lastCommitAt: "2026-09-18T08:25:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 43
maintainers: ["rosenthall"]
openGraphImageUrl: "https://opengraph.githubassets.com/19c478980c1d5dbc567f3eacb31a8860d6f2e25ef6811efa9c8f2faeca0b86a1/rosenthall/stryi-chain"
---

# StryiChain

StryiChain is a Rust blockchain prototype built for experiments and learning.

It combines a CPU-oriented Proof-of-Work based on Tor's `HashX` and
`BLAKE3`, `libp2p`+`gRPC` networking, and a CLI wallet for local
testing.

The project is named after the [Stryi River](https://en.wikipedia.org/wiki/Stryi_(river)) in Ukraine.

## Contents

- [Crates structure](#crates-structure)
- [Build](#build)
- [Local Demo](#local-demo)
- [Features](#features)
- [Testing](#testing)
- [Links](#links)

## Showcase

Generate a 20-block demo chain, start a local node, inspect `nodestate`, send a transaction, and watch the chain length
grow.

## Crates structure

- `stryi_core`: core blockchain logic and shared domain types (`Block`, `Transaction`, `AccountAddress`, and more) + tx
  mempool implementation
- `stryi_node`: the node binary implementation, gRPC and http servers, config engine, miner, main event loop,
- `stryi_storage`: storage layer for blocks, UTXOs, transactions. Powered by the [fjall](https://crates.io/crates/fjall)
  db
- `stryi_network`: p2p networking and higher-level protocol glue
- `stryi_devkit`: local development utilities, currently - just a powerful chain…
