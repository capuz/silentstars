---
repo: "ethereum/EthLib"
name: "EthLib"
description: "Formally verified Ethereum primitives, written in Lean."
readmeQualityOk: true
url: "https://github.com/ethereum/EthLib"
language: "Lean"
languages: ["Lean"]
languagePcts: [90]
stars: 85
forks: 22
openIssues: 0
closedIssues: 77
watchers: 0
contributors: 51
recentReleases: 2
createdAt: "2024-08-26T22:16:59Z"
lastCommitAt: "2026-11-07T10:36:27Z"
lastReleaseAt: "2026-11-06T23:49:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 54
maintainers: ["Giulio2002", "tcoratger", "parithosh"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c937e7f4bfb1539e5d046fd891c69e25f76716a3381e0a79e724b35d0859906/ethereum/EthLib"
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
