---
repo: "LionSR/TNLean"
name: "TNLean"
description: "Lean 4 formalization of the Fundamental Theorem of Matrix Product States (arXiv:2011.12127)"
readmeQualityOk: true
url: "https://github.com/LionSR/TNLean"
language: "Lean"
languages: ["Lean", "TeX"]
languagePcts: [62, 35]
stars: 19
forks: 0
openIssues: 108
closedIssues: 944
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2026-02-07T17:57:04Z"
lastCommitAt: "2026-07-16T05:59:09Z"
lastReleaseAt: "2026-06-18T17:11:41Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 47
maintainers: ["texra-ai", "LionSR"]
openGraphImageUrl: "https://opengraph.githubassets.com/75f587fc75b3eefcb781a6cc569778e8ccafadb0d4c997224dcfdb8d378a3539/LionSR/TNLean"
discussionCount: 0
---

</p>

  <b>Tensor-network theory, formalized in Lean 4.</b>
</p>

TNLean is a [Lean 4](https://lean-lang.org/) library, built on
[Mathlib](https://github.com/leanprover-community/mathlib4), that formalizes
the mathematics of tensor networks: matrix product states (MPS), the quantum
channels and transfer operators that govern them, and the theorems relating
the two. Every result is checked by Lean down to the axioms it assumes.

The first released part of the library is the **fundamental theorem of matrix
product states** (Pérez-García, Verstraete, Wolf, Cirac 2007; Cirac,
Pérez-García, Schuch, Verstraete 2017): two tensors generate the same quantum
states at every system size exactly when an invertible change of basis on the
bond indices, a gauge transformation, relates them. Proving this required
formalizing the quantum-information theory the proof rests on, following
Wolf's *Quantum Channels & Operations*: channel representations, Schwarz
inequalities, quantum Perron-Frobenius theory, and the quantum Wielandt
inequality. The library also contains material beyond the fundamental
theorem, at varying levels of completeness; the sections below say what is
proved and what is not.…
