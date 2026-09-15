---
repo: "subsquid/sqd-network"
name: "sqd-network"
description: "SQD Network: libp2p peer-to-peer network of worker, gateway and scheduler nodes serving a decentralized blockchain data lake."
readmeQualityOk: true
url: "https://github.com/subsquid/sqd-network"
homepage: "https://sqd.dev/network"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["blockchain", "data-lake", "decentralized", "depin", "indexer", "libp2p", "p2p", "rust", "sqd", "web3"]
stars: 13
forks: 3
openIssues: 8
closedIssues: 104
watchers: 6
contributors: 12
recentReleases: 0
createdAt: "2022-07-23T10:26:35Z"
lastCommitAt: "2026-09-15T08:55:24Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 60
maintainers: ["kalabukdima", "define-null", "toschoosqd"]
openGraphImageUrl: "https://opengraph.githubassets.com/6801c71078099541fef0fea600ea0cfc66289ce93a4af73a9acf6e15d38d365d/subsquid/sqd-network"
---

# SQD Network

Rust implementation of the peer-to-peer layer of SQD Network, the decentralized
data lake behind [SQD](https://sqd.dev). Nodes communicate over
[libp2p](https://github.com/libp2p/rust-libp2p), exchanging queries, query
results, heartbeats, and logs. For the network design, see the
[network architecture wiki](https://github.com/subsquid/subsquid-network-contracts/wiki/Network-architecture)
and the [SQD Network docs](https://docs.sqd.dev/en/network).

## How it fits into SQD

SQD Network stores blockchain data as chunks distributed across worker nodes.
A scheduler assigns chunks to workers; portals route client queries to the
workers that hold the relevant data and collect the results. SQD Portal, the
data API over 200+ chains, is built on top of this network. This repository
provides the transport protocol, message formats, and a few supporting node
binaries used by those actors.

## Node roles

The transport layer exposes APIs for the predefined actors on the network:

- **Worker**: holds data chunks and answers queries routed to it.
- **Scheduler**: assigns chunks to workers based on collected heartbeats and
  distributes the assignments.
- **Portal**: entry point…
