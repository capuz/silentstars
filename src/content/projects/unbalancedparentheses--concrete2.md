---
repo: "unbalancedparentheses/concrete2"
name: "concrete2"
description: "Systems programming language designed for safe and predictable code, with semantics defined by a small core calculus formalized and proven sound in Lean"
readmeQualityOk: true
url: "https://github.com/unbalancedparentheses/concrete2"
homepage: "https://unbalancedparentheses.github.io/concrete2/"
language: "Shell"
languages: ["Shell", "Lean"]
languagePcts: [39, 37]
stars: 16
forks: 2
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2025-12-22T06:11:35Z"
lastCommitAt: "2026-10-26T17:31:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 59
maintainers: ["unbalancedparentheses"]
openGraphImageUrl: "https://opengraph.githubassets.com/d951ab9af159361d3261d69be210618f5a705f16b7386734ff16d2c3e4f407e2/unbalancedparentheses/concrete2"
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
not a proof that a program is correct. See [Claims Today](https://github.com/unbalancedparentheses/concrete2/blob/HEAD/docs/verification/CLAIMS_TODAY.md)
for the guarantees and boundaries, and the…
