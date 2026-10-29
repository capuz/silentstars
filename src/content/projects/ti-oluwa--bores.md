---
repo: "ti-oluwa/BORES"
name: "BORES"
description: "Black-Oil RE-servoir Simulation Framework"
readmeQualityOk: true
url: "https://github.com/ti-oluwa/BORES"
homepage: "https://ti-oluwa.github.io/BORES/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["black-oil", "multiphase-flow", "reservoir-simulation", "eclipse"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-16T01:24:50Z"
lastCommitAt: "2026-10-29T21:23:26Z"
lastReleaseAt: "2026-01-14T20:13:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 95
maintainers: ["ti-oluwa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1002685766/59a1bcfa-9eb6-4216-9a69-9a1e118e2633"
---

BORES is a Python framework for 2D/3D block grid black-oil reservoir simulation of three-phase (oil, water, gas) flow in porous media. You can build a simulation case by hand through easy-to-use APIs or load one straight from an Eclipse/GRDECL-style deck, then run and analyze the simulation.

> [!IMPORTANT]
> **Disclaimer**: BORES' goal is to support **educational, research, and prototyping** work. It is not production-grade code yet and should not be used for critical business decisions or regulatory compliance. Results should be validated against established simulators before any real-world application.

**Full documentation @** [https://ti-oluwa.github.io/BORES](https://ti-oluwa.github.io/BORES)

## Work in progress

BORES is under active development and going through a fairly major migration right now, from a purely Cartesian grid model to a fully free-form one (corner-point, unstructured, NNCs, the whole deal), so a good chunk of the framework is being rebuilt as part of that. The API on `main` does not match the published docs or the latest PyPI release at the moment, and the quick example below is closer to what's actually usable today than the old high-level model-builder…
