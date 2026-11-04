---
repo: "logos-blockchain/logos-blockchain"
name: "logos-blockchain"
description: "Logos blockchain node"
readmeQualityOk: true
url: "https://github.com/logos-blockchain/logos-blockchain"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 131
forks: 60
openIssues: 344
closedIssues: 538
watchers: 20
contributors: 46
recentReleases: 0
createdAt: "2022-10-25T11:40:23Z"
lastCommitAt: "2026-11-04T08:19:57Z"
lastReleaseAt: "2026-02-25T19:05:37Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 91
undervaluedScore: 44
maintainers: ["ntn-x2", "youngjoon-lee", "strinnityk"]
openGraphImageUrl: "https://opengraph.githubassets.com/f629f2b6c065f811f4847198fd1d9348aa189c6b50524d4d8ebb3c89e448dbd7/logos-blockchain/logos-blockchain"
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
