---
repo: "tachsin/photonoxide"
name: "photonoxide"
description: "Photonics for Rust: validated, fabrication-ready, and visible while it runs. Mode solvers, FDFD, FDTD, inverse design, layout and PDKs, with a live studio."
readmeQualityOk: true
url: "https://github.com/tachsin/photonoxide"
homepage: "https://tachsin.gr/projects/photonoxide"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["eigenmode-solver", "electromagnetics", "fdfd", "fdtd", "integrated-photonics", "mode-solver", "optics", "photonics", "rust", "simulation"]
stars: 8
forks: 3
openIssues: 21
closedIssues: 84
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-01T10:28:30Z"
lastCommitAt: "2026-10-23T09:33:05Z"
lastReleaseAt: "2026-10-05T14:26:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 96
undervaluedScore: 67
maintainers: ["tachsin", "tachsinatalay-code", "xsmeydan"]
openGraphImageUrl: "https://opengraph.githubassets.com/78a04014c4174741924723367c7a96c59e1a997968e2e9468b4cd2a0d7384d99/tachsin/photonoxide"
---

**Photonics for Rust: validated, and visible while it runs.**

photonoxide is a photonics library for Rust and a desktop studio to use it with. It solves
waveguide modes, FDFD and FDTD in 2D and 3D, and circuits of components, with adjoint gradients
throughout. Every method is checked against an analytic solution or a published result, in a
[validation report](https://github.com/tachsin/photonoxide/blob/HEAD/docs/validation.md) that CI keeps current.

It is released milestone by milestone ([changelog](https://github.com/tachsin/photonoxide/blob/HEAD/CHANGELOG.md), [roadmap](https://github.com/tachsin/photonoxide/blob/HEAD/ROADMAP.md)); until
1.0 the API can change between milestones. The methods, examples and report are also at
[tachsin.gr/projects/photonoxide](https://tachsin.gr/projects/photonoxide).

## What it does

- **Materials:** [dispersion models](https://github.com/tachsin/photonoxide/blob/HEAD/docs/methods/materials.md) with their source, validity range
  and temperature; a [catalogue](https://github.com/tachsin/photonoxide/blob/HEAD/docs/methods/catalogue.md) of Si, SiO₂, SiN, LiNbO₃, GaAs,
  AlGaAs, InGaP, InP and AlN, with χ⁽²⁾ and Pockels tensors.
- **Geometry for…
