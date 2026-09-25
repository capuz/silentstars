---
repo: "LionSR/TNLean"
name: "TNLean"
description: "Tensor-network theory, formalized in Lean 4: the fundamental theorem of matrix product states, canonical forms, parent Hamiltonians, matrix-product density operators, and projected entangled pair states, building on the QICLean quantum-information library"
readmeQualityOk: true
url: "https://github.com/LionSR/TNLean"
homepage: "https://sirui-lu.com/TNLean/"
language: "Lean"
languages: ["Lean", "TeX"]
languagePcts: [60, 37]
topics: ["formalization", "lean4", "mathlib", "matrix-product-states", "tensor-networks"]
stars: 38
forks: 3
openIssues: 195
closedIssues: 2129
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2026-02-07T17:57:04Z"
lastCommitAt: "2026-09-25T09:01:25Z"
lastReleaseAt: "2026-08-18T13:12:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 49
maintainers: ["LionSR", "texra-ai", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2a7c67b44868b57c8b5c630a4d0fa6ead5f44a1bebf054eced082ed88fbc9b9/LionSR/TNLean"
discussionCount: 0
---

</p>

  <b>Tensor-network theory, formalized in Lean 4.</b>
</p>

</p>

TNLean is a [Lean 4](https://lean-lang.org/) library, built on
[Mathlib](https://github.com/leanprover-community/mathlib4), that formalizes
the mathematics of tensor networks: matrix product states (MPS), their
canonical forms and gauge structure, and the theorems that classify them. The
quantum-information theory this rests on lives in the companion library
[QICLean](https://github.com/LionSR/QICLean), which TNLean builds on. Blueprint
diagrams are drawn by the companion package
[tenkz](https://github.com/LionSR/tenkz), pinned from `tenkz.toml`. Every
result is checked by Lean down to the axioms it assumes.

The first released part of the library is the **fundamental theorem of matrix
product states** (Pérez-García, Verstraete, Wolf, Cirac 2007; Cirac,
Pérez-García, Schuch, Verstraete 2017): two tensors generate the same quantum
states at every system size exactly when an invertible change of basis on the
bond indices, a gauge transformation, relates them. Proving this required
formalizing the quantum-information theory the proof rests on — channel
representations, Schwarz inequalities, quantum…
