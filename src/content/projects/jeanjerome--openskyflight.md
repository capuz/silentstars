---
repo: "jeanjerome/OpenSkyFlight"
name: "OpenSkyFlight"
description: "Browser-based 3D flight simulator over real-world terrain using Three.js, with satellite imagery, elevation data from Terrarium, adaptive LOD, and aircraft-style HUD — no install required. "
readmeQualityOk: true
url: "https://github.com/jeanjerome/OpenSkyFlight"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["3d", "browser-game", "elevation", "es-modules", "flight-simulator", "hud", "javascript", "lod", "openstreetmap", "real-time-rendering"]
stars: 20
forks: 14
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-13T16:05:56Z"
lastCommitAt: "2026-11-26T15:23:25Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 54
maintainers: ["jeanjerome"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6c5f94110e84ca12311f5ef944d5e257462cd51982dc3b316d41946cde1dd95/jeanjerome/OpenSkyFlight"
---

# OpenSkyFlight

A browser-based 3D flight simulator over real-world terrain. Fly anywhere on Earth using elevation data from AWS Terrarium and multiple texture modes (satellite, road map, SAR radar, elevation contours) — all rendered in real time with Three.js WebGPU. No API key, and a single one-time build of the vendored terrain engine.

## Features

- **Real-world elevation** — [AWS Terrarium](https://registry.opendata.aws/terrain-tiles/) PNG tiles decoded into float height textures and displaced on the GPU via TSL `positionNode`, in a metric world (1 unit = 1 m) that keeps slopes at their true steepness
- **4 texture modes** — Satellite imagery, Road map, SAR radar, and Elevation contour lines — cycle with `T` or pick from the settings menu
- **Hi-Res mode (zoom 18)** — press `R` to toggle upsampled elevation with zoom-18 satellite textures for sharper close-up detail. Hi-res tiles are concentrated at the view center and fade concentrically toward the periphery.
