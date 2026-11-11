---
repo: "ronceray/StochasticForceInference"
name: "StochasticForceInference"
description: "Learn stochastic differential equations (Langevin dynamics: drift/force and diffusion) from time series and trajectory data. Python + JAX."
readmeQualityOk: true
url: "https://github.com/ronceray/StochasticForceInference"
homepage: "https://stochasticforceinference.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["active-matter", "biophysics", "cell-migration", "data-driven-modeling", "drift-diffusion", "entropy-production", "equation-discovery", "fokker-planck", "jax", "kramers-moyal"]
stars: 40
forks: 12
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2019-02-01T15:14:43Z"
lastCommitAt: "2026-11-11T19:44:04Z"
lastReleaseAt: "2026-11-11T19:42:30Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 40
maintainers: ["ronceray"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ee4b3ea150edbc56e04a31df328ac083ade828f1022b62a619c1d4e761a8aa1/ronceray/StochasticForceInference"
discussionCount: 3
---

# Stochastic Force Inference (SFI)

**Learn the stochastic equation behind your time series.**

SFI is a JAX-based Python package that infers the drift (force) and
diffusion of Langevin stochastic differential equations from trajectories
and other continuous time series: tracked particles, cells and animals,
population abundances, gene-expression and other molecular levels,
concentration fields. It returns an interpretable
equation with error bars, selects the terms the data supports, and
simulates the fitted model. It handles overdamped and underdamped
dynamics, interacting particles and spatially extended (SPDE) systems.

## Is SFI for my data?

| You want to… | SFI does it with |
| --- | --- |
| estimate drift and diffusion (first and second Kramers–Moyal coefficients, a Fokker–Planck model) | `OverdampedLangevinInference`: `infer_force_linear`, `infer_diffusion_linear` |
| discover the equation of a noisy stochastic system (sparse regression, "stochastic SINDy") | a candidate basis + `sparsify_force(criterion="PASTIS")` |
| map forces and diffusivity from single-particle tracking, with localization error | the overdamped engine; the defaults correct white localization noise |…
