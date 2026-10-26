---
repo: "ax-le/nn-fac"
name: "nn-fac"
description: "Toolbox (python) for computing some Nonnegative Factorization by solving Nonnegative Least Squares problems."
readmeQualityOk: true
url: "https://github.com/ax-le/nn-fac"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-08-13T12:40:44Z"
lastCommitAt: "2026-10-26T09:17:27Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 70
undervaluedScore: 46
maintainers: ["BaptisteHi", "ax-le"]
openGraphImageUrl: "https://opengraph.githubassets.com/9245d5669cf2a6c9e518b2f82ea0f1300bd1950ece54adb4cfbcb9a3119c2d9d/ax-le/nn-fac"
---

# nn-fac: Nonnegative Factorization techniques toolbox
Python code for computing some Nonnegative Factorizations, using either an accelerated version of Hierarchical Alternating Least Squares algorithm (HALS) with resolution of Nonnegative Least Squares problem (NNLS) [1] for factorizations subject to the minimization of the Euclidean/Frobenius norm, or the Multiplicative Update [2,3] for factors, by minimizing the $\beta$-divergence [3]..

This work has been done during my Research Master's (SIF, master.irisa.fr) internship in PANAMA team at IRISA/Inria Rennes, under the direction of BERTIN Nancy and COHEN Jeremy.

It has been extended during my PhD in the same Team, under the direction of BERTIN Nancy and COHEN Jeremy and BIMBOT Frederic.

## Installation

You can install it using pip:

    pip install nn-fac

You can then use code by typing:

    import nn_fac

For example, if you want to use nmf, type:

    import nn_fac.nmf

Don't hesitate to reach the author in case of problem. Comments are welcomed!

## Contents
### NNLS
This toolbox contains a NNLS resolution algorithm, developed as described in [1]. This code is based on COHEN Jeremy python code adaptation of GILLIS…
