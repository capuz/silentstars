---
repo: "Stellar-Unified-Price-Oracle/Stellar-Unified-Price-Oracle-Aggregator-API-Contract"
name: "Stellar-Unified-Price-Oracle-Aggregator-API-Contract"
description: "🔐 Native Soroban smart contracts for the Stellar Unified Price Oracle. Implements secure multi-source ingestion, cryptographic payload validation, on-chain outlier filtering (medianizer), and optimized storage management."
readmeQualityOk: true
url: "https://github.com/Stellar-Unified-Price-Oracle/Stellar-Unified-Price-Oracle-Aggregator-API-Contract"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 10
forks: 85
openIssues: 33
closedIssues: 302
watchers: 0
contributors: 62
recentReleases: 0
createdAt: "2026-06-03T14:55:30Z"
lastCommitAt: "2026-09-01T08:52:45Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 64
maintainers: ["Sundriveauto", "elvissamuel834-dotcom", "jhaydeeee-web"]
openGraphImageUrl: "https://opengraph.githubassets.com/5daed53ee5edbe1b0a8b29ae948083873ce20e41b31953b17da060ed638e3878/Stellar-Unified-Price-Oracle/Stellar-Unified-Price-Oracle-Aggregator-API-Contract"
---

# Stellar Unified Price Oracle Aggregator

A **decentralized price oracle aggregator** built on Soroban (Stellar smart contracts). Collects price data from multiple permissioned oracle sources, aggregates via **median**, and exposes historical price data for consumer contracts.

## Features

- **Multi-source aggregation** — register multiple oracle sources per asset, aggregate via median
- **Admin governance** — admin controls sources, assets, decimals, description, history limits
- **Median price** — robust single-statistic aggregation resistant to outliers and manipulation
- **Per-source prices** — inspect individual source submissions for transparency
- **Historical prices** — ledger-based price history with configurable retention
- **Contract upgradability** — WASM-based upgrade mechanism
- **SEP-40 compliant** — full implementation of the Stellar Oracle Consumer Interface standard
- **Contract events** — all state changes emit on-chain events for indexers and monitoring
- **27 public endpoints** — full admin, source, asset, submission, query, history, and SEP-40 interface

## Contract Interface

### Admin

| Function | Description |
|----------|-------------|
|…
