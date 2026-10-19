---
repo: "Quantum-Motion/quiche"
name: "quiche"
description: "A toolkit for studying quantum computing algorithms for quantum chemistry, with a focus on quantum phase estimation."
readmeQualityOk: true
url: "https://github.com/Quantum-Motion/quiche"
homepage: "https://quantum-motion.github.io/quiche/"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [51, 30]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 4
recentReleases: 1
createdAt: "2026-06-22T11:47:46Z"
lastCommitAt: "2026-10-19T09:14:01Z"
lastReleaseAt: "2026-09-13T15:10:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 48
maintainers: ["vaferreiQMT", "trbromley", "xdvriend"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb350d0a2c5fb521845f1588027f39608da1ceed1d086c76568e3c3c63e03845/Quantum-Motion/quiche"
---

# QUICHE

**QU**antum **I**ntegrated **CHE**mistry is a toolkit for studying quantum computing
algorithms for quantum chemistry, with a focus on ground-state energy calculations
via quantum phase estimation (QPE).

The main entry point to QUICHE is a `QPESpec` object, which describes the target chemical system, phase estimation circuit and Hamiltonian simulation method. It then dispatches to either of two backends:

- a **resource estimation** backend built on [Qualtran](https://github.com/quantumlib/Qualtran), which decomposes the calculation into its subroutines and counts the logical qubits and gates it would need.
- a **simulation** backend built on [QuEST](https://github.com/QuEST-Kit/QuEST), which executes the calculation as a state-vector simulation and returns the estimated phase.

> [!WARNING]
> This project is in early active development and should not be considered production-ready.  
> Breaking changes may occur without notice before v1.0.

---

## Features

- A range of quantum phase estimation algorithms including single- and multi-ancilla methods.
- A wide variety of Hamiltonian simulation techniques, such as Suzuki–Trotter, QDRIFT and qubitisation.
- Extensible,…
