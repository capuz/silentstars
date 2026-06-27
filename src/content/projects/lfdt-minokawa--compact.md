---
repo: "LFDT-Minokawa/compact"
name: "compact"
description: "The Compact programming language"
url: "https://github.com/LFDT-Minokawa/compact"
homepage: "https://docs.midnight.network/compact"
language: "Scheme"
languages: ["Scheme"]
languagePcts: [77]
topics: ["compact", "midnightntwrk"]
stars: 33
forks: 24
openIssues: 72
closedIssues: 91
watchers: 4
contributors: 29
recentReleases: 8
createdAt: "2025-12-12T17:44:09Z"
lastCommitAt: "2026-06-27T00:36:15Z"
lastReleaseAt: "2026-06-25T19:06:26Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 87
undervaluedScore: 53
maintainers: ["JosephDenman", "dybvig", "kmillikin"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e4d3d85b57b4b137f0052bc321660c22af6945cbc89a31ae0624486d722c717/LFDT-Minokawa/compact"
discussionCount: 1
---

# Compact

This is the home of **Compact**. This project integrates with the [Midnight Network](https://midnight.network). It contains the language documentation, formal specification, compiler, runtime libraries, CLI tooling, and editor extensions.

> **Note:** Development takes place under the [LFDT-Minokawa](https://github.com/LFDT-Minokawa) GitHub organization, which is the [Linux Foundation Decentralized Trust](https://www.lfdecentralizedtrust.org/) project for Compact. Public releases are published to [midnightntwrk/compact](https://github.com/midnightntwrk/compact).

## What Is Compact?

Compact is a smart contract language that makes it straightforward to write programs that combine public and private computation, with the compiler handling the complexity of generating zero-knowledge proofs. You write what looks like a normal program in a TypeScript-like syntax, and the compiler splits it into on-chain, off-chain, and ZK components automatically.

A Compact contract operates across three contexts at once:

- **`ledger` fields** declare public state that lives on chain
- **`circuit` functions** define operations that are proven correct via zero-knowledge proofs -- they can…
