---
repo: "ZcashFoundation/zinder"
name: "zinder"
description: "A service-oriented Zcash indexer in Rust. Native WalletQuery gRPC API plus drop-in lightwalletd compatibility, one writer to canonical RocksDB, independently scalable read planes."
readmeQualityOk: true
url: "https://github.com/ZcashFoundation/zinder"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["blockchain", "grpc", "indexer", "rocksdb", "rust", "wallet", "zcash", "zebra", "lightwalletd"]
stars: 5
forks: 1
openIssues: 26
closedIssues: 28
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-04-28T21:33:28Z"
lastCommitAt: "2026-11-14T22:04:05Z"
lastReleaseAt: "2026-11-14T17:37:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 84
undervaluedScore: 54
maintainers: ["gustavovalverde"]
openGraphImageUrl: "https://opengraph.githubassets.com/88e291872f33d3c1783a0eb8b0b565a8c8b479a9fb8dcd4bbeebeff3334b13b1/ZcashFoundation/zinder"
---

# Zinder

> [!WARNING]
> **Zinder is alpha.** Native `WalletQuery`, the lightwalletd compatibility
> surface, storage layouts, and deployment topology will change. A tagged
> release is not a stability promise. Production use is a deliberate risk:
> pin exact versions, expect breaking upgrades, and recertify consumers
> after each upgrade.

Zinder is a self-hosted Zcash chain-data service. It indexes the chain once from a [Zebra](https://github.com/ZcashFoundation/zebra) full node, then exposes one durable, consistent, versioned view that multiple wallets and products can share. Every read pins to one chain epoch, so a sync batch never combines data from competing tips, while shielded scanning and keys remain in the wallet.

The release topology serves both Zinder's native `WalletQuery` protocol and [lightwalletd](https://github.com/zcash/lightwalletd)'s `CompactTxStreamer` protocol. Native clients use `zinder-query`; existing lightwalletd clients use the independent `zinder-compat-lightwalletd` adapter. Both pin reads to exact canonical and wallet-projection fences, and every named wallet and release still requires end-to-end certification before Zinder claims support.

## Wallet…
