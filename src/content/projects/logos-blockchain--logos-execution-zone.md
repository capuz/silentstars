---
repo: "logos-blockchain/logos-execution-zone"
name: "logos-execution-zone"
description: "Home of the Logos Execution Environment (LEE) and the first Logos Execution Zone (LEZ)."
readmeQualityOk: true
url: "https://github.com/logos-blockchain/logos-execution-zone"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 24
forks: 43
openIssues: 160
closedIssues: 126
watchers: 3
contributors: 29
recentReleases: 1
createdAt: "2024-09-17T11:47:22Z"
lastCommitAt: "2026-11-05T08:05:43Z"
lastReleaseAt: "2026-09-09T21:03:22Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 68
maintainers: ["moudyellaz", "erhant", "Arjentix"]
openGraphImageUrl: "https://opengraph.githubassets.com/eda5c86154e28b4b83b5ed5c47b2e0a56668e1e99fd21483fc937d6946551e3d/logos-blockchain/logos-execution-zone"
---

# Logos Execution Zone (LEZ)

Logos Execution Zone (LEZ) is a programmable blockchain that cleanly separates public and private state while keeping them fully interoperable. Developers can build apps that operate across transparent and privacy-preserving accounts without changing their logic. Privacy is enforced by the protocol itself through zero-knowledge proofs (ZKPs), so it is always available and automatic.

## Background

These features are provided by the Logos Execution Environment (LEE). Traditional public blockchains expose a fully transparent state: the mapping from account IDs to account values is entirely visible. LEE introduces a parallel _private state_ that coexists with the public one. Together, public and private accounts form a partition of the account ID space: public IDs are visible on-chain, while private accounts are accessible only to holders of the corresponding viewing keys. Consistency across both states is enforced by ZKPs.

Public accounts are stored on-chain as a visible map from IDs to account states, and their values are updated in place. Private accounts are never stored on-chain in raw form. Each update produces a new commitment that binds the…
