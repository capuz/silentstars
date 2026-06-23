---
repo: "sebapersson/PEtab.jl"
name: "PEtab.jl"
description: "Create and fit parameter-estimation problems for ODE and SciML models in Julia, leveraging the Julia SciML ecosystem."
url: "https://github.com/sebapersson/PEtab.jl"
homepage: "https://sebapersson.github.io/PEtab.jl/stable/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 70
forks: 11
openIssues: 15
closedIssues: 66
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2022-12-01T16:22:49Z"
lastCommitAt: "2026-06-23T06:42:21Z"
lastReleaseAt: "2023-07-28T13:50:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 52
maintainers: ["sebapersson", "TorkelE", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad3b8931ab24b1563aba2769241f33c8826bae822f45e16e6c43409f47a6ae6c/sebapersson/PEtab.jl"
---

<picture>
    <source media="(prefers-color-scheme: dark)"  srcset="docs/src/assets/logo_dark.png">
    <source media="(prefers-color-scheme: light)" srcset="docs/src/assets/logo_light.png">
  </picture>
</p>

_Create parameter estimation problems for dynamic models_

[Getting Started](https://sebapersson.github.io/PEtab.jl/stable/tutorial) |
[Documentation](https://sebapersson.github.io/PEtab.jl/stable/) |
[Contributing](https://sebapersson.github.io/PEtab.jl/stable/contributing)

PEtab.jl is a Julia package for creating parameter estimation problems to fit ordinary
differential equation (ODE) and scientific machine learning (SciML) models to time-series
data.

Major features are:

- Define ODE parameter estimation problems directly in Julia, with models provided as
  [Catalyst.jl](https://github.com/SciML/Catalyst.jl) `ReactionSystem`,
  [ModelingToolkitBase.jl](https://github.com/SciML/ModelingToolkit.jl) `ODESystem`, an
  [OrdinaryDiffEq.jl](https://github.com/SciML/OrdinaryDiffEq.jl) `ODEProblem`, or as
  [SBML](https://sbml.org/) model (imported via
  [SBMLImporter.jl](https://github.com/sebapersson/SBMLImporter.jl)). Problems can be
  defined with a wide range of features,…
