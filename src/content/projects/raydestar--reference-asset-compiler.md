---
repo: "raydeStar/reference-asset-compiler"
name: "reference-asset-compiler"
description: "Open-source, evidence-gated pipeline from one concept image to a rigged, textured, animation-ready UE5 character: Hunyuan3D geometry and PBR, Blender retopo/UV/rig, UE 5.8 import verification and a playable gallery. Rigs with or without Auto-Rig Pro."
readmeQualityOk: true
url: "https://github.com/raydeStar/reference-asset-compiler"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["ai-3d-generation", "auto-rigging", "blender", "character-pipeline", "game-development", "hunyuan3d", "image-to-3d", "indie-game-dev", "pbr-texturing", "unreal-engine-5"]
stars: 49
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-08-31T22:45:19Z"
lastCommitAt: "2026-11-25T13:20:30Z"
lastReleaseAt: "2026-11-25T06:20:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 38
maintainers: ["raydeStar"]
openGraphImageUrl: "https://opengraph.githubassets.com/0687442a7bb3f74cea16c11b571e4de4c0d8911f540f33b5b68f31a9069cb968/raydeStar/reference-asset-compiler"
discussionCount: 0
---

# Reference Asset Compiler

## At a glance

- **What it does:** turns one concept image into a rigged, textured, animation-ready Unreal Engine 5 character. AI proposes candidates (Hunyuan3D for geometry and PBR), and numeric gates, deformation tests and engine checks decide what gets promoted.
- **Headline result:** the cat below went from one reference image to a playable UE 5.8 gallery **in one working day with two human approvals**.
- **See it:** the [walk-cycle capture](https://github.com/raydeStar/reference-asset-compiler/blob/HEAD/docs/images/ayric-workshop-v051/walk.gif) shows 24 actual UE animation poses, with [media provenance](https://github.com/raydeStar/reference-asset-compiler/blob/HEAD/docs/images/ayric-workshop-v051/provenance.json).
- **Run it (Windows only):** after the [Quick start](#quick-start) install, `.\scripts\workflow_doctor.ps1 -Profile ledger` checks the compiler with no AI or DCC tools, and the [CC0 crate example](https://github.com/raydeStar/reference-asset-compiler/blob/HEAD/examples/crate/README.md) runs from a fresh clone without a GPU.
- **Reproducible:** every stage writes a receipt with the SHA-256 of what it consumed and produced.
