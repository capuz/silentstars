---
repo: "tangency-labs/solidcore"
name: "solidcore"
description: "A Rust port of NVIDIA's SMLib B-rep kernel (CAD subset): safe, deterministic, wasm-compatible"
readmeQualityOk: true
url: "https://github.com/tangency-labs/solidcore"
homepage: "https://tangency-labs.github.io/solidcore/"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
stars: 158
forks: 68
openIssues: 103
closedIssues: 26
watchers: 5
contributors: 33
recentReleases: 1
createdAt: "2026-10-12T18:35:50Z"
lastCommitAt: "2026-10-23T09:23:08Z"
lastReleaseAt: "2026-10-20T19:04:20Z"
status: "newborn"
tags: []
healthScore: 83
undervaluedScore: 29
maintainers: ["bherbruck", "tdamsma", "brett19"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc8d68e310e705b1e5ff6ff51641e136ef709d5c988fb891b0e00d8f0d634217/tangency-labs/solidcore"
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
