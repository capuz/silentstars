---
repo: "mosure/bevy_gaussian_splatting"
name: "bevy_gaussian_splatting"
description: "bevy gaussian splatting render pipeline plugin 🕊️🌌"
url: "https://github.com/mosure/bevy_gaussian_splatting"
homepage: "https://mosure.github.io/bevy_gaussian_splatting/examples"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
topics: ["bevy", "gaussian-splatting", "render-pipeline", "rust", "particles", "webgl2", "webgpu"]
stars: 270
forks: 25
openIssues: 80
closedIssues: 52
watchers: 7
contributors: 8
recentReleases: 0
createdAt: "2023-09-20T22:53:12Z"
lastCommitAt: "2026-06-25T02:06:52Z"
lastReleaseAt: "2024-10-02T15:31:22Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 67
undervaluedScore: 26
maintainers: ["mosure", "annejan", "elcerdo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/694389234/dc99f66b-5401-4827-a2db-05a60a011d61"
discussionCount: 6
---

# bevy_gaussian_splatting 🌌

bevy gaussian splatting render pipeline plugin. view the [live demo gallery](https://mosure.github.io/bevy_gaussian_splatting/examples/) or open [`trellis.glb`](https://mosure.github.io/bevy_gaussian_splatting/index.html?input_scene=https%3A%2F%2Fmitchell.mosure.me%2Ftrellis.glb&rasterization_mode=Color) directly.

## install

```bash
cargo +nightly install bevy_gaussian_splatting
bevy_gaussian_splatting --input-cloud [file://gaussian.ply | https://mitchell.mosure.me/go_trimmed.ply]
bevy_gaussian_splatting --input-scene [file://scene.glb | https://mitchell.mosure.me/trellis.glb]
```

> note: default bevy_gaussian_splatting features require nightly rust for generic associated types. to use on stable, disable default features and `nightly_generic_alias` feature

## viewer hotkeys

- `esc`: close viewer
- `s`: save screenshot to `screenshots/`
- `g`: export the loaded gaussian scene to `exports/gaussian_scene_<frame>.glb` (cloud transforms + active camera)

## capabilities

- [X] ply to gcloud converter
- [X] gcloud and ply asset loaders
- [X] bevy gaussian cloud render pipeline
- [X] gaussian cloud particle effects
- [X] wasm support /w [live…
