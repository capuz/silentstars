---
repo: "ValeevGroup/SeQuant"
name: "SeQuant"
description: "SeQuant: Symbolic Algebra of Tensors over Operators and Scalars"
readmeQualityOk: true
url: "https://github.com/ValeevGroup/SeQuant"
homepage: "https://valeevgroup.github.io/SeQuant/"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 41
forks: 10
openIssues: 39
closedIssues: 119
watchers: 9
contributors: 18
recentReleases: 0
createdAt: "2018-03-26T15:24:23Z"
lastCommitAt: "2026-10-09T18:55:35Z"
lastReleaseAt: "2026-02-19T02:24:32Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 56
maintainers: ["evaleev", "zhihao-deng"]
openGraphImageUrl: "https://opengraph.githubassets.com/65e3b9b20d66ecbc89cfc01a1c871e7987493cb3ce4662417ea5ac357308d633/ValeevGroup/SeQuant"
---

# SeQuant: Symbolic Tensor Algebra in C++

## Synopsis

SeQuant is a computer algebra system for performing symbolic algebra of tensors over scalar and
operator rings, applied primarily in quantum chemistry and quantum many-body physics. In addition to symbolic manipulation it
can numerically evaluate (with an appropriate external tensor backend) general tensor algebra expressions.

Computer algebra systems (CAS) like SeQuant are typically implemented within generic CAS like Mathematica or Maple, or
using high-level languages like Python. In fact, version 1 of SeQuant was written in Mathematica. However, the
performance of high-level languages is not sufficient for practical use cases.
SeQuant is written in C++ and is designed to be as efficient as possible without loss of generality.

See detailed documentation at [https://valeevgroup.github.io/SeQuant/](https://valeevgroup.github.io/SeQuant/).

## Installation

The short version:

- configure (from top SeQuant source directory): `cmake -B build -S . -DCMAKE_INSTALL_PREFIX=/path/to/where/sequant/to/be/installed`
- build and install: `cmake --build build --target install`

For detailed instructions see [SeQuant: Installation…
