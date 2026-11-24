---
repo: "leanEthereum/leanVM"
name: "leanVM"
description: "Minimal zkVM for Ethereum."
readmeQualityOk: true
url: "https://github.com/leanEthereum/leanVM"
homepage: "https://leanvm.org"
language: "Lean"
languages: ["Lean"]
languagePcts: [88]
stars: 189
forks: 91
openIssues: 38
closedIssues: 91
watchers: 7
contributors: 51
recentReleases: 7
createdAt: "2025-07-16T03:51:28Z"
lastCommitAt: "2026-11-24T02:01:05Z"
lastReleaseAt: "2026-11-20T20:20:09Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 91
undervaluedScore: 49
maintainers: ["TomWambsgans", "scaraven", "kevaundray"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd33809801a93706c31e2e78dc2d1dd4fa9f01c663ff4b5f69533b4a87a27b52/leanEthereum/leanVM"
---

## security

leanVM is designed for security:

 * 125-bit ROM (62-bit QROM) soundness
 * no proximity gap conjecture
 * end-to-end formal verification
 * a traditional hash function (Keccak-256)

## work in progress

- leanVM is not yet stable
- Formal statements are still under review
- The Lean statements only describe the spec. Proving the Rust implem is faithful to the spec is still WIP.

**leanVM is not (yet) production ready.**

## two provers

In the short term, we provide two Rust implementations of the prover, `stable` (for readability and safety) and `experimental` (includes the latest optimizations). There will eventually be a single prover in this repo.

## bindings

Python, Node.js, Java, Go, Zig and Nim bindings for leanXMSS, leanSPHINCS and their aggregation, released together as `bindings-vX.Y.Z` ([releases](https://github.com/leanEthereum/leanVM/releases?q=bindings&expanded=true)):
