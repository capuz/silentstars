---
repo: "lean-dojo/FloatLib"
name: "FloatLib"
description: "Arbitrary verified fast precision floating point arithmetic in Lean, with proofs, optimized backends, and support for IEEE binary and decimal, posits, and custom formats."
readmeQualityOk: true
url: "https://github.com/lean-dojo/FloatLib"
homepage: "https://lean-dojo.github.io/FloatLib/"
language: "SMT"
languages: ["SMT", "Lean"]
languagePcts: [57, 38]
topics: ["float", "floating-point", "lean4", "library", "math", "scientific-computing"]
stars: 78
forks: 7
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 4
recentReleases: 3
createdAt: "2026-09-14T17:19:25Z"
lastCommitAt: "2026-11-07T22:51:14Z"
lastReleaseAt: "2026-11-03T06:41:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 38
maintainers: ["Robertboy18", "rbeauchamp"]
openGraphImageUrl: "https://opengraph.githubassets.com/62058ff591b491e10ed22ce59a30c0608f43036b6eb702cc6738827d6cdde179/lean-dojo/FloatLib"
---

Verified Floating-Point Arithmetic in Lean

FloatLib is a Lean 4 library for arbitrary precision floating-point arithmetic and verified
numerical computation. It provides executable operations, numerical specifications and
proofs connecting them, together with rounding theorems, error bounds and numerical proof
automation.

The library supports IEEE binary and decimal formats, posits with exact quire accumulation,
and low precision formats for machine learning. Shared integer kernels and numerical
interfaces support custom formats and rounding rules. The specifications include signed
zeros, infinities, NaNs and exception flags.

Our [guide](https://github.com/lean-dojo/FloatLib/blob/HEAD/site/content/chapters) works through calculations, proofs and the algorithms behind
them, and its [first chapter](https://github.com/lean-dojo/FloatLib/blob/HEAD/site/content/chapters/01-using-the-library.md) is the place to
start.

## Installation

From a checkout of this repository, fetch the Mathlib cache and build FloatLib:

```bash
lake exe cache get
lake build
```

Use the Lean version in [lean-toolchain](https://github.com/lean-dojo/FloatLib/blob/HEAD/lean-toolchain). Everything else is…
