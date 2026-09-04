---
repo: "paritytech/web3-storage"
name: "web3-storage"
description: "Creating a prototype for Capacity (Web3 Storage)"
readmeQualityOk: true
url: "https://github.com/paritytech/web3-storage"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
stars: 12
forks: 2
openIssues: 69
closedIssues: 52
watchers: 3
contributors: 176
recentReleases: 4
createdAt: "2026-01-16T12:49:38Z"
lastCommitAt: "2026-09-04T08:09:39Z"
lastReleaseAt: "2026-06-18T05:03:33Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 85
undervaluedScore: 53
maintainers: ["danielbui12", "bkontur", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ff48827e41d5cc35ed3e5b3bdf9520ecfe964808e85355f929997dcb6c289bd/paritytech/web3-storage"
discussionCount: 1
---

# Scalable Web3 Storage

> [!WARNING]
> This is a prototype/proof-of-concept. It has **not been audited**, is under active development, and is not production-ready. Use at your own risk.

A decentralized storage system built on Substrate with game-theoretic guarantees. Storage providers lock stake and face slashing for data loss, while the chain acts as a credible threat rather than the hot path.

## What It Does

- **Storage providers** register with stake and offer storage services
- **Clients** create buckets and upload data off-chain
- **Storage agreements** bind providers to store data for agreed durations
- **Challenges** enforce accountability through slashing

Normal operations (reads, writes) happen off-chain. The chain is only touched for setup, checkpoints, and disputes.

## Quick Start

Get running in 5 minutes:

```bash
# Install just (command runner)
cargo install just

# One-time setup: downloads binaries + builds everything
just setup

# Start blockchain network + provider node
just start-chain     # Terminal 1
just start-provider  # Terminal 2

# Terminal 2:
# Setup (register provider, create bucket, establish agreement)
# Upload test data + challenge
just demo…
