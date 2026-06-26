---
repo: "SciML/SurrogatesBase.jl"
name: "SurrogatesBase.jl"
description: "Basically just a surrogate in disguise"
url: "https://github.com/SciML/SurrogatesBase.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 5
forks: 4
openIssues: 0
closedIssues: 2
watchers: 5
contributors: 35
recentReleases: 1
createdAt: "2023-09-12T14:00:19Z"
lastCommitAt: "2026-06-26T21:32:03Z"
lastReleaseAt: "2026-06-25T01:39:25Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 72
maintainers: ["ChrisRackauckas", "ChrisRackauckas-Claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca54be9195de80c8591d6940304aeefb8182d808023470fd7d3466a5705a8df0/SciML/SurrogatesBase.jl"
fundingLinks: ["GITHUB:https://github.com/SciML"]
---

# SurrogatesBase.jl

API for deterministic and stochastic surrogates.

Given data $((x_1, y_1), \ldots, (x_N, y_N))$ obtained by evaluating a function $y_i =
f(x_i)$ or sampling from a conditional probability density $p_{Y|X}(Y = y_i|X = x_i)$,
a **deterministic surrogate** is a function $s(x)$ (e.g. a [radial basis function
interpolator](https://en.wikipedia.org/wiki/Radial_basis_function_interpolation)) that
uses the data to approximate $f$ or some statistic of $p_{Y|X}$ (e.g. the mean),
whereas a **stochastic surrogate** is a stochastic process (e.g. a [Gaussian process
approximation](https://en.wikipedia.org/wiki/Gaussian_process_approximations)) that uses
the data to approximate $f$ or $p_{Y|X}$ *and* quantify the uncertainty of the
approximation.
