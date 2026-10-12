---
repo: "pr0m1th3as/drafting"
name: "drafting"
description: "Planar geometry, DXF and STL input/output, and a technical drawing model with DXF, TikZ and figure backends for GNU Octave"
readmeQualityOk: true
url: "https://github.com/pr0m1th3as/drafting"
language: "MATLAB"
languages: ["MATLAB", "C++"]
languagePcts: [75, 25]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-08-17T12:12:24Z"
lastCommitAt: "2026-10-12T11:14:50Z"
lastReleaseAt: "2026-10-07T08:19:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 59
maintainers: ["pr0m1th3as"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9712c65b1a281cc2a3a53dd20349c71179d58b266afd04987384fa347105f81/pr0m1th3as/drafting"
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
  helices of regions; booleans; holes, pockets, fillets, chamfers and shells
  on edges and faces chosen by what they are; tapped holes and ISO metric
  threads, internal and external; sections and projections that are regions
  again; STEP in and out.
- **Meshes:** STL, OBJ, PLY and 3MF read and written with their colours, cut
  into regions and fitted back to lines and arcs, and taken into booleans.
-…
