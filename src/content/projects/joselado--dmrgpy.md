---
repo: "joselado/dmrgpy"
name: "dmrgpy"
description: "DMRGPy is a Python library to compute quasi-one-dimensional spin chains and fermionic systems using matrix product states with DMRG as implemented in ITensor. Most of the computations can be performed both with DMRG and exact diagonalization for small systems, which allows one to benchmark the results."
readmeQualityOk: true
url: "https://github.com/joselado/dmrgpy"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [52, 46]
topics: ["spinchains", "matrix-product-states", "itensor", "dmrg-algorithm", "fermionchains", "parafermions", "kernel-polynomial-method", "many-body-excitations"]
stars: 114
forks: 24
openIssues: 0
closedIssues: 32
watchers: 7
contributors: 2
recentReleases: 0
createdAt: "2018-07-13T17:37:53Z"
lastCommitAt: "2026-11-07T16:11:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 47
maintainers: ["joselado"]
openGraphImageUrl: "https://opengraph.githubassets.com/2089d3b148e8473eaee07ea51b1d5a67b3a9e4d37f827ca1bf770caca16c135e/joselado/dmrgpy"
---

## DMRGPY ##

# Summary #

DMRGPY is a Python library to study quasi-one-dimensional quantum
many-body systems with matrix product states: spin chains, spinless and
spinful fermions, bosons and parafermions. Ground states and excitations
are computed with the density matrix renormalization group (DMRG), based
on ITensor. Small systems can also be solved with exact diagonalization
(ED), so you can check the DMRG results. Chains can be finite, or
infinite with iDMRG and VUMPS.

Many examples are in the `examples` folder.

# Disclaimer #

This library is still under heavy development.

# How to install #

## With pip ##

```bash
pip install dmrgpy
```

This installs the Python part of the library. It does not need a
compiler. It contains exact diagonalization and a DMRG/TDVP code written
in pure Python, which is used by default when the C++ part is not
compiled. You can also ask for it explicitly:

```python
sc = spinchain.Spin_Chain(["S=1/2"]*n, itensor_version="python")
```

The C++ version of ITensor is not in the pip package, because it is large
and must be compiled on your machine. To get it, clone this repository
and follow the instructions below. Optional extras:
`pip install…
