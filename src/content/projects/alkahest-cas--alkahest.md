---
repo: "alkahest-cas/alkahest"
name: "alkahest"
description: "High-performance computer algebra system built for humans and AI"
readmeQualityOk: true
url: "https://github.com/alkahest-cas/alkahest"
homepage: "https://alkahest-cas.github.io/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [75, 23]
topics: ["computer-algebra-system", "python", "rust", "agent-tools", "computer-algebra"]
stars: 20
forks: 0
openIssues: 0
closedIssues: 76
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-21T04:15:51Z"
lastCommitAt: "2026-11-23T11:37:38Z"
lastReleaseAt: "2026-05-28T21:26:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 50
maintainers: ["AregGevorgyan"]
openGraphImageUrl: "https://opengraph.githubassets.com/958627e8c57baa75c1a03607ead2879f9009be4418a1ec0b3f46b6aff8159021/alkahest-cas/alkahest"
---

# Alkahest

Alkahest is a high-performance computer algebra system built for both humans and agents. It is especially well suited for autoresearch agents doing work in pure and applied mathematics. Available as a Python package or a Rust crate.

> **Important**
>
> **Alkahest is in beta.** The API is still moving, and — despite the
> verification machinery described below — it will contain bugs, including
> answers that are wrong without saying so. Treat a result that matters as
> unverified until you have checked it: read the derivation log, export the Lean
> certificate where one is available, or cross-check against an independent
> source. `tests/silent_errors/` measures how often the library returns a
> confident wrong answer rather than refusing; that rate is not zero for inputs
> nobody has tried yet. Please report what you find.

The main stack is: Rust kernel → FLINT/Arb (polynomials, ball arithmetic) → egglog + colored e-graphs (simplification) → Cranelift/LLVM JIT + MLIR (native and GPU codegen) → PyO3 → Python
