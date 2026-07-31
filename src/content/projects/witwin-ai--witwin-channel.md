---
repo: "witwin-ai/witwin-channel"
name: "witwin-channel"
description: "Differentiable RF Digital Twin for Wireless Research (MobiCom'26 )"
readmeQualityOk: true
url: "https://github.com/witwin-ai/witwin-channel"
language: "Python"
languages: ["Python"]
languagePcts: [76]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-05-21T11:57:00Z"
lastCommitAt: "2026-07-31T06:29:44Z"
lastReleaseAt: "2026-07-31T06:31:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 44
maintainers: ["Asixa"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff9ec15fa3183cdc6c57949ce642be95f4971cd29c555432d2759128b8e0fefc/witwin-ai/witwin-channel"
---

# Witwin Channel

Witwin Channel is a GPU-accelerated, differentiable wireless propagation
simulator for RF digital twins, coverage prediction, channel characterization,
and inverse optimization. It models a declarative scene and exposes dedicated
solvers for deterministic fields, explicit propagation paths, and Monte Carlo
radiomaps through the `witwin.channel` Python package.

> **Project status**
> Version 0.4 is a breaking replacement for the earlier 0.3 API. The supported
> runtime requires an NVIDIA GPU and the packaged native extension; APIs may
> continue to evolve before 1.0.

## Capabilities

- Line-of-sight, multi-bounce specular reflection, first-order UTD
  diffraction, transmission through layered thin-sheet materials, and
  rough-surface Kirchhoff scattering.
- Point receivers and structured receiver grids for link-level and radiomap
  workflows.
- Complex fields, path gain, delay, departure/arrival angles, interaction
  geometry, CIR/CFR conversion, polarization, and antenna-array support where
  advertised by the selected solver.
- Fixed-topology JVP and VJP derivatives for deterministic, path, and Monte
  Carlo Basic solves. Supported inputs include material…
