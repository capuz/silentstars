---
repo: "KarpelesLab/z3rs"
name: "z3rs"
description: "Pure-Rust, no_std port of the Z3 theorem prover — SMT-LIB 2 front end, C ABI, no GMP/C/native dependencies"
readmeQualityOk: true
url: "https://github.com/KarpelesLab/z3rs"
homepage: "https://docs.rs/z3rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["cdcl", "constraint-solver", "formal-verification", "no-std", "rust", "sat-solver", "satisfiability", "smt", "smt-lib", "smt-solver"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-07-03T13:36:55Z"
lastCommitAt: "2026-10-31T15:58:03Z"
lastReleaseAt: "2026-10-25T15:39:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 47
maintainers: ["MagicalTux"]
openGraphImageUrl: "https://opengraph.githubassets.com/828176574f808cac11e52c21fd439980db8886cbeae92ad6b731073072d6b2bd/KarpelesLab/z3rs"
---

# z3rs

A **pure-Rust, `no_std`** port of the [Z3 theorem prover](https://github.com/Z3Prover/z3),
free of any third-party or native dependency.

`z3rs` reimplements Z3 (tracking **v5.3.2**) as a single Rust crate with **no
GMP, no C, no `-sys` crate**. Its only dependency is our own pure-Rust,
dependency-free numeric core [`puremp`](https://github.com/KarpelesLab/puremp),
so the resolved dependency tree is just `z3rs → puremp`. The library is
`no_std` (needs only `alloc`); the optional `std` feature adds std-backed
conveniences. It aims to be behaviourally faithful to upstream Z3.

> **Status: feature-complete port, sound, hardening toward full parity.** Every
> Z3 theory has a present, **sound** implementation driven by a full **SMT-LIB 2**
> front end (`check-sat(-assuming)`, `get-value`, `get-model`, `get-unsat-core`,
> `get-proof`, `push`/`pop`, `define-fun`, datatypes, …) and a **C ABI** (`z3_api.h`
> slice big enough to link and run real find-model programs). In place:
>
> - a hash-consing AST, a simplifying rewriter, a **CDCL SAT core** (DIMACS), and a
>   **lazy DPLL(T)** engine with **bidirectional Nelson–Oppen** combination;
> - **QF_UF** (congruence closure),…
