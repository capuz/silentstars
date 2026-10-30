---
repo: "stratum-mining/sv2-apps"
name: "sv2-apps"
description: "Stratum V2 pool and miner applications"
readmeQualityOk: true
url: "https://github.com/stratum-mining/sv2-apps"
homepage: "https://stratumprotocol.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 20
forks: 49
openIssues: 171
closedIssues: 290
watchers: 3
contributors: 22
recentReleases: 0
createdAt: "2025-07-24T13:10:30Z"
lastCommitAt: "2026-10-30T10:22:45Z"
lastReleaseAt: "2026-06-03T15:45:33Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 91
undervaluedScore: 74
maintainers: ["plebhash", "GitGab19", "SV2-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/d49efda1b343781171f6c73b0093e19aff4b3d242d6f42bfdaeda2ce8349ccb4/stratum-mining/sv2-apps"
discussionCount: 12
---

SV2 Applications

# SV2 Apps Repository

This repository contains the application-level crates, currently in **alpha** stage.
If you're looking for the low-level protocol libraries, check out the [`stratum` repository](https://github.com/stratum-mining/stratum). Those crates provide the foundational protocol implementations used as dependencies by these applications.

## Contents

All crates below belong to a single Cargo workspace rooted at the repository root.

- `bitcoin-core-sv2/` - Library crate that translates Bitcoin Core IPC into Sv2 Template Distribution Protocol
- `pool-apps/` - Pool operator applications
  - `pool/` - SV2-compatible mining pool server that communicates with downstream roles and Template Providers
  - `jd-server/` - Job Declarator Server coordinates job declaration between miners and pools, maintains synchronized mempool
- `miner-apps/` - Miner applications
  - `jd-client/` - Job Declarator Client allows miners to declare custom block templates for decentralized mining
  - `translator/` - Translator Proxy bridges SV1 miners to SV2 pools, enabling protocol transition
- `stratum-apps/` - Shared application utilities
  - Configuration helpers (TOML,…
