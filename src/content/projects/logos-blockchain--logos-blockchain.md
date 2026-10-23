---
repo: "logos-blockchain/logos-blockchain"
name: "logos-blockchain"
description: "Logos blockchain node"
readmeQualityOk: true
url: "https://github.com/logos-blockchain/logos-blockchain"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 131
forks: 58
openIssues: 347
closedIssues: 518
watchers: 20
contributors: 44
recentReleases: 0
createdAt: "2022-10-25T11:40:23Z"
lastCommitAt: "2026-10-23T07:11:45Z"
lastReleaseAt: "2026-02-25T19:05:37Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 91
undervaluedScore: 43
maintainers: ["strinnityk", "youngjoon-lee", "andrussal"]
openGraphImageUrl: "https://opengraph.githubassets.com/3cf1258a264979cf4fb73536e1e16afa135463daaceb6e453f7e376dba2d98ee/logos-blockchain/logos-blockchain"
---

# Logos Blockchain

**A privacy-preserving, censorship-resistant blockchain for decentralized network states.**

---

## What is Logos Blockchain?

Logos Blockchain is a core component of the [Logos][logos-website] technology stack.
It combines zero-knowledge proofs, a mix network for anonymity, and a modular service architecture to provide a foundation for sovereign digital communities.

This node represents the reference implementation of the Logos Blockchain specifications defined in the [Logos specifications space][specs].

## Quick Start

### Prerequisites

| Requirement      | Details                                 |
|------------------|-----------------------------------------|
| **LLVM / Clang** | Required for RocksDB and C bindings     |
| **ZK Circuits**  | Downloaded via setup script (see below) |

### 1. Clone the repository

```bash
git clone https://github.com/logos-blockchain/logos-blockchain.git
cd logos-blockchain
```

If you want to verify the circuits were installed successfully:

```bash
cargo test -p logos-blockchain-circuits-prover -p logos-blockchain-circuits-verifier
```

### 2. Build

**Note:** MacOS users may encounter linker warning messages due to a…
