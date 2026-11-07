---
repo: "kevinroast/phoria2"
name: "phoria2"
description: "Small, friendly 3D for the web - Phoria2 graphics boogaloo!"
readmeQualityOk: true
url: "https://github.com/kevinroast/phoria2"
homepage: "https://kevs3d.co.uk/phoria2/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["3d", "charts", "graphics-engine", "webgl"]
stars: 85
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-10-26T17:23:13Z"
lastCommitAt: "2026-11-07T10:36:55Z"
lastReleaseAt: "2026-11-07T10:26:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 36
maintainers: ["kevinroast"]
openGraphImageUrl: "https://opengraph.githubassets.com/05a9e388b6544bf71885b44af29e1373e23a980a059631efcc19e7c6593812dc/kevinroast/phoria2"
---

# phoria2

Small, friendly 3D for the web. A WebGL 2 renderer with PBR materials, shadows, instancing, points,
lines, labels, picking, glTF models and particles, behind an API small enough to learn in an
afternoon - aimed at business apps: charts, labelled scenes, diagrams, dashboards, floor plans and
product viewers. The [demo gallery](https://kevs3d.co.uk/phoria2/).

- **Small**: about 70 KB gzipped for a lit, interactive scene, and about 116 KB for everything;
  charts, particles, glTF, motion and editing are separate imports, and the heavier parts (shadows,
  HDR environments, GPU picking) load only when used.
- **Interaction built in**: tooltips, hover highlights, click and drag handlers, and HTML labels
  that hide when they overlap or go behind something - each an option or a line of code, not a
  layer to build.
- **Idle when nothing changes**: a view draws only when something in it changed, so a dashboard of
  many views only updates when needed.
- **Any number of views on a page**: browsers allow about 16 WebGL contexts per page, so most
  libraries need one big canvas and scissoring for a dashboard of tiles. phoria2 gives the first four
  views their own context and…
