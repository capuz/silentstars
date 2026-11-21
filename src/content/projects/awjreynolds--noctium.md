---
repo: "awjreynolds/noctium"
name: "noctium"
description: "Lean 4 compiler and proof framework for Midnight. Prove contract behavior, compile to native ZKIR, and execute with Rust. Research preview."
readmeQualityOk: true
url: "https://github.com/awjreynolds/noctium"
language: "Lean"
languages: ["Lean", "Rust"]
languagePcts: [52, 39]
topics: ["compiler", "formal-verification", "lean4", "midnight", "rust", "smart-contracts", "zero-knowledge"]
stars: 8
forks: 0
openIssues: 28
closedIssues: 135
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-16T12:17:40Z"
lastCommitAt: "2026-11-21T11:38:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 96
undervaluedScore: 49
maintainers: ["awjreynolds"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6e87baaf67baa7e4bc597dea695288da72bee814691073f2e7affbb945959dd/awjreynolds/noctium"
---

# Noctium

Noctium is a Lean 4 contract compiler for Midnight. Its goal is to let a contract author prove a property in Lean and an independent auditor trace the proof to the exact deployed operation.

The [assurance roadmap](https://github.com/awjreynolds/noctium/issues/94) starts with an ordinary Lean specification beside the contract. The planned workbench gives authors reusable proofs and points to unmet obligations in their source. An auditor gets a redacted bundle to check offline, with the exact operation, permitted disclosures and assumptions behind each guarantee. [Planned proof workbench](https://github.com/awjreynolds/noctium/issues/103)

The [six delivery gates](https://github.com/awjreynolds/noctium/blob/HEAD/docs/compatibility/GOAL.md#delivery-goals-and-exit-gates) cover the full pinned ZKIR v3 and native ledger surface, including composed contracts and private witnesses across native, web and mobile SDKs. Qualification calls for comparing source and native behavior, testing accepted and rejected calls on localnet, and reproducing the deployed artifacts independently.
