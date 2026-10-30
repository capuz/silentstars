---
repo: "paulcon/active_subspaces"
name: "active_subspaces"
description: "Python Active-subspaces Utility Library"
readmeQualityOk: true
url: "https://github.com/paulcon/active_subspaces"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 81
forks: 51
openIssues: 4
closedIssues: 2
watchers: 19
contributors: 6
recentReleases: 0
createdAt: "2014-12-17T22:09:40Z"
lastCommitAt: "2026-10-30T10:23:10Z"
lastReleaseAt: "2016-09-19T22:25:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 86
undervaluedScore: 34
maintainers: ["paulcon"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2b163de655a7ba70bd71d7f640c0ac74d04d3629a6c3cbe7c46b13a28b5f5fd/paulcon/active_subspaces"
---

# active_subspaces

Python tools for discovering and exploiting **active subspaces**: low-dimensional structure in a
function of many inputs.

The active subspace of a function f(x) is spanned by the leading eigenvectors of the matrix
C = E[∇f ∇fᵀ], the average outer product of the gradient over the distribution of the inputs
(gradients taken with respect to the normalized inputs).
Perturbing the inputs along these directions changes f more, on average, than perturbing them
along the remaining directions. When a few eigenvalues dominate, parameter studies such as
integration, optimization and surrogate construction can work on a few active variables instead of
all the inputs.

The library

- estimates the subspace from gradients, from input/output pairs or from a model, with bootstrap
  intervals and rules for choosing its dimension; alternatives include sufficient dimension
  reduction estimators (OLS, QPHD, SIR, pHd, SAVE, OPG);
- describes the geometry of the active variables (intervals, zonotopes) and maps between full and
  active coordinates;
- fits polynomial and radial-basis surrogates on the active variables;
- integrates and minimizes functions by exploiting the…
