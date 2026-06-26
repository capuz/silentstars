---
repo: "SciML/FiniteStateProjection.jl"
name: "FiniteStateProjection.jl"
description: "Finite State Projection algorithms for chemical reaction networks"
url: "https://github.com/SciML/FiniteStateProjection.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["chemical-reaction-networks", "finite-state-projection", "biological-modeling", "julia-package", "systems-biology", "stochastic-simulations", "gillespie-algorithm", "gene-network"]
stars: 20
forks: 11
openIssues: 7
closedIssues: 7
watchers: 6
contributors: 36
recentReleases: 1
createdAt: "2021-04-15T09:37:47Z"
lastCommitAt: "2026-06-26T21:31:10Z"
lastReleaseAt: "2026-06-25T01:33:19Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 61
undervaluedScore: 44
maintainers: ["ChrisRackauckas", "ChrisRackauckas-Claude", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/64b5587fa4ba4882c67e04ce1ad56e5515e252ec2f99cfa8fea9e52cf0d80007/SciML/FiniteStateProjection.jl"
fundingLinks: ["GITHUB:https://github.com/SciML"]
---

# FiniteStateProjection.jl

Finite State Projection [[1]](#1)  algorithms for chemical reaction networks based on [Catalyst.jl](https://github.com/SciML/Catalyst.jl) and [ModelingToolkit.jl](https://github.com/SciML/ModelingToolkit.jl). Converts descriptions of reaction networks into `ODEProblem`s and `SteadyStateProblem`s for use with [DifferentialEquations.jl](https://github.com/SciML/DifferentialEquations.jl).

## Features:

  - Built on top of [Catalyst.jl](https://github.com/SciML/Catalyst.jl)
  - FSP equations are generated as `ODEFunction`/`ODEProblem`s and can be solved with [DifferentialEquations.jl](https://github.com/SciML/DifferentialEquations.jl), with on-the-fly generation of targeted functions for improved performance
  - The Chemical Master Equation can be represented as a `SparseMatrixCSC`

More information is available in the [documentation](https://kaandocal.github.io/FiniteStateProjection.jl/dev/). Please feel free to open issues and submit pull requests!

## Examples

### Birth-Death System

```julia
using FiniteStateProjection
using OrdinaryDiffEq

rn = @reaction_network begin
    σ, 0 --> A
    d, A --> 0
end

sys = FSPSystem(rn)

# Parameters for our system…
