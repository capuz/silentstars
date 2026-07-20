---
repo: "QuantEcon/ContinuousDPs.jl"
name: "ContinuousDPs.jl"
description: "Continuous state dynamic programming"
readmeQualityOk: true
url: "https://github.com/QuantEcon/ContinuousDPs.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 16
forks: 11
openIssues: 11
closedIssues: 21
watchers: 8
contributors: 10
recentReleases: 2
createdAt: "2017-11-16T21:09:39Z"
lastCommitAt: "2026-07-20T06:32:16Z"
lastReleaseAt: "2026-07-15T06:26:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 86
undervaluedScore: 66
maintainers: ["oyamad", "dependabot[bot]", "mnshkw"]
openGraphImageUrl: "https://opengraph.githubassets.com/121bf049e5371169b6d0078f391751d9baa3398a89e50995d1b7b8de2c090f61/QuantEcon/ContinuousDPs.jl"
fundingLinks: ["GITHUB:https://github.com/numfocus", "CUSTOM:https://numfocus.org/donate-to-quantecon"]
---

# ContinuousDPs.jl

Routines for solving continuous state dynamic programs by the Bellman equation collocation method.

## Installation

To install the package, open the Julia package manager (Pkg) and type:

```
add ContinuousDPs
```

## Problem formulation and interface

`ContinuousDPs.jl` solves infinite-horizon dynamic programs of the form

```math
V(s)
= \max_{x\in[x_{\mathrm{lb}}(s), x_{\mathrm{ub}}(s)]}
    \left \{
        f(s,x) + \beta \mathbb{E}_{\varepsilon}
            \left [ V(g(s,x,\varepsilon)) \right ]
    \right \}
```
where
- $s \in \mathbb{R}^N$ is the **state** (continuous, possibly multi-dimensional),
- $x \in \mathbb{R}$ is the **action** (continuous, 1-dimensional;
    multi-dimensional and discrete actions are also supported --- see below),
- $f(s, x)$ is the **reward** function,
- $g(s, x, \varepsilon)$ is the **state transition** function,
- $\varepsilon$ is a **random shock**,
    (i.i.d. across periods, independent of the state and the action),
- $\beta \in (0, 1)$ is the **discount factor**, and
- $x_{\mathrm{lb}}(s)$ and $x_{\mathrm{ub}}(s)$ are state-dependent
    **action bounds**.

This package employs the **Bellman equation collocation method**…
