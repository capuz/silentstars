---
repo: "patnr/MiniRes"
name: "MiniRes"
description: "Toy petroleum reservoir simulator in python using TPFA"
readmeQualityOk: true
url: "https://github.com/patnr/MiniRes"
homepage: "https://patnr.github.io/MiniRes/"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["history-matching", "reservoir-simulation"]
stars: 12
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2022-11-04T16:06:51Z"
lastCommitAt: "2026-09-17T08:15:50Z"
lastReleaseAt: "2026-09-15T13:09:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 78
maintainers: ["patnr"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5364e797eebfaa77a174107454d16e8de0d09b40e1f0e8625a83adea18f7831/patnr/MiniRes"
postedAt: "2026-09-15T08:59:38.490Z"
---

# MiniRes

A simple petroleum reservoir simulator
using TPFA (two-point flux approximation).
[**Documentation**](https://patnr.github.io/MiniRes/minires.html).

- **Small**: all of its physics fit in `core.py`'s 400 lines of code.
- **Capable**: two-phase, slight compressibility, BHP control, well paths, irregular outlines and faults (inactive cells), aquifers –
  **but** 2D uniform grid, immiscible, isothermal, and simple well models and operation.
- **Adjoint** model included; verified against finite differences.
- **Python**: [](https://pypi.org/project/minires/) (`pip install minires`), or demo it in a web browser via
  or [](https://patnr.github.io/MiniRes/wasm/) (no backend!).
- **Fast**: similar to [JutulDarcy's](https://github.com/sintefmath/JutulDarcy.jl) (but no JIT startup/wait) at equal accuracy on 2D two-phase cases of size $100$ – $10^5$.
- **Reliable**: reproduces the numbers of the [Matlab code (2007)](http://folk.ntnu.no/andreas/papers/ResSimMatlab.pdf) from NTNU/Sintef by Jørg E. Aarnes, Tore Gimse, and Knut–Andreas Lie.
  Further validated against Buckley–Leverett's
  analytic solution, ECLIPSE's numbers on the Egg model
  and JutulDarcy's on quarter five-spot,…
