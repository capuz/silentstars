---
repo: "Verified-zkEVM/ArkLib"
name: "ArkLib"
description: "Formally Verified Arguments of Knowledge in Lean"
readmeQualityOk: true
url: "https://github.com/Verified-zkEVM/ArkLib"
homepage: "http://verified-zkevm.github.io/ArkLib/"
language: "Lean"
languages: ["Lean"]
languagePcts: [97]
topics: ["formal-verification", "lean", "lean4", "snark", "zero-knowledge", "zk"]
stars: 347
forks: 121
openIssues: 17
closedIssues: 151
watchers: 4
contributors: 46
recentReleases: 0
createdAt: "2024-12-18T16:10:14Z"
lastCommitAt: "2026-10-21T23:19:53Z"
lastReleaseAt: "2026-04-19T10:15:42Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 41
maintainers: ["quangvdao", "alexanderlhicks", "aryaethn"]
openGraphImageUrl: "https://opengraph.githubassets.com/08b7628e76dc270b5aaff2c0340efd00139ee7cc51e4517440e73f2963e20c5f/Verified-zkEVM/ArkLib"
discussionCount: 3
---

# Formally Verified Arguments of Knowledge

This library aims to provide a modular and composable framework for formally verifying **succinct non-interactive arguments of knowledge** (SNARKs). This is done as part of the [verified-zkevm effort](https://verified-zkevm.org/).

In the first stage of this library's development, we plan to formalize interactive (oracle) reductions (the information-theoretic core of almost all SNARKs today), and prove completeness and soundness for a select list of protocols (see the list of active formalizations below).

For each protocol, we aim to provide:

- An executable specification of the protocol, constructed modularly using our composition and lifting interfaces,
- Proofs of completeness & round-by-round knowledge soundness via generic theorems about composition and lifting.

In the future, we plan to verify functional equivalence of the executable spec (or modifications thereof) for certain protocols (e.g., sum-check, FRI, or WHIR), with the extracted code from Rust implementations of the same protocols (via [hax](https://github.com/cryspen/hax)).

## Library Structure

The core of our library is a mechanized theory of **Interactive Oracle…
