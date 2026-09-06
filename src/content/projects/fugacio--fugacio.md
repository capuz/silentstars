---
repo: "fugacio/fugacio"
name: "fugacio"
description: "Validation-first, differentiable thermodynamics and process simulation in JAX."
readmeQualityOk: true
url: "https://github.com/fugacio/fugacio"
homepage: "https://fugacio.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-06-04T03:13:03Z"
lastCommitAt: "2026-09-06T08:05:15Z"
lastReleaseAt: "2026-09-04T07:09:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 40
maintainers: ["owenthcarey"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c3ffb846cad7e2ed5c4fe69d74d36abc9302249dceb8eada11cdf314985c425/fugacio/fugacio"
---

# Fugacio

**Open, differentiable thermodynamics and process simulation, with an AI design copilot.**

Fugacio is an open-source successor to closed, expensive process simulators. The
numerical core is written in [JAX](https://github.com/jax-ml/jax), so an entire
flowsheet is *end-to-end differentiable*: you can take gradients through phase
equilibrium and recycle loops for optimization, parameter estimation, and tight
ML integration.

Fugacio treats physical correctness as the baseline, not a stretch goal, and
because its reference data and models are open, that correctness stays
*continuously machine-checkable* as the engine grows one model at a time. Every
model is graded against free, authoritative oracles: differential testing against
open reference codes ([CoolProp](https://github.com/CoolProp/CoolProp),
[`thermo`](https://github.com/CalebBell/thermo),
[Clapeyron.jl](https://github.com/ClapeyronThermo/Clapeyron.jl), and
[Cantera](https://github.com/Cantera/cantera)); first-principles consistency laws
that need no external data (Gibbs-Duhem, Maxwell relations, mass- and
energy-balance closure, equifugacity, and phase-stability tangent-plane tests);
open experimental…
