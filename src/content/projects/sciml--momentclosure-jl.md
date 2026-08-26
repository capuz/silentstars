---
repo: "SciML/MomentClosure.jl"
name: "MomentClosure.jl"
description: "Tools to generate and study moment equations for any chemical reaction network using various moment closure approximations"
readmeQualityOk: true
url: "https://github.com/SciML/MomentClosure.jl"
homepage: "https://augustinas1.github.io/MomentClosure.jl/dev/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["systems-biology", "chemical-reaction-networks", "stochastic-processes", "moments", "moment-closure", "moment-equations", "gillespie-algorithm", "gene-network"]
stars: 51
forks: 7
openIssues: 1
closedIssues: 14
watchers: 3
contributors: 37
recentReleases: 4
createdAt: "2021-02-14T20:14:33Z"
lastCommitAt: "2026-08-26T04:16:26Z"
lastReleaseAt: "2026-07-12T11:45:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 54
maintainers: ["ChrisRackauckas", "ChrisRackauckas-Claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/349be7e6fd8d746f14978914b5b413d0471993805a4d1ee69651f1337e9e81af/SciML/MomentClosure.jl"
fundingLinks: ["GITHUB:https://github.com/SciML"]
---

# MomentClosure.jl

MomentClosure.jl is a tool to automatically obtain time-evolution equations of moments up to an arbitrary order for virtually any chemical reaction network or system of stochastic differential equations (SDEs), implementing a wide array of moment closure approximations commonly used in stochastic biochemical kinetics [[1]](#1). MomentClosure is (attempted to be) fairly well-integrated within the broader Julia ecosystem utilising a number of familiar packages:
- MomentClosure can be immediately applied to reaction network models defined using [Catalyst](https://github.com/SciML/Catalyst.jl) and SDE systems built with [ModelingToolkit](https://github.com/SciML/ModelingToolkit.jl).
- Moment equations are generated as a [ModelingToolkit](https://github.com/SciML/ModelingToolkit.jl) [`ODESystem`](https://mtk.sciml.ai/stable/systems/ODESystem/) (with some extra help from [Symbolics](https://github.com/JuliaSymbolics/Symbolics.jl) and [SymbolicUtils](https://github.com/JuliaSymbolics/SymbolicUtils.jl)).
- The resulting `ODESystem` can be solved using any [DifferentialEquations](https://github.com/SciML/DifferentialEquations.jl/) ODE solvers, enabling further study of…
