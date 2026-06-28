---
repo: "madschristensen99/wrapsynth"
name: "wrapsynth"
description: "Wrapsynth is bringing Monero's anonymity set to DeFi and DeFi liquidity to Monero"
url: "https://github.com/madschristensen99/wrapsynth"
homepage: "https://wrapsynth.com"
language: "JavaScript"
languages: ["JavaScript", "Solidity", "Rust"]
languagePcts: [38, 24, 23]
topics: ["monero", "ethereum", "solana"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-04-21T23:10:02Z"
lastCommitAt: "2026-06-28T01:34:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 81
maintainers: ["madschristensen99"]
openGraphImageUrl: "https://opengraph.githubassets.com/77d6e4f9e1fce3af81157bb8c935abc931e6d2b98853ccbc8f5a2b596bac9a85/madschristensen99/wrapsynth"
---

# ⛴️ WrapSynth

**A trustless cross-chain ferry for Monero. wsXMR is live on Gnosis Chain, backed by overcollateralized LP vaults and Ed25519 atomic swap commitments.**

🌐 **[wrapsynth.com](https://wrapsynth.com)** · 📊 **[wsXMR/sDAI Pool on Gnosis](https://gnosisscan.io/address/0x52063599d6f53e437f4dd07382b0183748057870)**

WrapSynth brings Monero's anonymity set to DeFi and DeFi liquidity to Monero. Users swap XMR for wsXMR through atomic-swap mechanics enforced on-chain: LPs post sDAI collateral, mint/burn settlement is gated by Ed25519 secret reveals verified on-chain, and timeout-based slashing protects both sides. No custodian, no federation, no trusted intermediary — every swap settles peer-to-peer between a user and an LP vault.

---

## 🚀 Status: Live on Gnosis Chain Mainnet

- ✅ Full hub + facet system deployed and **verified on Gnosisscan**
- ✅ **wsXMR/sDAI Uniswap V3 pool live** (0.3% fee tier)
- ✅ Complete mint → trade → burn cycle executed end-to-end on mainnet
- ✅ Two rounds of security review completed; all critical findings resolved (see [Security](#-security))
- ✅ 633-line solvency invariant test suite + audit regression suite
- 🔄 Solana port in development…
