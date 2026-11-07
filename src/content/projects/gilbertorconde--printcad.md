---
repo: "gilbertorconde/printCAD"
name: "printCAD"
description: "A parametric CAD application focused on designing parts for FDM/SLA 3D printing, built entirely in Rust with a Vulkan renderer."
readmeQualityOk: true
url: "https://github.com/gilbertorconde/printCAD"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 6
forks: 1
openIssues: 1
closedIssues: 113
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2025-11-26T17:57:14Z"
lastCommitAt: "2026-11-07T13:56:18Z"
lastReleaseAt: "2026-10-09T17:54:58Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 82
maintainers: ["gilbertorconde", "enomado"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b0f779f467acb71c36871fae8f927928a91f111428efee20f1f6191927f7559/gilbertorconde/printCAD"
discussionCount: 4
---

# printCAD

Parametric CAD for designing 3D-printed parts. Linux, Windows and macOS; Rust and wgpu.

**Website: [gilbertorconde.github.io/printCAD](https://gilbertorconde.github.io/printCAD/)**: guides and downloads.

> **Early development.** The full path from sketch to printable file works,
> but expect rough edges.

## Features

- **Sketcher:** lines, arcs, circles, ellipses, conics, weighted splines,
  slots, text and more, with geometric and dimensional constraints solved
  live. Crossing curves make regions a feature can build from one by
  one, and a group holds elements together as one rigid piece. Solid
  edges, other sketches and datums come in as references, and generators
  draw gears, sprockets and shafts from their numbers. See
  [docs/SKETCHER.md](https://github.com/gilbertorconde/printCAD/blob/HEAD/docs/SKETCHER.md).
- **Design:** pad, pocket, revolve, loft, pipe, helix, primitives, holes to
  thread standards (modeled or cosmetic threads), fillets, chamfers, draft,
  thickness, booleans, and linear, polar, circular, point and path
  patterns, all editable in a feature tree, with datums and geometry
  borrowed from other bodies. A sketch can be projected onto faces…
