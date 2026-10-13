---
repo: "foxcool/greedy-eye"
name: "greedy-eye"
description: "Personal investment intelligence platform. Aggregate data from multiple sources, track your portfolio, and make informed financial decisions."
readmeQualityOk: true
url: "https://github.com/foxcool/greedy-eye"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 9
createdAt: "2021-10-16T06:54:19Z"
lastCommitAt: "2026-10-13T10:57:17Z"
lastReleaseAt: "2026-08-17T14:37:02Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 82
maintainers: ["foxcool"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6f105db5fd470d46ea8e2a598ddfbe99ab2dfc8db2e31962208e545a1ebc0fd/foxcool/greedy-eye"
---

# Greedy Eye

Personal investment intelligence platform. Aggregate data from multiple sources, track your portfolio, and make informed financial decisions.

---

## What It Does

Aggregates everything you own — on-chain wallets, exchange accounts, broker
positions, manually entered holdings — into one catalog, prices it, and shows
what the total actually consists of.

Built as a personal, self-hosted system, and as a demonstration of production-shaped
Go architecture for financial data.

---

## Core Capabilities

**Data Aggregation**
- On-chain balances across EVM chains, Substrate, TON, Solana, Bitcoin, Cosmos,
  Tezos and more — one `WalletSyncer` per ecosystem, routed by address shape
- Exchange balances (Binance spot) via the account's own signed API key
- Manual and LLM-assisted import of positions and transactions, with provenance
- Prices from external providers on a budgeted schedule

**Portfolio Truth**
- Multi-account position tracking with per-user ownership enforcement
- Portfolio valuation that **reports what it could not price** (`ValuationCoverage`)
  instead of silently dropping those positions
- Scam-filter verdicts on assets; flagged holdings are quarantined out…
