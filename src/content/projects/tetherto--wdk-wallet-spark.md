---
repo: "tetherto/wdk-wallet-spark"
name: "wdk-wallet-spark"
description: "Spark wallet module for WDK (Wallet Development Kit) by Tether with Lightning Network integration."
readmeQualityOk: true
url: "https://github.com/tetherto/wdk-wallet-spark"
homepage: "https://docs.wdk.tether.io/sdk/wallet-modules/wallet-spark"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["bitcoin", "lightning-network", "spark", "wdk", "tether", "wallet-development-kit"]
stars: 11
forks: 22
openIssues: 2
closedIssues: 6
watchers: 5
contributors: 27
recentReleases: 0
createdAt: "2025-05-01T20:41:03Z"
lastCommitAt: "2026-11-05T08:05:30Z"
lastReleaseAt: "2026-02-15T13:55:18Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 81
maintainers: ["jonathunne", "AlonzoRicardo", "vigan-abd"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3d53e216d0c46579fd07c3c8aee8fbe6a0dd37d550a809dd17c1ce931308560/tetherto/wdk-wallet-spark"
---

# @tetherto/wdk-wallet-spark

**Note**: This package is currently in beta. Please test thoroughly in development environments before using in production.

A [Spark wallet module](https://docs.wdk.tether.io/sdk/wallet-modules/wallet-spark/) for WDK (Wallet Development Kit) by Tether. It creates and manages Spark accounts using BIP-39 seed phrases and the module's BIP-44 derivation paths. It supports Spark transfers and invoices, token transfers, Lightning payments, and Bitcoin layer 1 deposits and withdrawals.

## About WDK

This module is part of the [**WDK (Wallet Development Kit)**](https://docs.wdk.tether.io/) project, which empowers developers to build secure, non-custodial wallets with unified blockchain access, stateless architecture, and complete user control.

For detailed documentation about the complete WDK ecosystem, visit [docs.wdk.tether.io](https://docs.wdk.tether.io/).

## Installation

```bash
npm install @tetherto/wdk-wallet-spark
```

## Quick Start

The mnemonic below is public and for development only. Never send funds to its addresses. Use a securely generated seed phrase before handling funds.

```javascript
import WalletManagerSpark from…
