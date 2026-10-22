---
repo: "unbalancedparentheses/concrete2"
name: "concrete2"
description: "Systems programming language designed for safe and predictable code, with semantics defined by a small core calculus formalized and proven sound in Lean"
readmeQualityOk: true
url: "https://github.com/unbalancedparentheses/concrete2"
homepage: "https://unbalancedparentheses.github.io/concrete2/"
language: "Lean"
languages: ["Lean", "Shell"]
languagePcts: [42, 40]
stars: 16
forks: 2
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2025-12-22T06:11:35Z"
lastCommitAt: "2026-10-22T07:23:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 59
maintainers: ["unbalancedparentheses"]
openGraphImageUrl: "https://opengraph.githubassets.com/a982ade0ef1e3d540f6fe4ae24f4d9b365a40c71cf2abb47c19f207ee8c6974d/unbalancedparentheses/concrete2"
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
