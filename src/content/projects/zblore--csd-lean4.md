---
repo: "zblore/csd-lean4"
name: "csd-lean4"
description: "Lean 4 formalisation of a deterministic reconstruction of finite-dimensional quantum mechanics: the Born rule as a Liouville volume ratio"
readmeQualityOk: true
url: "https://github.com/zblore/csd-lean4"
homepage: "https://www.constraintsurfacedynamics.com"
language: "Lean"
languages: ["Lean"]
languagePcts: [98]
topics: ["born-rule", "formal-verification", "interactive-theorem-proving", "lean4", "mathlib", "quantum-foundations", "quantum-mechanics"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-03-27T21:50:31Z"
lastCommitAt: "2026-11-05T00:22:18Z"
lastReleaseAt: "2026-09-01T13:41:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["zblore"]
openGraphImageUrl: "https://opengraph.githubassets.com/58803dc4bcaecdc43c70b6fccf98013382d62b67ca112d2d53de9dde19f66262/zblore/csd-lean4"
---

# csd-lean4

Constraint-Surface Dynamics posits one object: an ontic surface `Σ`, concretely
`ℂℙ^{N-1} × T²`, with a Liouville measure `μL` and a deterministic,
measure-preserving flow. A preparation is a region of `Σ`, an outcome a subregion
of it, and probability is read as a fraction of ontic volume. This repository is a
Lean 4 and Mathlib formalisation of the finite-dimensional quantum mechanics that
results.

Constraint-Surface Dynamics provides a machine-checked reconstruction of the
principal finite-dimensional measurement statistics and update structure on its
stated ontic witness: deterministic ontic dynamics give definite context-indexed
outcomes without stochastic collapse or branching; Born weights follow from the
Fubini-Study/Kähler moment-map geometry and are realised as the measures of
explicit ontic fibre outcome cells rather than postulated as an independent
probability law; and outcome conditioning reproduces the Lüders update.
Basis-selective decoherence is proved for a supplied measurement context.

That geometry is built, not assumed: `ℂℙ^{N-1}` is a Kähler manifold whose Kähler
volume is the Fubini-Study measure, `exp(-itH)` is the Hamiltonian flow of…
