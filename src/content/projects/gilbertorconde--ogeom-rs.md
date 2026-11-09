---
repo: "gilbertorconde/ogeom-rs"
name: "ogeom-rs"
description: "A B-rep CAD kernel in pure Rust: exact geometry, stable entity identity, and history on every operation."
readmeQualityOk: true
url: "https://github.com/gilbertorconde/ogeom-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 13
closedIssues: 313
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-04T22:56:01Z"
lastCommitAt: "2026-11-09T04:34:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 59
maintainers: ["gilbertorconde", "enomado"]
openGraphImageUrl: "https://opengraph.githubassets.com/71bb1245b903a3b91ea022b8f9e7db9ee80ae5bd9c13fd5b10d9b1cf831f0a2f/gilbertorconde/ogeom-rs"
discussionCount: 1
---

# ogeom

A B-rep solid modelling kernel in Rust. It does not wrap or link any other
CAD kernel, and it is licensed LGPL-2.1 as a derivative work of Open
CASCADE Technology, its reference kernel: see
[`PROVENANCE.md`](https://github.com/gilbertorconde/ogeom-rs/blob/HEAD/PROVENANCE.md).

- Guide: <https://gilbertorconde.github.io/ogeom-rs/>
- API reference: <https://gilbertorconde.github.io/ogeom-rs/api/ogeom/>
- Changes: [`CHANGELOG.md`](https://github.com/gilbertorconde/ogeom-rs/blob/HEAD/CHANGELOG.md)

## What it does

| Area | Included |
|---|---|
| Modelling | primitives, extrusions, revolutions, sweeps, lofts, booleans, fillets and chamfers, offsets and shells, drafts, face removal |
| Geometry | lines, conics, B-splines and NURBS, elementary and freeform surfaces, curve and surface intersection |
| Analysis | volume, area, mass properties, distances, validity checks, healing |
| Meshing | tessellation at a stated deflection, per-face meshes that agree along shared edges |
| Drawings | hidden line removal, sections, DXF output |
| Exchange | STEP (assemblies, colours, PMI, views) and IGES in both directions; STL, OBJ, PLY, glTF, 3MF, VRML, DXF, and a native format |
| Meshes…
