---
repo: "tud-phi/soromox"
name: "soromox"
description: "Soft Robot Models in jaX (SoRoMoX)"
readmeQualityOk: true
url: "https://github.com/tud-phi/soromox"
homepage: "https://tud-phi.github.io/soromox/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cosserat-rod-theory", "nonlinear-dynamics", "simulator", "soft-robotics"]
stars: 12
forks: 2
openIssues: 3
closedIssues: 8
watchers: 1
contributors: 17
recentReleases: 4
createdAt: "2025-08-02T20:44:21Z"
lastCommitAt: "2026-08-22T04:05:12Z"
lastReleaseAt: "2026-08-19T22:38:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 78
maintainers: ["mstoelzle", "dependabot[bot]", "Michele-Martini"]
openGraphImageUrl: "https://opengraph.githubassets.com/5de603da619fc0365a7e33d9af74fbdb47554098ab6d3147787cc251264d983a/tud-phi/soromox"
---

# Soft Robot Models in jaX (SoRoMoX)
</div>

</div>

SoRoMoX is a fully numerical, JIT-compilable Python/JAX implementation of
control-oriented models for articulated and continuum soft robots. It provides
articulated soft-robot, piecewise-constant strain (PCS), and geometric variable
strain (GVS) models through a common interface for kinematics, dynamics,
energies, Jacobians and derivatives, and forward dynamics. Because the
numerical core is JAX-native, these model computations can be JIT-compiled,
automatically differentiated with respect to states, inputs, and physical
parameters, batched, and executed on CPUs, GPUs, and TPUs.

</p>

Model-based controllers and rendering backends complement the core model
implementations. The accompanying paper benchmarks the numerical stack and
uses six application case studies to demonstrate differentiability,
parallelization, and the control-oriented model interface.

> **Note:** SoRoMoX succeeds
> [JSRM](https://github.com/tud-phi/jax-soft-robot-modeling), replacing symbolic
> derivations with scalable numerical implementations and extending the model
> families and common interfaces.

## Models and numerical interface

- **Soft robot…
