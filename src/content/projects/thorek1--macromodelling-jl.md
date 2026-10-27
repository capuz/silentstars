---
repo: "thorek1/MacroModelling.jl"
name: "MacroModelling.jl"
description: "Macros and functions to work with DSGE models."
readmeQualityOk: true
url: "https://github.com/thorek1/MacroModelling.jl"
homepage: "https://thorek1.github.io/MacroModelling.jl/stable"
language: "Julia"
languages: ["Julia"]
languagePcts: [95]
topics: ["difference-equations", "dsge", "macroeconomics", "perturbation", "dynamical-systems", "implicit-differentiation", "dynamic-programming", "optimal-control"]
stars: 151
forks: 22
openIssues: 5
closedIssues: 26
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2022-11-28T08:05:36Z"
lastCommitAt: "2026-10-27T09:16:29Z"
lastReleaseAt: "2023-03-02T22:44:14Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 45
maintainers: ["thorek1", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0684ca143113b9af2b0ec31439aa74d84b99baf55ebdd0e3f57ce5333f3e711c/thorek1/MacroModelling.jl"
discussionCount: 1
---

# MacroModelling.jl

**Documentation**: [](https://thorek1.github.io/MacroModelling.jl/stable)

**Author: Thore Kockerols (@thorek1)**

`MacroModelling.jl` is a Julia package for developing and solving dynamic stochastic general equilibrium (DSGE) models.

These kinds of models describe the behaviour of a macroeconomy and are particularly suited for counterfactual analysis (economic policy evaluation) and exploring / quantifying specific mechanisms (academic research). Due to the complexity of these models, efficient numerical tools are required, as analytical solutions are often unavailable. `MacroModelling.jl` serves as a tool for handling the complexities involved, such as forward-looking expectations, nonlinearity, and high dimensionality.

The goal of this package is to reduce coding time and speed up model development by providing functions for working with discrete-time DSGE models. The user-friendly syntax, automatic variable declaration, and effective steady state solver facilitate fast prototyping of models. Furthermore, the package allows the user to work with nonlinear model solutions (up to third order (pruned) perturbation) and estimate the model using gradient based…
