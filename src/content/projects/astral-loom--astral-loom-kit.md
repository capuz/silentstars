---
repo: "astral-loom/astral-loom-kit"
name: "astral-loom-kit"
description: "Unified TypeScript SDK for building on Stellar — wallet adapters, transaction helpers, and human-readable error handling."
readmeQualityOk: true
url: "https://github.com/astral-loom/astral-loom-kit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["blockchain", "cryptocurrency", "freighter", "sdk", "stellar", "stellar-sdk", "typescript", "wallet", "web3"]
stars: 6
forks: 2
openIssues: 4
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-08-20T10:12:08Z"
lastCommitAt: "2026-11-02T11:36:43Z"
lastReleaseAt: "2026-08-31T13:39:27Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 56
maintainers: ["Temmy2026", "dependabot[bot]", "Olasunkanmi975"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ab9af01bd5f14539d50b7f951dd5e95359cd1e22efb6ae0e8c6f10e112ba26f/astral-loom/astral-loom-kit"
fundingLinks: ["CUSTOM:https://drips.network/eth/0x0000000000000000000000000000000000000000"]
discussionCount: 2
---

🌐 Website: https://astral-loom-site.vercel.app

---

## 📖 Overview

`astral-loom-kit` is a unified integration toolkit for Stellar dApp developers. It wraps the core `@stellar/stellar-sdk` into simpler, higher-level utilities so developers don't have to re-implement common boilerplate.

### 🏗️ Architecture

The SDK is split into several domain-specific helpers:

1. **Wallets:** Unified adapters for Freighter and Albedo.
2. **Transactions:** Builders for common operations like payments, batch payments, path payments, and trustlines.
3. **Networks:** Config presets for testnet, mainnet, and futurenet.
4. **Errors:** Human-readable error mapping for cryptic Horizon/SDK errors.

### 🌍 Ecosystem Architecture

`astral-loom-kit` is the core logic engine of the Astral Loom ecosystem. It powers our CLI tooling and React components.

```mermaid
flowchart TD
    %% Base Layer
    Stellar[Stellar Network]
    Horizon[Horizon API]
    Soroban[Soroban RPC]
    
    Stellar --- Horizon
    Stellar --- Soroban
    
    %% Official SDK
    SDK(("@stellar/stellar-sdk"))
    Horizon --> SDK
    Soroban --> SDK

    %% Astral Loom Layer
    subgraph Astral Loom Ecosystem…
