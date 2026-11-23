---
repo: "Fifis/pnd"
name: "pnd"
description: "R package for accurate and quick numerical derivatives of arbitrary order"
readmeQualityOk: true
url: "https://github.com/Fifis/pnd"
language: "R"
languages: ["R"]
languagePcts: [97]
topics: ["finite-differences", "numerical-differentiation", "parallel-algorithm", "r-package", "step-size"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-12-05T23:00:09Z"
lastCommitAt: "2026-11-23T10:25:38Z"
lastReleaseAt: "2026-05-26T10:40:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 67
maintainers: ["Fifis"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/727950244/c2c7f7cb-b5c3-433e-a196-d910b9c26849"
---

# pnd

An R package for computing fast and accurate numerical derivatives.

In the past, I was using [numDeriv](https://CRAN.R-project.org/package=numDeriv) to compute numerical gradients.
However, the results were not stable for some functions, and I could not investigate the source of this instability.
Different step sizes yielded different results. Small step sizes were sometimes better, sometimes worse.

The `pnd` package was designed to offer a comprehensive tool-kit containing popular algorithms for finite differences, numerical gradients, Jacobians, and Hessians.

Optimal step sizes and parallel evaluation of numerical derivatives translate directly to faster numerical optimisation and statistical inference.
