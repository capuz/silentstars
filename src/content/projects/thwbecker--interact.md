---
repo: "thwbecker/interact"
name: "interact"
description: "Elastic half space fault interaction and co-seismic slip inversion code using quad and triangle dislocations"
readmeQualityOk: true
url: "https://github.com/thwbecker/interact"
language: "Roff"
languages: ["Roff"]
languagePcts: [88]
stars: 10
forks: 6
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2016-09-05T05:02:57Z"
lastCommitAt: "2026-10-25T02:47:22Z"
lastReleaseAt: "2026-07-18T17:17:19Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 79
undervaluedScore: 72
maintainers: ["thwbecker"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5e7b419f46c34be73be41d64f087edd02758f318fcb1b53ef420b05fa2d3281/thwbecker/interact"
---

# interact - models static and earthquake cycle fault interactions using dislocations in an elastic medium

Program reads in patches subdividing a fault network in an elastic
half-space and solves for stresses given slip or displacements given
stress in a one-step problem for various boundary conditions (sign
(i.e. direction) constrained or unconstrained). The core code
`interact` can also simulate an earthquake cycle where each patch
follows a static-kinematic frictional constitutive law. There is also
also a rudimentary, rate-state-friction cycle solver, `rsf_solve`
which efficiently and accurately solves SCEC SEAS problem BP5.

For dislocations, `interact` uses `dc3d.f` as provided by Y. Okada as
in Okada (BSSA, 1992), has .f90 code converted from Nikkhoo and Walter
(GJI, 2015), and uses triangular dislocation fixes from Noda (EPS,
2025). Linear algebra routines from SLATEC, LAPACK, and EISPACK, and a
newish PETSC interface which can also include HTOOLS and H2OPUS. Along
with these H matrix packages, the code can also use HACApk, the
H-matrix library of ppOpen-HPC, as used by HBI, and the HMMVP library
by A. Bradley.

PETSC implementation included with Dave May's assistance,…
