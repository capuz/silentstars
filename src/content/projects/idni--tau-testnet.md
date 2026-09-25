---
repo: "IDNI/tau-testnet"
name: "tau-testnet"
description: "This project is the codebase for the Tau Testnet Alpha Blockchain"
readmeQualityOk: true
url: "https://github.com/IDNI/tau-testnet"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 8
forks: 2
openIssues: 25
closedIssues: 26
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-11-12T13:46:05Z"
lastCommitAt: "2026-09-21T05:32:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 63
maintainers: ["andrei-idni"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a4290a29840e59cb5a071a9f66d12984d042d5927223d429849f95aae389215/IDNI/tau-testnet"
---

# Tau Testnet Alpha Blockchain

A live, working blockchain whose state transitions and consensus rules are governed by **Tau formal logic**. A Python host handles networking, storage, and cryptography (BLS12-381 signatures); a separate Tau logic program — run via native bindings or the bundled Docker image — is the ultimate arbiter of block validity, proposer eligibility, transfers, and fees.

- **Tau-driven consensus** — block validity (`o6`) and proposer eligibility (`o7`) come from living, governance-votable Tau rules.
- **On-chain PoA validator set** — proposers must be in the active validator set; the set changes only through governance with a configurable vote quorum.
- **Native fee model** — fees are emitted by the consensus rules (`o9` + optional user `o8`), charged on inclusion, credited to the block proposer.
- **Multi-node ready** — libp2p P2P, header/block sync, fork choice + reorgs, genesis-hash handshake gate, NAT-friendly announce addresses.

> **Status: Alpha.** Under active development, for testing and experimentation.
>
> ⚠️ **This alpha network has no economic finality, no slashing, and limited DoS protection, and it may reorg. Do not use it with real funds.**…
