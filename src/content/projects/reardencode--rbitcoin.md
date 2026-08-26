---
repo: "reardencode/rbitcoin"
name: "rbitcoin"
description: "Bitcoin full node in Rust: map-free relational archive, pure-Rust consensus, multi-peer IBD, Electrum for wallet backends"
readmeQualityOk: true
url: "https://github.com/reardencode/rbitcoin"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["bitcoin", "electrum", "full-node", "p2p", "rust", "bitcoin-core-alternative"]
stars: 34
forks: 4
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-08-07T06:34:34Z"
lastCommitAt: "2026-08-26T04:16:19Z"
lastReleaseAt: "2026-08-23T15:17:44Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 44
maintainers: ["rearden-grok[bot]", "reardencode"]
openGraphImageUrl: "https://opengraph.githubassets.com/8066dec2300238019b996e461240d493fae1ee28cddebb151b501ec31d291f70/reardencode/rbitcoin"
---

# rbitcoin

Bitcoin **full node** in Rust aimed at **production server-side** use: multi-peer
IBD, tip follow, block/tx relay (tip mode), optional **Core-class JSON-RPC**, and
in-process **Electrum + optional Esplora REST for wallet clients** (scripthash
index via `--shindex`, default off; not a graphical block-explorer stack) — built
around a **libbitcoin-class relational archive** and a **pure-Rust
consensus/script** path.

> **0.5.1** is the current **named published** 0.x line (GitHub Release:
> Linux musl + Windows CRT-static + Darwin aarch64). **Not 1.0:** schema can
> still refuse a named wipe ([`SCHEMA.md`](https://github.com/reardencode/rbitcoin/blob/HEAD/SCHEMA.md), [`OPERATOR.md`](https://github.com/reardencode/rbitcoin/blob/HEAD/OPERATOR.md));
> default mainnet **`--milestone 840000` skips historical script/sig checks**
> (`--milestone 0` is full scripts); Electrum/Esplora need **`--shindex`**
> (default off) after tip. Run **signet first**, then mainnet with monitoring.
> Report security issues privately: [`SECURITY.md`](https://github.com/reardencode/rbitcoin/blob/HEAD/SECURITY.md). Runbook:
>…
