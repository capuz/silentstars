---
repo: "jinluchang/Qlattice"
name: "Qlattice"
description: "A lattice QCD library."
readmeQualityOk: true
url: "https://github.com/jinluchang/Qlattice"
homepage: "https://jinluchang.github.io/Qlattice/"
language: "C++"
languages: ["C++", "Jupyter Notebook", "Python"]
languagePcts: [32, 30, 29]
stars: 17
forks: 11
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2016-07-09T01:59:14Z"
lastCommitAt: "2026-11-06T11:23:48Z"
lastReleaseAt: "2023-01-01T10:33:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 76
maintainers: ["jinluchang", "aroadant"]
openGraphImageUrl: "https://opengraph.githubassets.com/03e6432ef0d9a3db70f3397da4aa865fab5952022e074e5cf791f01936547058/jinluchang/Qlattice"
---

# Qlattice

A simple lattice QCD library.

Qlattice is a C++17 lattice QCD library with Cython bindings and a Python
interface. It is built around MPI: fields are decomposed over the lattice
geometry, and the high level operations (lattice I/O, propagator solving,
jackknife analysis, contractions, ...) are collective operations, so the same
script runs on a laptop and on a large cluster.

Contributions and pull requests are very welcome.

## Packages

| Package | Import | Contents |
|---|---|---|
| `qlat-utils` | `qlat_utils` | Core utilities: parallel-safe RNG (`RngState`), timers, coordinates, the QAR chunked file format, caches, `LatData`, data analysis (jackknife, fits, plotting via gnuplot) |
| `qlat` | `qlat` | Lattice QCD: geometry, gauge and fermion fields, HMC, propagators, contractions (`qlat/auto_contractor`), topology, Wilson flow, lattice I/O, job scripts |
| `qlat-grid` | `qlat_grid` | Interface to the [Grid](https://github.com/paboyle/Grid) framework |
| `qlat-cps` | `qlat_cps` | Interface to [CPS](https://github.com/RBC-UKQCD/cps) |
| (part of `qlat`) | `qlat_gpt` | Interface to [GPT](https://github.com/lehner/gpt) / Grid |

`qlat` re-exports everything from…
