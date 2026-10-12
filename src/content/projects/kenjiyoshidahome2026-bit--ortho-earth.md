---
repo: "kenjiyoshidahome2026-bit/ortho-earth"
name: "ortho-earth"
description: "High-performance orthographic map engine and GIS workstation, running entirely in the browser."
readmeQualityOk: true
url: "https://github.com/kenjiyoshidahome2026-bit/ortho-earth"
homepage: "https://www.ortho-earth.com"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [74, 22]
topics: ["dynamic-lod", "morton-order", "orthographic", "stencilbuffer", "webgl2", "plateau", "rust", "wasm", "webgpu"]
stars: 10
forks: 1
openIssues: 2
closedIssues: 49
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-04-14T20:56:01Z"
lastCommitAt: "2026-10-12T11:16:41Z"
lastReleaseAt: "2026-08-29T07:21:43Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 62
maintainers: ["kenjiyoshidahome2026-bit", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9c9d328043d4bec21b92bf66a3af442ddc53676230604857f5093af1efc5b8f/kenjiyoshidahome2026-bit/ortho-earth"
---

A serverless WebGPU/GL2 orthographic map engine and GIS workstation, built from scratch — zero dependencies, no tile servers. Runs entirely in the browser.

## Why Ortho Earth

- **Always a globe.** There is no flat Mercator mode to switch to or fall back on: orthographic and perspective are one continuum on a sphere (WGS84 ellipsoid optional), from the whole Earth down to street level. What you see at z2 and at z18 is the same model of the world.
- **MapLibre code runs on it.** `@ortho-earth/globe/maplibre` is a `maplibregl` namespace: style.json, expressions, sources (MVT · MLT · PMTiles · GeoJSON · raster · raster-dem · image · video), `addLayer`/`setPaintProperty`/`queryRenderedFeatures`, Markers, Popups and Controls. The gate is MapLibre's own example gallery: of 139 official examples, 70 give the same picture, 42 the same answer and 25 run (none fail to run). The ledger is [`packages/globe/maplibre-compat.md`](https://github.com/kenjiyoshidahome2026-bit/ortho-earth/blob/HEAD/packages/globe/maplibre-compat.md).
- **WebGPU first, WebGL2 always.** Shadows, ambient occlusion, clipping planes and atmospheric scattering on WebGPU; the same map, minus those, on WebGL2.
- **Reads…
