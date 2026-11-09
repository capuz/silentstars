---
repo: "madsuite-org/MadNLP.jl"
name: "MadNLP.jl"
description: "A solver for nonlinear programming with GPU support"
readmeQualityOk: true
url: "https://github.com/madsuite-org/MadNLP.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["optimization", "julia-language", "nonlinear-programming"]
stars: 253
forks: 33
openIssues: 36
closedIssues: 115
watchers: 12
contributors: 20
recentReleases: 0
createdAt: "2020-09-16T23:07:35Z"
lastCommitAt: "2026-11-09T00:52:56Z"
lastReleaseAt: "2022-03-08T20:11:16Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 38
maintainers: ["sshin23", "michel2323", "frapac"]
openGraphImageUrl: "https://opengraph.githubassets.com/a90be13ccdc2c0f6741ea997ba8462148978dc588190300a043d2648a1e91da4/madsuite-org/MadNLP.jl"
discussionCount: 6
---

# MadNLP.jl

*A [nonlinear programming](https://en.wikipedia.org/wiki/Nonlinear_programming) solver based on the filter line-search [interior point method](https://en.wikipedia.org/wiki/Interior-point_method) (as in [Ipopt](https://github.com/coin-or/Ipopt)) that can handle/exploit diverse classes of data structures, either on [host](https://en.wikipedia.org/wiki/Central_processing_unit) or [device](https://en.wikipedia.org/wiki/Graphics_processing_unit) memories.*

## Quickstart

The following example shows how to solve the HS15 problem with JuMP and MadNLP:
```julia
using JuMP, MadNLP
model = Model()
@variable(model, x1 <= 0.5)
@variable(model, x2)
@objective(model, Min, 100.0 * (x2 - x1^2)^2 + (1.0 - x1)^2)
@constraint(model, x1 * x2 >= 1.0)
@constraint(model, x1 + x2^2 >= 0.0)
JuMP.set_optimizer(model, MadNLP.Optimizer)
JuMP.set_optimizer_attribute(model, "max_iter", 100)
JuMP.set_optimizer_attribute(model, "print_level", MadNLP.INFO)
optimize!(model)
```

## Installation

MadNLP can be installed directly via the Julia package manager:
```julia
pkg> add MadNLP
```
For NVIDIA GPUs, install `cuMadNLP`. `rocMadNLP` (AMD GPUs), `oneMadNLP` (Intel GPUs) and `mtlMadNLP` (Apple GPUs)…
