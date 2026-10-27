---
repo: "marius311/CMBLensing.jl"
name: "CMBLensing.jl"
description: "The automatically differentiable and GPU-compatible toolkit for CMB analysis. "
readmeQualityOk: true
url: "https://github.com/marius311/CMBLensing.jl"
homepage: "https://cosmicmar.com/CMBLensing.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [99]
topics: ["julia", "cmb", "bayesian", "physics", "cosmology", "automatic-differentiation", "gpu"]
stars: 52
forks: 13
openIssues: 7
closedIssues: 11
watchers: 10
contributors: 11
recentReleases: 0
createdAt: "2016-03-22T18:02:13Z"
lastCommitAt: "2026-10-27T12:39:26Z"
lastReleaseAt: "2021-03-03T09:12:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 52
maintainers: ["xzackli"]
openGraphImageUrl: "https://opengraph.githubassets.com/813d5e6ef5dcf8ad3d6362ddb1c3a83ca3322ab611a4dace2e972f0834bc9210/marius311/CMBLensing.jl"
discussionCount: 1
---

# CMBLensing.jl

CMBLensing.jl is a next-generation tool for analysis of the lensed Cosmic Microwave Background. It is written in [Julia](https://julialang.org/) and transparently callable from Python.

At its heart, CMBLensing.jl maximizes, samples, or performs MUSE inference on the Bayesian posterior for the CMB lensing problem. It also contains tools to quickly manipulate and process CMB maps, set up modified posteriors with a probabilistic programming language, and take gradients using automatic differentiation.

### Highlights
* Fully Nvidia GPU compatible (1-2 orders of magnitude speedups over CPU, depending on the problem size and hardware).
* Automatic differentiation (via [Zygote.jl](https://fluxml.ai/Zygote.jl/)) provides for-free gradients of your custom posteriors.
* Includes the following algorithms to lense a map:
    * `LenseFlow` ([Millea, Anderes, & Wandelt 2017](https://arxiv.org/abs/1708.06753))
    * `Taylens` ([Næss & Louis 2013](https://arxiv.org/abs/1307.0719))
    * Taylor series expansion to any order
    * Bilinear interpolation
* Maximize and sample $\mathcal{P}(f,\phi,\theta\,|\,d)$, the joint maximum a posteriori estimate of the lensing potential,…
