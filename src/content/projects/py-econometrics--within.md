---
repo: "py-econometrics/within"
name: "within"
description: "A fast linear solver for fixed effects problems"
readmeQualityOk: true
url: "https://github.com/py-econometrics/within"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [74, 26]
stars: 12
forks: 5
openIssues: 29
closedIssues: 167
watchers: 2
contributors: 8
recentReleases: 1
createdAt: "2026-03-04T14:02:23Z"
lastCommitAt: "2026-11-19T12:01:49Z"
lastReleaseAt: "2026-10-09T20:11:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 61
maintainers: ["schroedk", "leninworld", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/398bd7f781740645b887b7c0bfb3c84b52b4f49f0b5bd3538c80886f802bb2d2/py-econometrics/within"
discussionCount: 1
---

# within

`within` provides high-performance solvers for projecting out high-dimensional fixed effects from regression problems.

By the Frisch-Waugh-Lovell theorem, estimating a regression of the form *y = Xβ + Dα + ε* reduces to a sequence of least-squares projections, one for y and one for each column of X, followed by a cheap regression fit on the resulting residuals. The projection step of solving the normal equations *D'Dx = D'z* is the computational bottleneck, which is the problem `within` is designed to solve.

`within`'s solvers are tailored to the structure of fixed effects problems, which can be represented as a graph (as first noted by Correia, 2016). Concretely, `within` uses modified LSMR with a domain decomposition (Schwarz) preconditioner, backed by approximate Cholesky local solvers (Gao et al, 2025).
