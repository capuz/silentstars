---
repo: "reussir-lang/reussir"
name: "reussir"
description: "A programming language with region-based memory management"
readmeQualityOk: true
url: "https://github.com/reussir-lang/reussir"
homepage: "https://reussir-lang.github.io/"
language: "Rust"
languages: ["Rust", "C++"]
languagePcts: [61, 22]
topics: ["functional-programming", "llvm", "memory-management", "mlir"]
stars: 34
forks: 3
openIssues: 10
closedIssues: 47
watchers: 0
contributors: 7
recentReleases: 2
createdAt: "2025-07-17T18:19:46Z"
lastCommitAt: "2026-08-11T04:48:46Z"
lastReleaseAt: "2026-08-11T04:42:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 63
maintainers: ["SchrodingerZhu"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7eb81ec620764a7d051b52cff341467ffb374cd912c46a10aee7cbffc0ffc77/reussir-lang/reussir"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="misc/logos/reussir-horizontal-dark.svg">
  </picture>
</p>

  <strong>An MLIR-based compiler framework for token-based memory reuse in RC-managed functional programs</strong>
</p>

  <em>Frontend in Rust, backend in MLIR/C++, runtime in Rust</em>
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

The frontend language exists to drive and validate this…
