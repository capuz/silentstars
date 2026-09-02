---
repo: "artis-mcrt/artis"
name: "artis"
description: "3D non-LTE Monte Carlo radiative transfer for supernovae/kilonovae"
readmeQualityOk: true
url: "https://github.com/artis-mcrt/artis"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["monte-carlo", "astrophysics", "radiative-transfer"]
stars: 26
forks: 8
openIssues: 1
closedIssues: 7
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2013-07-09T10:25:23Z"
lastCommitAt: "2026-09-02T08:03:20Z"
lastReleaseAt: "2024-05-21T07:44:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 62
maintainers: ["lukeshingles", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1363b8ed8f43c2b7677dd892e2c6ac52c200c800a0f939d5625d734fbd25f55/artis-mcrt/artis"
discussionCount: 0
---

# ARTIS

ARTIS is a 3D radiative transfer code that uses Monte Carlo methods with indivisible energy packets ([Lucy 2002](https://ui.adsabs.harvard.edu/abs/2002A%26A...384..725L/abstract)) for ejecta in homologous (ballistic) expansion such as supernovae and kilonovae. The code is designed for high performance on modern HPC clusters, with a focus on physics fidelity and multi-dimensional geometry.

## Key features

### Multi-dimensional geometry
ARTIS simulates ejecta in 1D spherical, 2D cylindrical, and 3D Cartesian coordinates, enabling the study of asymmetric explosions and geometry-dependent observables such as polarisation that are inaccessible to 1D codes.

### Physics fidelity
- **Line-by-line opacities**: In the default mode, ARTIS uses individual line opacities (Sobolev), with optional support for binned expansion opacities.
- **Macroatom radiative transfer**: the Lucy macroatom scheme self-consistently propagates packets through absorption, fluorescence, and multi-level de-excitation, capturing line-to-line energy redistribution without simplification. This can also be disabled in favour of simplified thermalisation/scattering ratio treatment.
- **Non-LTE level…
