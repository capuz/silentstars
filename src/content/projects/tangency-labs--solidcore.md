---
repo: "tangency-labs/solidcore"
name: "solidcore"
description: "A Rust port of NVIDIA's SMLib B-rep kernel (CAD subset): safe, deterministic, wasm-compatible"
readmeQualityOk: true
url: "https://github.com/tangency-labs/solidcore"
homepage: "https://tangency-labs.github.io/solidcore/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 337
forks: 125
openIssues: 213
closedIssues: 492
watchers: 7
contributors: 64
recentReleases: 2
createdAt: "2026-10-12T18:35:50Z"
lastCommitAt: "2026-11-07T10:17:23Z"
lastReleaseAt: "2026-10-27T12:26:31Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors"]
healthScore: 93
undervaluedScore: 31
maintainers: ["bherbruck", "jyviko", "outlookhazy"]
openGraphImageUrl: "https://opengraph.githubassets.com/c16b7e81ceb55a99fb9936bebf91a28ac0948a21111adad235cfcd76afa7b78f/tangency-labs/solidcore"
---

# solidcore

**📊 Live progress: [tangency-labs.github.io/solidcore](https://tangency-labs.github.io/solidcore/)**: every unit's port status, the upstream-issues log, and the surface/surface intersection corpus scores, regenerated on every merge.

solidcore is a boundary-representation (B-rep) solid modeling kernel in safe Rust. It is based
on NVIDIA's SMLib (from [USD BRep](https://github.com/NVIDIA-Omniverse/usd-brep), Apache-2.0)
and goes its own way from there: it started as a port, and its new constructions, such as the
generic rolling-ball blend ([docs/generic-blend.md](https://github.com/tangency-labs/solidcore/blob/HEAD/docs/generic-blend.md)), are designed and built
here as clean, procedural constructions that replace the code they supersede. Contributing:
[CONTRIBUTING.md](https://github.com/tangency-labs/solidcore/blob/HEAD/CONTRIBUTING.md). Design discussion: the
[`#solidcore-dev`](https://discord.com/channels/1560611394934673498/1560631619340214394) channel on Discord.

Solids are exact: shells, faces, loops, edges and vertices bound to analytic and NURBS
curves and surfaces. solidcore's first consumer is **SolidCraft**.

## Scope

In scope: the `SMLib` kernel and the…
