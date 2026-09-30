---
repo: "nathanaelbosch/ProbNumDiffEq.jl"
name: "ProbNumDiffEq.jl"
description: "Probabilistic Numerical Differential Equation solvers via Bayesian filtering and smoothing"
readmeQualityOk: true
url: "https://github.com/nathanaelbosch/ProbNumDiffEq.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["julia", "differential-equations", "probabilistic-models", "ode", "ode-solver", "probabilistic-numerics"]
stars: 133
forks: 17
openIssues: 7
closedIssues: 40
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2020-10-28T15:20:32Z"
lastCommitAt: "2026-09-30T09:57:17Z"
lastReleaseAt: "2021-08-23T13:45:27Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 40
maintainers: ["nathanaelbosch", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/423147eb171477840b0b73b7da0a1b077a650fbb86285d0e30d582859f397835/nathanaelbosch/ProbNumDiffEq.jl"
---

# ProbNumDiffEq.jl

__ProbNumDiffEq.jl__ provides _probabilistic numerical_ ODE solvers to the
[DifferentialEquations.jl](https://diffeq.sciml.ai/stable/) ecosystem.
The implemented _ODE filters_ solve differential equations via Bayesian filtering and smoothing. The filters compute not just a single point estimate of the true solution, but a posterior distribution that contains an estimate of its numerical approximation error.

Check out the [ProbNumDiffEq.jl talk JuliaCon2024](https://www.youtube.com/watch?v=iH_GQiOaeUo).

## Installation

Run Julia, enter `]` to bring up Julia's package manager, and add the ProbNumDiffEq.jl package:

```
julia> ]
(v1.8) pkg> add ProbNumDiffEq
```

## Example: Solving the FitzHugh-Nagumo ODE

```julia
using ProbNumDiffEq

# ODE definition as in DifferentialEquations.jl
function f(du, u, p, t)
    a, b, c = p
    du[1] = c * (u[1] - u[1]^3 / 3 + u[2])
    du[2] = -(1 / c) * (u[1] - a - b * u[2])
end
u0 = [-1.0, 1.0]
tspan = (0.0, 20.0)
p = (0.2, 0.2, 3.0)
prob = ODEProblem(f, u0, tspan, p)

# Solve the ODE with a probabilistic numerical solver: EK1
sol = solve(prob, EK1())

# Plot the solution with Plots.jl
using Plots
plot(sol, color=["#CB3C33"…
