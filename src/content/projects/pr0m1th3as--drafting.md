---
repo: "pr0m1th3as/drafting"
name: "drafting"
description: "Planar geometry, DXF and STL input/output, and a technical drawing model with DXF, TikZ and figure backends for GNU Octave"
readmeQualityOk: true
url: "https://github.com/pr0m1th3as/drafting"
homepage: "https://pr0m1th3as.github.io/drafting/"
language: "MATLAB"
languages: ["MATLAB", "C++"]
languagePcts: [70, 29]
stars: 11
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-08-17T12:12:24Z"
lastCommitAt: "2026-10-20T08:49:52Z"
lastReleaseAt: "2026-10-17T11:46:14Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 61
maintainers: ["pr0m1th3as"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cfd81952684a756dd92481f50fde0f8349ec761bcd945ca1f3cfab74c8b2d82/pr0m1th3as/drafting"
---

# drafting

Planar geometry, technical drawing and solid modelling for GNU Octave.

The package is the drafting layer an engineering design package builds on,
and an alternative to OpenSCAD written in Octave itself: compute geometry,
model a part, draw it, and send it to a CAD program as DXF or STEP, to a
slicer as STL or 3MF, to a report as LaTeX, or to the screen. Solids come
through [Open CASCADE](https://dev.opencascade.org/). All geometry is in
millimetres.

## What it does

- **Outlines and curves:** polylines with arcs, splines, paths in 3-D, and
  regions with holes, which combine, offset, round, hull, mirror and repeat as
  OpenSCAD's 2-D shapes do, their arcs kept exact; text as outlines.
- **Solids:** primitives, and extrusions, revolutions, lofts, sweeps and
  helices of regions; booleans; holes, pockets, fillets, full rounds,
  chamfers and shells on edges and faces chosen by what they are; tapped
  holes and ISO metric threads, internal and external, clearance holes with
  the counterbores and countersinks of the standards, and the knurls of DIN
  82; sections and projections that are regions again; STEP in and out.
- **Meshes:** STL, OBJ, PLY and 3MF read and…
