---
repo: "ethereum/EthLib"
name: "EthLib"
description: "Formally verified Ethereum primitives, written in Lean."
readmeQualityOk: true
url: "https://github.com/ethereum/EthLib"
language: "Lean"
languages: ["Lean"]
languagePcts: [96]
stars: 71
forks: 17
openIssues: 19
closedIssues: 55
watchers: 0
contributors: 48
recentReleases: 0
createdAt: "2024-08-26T22:16:59Z"
lastCommitAt: "2026-11-04T13:06:36Z"
lastReleaseAt: "2026-05-07T05:49:27Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 93
undervaluedScore: 50
maintainers: ["tcoratger", "alexanderlhicks", "Th0rgal"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6e79891d6fce2427e04cc540e74fcdddddc0cfab9cd98a649d0d575266e66ed/ethereum/EthLib"
---

# EthLib

Formally verified Ethereum primitives, written in Lean.
EthLib is intended to be the shared home for Ethereum definitions and proofs, so that Lean projects can build on a common implementation instead of each maintaining its own.
Some of these primitives can also be used by Ethereum clients via bindings.
Clients may use the bindings temporarily until a native implementation exists, or permanently if the performance of this library is sufficient.

## Architecture

EthLib is organised in layers, from the bytes and integers every specification uses up to the two layers of the protocol.
A module imports only from its own layer or from those below it, and the execution and consensus layers never import each other.

[ARCHITECTURE.md](https://github.com/ethereum/EthLib/blob/HEAD/ARCHITECTURE.md) gives the scope, the rules behind each layer, the types that modules share and how forks are written.

## Where things live

| Layer | Module | What it specifies |
| --- | --- | --- |
| Base | [`U256`](https://github.com/ethereum/EthLib/blob/HEAD/EthLib/Base/U256.lean) | the 256-bit word of the EVM, and its two's complement reading |
| Cryptography |…
