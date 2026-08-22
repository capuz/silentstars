---
repo: "reardencode/rbitcoin"
name: "rbitcoin"
description: "Bitcoin full node in Rust: map-free relational archive, pure-Rust consensus, multi-peer IBD, Electrum for wallet backends"
readmeQualityOk: true
url: "https://github.com/reardencode/rbitcoin"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["bitcoin", "electrum", "full-node", "p2p", "rust", "bitcoin-core-alternative"]
stars: 30
forks: 4
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-07T06:34:34Z"
lastCommitAt: "2026-08-22T04:06:18Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 38
maintainers: ["rearden-grok[bot]", "reardencode"]
openGraphImageUrl: "https://opengraph.githubassets.com/25260aca9b0a4e06ce4cea7ba79a5c93d3567fea8535a9ff75929fa1f0c236ff/reardencode/rbitcoin"
---

# rbitcoin

Bitcoin **full node** in Rust aimed at **production server-side** use: multi-peer
IBD, tip follow, block/tx relay (tip mode), optional **Core-class JSON-RPC**, and
in-process **Electrum + optional Esplora REST for wallet clients** (scripthash
index via `--shindex`, default off; not a graphical block-explorer stack) — built
around a **libbitcoin-class relational archive** and a **pure-Rust
consensus/script** path.

> **0.x:** on-disk format and APIs are **unstable until 1.0**. Run **signet
> first**, then mainnet with monitoring; treat early mainnet as high-scrutiny.
> Security contact and policy: [`SECURITY.md`](https://github.com/reardencode/rbitcoin/blob/HEAD/SECURITY.md). Operator notes:
> [`docs/experimental-mainnet.md`](https://github.com/reardencode/rbitcoin/blob/HEAD/docs/experimental-mainnet.md).

| | |
|--|--|
| **License** | MIT OR Apache-2.0 ([`LICENSE-MIT`](https://github.com/reardencode/rbitcoin/blob/HEAD/LICENSE-MIT), [`LICENSE-APACHE`](https://github.com/reardencode/rbitcoin/blob/HEAD/LICENSE-APACHE)) |
| **Version** | experimental 0.x — see [`Cargo.toml`](https://github.com/reardencode/rbitcoin/blob/HEAD/Cargo.toml) /…
