---
repo: "tobiasosborne/Bennett.jl"
name: "Bennett.jl"
description: "The Enzyme of reversible computation. LLVM-level compiler: any pure function → reversible circuit (NOT/CNOT/Toffoli gates)."
readmeQualityOk: true
url: "https://github.com/tobiasosborne/Bennett.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [98]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-04-11T12:24:27Z"
lastCommitAt: "2026-10-04T10:00:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["tobiasosborne"]
openGraphImageUrl: "https://opengraph.githubassets.com/57c93b31b63ee3ed5ab1a8103cbbf439067b9853fdd96a9513779656f395e8e2/tobiasosborne/Bennett.jl"
---

# Bennett.jl

**Compile any pure Julia function into a classical reversible circuit — NOT, CNOT,
Toffoli — with every ancilla provably returned to zero, correct by construction.**

A classical computation throws information away. `x ↦ x & 1` forgets which `x` you
started with, and that forgetting is exactly what makes it irreversible — and, by
Landauer's principle, what dissipates heat. [Bennett's 1973
construction](https://doi.org/10.1147/rd.176.0525) buys the information back: run the
computation, **copy out** the answer, then run the computation **backwards** to erase
every intermediate, leaving every scratch wire clean. Bennett.jl does this
automatically, at the **LLVM IR level**, for plain Julia functions on plain integers
(and `Float64` via branchless soft-float) — no special types, no operator overloading,
no annotations. Plain Julia in, reversible circuit out.

```julia
using Bennett

# Any pure Julia function — no special types, no annotations.
f(x::Int8) = x*x + Int8(3)*x + Int8(1)

c = reversible_compile(f, Int8)     # extract LLVM IR → lower to gates → Bennett-ize
simulate(c, Int8(5))                # => 41          (= 25 + 15 + 1)
verify_reversibility(c)             #…
