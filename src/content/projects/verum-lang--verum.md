---
repo: "verum-lang/verum"
name: "verum"
description: "The Verum Programming Language"
url: "https://github.com/verum-lang/verum"
homepage: "https://verum-lang.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["programming-language", "architecture-as-code", "interpreted-language", "interpreter", "meta-programming", "proof-assistant", "refinement-types", "embedded-programming", "gpu-programming", "llvm"]
stars: 12
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-10T20:41:04Z"
lastCommitAt: "2026-06-30T22:37:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 53
maintainers: ["old8man"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd8510cf315b9884772fb732639460d04e99e41d54783ce53ef758c56253c2ca/verum-lang/verum"
discussionCount: 5
---

# Verum

**A verifiable systems programming language.**

Refinement types discharged by SMT · three-tier memory safety (CBGR) ·
capability-based contexts · dependent types with cubical HoTT · a single
bytecode IR that runs under both interpreter and AOT native ·
structured concurrency with OTP-style supervision · a standard library
written in Verum, without a libc or Rust-runtime dependency.

[**Documentation**](https://verum-lang.org/docs/intro) ·
[**Language tour**](https://verum-lang.org/docs/getting-started/tour) ·
[**Blog**](https://verum-lang.org/blog) ·
[**Grammar**](https://verum-lang.org/docs/reference/grammar-ebnf)

</div>

---

## What it is

Verum is a statically-typed compiled systems language built around one
rule — **semantic honesty**: every name, every syntax form, every
annotation reflects what the compiler does with it. No exceptions
that unwind silently past function boundaries, no `static` lifetime
that means "statically checked", no ambient globals, no `!`-suffix
magic. Three reserved keywords (`let`, `fn`, `is`); everything else is
contextual.

The type system ships with refinement types (`Int { self > 0 }`)
discharged by an SMT backend; seven…
