---
repo: "tangency-labs/solidcore"
name: "solidcore"
description: "A Rust port of NVIDIA's SMLib B-rep kernel (CAD subset): safe, deterministic, wasm-compatible"
readmeQualityOk: true
url: "https://github.com/tangency-labs/solidcore"
homepage: "https://tangency-labs.github.io/solidcore/"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
stars: 254
forks: 101
openIssues: 133
closedIssues: 149
watchers: 6
contributors: 52
recentReleases: 2
createdAt: "2026-10-12T18:35:50Z"
lastCommitAt: "2026-10-29T09:54:42Z"
lastReleaseAt: "2026-10-27T12:26:31Z"
status: "newborn"
tags: []
healthScore: 89
undervaluedScore: 31
maintainers: ["brett19", "bherbruck", "ablasik"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6923ac9f51f16ad41c4df53e191f0d2367edb7983591ed5bd774a37b5de83d3/tangency-labs/solidcore"
---

# solidcore

**📊 Live progress: [tangency-labs.github.io/solidcore](https://tangency-labs.github.io/solidcore/)**: every unit's port status and difftest results, the upstream-issues log, and the surface/surface intersection corpus scores, regenerated on every merge.

solidcore is a Rust port of NVIDIA's SMLib: a boundary-representation (B-rep) solid
modeling kernel in safe Rust (SMLib is from [USD BRep](https://github.com/NVIDIA-Omniverse/usd-brep), Apache-2.0).

Solids are exact: shells, faces, loops, edges and vertices bound to analytic and NURBS
curves and surfaces. solidcore's first consumer is **SolidCraft**.

## Scope

In scope: the `SMLib` kernel and the `SM_API` operation layer of upstream — NURBS
math, curve and surface geometry, B-rep topology, intersections, booleans, fillets and
chamfers, offset/shell, sweeps and skins, primitives, healing/stitching, mass
properties and queries.

Out of scope: upstream's OCCT translators, USD/Hydra integration and Python bindings.
See [ATTRIBUTION.md](https://github.com/tangency-labs/solidcore/blob/HEAD/ATTRIBUTION.md).

Goals: no `unsafe` in the kernel, no panics on bad input, deterministic results, no
global state, builds for…
