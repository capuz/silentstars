---
repo: "paritytech/web3-storage"
name: "web3-storage"
description: "Creating a prototype for Capacity (Web3 Storage)"
readmeQualityOk: true
url: "https://github.com/paritytech/web3-storage"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [78, 20]
stars: 14
forks: 4
openIssues: 89
closedIssues: 91
watchers: 3
contributors: 36
recentReleases: 0
createdAt: "2026-01-16T12:49:38Z"
lastCommitAt: "2026-11-18T12:03:17Z"
lastReleaseAt: "2026-06-18T05:03:33Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 88
undervaluedScore: 55
maintainers: ["ilchu", "danielbui12", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/344bfb9b9eb22321448643caeb182a4ede6711bb415ae2bd14a240fac05bc805/paritytech/web3-storage"
discussionCount: 1
---

# Scalable Web3 Storage

> **Warning**
>
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
