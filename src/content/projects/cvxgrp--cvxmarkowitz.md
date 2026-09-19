---
repo: "cvxgrp/cvxmarkowitz"
name: "cvxmarkowitz"
description: "Markowitz portfolio construction on CVXPY — DPP-compliant builders that solve long sequences of related problems without recompiling as assets and factors come and go"
readmeQualityOk: true
url: "https://github.com/cvxgrp/cvxmarkowitz"
homepage: "http://www.cvxgrp.org/cvxmarkowitz/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["convex-optimization", "cvxpy", "markowitz", "portfolio-optimization", "quantitative-finance"]
stars: 37
forks: 9
openIssues: 4
closedIssues: 113
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2023-06-09T14:19:55Z"
lastCommitAt: "2026-09-19T02:47:23Z"
lastReleaseAt: "2025-01-24T12:39:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 61
maintainers: ["tschm", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dee6e86a2dbe45326957ad2e662286e4fc4831528b8618e8ccd9e8495704b2b/cvxgrp/cvxmarkowitz"
---

# [cvxmarkowitz](http://www.cvxgrp.org/cvxmarkowitz)

## Motivation

We stand on the shoulders of [CVXPY](https://www.cvxpy.org).

We solve problems arising in portfolio construction following the ideas of
[Harry Markowitz](https://en.wikipedia.org/wiki/Harry_Markowitz). Markowitz gave
diversification a mathematical home in the 1950s.

Our assumption is that we solve multiple problems of the same type in a row.
The input for the $n$th problem may depend on the outcome of a previous problem,
e.g. the $n-1$th. Hence, we need to respect their sequential nature and order.

We can however hope that the problems we construct are [DPP](https://www.cvxpy.org/tutorial/advanced/index.html#disciplined-parametrized-programming)
compliant. The first time a DPP-compliant problem is solved, CVXPY compiles it
and caches the mapping from parameters to problem data. As a result, subsequent
rewritings of DPP problems can be substantially faster.

In practice, the problems are not constant in size. Assets are added or removed,
factors are added or removed, and so on. We expect the user is providing the
number of assets a priori. We can then construct a problem suitable for a number
of assets equal or…
