---
repo: "reussir-lang/reussir"
name: "reussir"
description: "A programming language with region-based memory management"
readmeQualityOk: true
url: "https://github.com/reussir-lang/reussir"
homepage: "https://reussir-lang.github.io/"
language: "Rust"
languages: ["Rust", "C++"]
languagePcts: [59, 22]
topics: ["functional-programming", "llvm", "memory-management", "mlir"]
stars: 35
forks: 3
openIssues: 14
closedIssues: 49
watchers: 0
contributors: 8
recentReleases: 1
createdAt: "2025-07-17T18:19:46Z"
lastCommitAt: "2026-10-31T15:59:09Z"
lastReleaseAt: "2026-10-31T15:17:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 61
maintainers: ["SchrodingerZhu", "QueClr"]
openGraphImageUrl: "https://opengraph.githubassets.com/eead08b064e20f37296e22dbd523b5d9a1b0b7a86860ea7480a33eeeec7bb5ae/reussir-lang/reussir"
---

---

## Overview

Reussir is a research compiler project built around one claim: memory reuse in
reference-counted functional programs should be represented and optimized
directly at the IR level.

The core idea is to make reusable storage explicit as SSA values called
**tokens**, carry those tokens through MLIR structured control flow, and perform
reuse analysis as an ordinary compiler problem rather than as a language-local
trick. In the current design, Reussir includes:

- an ownership-aware functional frontend,
- an MLIR dialect and pass pipeline for RC-managed objects,
- token-based reuse analysis over branches, regions, and loops,
- LLVM lowering and backend-oriented cleanups,
- a Rust runtime for RC objects and related support code,
- extensions for region-local mutable objects and polymorphic FFI.

The frontend language exists to drive and validate this compilation model, but
the main project identity is the compiler framework and object model, not a
surface syntax.

## Design Center

The current implementation is centered on two connected ideas:

- RC-based memory reuse should be explicit in the IR rather than hidden inside a
  language-specific compiler trick.
-…
