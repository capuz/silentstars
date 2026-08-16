---
repo: "javierbq/RayMol"
name: "RayMol"
description: "Fork of open-source PyMOL molecular visualization system refactored to run in MacOS/iOS using Metal."
readmeQualityOk: true
url: "https://github.com/javierbq/RayMol"
homepage: "https://raymol.io/"
language: "C"
languages: ["C", "C++"]
languagePcts: [54, 24]
stars: 30
forks: 6
openIssues: 27
closedIssues: 104
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-03-20T23:54:58Z"
lastCommitAt: "2026-08-16T04:08:21Z"
lastReleaseAt: "2026-07-02T17:28:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 50
maintainers: ["javierbq"]
openGraphImageUrl: "https://opengraph.githubassets.com/269df8b6f8dd312b645055578b54128fa0434387d69114164d682f08aaf2f6dd/javierbq/RayMol"
---

# RayMol

**RayMol** is a native **macOS · iPad · iPhone** reimagining of the
[PyMOL](https://pymol.org) molecular visualization system — a SwiftUI front end
driving the real PyMOL engine through **Metal**, with an embedded CPython
runtime so the full `pymol` Python API runs on-device.

It is a fork of [open-source PyMOL](https://github.com/schrodinger/pymol-open-source):
the C++ rendering and chemistry core is preserved, the OpenGL pipeline is
replaced with a modern Metal renderer, and a touch- and pointer-native UI is
built on top.

## Highlights

- **Metal rendering pipeline** — impostor ray-cast spheres & cylinders,
  tessellated cartoon tubes, MSAA, SSAO, real-time shadow mapping, order-
  independent transparency, and toon/silhouette outlines.
- **Hardware ray tracing** — real-time ambient occlusion + shadows via a Metal
  acceleration structure (`metal_raytrace`) on Apple-silicon GPUs, plus a
  Metal-accelerated hi-res ray export.
- **Native, responsive UI** — a SwiftUI inspector for per-structure
  representations, a sequence panel, interactive measurements, a timeline /
  movie builder, and an adaptive layout spanning Mac, iPad, and iPhone.
- **Raymond, the AI assistant**…
