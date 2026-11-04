---
repo: "tangency-labs/solidcore"
name: "solidcore"
description: "A Rust port of NVIDIA's SMLib B-rep kernel (CAD subset): safe, deterministic, wasm-compatible"
readmeQualityOk: true
url: "https://github.com/tangency-labs/solidcore"
homepage: "https://tangency-labs.github.io/solidcore/"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 311
forks: 119
openIssues: 120
closedIssues: 413
watchers: 7
contributors: 60
recentReleases: 2
createdAt: "2026-10-12T18:35:50Z"
lastCommitAt: "2026-11-04T02:57:27Z"
lastReleaseAt: "2026-10-27T12:26:31Z"
status: "newborn"
tags: ["needs_contributors"]
healthScore: 95
undervaluedScore: 32
maintainers: ["bherbruck", "jyviko", "brett19"]
openGraphImageUrl: "https://opengraph.githubassets.com/f81084b4d8641cd302ce91d733a98ed9011c89c5700c3a28fd3be8b74c3e453c/tangency-labs/solidcore"
---

# solidcore

**📊 Live progress: [tangency-labs.github.io/solidcore](https://tangency-labs.github.io/solidcore/)**: every unit's port status and difftest results, the upstream-issues log, and the surface/surface intersection corpus scores, regenerated on every merge.

solidcore is a boundary-representation (B-rep) solid modeling kernel in safe Rust. It is based
on NVIDIA's SMLib (from [USD BRep](https://github.com/NVIDIA-Omniverse/usd-brep), Apache-2.0)
and goes its own way from there: it started as a port, and its new constructions, such as the
generic rolling-ball blend ([docs/generic-blend.md](https://github.com/tangency-labs/solidcore/blob/HEAD/docs/generic-blend.md)), are designed and built
here as clean, procedural constructions that replace the code they supersede. Contributing:
[CONTRIBUTING.md](https://github.com/tangency-labs/solidcore/blob/HEAD/CONTRIBUTING.md).

Solids are exact: shells, faces, loops, edges and vertices bound to analytic and NURBS
curves and surfaces. solidcore's first consumer is **SolidCraft**.

## Scope

In scope: the `SMLib` kernel and the `SM_API` operation layer of upstream — NURBS
math, curve and surface geometry, B-rep topology, intersections,…
