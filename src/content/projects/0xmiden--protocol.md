---
repo: "0xMiden/protocol"
name: "protocol"
description: "Core components of the Miden protocol"
url: "https://github.com/0xMiden/protocol"
homepage: "https://docs.miden.xyz/miden-base/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 127
forks: 144
openIssues: 199
closedIssues: 921
watchers: 18
contributors: 90
recentReleases: 0
createdAt: "2022-12-14T03:01:34Z"
lastCommitAt: "2026-06-26T23:30:01Z"
lastReleaseAt: "2025-01-23T11:13:56Z"
status: "thriving"
tags: ["needs_contributors", "community_hub", "fork_magnet"]
healthScore: 95
undervaluedScore: 53
maintainers: ["onurinanc", "PhilippGackstatter", "mmagician"]
openGraphImageUrl: "https://opengraph.githubassets.com/62ba7479da2b89f110b6626cf4215ba924b1b9de7207dbb816b9b0da446d1aa7/0xMiden/protocol"
discussionCount: 72
---

# Miden protocol

Description and core structures for the Miden Rollup protocol.

**WARNING:** This project is in an alpha stage. It has not been audited and may contain bugs and security flaws. This implementation is NOT ready for production use.

## Overview

Miden is a zero-knowledge rollup for high-throughput and private applications. Miden allows users to execute and prove transactions locally (i.e., on their devices) and commit only the proofs of the executed transactions to the network.

If you want to join the technical discussion or learn more about the project, please check out

- the [Documentation](https://docs.miden.xyz/protocol/).
- the [Telegram](https://t.me/BuildOnMiden)
- the [Repo](https://github.com/0xMiden)
- the [Roadmap](https://miden.xyz/roadmap)

## Status and features

Miden is currently on release v0.13. This is an early version of the protocol and its components. We expect to keep making changes (including breaking changes) to all components.

### Feature highlights

- **Private accounts**. The Miden Operator tracks only commitments to account data in the public database. The users are responsible for keeping track of the state of their accounts.
-…
