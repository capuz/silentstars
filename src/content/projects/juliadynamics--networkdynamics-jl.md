---
repo: "JuliaDynamics/NetworkDynamics.jl"
name: "NetworkDynamics.jl"
description: "Julia package for simulating Dynamics on Networks"
readmeQualityOk: true
url: "https://github.com/JuliaDynamics/NetworkDynamics.jl"
homepage: "https://juliadynamics.github.io/NetworkDynamics.jl/dev/"
language: "Julia"
languages: ["Julia"]
languagePcts: [99]
topics: ["dae", "differential-algebraic-equations", "differential-equations", "networks", "ode", "dynamical-systems", "julialang", "nonlinear", "timeseries-generation"]
stars: 161
forks: 16
openIssues: 18
closedIssues: 125
watchers: 7
contributors: 42
recentReleases: 0
createdAt: "2019-02-06T12:44:11Z"
lastCommitAt: "2026-08-28T12:22:45Z"
lastReleaseAt: "2021-03-10T08:48:31Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 92
undervaluedScore: 44
maintainers: ["hexaeder", "maleadt"]
openGraphImageUrl: "https://opengraph.githubassets.com/eda28b0d88e0b57b13d58f17b812dec8dd657e959a3777dac1c9f43cf8d837b6/JuliaDynamics/NetworkDynamics.jl"
discussionCount: 0
---

# NetworkDynamics.jl

A package for working with dynamical systems on complex networks. NetworkDynamics.jl provides an interface between [Graphs.jl](https://github.com/JuliaGraphs/Graphs.jl) and [DifferentialEquations.jl](https://github.com/JuliaDiffEq/DifferentialEquations.jl).
It allows modeling of dynamical processes on networks using a *modular* approach: meaning that the overall network dynamics are composed based on dynamical models for the *nodes* and the *edges*.
The dynamical behavior of those components are described by differential algebraic equations with inputs and outputs.

Typical usecases for this modeling appraoch are diffusion processes, oscillator networks or power grids.

## Getting started

Check out our [documentation](https://juliadynamics.github.io/NetworkDynamics.jl/dev/).
A good place to start is the page on the [mathematical model](https://juliadynamics.github.io/NetworkDynamics.jl/dev/mathematical_model/). For a more hands-on approach check out the [getting started example](https://juliadynamics.github.io/NetworkDynamics.jl/dev/generated/getting_started_with_network_dynamics/).

An [introductory talk](https://www.youtube.com/watch?v=GrmnbDYr6mM) for an…
