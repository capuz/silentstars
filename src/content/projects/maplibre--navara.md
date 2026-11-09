---
repo: "maplibre/navara"
name: "navara"
description: "Navara is a highly extensible 3D map engine. Load a wide range of GIS data, from satellite imagery and terrain to 3D city models and vector data, then freely layer your own visualizations on top."
readmeQualityOk: true
url: "https://github.com/maplibre/navara"
homepage: "https://navara.world"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [53, 43]
topics: ["3d", "3d-map", "3d-tiles", "geospatial", "gis", "globe", "map-engine", "mapping", "maps", "rust"]
stars: 460
forks: 51
openIssues: 37
closedIssues: 24
watchers: 8
contributors: 15
recentReleases: 5
createdAt: "2023-10-18T02:54:05Z"
lastCommitAt: "2026-11-09T03:25:55Z"
lastReleaseAt: "2026-08-30T09:38:11Z"
status: "thriving"
tags: ["needs_contributors", "funded", "release_machine"]
healthScore: 87
undervaluedScore: 37
maintainers: ["keiya01", "dependabot[bot]", "adel-elmala"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d559e86027cb48e79d34d17fcbd47e18837f563b3653d1d381ade0c068bc2fe/maplibre/navara"
fundingLinks: ["GITHUB:https://github.com/maplibre", "OPEN_COLLECTIVE:https://opencollective.com/maplibre"]
---

# Navara

Web map engines have long forced a choice: engines with polished declarative APIs are easy to adopt but hard to extend beyond their built-in features, while engines that expose deep low-level control are powerful but demand steep expertise. Fully 3D globe applications usually leave no option but the latter. Navara is a highly extensible 3D map engine built to remove that trade-off. It streams real-world GIS data, from satellite imagery and terrain to 3D city models and vector data, onto an interactive globe, and lets you present it the way your application needs: as a clean basemap for data visualization, styled per feature by attributes, or as a photorealistic scene with atmosphere, sunlight, and shadows.

Navara's answer to the trade-off is a tiered API. Capabilities are organized into four tiers, so you start with the simplicity of a declarative engine and drop down, as far as the render pipeline itself, only when you need more control:

- **Declarative**: declare sources and layers as plain config objects (basemaps, terrain, vector data, 3D Tiles). Meshes, effects, and lights work the same declarative way.
- **Plugin**: add purpose-built features as ready-made…
