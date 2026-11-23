---
repo: "Derias13/VFD-GLB-Importer"
name: "VFD-GLB-Importer"
description: "One-click glTF 2.0 / GLB importer for Autodesk 3ds Max 2024-2026. PBR materials, textures, hierarchy, skin and animation. Created by Fady Derias."
readmeQualityOk: true
url: "https://github.com/Derias13/VFD-GLB-Importer"
language: "Python"
languages: ["Python", "MAXScript"]
languagePcts: [74, 26]
topics: ["3d", "3ds-max", "autodesk", "glb", "gltf", "importer", "maxscript", "pbr"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-16T07:40:18Z"
lastCommitAt: "2026-11-23T13:32:41Z"
lastReleaseAt: "2026-09-16T07:40:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 13
maintainers: ["Derias13"]
openGraphImageUrl: "https://opengraph.githubassets.com/be13213aff65d18ca89022fee2144196e6d2df00abdc415edc1e91ab9729ca80/Derias13/VFD-GLB-Importer"
---

# V.F.D GLB Importer

**Created by Fady Derias**

A one-click **glTF 2.0 / GLB importer for Autodesk 3ds Max 2024–2025-2026**. No dependencies, no pip packages — just drag, install, and import.

 

---

## ✨ Features

- **Full mesh import** — `POSITION`, `NORMAL`, `TEXCOORD_0`, indexed triangles, triangle strips & fans
- **PBR materials** — `PhysicalMaterial` with base color, metallic, roughness, normal, emissive & occlusion maps, double-sided and alpha (`BLEND` / `MASK`) support
- **Embedded textures** — images stored in the GLB (or base64 / external files) are extracted automatically and wired up with correct gamma
- **Correct UVs** — mapping channel is built before conversion, so textures land where they should (V-flip optional)
- **Node hierarchy** — full scene tree, or clean **mesh-only** import with zero Dummy helpers (default)
- **Skin & animation** — basic `Skin` weights (`JOINTS_0` / `WEIGHTS_0`) and baked TRS keyframes
- **Smart units** — GLB files are always in meters; the importer auto-converts to your Max system unit (mm / cm / m / inches / feet…)
- **Normalize tool** — one field rescales unit-cube outputs (e.g.
