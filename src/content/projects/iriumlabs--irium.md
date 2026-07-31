---
repo: "iriumlabs/irium"
name: "irium"
description: "Irium blockchain node — full-node Rust implementation with settlement, proof automation, and decentralized commerce"
readmeQualityOk: true
url: "https://github.com/iriumlabs/irium"
homepage: "https://iriumlabs.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["blockchain", "crypto-miner", "cryptocurrency", "decentralized", "mining", "p2p-network", "proof-of-work", "rust", "sha256", "sha256d"]
stars: 9
forks: 3
openIssues: 3
closedIssues: 30
watchers: 3
contributors: 4
recentReleases: 9
createdAt: "2025-10-09T12:28:23Z"
lastCommitAt: "2026-07-31T06:30:18Z"
lastReleaseAt: "2026-05-04T04:48:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 75
maintainers: ["bisu40"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ddc8fea46b346d2dcfa036a2003ee749a93ac3c3c996692144591ce62bed0a5/iriumlabs/irium"
discussionCount: 10
---

# Irium (IRM)

**Settlement-first SHA-256d proof-of-work blockchain for trustless commerce.**

---

## The easiest way to run Irium

**Download the Irium Core desktop app:** [https://github.com/iriumlabs/irium-core/releases/latest](https://github.com/iriumlabs/irium-core/releases/latest)

Bundles `iriumd`, `irium-wallet`, and the CPU/GPU miners. Builds for Windows, macOS, and Linux. Handles wallet creation, marketplace, pool mining, settlement, and explorer in one window. No terminal required.

Use the command-line tooling below if you need a server install, automation, or want to build from source.

---

## Important — block 23,500 hard fork (Fix 2a)

The chain activates Bitcoin-standard block-header serialization at **block 23,500**. **Every node must run iriumd v1.9.28 or newer before block 23,500 is mined.** Older nodes will compute the wrong header hash for post-fork blocks and fork off from the canonical chain. Mainnet tip is currently ~22,500; activation is days away at the current cadence.

The desktop app's auto-update prompt will surface the same warning. Server / pool / ASIC operators should `git pull && cargo build --release` (or pull the v1.9.28 release binary) and…
