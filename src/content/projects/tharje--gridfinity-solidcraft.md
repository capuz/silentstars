---
repo: "tharje/gridfinity-solidcraft"
name: "gridfinity-solidcraft"
description: "Gridfinity bins (hollow, solid for custom cutouts, half grid) and baseplates as a SolidCraft plugin. Parametric storage for 3D printing."
readmeQualityOk: true
url: "https://github.com/tharje/gridfinity-solidcraft"
homepage: "https://github.com/tharje/gridfinity-solidcraft/releases/latest"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["3d-print", "3d-printing", "baseplate", "bins", "cad", "gridfinity", "maker", "organizer", "parametric", "parametric-cad"]
stars: 14
forks: 0
openIssues: 4
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-13T11:28:54Z"
lastCommitAt: "2026-11-15T11:18:45Z"
lastReleaseAt: "2026-11-15T09:12:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 29
maintainers: ["tharje"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb75190e0281e11ebbbe1de29c255e7152e126fc60a5649c8b8c0da9bc6d01b6/tharje/gridfinity-solidcraft"
---

# Gridfinity for SolidCraft

A [SolidCraft](https://github.com/tangency-labs/solidcraft) plugin that makes
[Gridfinity](https://gridfinity.xyz) bins and baseplates, including baseplates that fill a drawer and
are split to fit your printer. The result is ordinary SolidCraft features:
one undo step, editable afterwards, and they keep working without the plugin.

| Underside: feet with magnet and screw holes | 4×3 baseplate with magnet holes |
|---|---|
|  |  |

- **bin**: width × depth cells, height in units (7 mm), Gridfinity feet, 0.95 mm walls,
  stacking lip, optional magnet holes (6.5 × 2.4 mm), screw holes (3 mm) and dividers.
  Full grid (42 mm cells) or **half grid** (21 mm cells: four feet fit one baseplate pocket; magnet
  holes sit on the same spots as a full-grid baseplate's magnets), or a **custom cell size**.
- **Custom grid** (`grid`: "Custom (sizes below)"): your own cell size from 15 to 100 mm, set
  separately along X and Y (`custom_size_x`, `custom_size_y`), so bins and baseplates divide evenly
  into a drawer or organizer. Parts with the same custom size fit each other, but not standard
  Gridfinity. Magnet and screw holes sit 8 mm in from the cell edges, or one…
