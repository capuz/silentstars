---
repo: "StunningLlama/SemiSim"
name: "SemiSim"
description: "Brandon's Semiconductor Simulator"
readmeQualityOk: true
url: "https://github.com/StunningLlama/SemiSim"
homepage: "https://brandonli.net/semisim/"
language: "Java"
languages: ["Java"]
languagePcts: [96]
stars: 69
forks: 5
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-01-12T21:26:21Z"
lastCommitAt: "2026-08-10T05:05:37Z"
lastReleaseAt: "2026-02-20T08:16:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 53
maintainers: ["StunningLlama"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bda769b0b23181bd6e06519958fc9302fcb1e3d7825d0fb12426bbe154721ab/StunningLlama/SemiSim"
---

# Manual for SemiSim v2.2.1

# Introduction

Brandon's semiconductor simulator (SemiSim) is an educational tool made with the original purpose of helping its creator understand semiconductor devices. It is fully interactive, letting users draw circuits and create their own devices in a manner similar to painting software. There is a wide variety of different materials to choose from and many ways to visualize the electromagnetic phenomena associated with semiconductors. Users can either load one of the many premade simulations or create their own.

## Physics

The simulation is set on a two-dimensional grid over which it solves the 2D Maxwell equations. The electric field lies in the same plane as the surface of the screen whereas the magnetic field is perpendicular to it. On top of this, there are two types of charge carriers, electrons and holes, which feel electric and chemical forces that determine their dynamics. The simulation uses a FDTD (finite-difference time domain) scheme obtained by discretizing the Maxwell equations and the drift-diffusion equations and coupling the two together. This results in a simulation that demonstrates many of the important properties of…
