---
repo: "vultisig/vultisig-sdk"
name: "vultisig-sdk"
description: "TypeScript SDK for self-custodial multi-chain wallets with MPC security, cross-chain swaps, and AI agent support. 40+ blockchains, no seed phrases."
readmeQualityOk: true
url: "https://github.com/vultisig/vultisig-sdk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ai-agent", "bitcoin", "cross-chain-swap", "defi", "ethereum", "mpc-wallet", "multi-chain", "self-custodial", "solana", "threshold-signatures"]
stars: 13
forks: 18
openIssues: 215
closedIssues: 459
watchers: 0
contributors: 27
recentReleases: 0
createdAt: "2025-08-26T17:45:23Z"
lastCommitAt: "2026-09-05T07:49:33Z"
lastReleaseAt: "2026-01-16T19:09:07Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 78
maintainers: ["Ehsan-saradar", "gomesalexandre", "neavra"]
openGraphImageUrl: "https://opengraph.githubassets.com/36536eaba0a9ce1af1c29e7534c6a58a25066404d3dc7cc3987395667a0d55da/vultisig/vultisig-sdk"
---

# Vultisig SDK

The self-custodial multi-chain wallet SDK for AI agents and developers.

- **Send & swap** across 40+ blockchains with human-readable amounts (`vault.send({ amount: "0.1" })`)
- **MPC security** — keys are split across parties, no seed phrases, no single point of failure
- **Built-in cross-chain swaps** via THORChain, 1inch, KyberSwap, and LiFi — automatic routing
- **Portfolio tracking** with real-time balances and fiat prices
- **Dry-run mode** for sends and swaps — preview fees and output before signing
- **AI agent ready** — JSON output, programmatic API, designed for autonomous operation

## Overview

Vultisig SDK enables developers and AI agents to integrate multi-chain wallet functionality into their applications. The SDK supports two vault types:

- **Fast Vault**: Server-assisted 2-of-2 MPC for quick setup and instant signing
- **Secure Vault**: Multi-device N-of-M MPC for enhanced security with configurable thresholds

Both vault types provide comprehensive blockchain support including Bitcoin, Ethereum, Cosmos, Solana, and 40+ others.

## Features

- **Fast Vault**: Server-assisted MPC with VultiServer for instant signing (2-of-2 standard, 2-of-3 from…
