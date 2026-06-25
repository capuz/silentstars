---
repo: "Dicklesworthstone/frankenjax"
name: "frankenjax"
description: "Clean-room Rust reimplementation of JAX transform semantics (jit, grad, vmap) with canonical JAXPR-like IR, Trace Transform Ledger, deterministic cache keys, and differential conformance harness"
url: "https://github.com/Dicklesworthstone/frankenjax"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["automatic-differentiation", "clean-room", "compiler", "differential-testing", "intermediate-representation", "jax", "machine-learning", "numerical-computing", "rust", "transform-composition"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T22:58:33Z"
lastCommitAt: "2026-06-25T01:39:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1157516615/1c6baffa-9d92-4e25-b6ff-27b10bb7a785"
---

# FrankenJAX

  **Clean-room Rust reimplementation of JAX's transform semantics.**

  Semantic fidelity. Mathematical rigor. Operational safety. Profile-proven performance.

  ![Rust](https://img.shields.io/badge/rust-nightly_2024-orange)
  ![Tests](https://img.shields.io/badge/tests-workspace_passing-brightgreen)
  ![Primitives](https://img.shields.io/badge/primitives-118_variants-blue)
  ![AD Coverage](https://img.shields.io/badge/V1_local_AD-113%2F113_VJP%2BJVP-brightgreen)
  ![Oracle Fixtures](https://img.shields.io/badge/oracle_fixtures-861_cases-purple)
</div>

---

## TL;DR

**The problem:** JAX's transform semantics (`jit`, `grad`, `vmap`) are deeply entangled with Python and XLA. There's no standalone, portable, verifiable implementation of the mathematical core.

**The solution:** FrankenJAX extracts and reimplements JAX's transform composition model in Rust with a canonical JAXPR-like IR, full automatic differentiation for the V1 local execution scope, and a differential conformance harness that validates primitive behavior against the real JAX oracle.

**Why FrankenJAX?**

| Feature | Status |
|---------|--------|
| 162 canonical primitive variants: 157 V1 local…
