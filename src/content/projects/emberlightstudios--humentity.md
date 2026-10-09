---
repo: "emberlightstudios/Humentity"
name: "Humentity"
description: "Makehuman integration into Bevy Engine"
readmeQualityOk: true
url: "https://github.com/emberlightstudios/Humentity"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 25
forks: 4
openIssues: 2
closedIssues: 10
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-09-14T01:56:48Z"
lastCommitAt: "2026-10-09T18:56:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 61
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d88e0c498f95d89be5f776d2faee683ad519c848d410c3fe02bc76f8784a8e83/emberlightstudios/Humentity"
---

# Humentity

A Bevy plugin for loading, morphing, rigging, and animating MakeHuman-based 3D humanoid characters at runtime.

## Features

- **Template-based morphing** — hundreds of MakeHuman shape keys are baked into a small set of runtime morph targets, sharing one mesh per `(proxy, template, LOD)` triple across characters
- **Auto-rigging** — skeletal rigs are built automatically from MakeHuman rig/weight data and fitted to each character's morphed shape
- **Skeleton LOD** — each character has one fixed full skeleton; the active LOD set decides which bone sub-trees are disabled (via `SkeletonLodDisabled`) so their `GlobalTransform`s stop propagating
- **Mesh LOD** — use MakeHuman's lower-poly proxy meshes with Bevy's `VisibilityRange` for distance-based mesh switching
- **Animation retargeting** — three CPU paths (rotation-only, dynamic per-frame, shape-baked at import; see below) retarget glTF clips to arbitrary character shapes
- **GPU crowd posing** — pose tens of thousands of characters (80,000 in `gpu_crowd`) with a compute shader: clips bake once, per-instance blend weights drive the mix, and a custom skinning vertex shader does the rest. No per-bone entities, no…
