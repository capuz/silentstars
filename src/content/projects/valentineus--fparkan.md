---
repo: "valentineus/fparkan"
name: "fparkan"
description: "Utilities and tools for the game \"Parkan: Iron Strategy\"."
originalDescription: "Utilities and tools for the game \"Parkan: Iron Strategy\"."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/valentineus/fparkan"
homepage: "https://fparkan.popov.link"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-10-29T07:27:43Z"
lastCommitAt: "2026-11-14T10:46:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 72
maintainers: ["valentineus"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/559142620/31fe17b9-5bcf-4351-8a07-5636985db30d"
discussionCount: 1
---

FParkan is an open-source engine for *Parkan: Iron Strategy*, written in Rust and Vulkan. It reads resources from the installed original game. Currently the application shows an interactive scene of the selected map: terrain, all available MSH components of objects, materials, dynamic shadows, sky, weather, lightning FX, and sound events. A normal launch executes the supported `Init` commands, updates the world queue and resource allocation, and every two seconds runs the supported commands and conditions of the active clan's `Mission` event. "Firing Line" (Огневой рубеж) checks the tactical area near the hero's starting position and plays two scripted lines. The message interface and unit movement are still in progress. Models start from the node settings of the prototype. Supported Control animations follow the scene clock, while effects follow the clocks of their own instances with a shared start time. Unsupported Control tracks remain at the saved initial pose. Terrain switches between the original LOD0/LOD1 per cell relative to the current camera; a detailed grid is kept under building foundations. Horizontal water uses a flat reflection of the nearest active height; waves…
