---
repo: "sintefmath/Jutul.jl"
name: "Jutul.jl"
description: "Fully-differentiable multi physics finite-volume simulators"
readmeQualityOk: true
url: "https://github.com/sintefmath/Jutul.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["julia"]
stars: 77
forks: 19
openIssues: 2
closedIssues: 7
watchers: 6
contributors: 26
recentReleases: 0
createdAt: "2021-04-16T07:01:25Z"
lastCommitAt: "2026-09-02T08:03:42Z"
lastReleaseAt: "2023-02-21T19:23:25Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 45
maintainers: ["moyner", "strene", "tomerarnon"]
openGraphImageUrl: "https://opengraph.githubassets.com/acbbbdf5b81cda3ec333ed6b65db7ae5bdf41cf54ff55238e3503a73b289f739/sintefmath/Jutul.jl"
discussionCount: 0
---

# Jutul.jl

Experimental Julia framework for fully differentiable multiphysics simulators based on implicit finite-volume methods with automatic differentiation.

# Applications
Jutul is used for several applications. The primary package serves as a common infrastructure for several simulation projects. A examples of simple PDE solvers are included in this repo for testing and inspiration. Implementations are found [here](https://github.com/sintefmath/Jutul.jl/tree/main/src/applications/test_systems) and tests for these systems that demonstrate usage are found [here](https://github.com/sintefmath/Jutul.jl/tree/main/test/test_systems).
## Reservoir simulation
[JutulDarcy.jl](https://github.com/sintefmath/JutulDarcy.jl) is a high performance Darcy flow simulator and the main demonstrator application for Jutul. See also [JutulDarcyRules.jl](https://github.com/slimgroup/JutulDarcyRules.jl) for use in differentiable workflows involving CO2 storage.
## Battery simulation
[BattMo.jl](https://github.com/BattMoTeam/BattMo.jl) is a battery simulator that implements a subset of the MATLAB-based [BattMo](https://github.com/BattMoTeam/BattMo) toolbox in Julia for improved performance.

##…
