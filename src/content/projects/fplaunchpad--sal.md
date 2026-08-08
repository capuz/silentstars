---
repo: "fplaunchpad/sal"
name: "sal"
description: "Multimodal verification of Replicated Data Types in Lean"
readmeQualityOk: true
url: "https://github.com/fplaunchpad/sal"
homepage: "https://fplaunchpad.org/sal/"
language: "Lean"
languages: ["Lean"]
languagePcts: [73]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-08-30T12:46:20Z"
lastCommitAt: "2026-08-08T04:34:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 65
maintainers: ["kayceesrk"]
openGraphImageUrl: "https://opengraph.githubassets.com/f417b5acad4065b3cf5d14097b54e88ad668431cd9274178fed2870961b6e420/fplaunchpad/sal"
---

# `sal`: Multi-modal Verification of Replicated Data Types

Sal is a Lean 4 framework for verifying state-based CRDTs and Mergeable Replicated Data Types (MRDTs) under replication-aware (RA) linearizability. Rather than discharging every verification condition with a single backend, Sal stages automation by *trustworthiness*: it first attempts kernel-verified proof reconstruction, falls back to an SMT backend only when that fails, and finally hands remaining obligations to an AI-assisted interactive theorem prover, all while keeping the trusted computing base (TCB) as small as the VC allows. When a VC is in fact invalid, Sal uses Plausible (property-based testing) together with a ProofWidgets-based visualizer to turn the failure into an inspectable counterexample execution trace.

The approach builds on the F★-based **Neem** framework of Soundarapandian, Nagar, Rastogi, and Sivaramakrishnan (OOPSLA 2025), which reduces RA-linearizability for a data type to a fixed set of VCs over `do`, `merge`, and `rc`. Sal is the Lean port of that reduction plus a multi-modal tactic, counterexample pipeline, and custom decidable set/map interfaces that make `grind` effective on RDT goals.

##…
