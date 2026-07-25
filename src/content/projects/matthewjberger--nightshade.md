---
repo: "matthewjberger/nightshade"
name: "nightshade"
description: "A data-oriented game engine written in Rust with a custom ECS 🦀 Works on Windows/Linux/MacOS/Web"
readmeQualityOk: true
url: "https://github.com/matthewjberger/nightshade"
homepage: "https://matthewberger.dev/nightshade/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["3d-graphics", "game-development", "game-engine", "rust", "wgpu", "wasm"]
stars: 40
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-11-09T16:36:28Z"
lastCommitAt: "2026-07-25T06:00:08Z"
lastReleaseAt: "2026-07-17T04:02:54Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 80
undervaluedScore: 44
maintainers: ["matthewjberger"]
openGraphImageUrl: "https://opengraph.githubassets.com/25f06269ec6efa412f2d208084c95af25fda6ad032e8bd29737172cd7482aa3a/matthewjberger/nightshade"
fundingLinks: ["GITHUB:https://github.com/matthewjberger"]
---

</p>

</p>

`Nightshade` is a data-oriented 3D game engine written in Rust. It targets native (Windows, macOS, Linux) and the web via WebGPU, ships a glTF-first PBR renderer with the full KHR extension set, and comes with a browser-playable scene editor.

> Pre-1.0. APIs are still shifting and the project is not yet accepting external contributions. The renderer, editor, and ECS are usable today on Windows, Linux, and modern Chromium / Firefox builds.

## Highlights

- Clustered forward PBR renderer with shadows, IBL, OIT transparency, and post-processing (bloom, SSAO, tone mapping, color grading).
- Full glTF 2.0 support including the KHR extensions: transmission, volume + attenuation, anisotropy, iridescence, dispersion, sheen, clearcoat, diffuse transmission, specular, emissive strength, variants, gpu instancing.
- HDR environments (`.hdr`) and procedural atmospheres (day / night cycle, nebula, space) with prefiltered IBL.
- Skeletal animation, morph targets, and a clip player driven by a frame schedule.
- Data-oriented ECS via [nightshade_ecs](https://github.com/matthewjberger/nightshade_ecs) with archetype storage and bitflag components.
- High level procedural API…
