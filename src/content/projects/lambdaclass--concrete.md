---
repo: "lambdaclass/concrete"
name: "concrete"
description: "Concrete is a simple programming language specifically crafted for creating highly scalable systems that are reliable, efficient, and easy to maintain."
readmeQualityOk: true
url: "https://github.com/lambdaclass/concrete"
homepage: "https://lambdaclass.github.io/concrete/"
language: "Lean"
languages: ["Lean", "Shell"]
languagePcts: [42, 40]
topics: ["mlir", "programming-language"]
stars: 340
forks: 21
openIssues: 83
closedIssues: 25
watchers: 9
contributors: 11
recentReleases: 0
createdAt: "2023-12-28T15:10:17Z"
lastCommitAt: "2026-10-22T07:23:21Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 83
undervaluedScore: 34
maintainers: ["unbalancedparentheses"]
openGraphImageUrl: "https://opengraph.githubassets.com/09c6c056e9e341f09fcec5a327227dbc6982546be61e8e39d870db8d038f6bf3/lambdaclass/concrete"
discussionCount: 0
---

# The Concrete Programming Language

[tg-badge]: https://img.shields.io/endpoint?url=https%3A%2F%2Ftg.sumanjay.workers.dev%2Fconcrete_proglang%2F&logo=telegram&label=chat&color=neon
[tg-url]: https://t.me/concrete_proglang

**Concrete is a systems programming language without garbage collection that
checks resource ownership, makes external authority explicit in function
signatures, and supports machine-checked proofs for a defined subset of
code—with remaining assumptions made explicit.**

It compiles to native code. Linear ownership makes resource management explicit
and compiler-checked; its verification tools attach Lean-checked evidence to
supported code. Proofs, tests, runtime checks and trusted assumptions remain
distinct. The compiler itself is written in Lean 4.

**Status: experimental.** The language, standard library and tooling are still
evolving. Concrete is not a fully verified compiler, and a successful build is
not a proof that a program is correct. See [Claims Today](https://github.com/lambdaclass/concrete/blob/HEAD/docs/verification/CLAIMS_TODAY.md)
for the guarantees and boundaries, and the [roadmap](https://github.com/lambdaclass/concrete/blob/HEAD/ROADMAP.md)…
