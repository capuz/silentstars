---
repo: "dforero0896/pyfcfc"
name: "pyfcfc"
description: "Python wrapper for the FCFC code for fast two-point correlation function computation."
readmeQualityOk: true
url: "https://github.com/dforero0896/pyfcfc"
language: "C"
languages: ["C", "Jupyter Notebook"]
languagePcts: [68, 20]
topics: ["clustering", "cosmology", "radial-distribution-function", "2pcf", "two-point-function"]
stars: 5
forks: 3
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-04-30T16:57:43Z"
lastCommitAt: "2026-11-03T11:15:03Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 85
undervaluedScore: 66
maintainers: ["dforero0896", "contributor"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dfbc682a00bc8f5e61b29faab4de2472c251fceaad06ad0c91eb8a95da2c567/dforero0896/pyfcfc"
---

# pyfcfc — Python bindings for the Fast Correlation Function Calculator

`pyfcfc` wraps the two pair-counting components of the C package
[FCFC](https://github.com/cheng-zhao/FCFC) (by Cheng Zhao) so that they can
be driven entirely from Python with in-memory NumPy catalogues:

| module         | FCFC component | data                                  | line of sight            |
|----------------|----------------|---------------------------------------|--------------------------|
| `pyfcfc.boxes` | `FCFC_2PT_BOX` | periodic-box Cartesian coordinates    | box z axis               |
| `pyfcfc.sky`   | `FCFC_2PT`     | Cartesian comoving coordinates, or {RA, Dec, redshift} with on-the-fly cosmological conversion | pair midpoint            |

Pair counts, correlation functions, multipoles and projected correlation
functions are computed with k-d tree or ball tree dual-tree traversal,
OpenMP parallelisation and (optionally) SIMD vectorisation, and returned
as plain NumPy arrays in a Python dictionary.

The package also ships utilities (`pyfcfc.utils`) to accumulate
split-random measurements, integrate correlation functions, and convert
results into…
