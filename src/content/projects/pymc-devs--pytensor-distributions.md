---
repo: "pymc-devs/pytensor-distributions"
name: "pytensor-distributions"
description: "PyTensor powered distributions"
readmeQualityOk: true
url: "https://github.com/pymc-devs/pytensor-distributions"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 4
openIssues: 7
closedIssues: 3
watchers: 0
contributors: 16
recentReleases: 3
createdAt: "2025-09-22T06:38:48Z"
lastCommitAt: "2026-08-29T10:21:50Z"
lastReleaseAt: "2026-08-29T10:17:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 64
undervaluedScore: 65
maintainers: ["aloctavodia", "github-actions[bot]", "rohanbabbar04"]
openGraphImageUrl: "https://opengraph.githubassets.com/58fff8c920d0f0d7c3176ffa0bf600e70fa9e2c929c4eee45ba9f6f83154233a/pymc-devs/pytensor-distributions"
---

# PyTensor-distributions

PyTensor-powered distributions

## Overview

PyTensor-distributions provides a collection of core probability expressions implemented in PyTensor. 

The goal of this package is to work as a unified, well-tested, and performant source for core probability expressions. This reduces redundancy across packages and allows other libraries to focus on providing specialized features and APIs on top of these core expressions.

The core expressions implemented in PyTensor-distributions are:

- `pdf`: the probability density function of a distribution. (We use `pdf` for both discrete and continuous distributions)
- `cdf`: the cumulative distribution function of a distribution.
- `ppf`: the percent point function (inverse of cdf) of a distribution.
- `sf`: the survival function (1 - cdf) of a distribution.
- `isf`: the inverse survival function (inverse of sf) of a distribution.
- `logpdf`: the log-probability of a distribution. (We use `pdf` for both discrete and continuous distributions)
- `logcdf`: the log-cumulative distribution function of a distribution.
- `logsf`: the log-survival function (1 - cdf) of a distribution
- `mean`: the mean of a distribution.
-…
