---
repo: "Tarrant64/abct"
name: "abct"
description: "A Better Crypto Tracker"
readmeQualityOk: true
url: "https://github.com/Tarrant64/abct"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [47, 24]
stars: 7
forks: 1
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-01-25T16:09:55Z"
lastCommitAt: "2026-09-19T01:36:41Z"
lastReleaseAt: "2026-08-09T19:40:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 48
maintainers: ["Tarrant64", "TheD0SH"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ee3b1c2f4c3ad97f6087ac1f0778405ee0321a9ff6c3f39364fd10c9c889476/Tarrant64/abct"
---

# A Better Crypto Tracker (ABCT)

Personal multi-chain portfolio tracker built Cardano-first.

**Website**: [abettercryptotracker.com](https://abettercryptotracker.com)

## Why

Existing multi-chain wallets treat Cardano as an afterthought — basic balance tracking with no stake pool info, broken native assets, and zero governance integration. This project flips that: deep Cardano ecosystem support first, then proper multi-chain coverage.

## Features

### 53 Blockchains

**Cardano** (Primary) — Stake pool tracking, rewards, governance, native assets with metadata, DeFi protocol integration (Minswap, SundaeSwap, Liqwid, Indigo, etc.), NFT collections with floor prices, stake key wallet grouping.

**API-Key Chains** — Ethereum, Solana, Polygon, Base, Algorand, Arbitrum, Avalanche, BNB Chain (via Etherscan/Alchemy/Helius APIs)

**EVM Chains** — Optimism, zkSync Era, Linea, Scroll, Fantom, Cronos, Gnosis, Moonbeam (all via generic EVM service)

**Generic EVM Support** — Any EVM-compatible chain can be tracked. The `evm_chain.py` service is config-driven: add a new entry with the chain's RPC URL, chain ID, and explorer base URL and it works without additional code.

**Cosmos IBC…
