---
repo: "LionSR/QICLean"
name: "QICLean"
description: "Quantum information and channels, formalized in Lean 4: quantum states and entanglement theory, channel representations, Kadison-Schwarz theory, quantum Perron-Frobenius and spectral theory, GKSL semigroups, and entropy, following Wolf's Quantum Channels & Operations"
readmeQualityOk: true
url: "https://github.com/LionSR/QICLean"
homepage: "http://sirui-lu.com/QICLean/"
language: "Lean"
languages: ["Lean", "TeX"]
languagePcts: [74, 25]
topics: ["formalization", "lean4", "mathlib", "quantum-channels", "quantum-information", "entanglement"]
stars: 13
forks: 1
openIssues: 46
closedIssues: 377
watchers: 0
contributors: 5
recentReleases: 6
createdAt: "2026-08-19T10:02:35Z"
lastCommitAt: "2026-11-19T04:55:44Z"
lastReleaseAt: "2026-11-02T12:01:36Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 58
maintainers: ["claude", "LionSR", "RayLu97"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e08e0e13a088aae47727f24c14ed330529384974b4fe5018dfe7db15db8a441/LionSR/QICLean"
---

QICLean is a [Lean 4](https://lean-lang.org/) library, built on
[Mathlib](https://github.com/leanprover-community/mathlib4), that formalizes
finite-dimensional quantum information theory: the basics of quantum
mechanics (density matrices, POVMs, the Schmidt decomposition, purification
and steering, Wigner's theorem), quantum channels in their Kraus, Choi, and
Stinespring representations, Kadison-Schwarz inequalities, quantum
Perron-Frobenius theory (irreducibility, primitivity, peripheral spectrum),
GKSL semigroups, entanglement theory (entanglement witnesses, Schmidt
number, separability, the partial transpose and reduction criteria),
positive-but-not-completely-positive maps, and entropy. The library draws
heavily on M. Wolf's lecture notes, *Quantum Channels & Operations: A Guided
Tour*, alongside results
formalized from the wider quantum-information literature. Some files contain
unfinished proofs (`sorry`) or results assumed as axioms; the badges above
track the current counts.
