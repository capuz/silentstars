---
repo: "mateuszbaran/CovarianceEstimation.jl"
name: "CovarianceEstimation.jl"
description: "Lightweight robust covariance estimation in Julia"
url: "https://github.com/mateuszbaran/CovarianceEstimation.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [91]
topics: ["julia", "statistics", "covariance", "covariance-estimation"]
stars: 43
forks: 8
openIssues: 12
closedIssues: 30
watchers: 4
contributors: 11
recentReleases: 0
createdAt: "2018-11-26T08:55:56Z"
lastCommitAt: "2026-06-23T06:43:00Z"
lastReleaseAt: "2022-08-05T15:07:33Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 81
undervaluedScore: 30
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe2a8145c1aa8405c7fd546dd21b518e3a316d514a09a2988786ee459a0e881c/mateuszbaran/CovarianceEstimation.jl"
---

| Status | Coverage | Docs |
| :----: | :----: | :----: |
| [![CI](https://github.com/mateuszbaran/CovarianceEstimation.jl/workflows/CI/badge.svg)](https://github.com/mateuszbaran/CovarianceEstimation.jl/actions?query=workflow%3ACI+branch%3Amaster) | [ ![codecov.io](http://codecov.io/github/mateuszbaran/CovarianceEstimation.jl/coverage.svg?branch=master)](http://codecov.io/github/mateuszbaran/CovarianceEstimation.jl?branch=master) | [![](https://img.shields.io/badge/docs-stable-blue.svg)](https://mateuszbaran.github.io/CovarianceEstimation.jl/stable) [![](https://img.shields.io/badge/docs-dev-blue.svg)](https://mateuszbaran.github.io/CovarianceEstimation.jl/dev) |

# CovarianceEstimation.jl

Lightweight robust covariance estimation in Julia i.e. if you have a data matrix `X` of size `n×p` corresponding to `n` observations with `p` features, this package will help you to obtain an estimator of the covariance matrix of size `p×p` associated with this data.

**Note**: if you are interested in covariance estimation in the context of a linear regression, consider for now the package [CovarianceMatrices.jl](https://github.com/gragusa/CovarianceMatrices.jl) which focuses around that…
