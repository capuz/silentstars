---
repo: "OpenSourceAWE/SymbolicAWEModels.jl"
name: "SymbolicAWEModels.jl"
description: "A symbolic aero-structural modeling and simulation framework for Airborne Wind Energy systems."
readmeQualityOk: true
url: "https://github.com/OpenSourceAWE/SymbolicAWEModels.jl"
homepage: "https://opensourceawe.github.io/SymbolicAWEModels.jl/dev/"
language: "Julia"
languages: ["Julia"]
languagePcts: [99]
topics: ["airborne-wind-energy", "awe", "julia", "kite", "kitepower", "modeling", "models", "simulation", "windenergy", "wing"]
stars: 13
forks: 2
openIssues: 61
closedIssues: 124
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2025-06-28T13:36:18Z"
lastCommitAt: "2026-10-09T10:50:30Z"
lastReleaseAt: "2025-08-07T16:30:58Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 70
maintainers: ["1-Bort-1", "1-Bart-1", "ufechner7"]
openGraphImageUrl: "https://opengraph.githubassets.com/6284ee8acc04ca0f542d82faba67052507510b4a2b156919fcf8423069e0d5f1/OpenSourceAWE/SymbolicAWEModels.jl"
discussionCount: 0
---

# SymbolicAWEModels

## Overview

**SymbolicAWEModels.jl** is a **compiler** for mechanical systems, built for
**Airborne Wind Energy** (AWE) modelling. It takes a structural description
of a system — defined in Julia code or a YAML file — and compiles it into
an efficient ODE problem using
[ModelingToolkit.jl](https://github.com/SciML/ModelingToolkit.jl).

```text
 Define Components         Assemble             Compile            Simulate
┌──────────────────┐    ┌──────────────┐     ┌─────────────────┐     ┌────────────┐
│ Point, Segment,  │──▶│ System       │───▶│ SymbolicAWE     │───▶│ init!()    │
│ Wing, Winch, ... │    │ Structure    │     │ Model           │     │ next_step! │
│                  │    │              │     │ (symbolic eqs → │     │ sim!()     │
│ Julia or YAML    │    │ (resolves    │     │  ODEProblem)    │     │            │
│                  │    │  references) │     │                 │     │            │
└──────────────────┘    └──────────────┘     └─────────────────┘     └────────────┘
```

The first compilation is slow as ModelingToolkit generates and
simplifies the symbolic equations. The result is cached to a binary file,
making subsequent runs fast…
