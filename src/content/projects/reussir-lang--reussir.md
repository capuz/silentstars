---
repo: "reussir-lang/reussir"
name: "reussir"
description: "A programming language with region-based memory management"
readmeQualityOk: true
url: "https://github.com/reussir-lang/reussir"
homepage: "https://reussir-lang.github.io/"
language: "Rust"
languages: ["Rust", "Haskell"]
languagePcts: [40, 30]
topics: ["functional-programming", "llvm", "memory-management", "mlir"]
stars: 20
forks: 3
openIssues: 8
closedIssues: 30
watchers: 0
contributors: 7
recentReleases: 1
createdAt: "2025-07-17T18:19:46Z"
lastCommitAt: "2026-07-05T06:33:04Z"
lastReleaseAt: "2026-07-02T23:00:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 62
maintainers: ["SchrodingerZhu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca6511e2c7945c3a052d2dd4ec44e95fb2cfa5af1c545a661c10a4f966e5f548/reussir-lang/reussir"
---

</p>

<h1 align="center">Reussir</h1>

  <strong>An MLIR-based compiler framework for token-based memory reuse in RC-managed functional programs</strong>
</p>

  <em>Frontend in Haskell, backend in MLIR/C++, runtime in Rust</em>
</p>

</p>

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
the main project identity is the compiler framework and…
