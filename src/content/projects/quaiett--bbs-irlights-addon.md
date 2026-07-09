---
repo: "quaIett/bbs-irlights-addon"
name: "bbs-irlights-addon"
description: "IRLite - BBS Mod Studio add-on: real-time lights and shadows via shaderpack patching (Fabric)"
readmeQualityOk: true
url: "https://github.com/quaIett/bbs-irlights-addon"
language: "Java"
languages: ["Java", "PowerShell"]
languagePcts: [68, 31]
stars: 9
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-20T16:28:10Z"
lastCommitAt: "2026-07-09T20:45:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 59
undervaluedScore: 42
maintainers: ["quaIett"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6d68a0e3f5efafbafa8e3b11058d4e38d4b0314f955530d5191aec9598db28c/quaIett/bbs-irlights-addon"
---

# ✦ IRLights

**Dynamic point & spotlight lighting for Minecraft 1.20.1 · 1.20.4 · 1.21.1**

*A [BBS](https://github.com/mchorse/bbs) addon that brings real-time shadows, volumetric light shafts, and per-light specular to Iris shaderpacks — no shaderpack edits required.*

</div>

---

## What is IRLights?

IRLights is a client-side Fabric mod that extends [BBS](https://github.com/mchorse/bbs) with a full dynamic lighting system. You place **point lights** and **spotlights** in your scene from the BBS editor, and IRLights does the rest:

- bakes per-light shadow maps every frame
- uploads all light data to the GPU via a single SSBO
- injects the matching GLSL into your shaderpack via a one-click patcher

The result is physically-plausible diffuse + specular lighting, hard/soft shadows, and volumetric fog shafts — all driven by BBS animation keyframes.

---

## Features

| Feature | Details |
|---|---|
| **Point lights** | Omnidirectional, cube-map shadows, radius + falloff |
| **Spotlights** | Cone angle, penumbra, atlas shadows |
| **Volumetrics** | Per-light ray-marched shafts with shadow occlusion |
| **Specular** | GGX BRDF, per-light roughness + intensity |
| **Shadow…
