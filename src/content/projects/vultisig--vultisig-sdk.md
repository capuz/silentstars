---
repo: "vultisig/vultisig-sdk"
name: "vultisig-sdk"
description: "TypeScript SDK for self-custodial multi-chain wallets with MPC security, cross-chain swaps, and AI agent support. 40+ blockchains, no seed phrases."
url: "https://github.com/vultisig/vultisig-sdk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["ai-agent", "bitcoin", "cross-chain-swap", "defi", "ethereum", "mpc-wallet", "multi-chain", "self-custodial", "solana", "threshold-signatures"]
stars: 10
forks: 14
openIssues: 17
closedIssues: 109
watchers: 0
contributors: 24
recentReleases: 0
createdAt: "2025-08-26T17:45:23Z"
lastCommitAt: "2026-06-24T00:24:04Z"
lastReleaseAt: "2026-01-16T19:09:07Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 76
maintainers: ["rcoderdev", "dependabot[bot]", "gomesalexandre"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fc252c2efd7bb5980f20b7a54dbc6a7db4f6e1064d682c1c797956036ded300/vultisig/vultisig-sdk"
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
