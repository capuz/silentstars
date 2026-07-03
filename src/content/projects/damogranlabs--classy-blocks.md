---
repo: "damogranlabs/classy_blocks"
name: "classy_blocks"
description: "Python classes for easier creation of OpenFOAM's blockMesh dictionaries."
url: "https://github.com/damogranlabs/classy_blocks"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["mesh", "openfoam", "cfd", "geometry", "modeling", "parametric", "parametric-modelling", "parametric-design", "blockmesh", "blockmeshdict"]
stars: 219
forks: 52
openIssues: 10
closedIssues: 55
watchers: 11
contributors: 6
recentReleases: 2
createdAt: "2020-02-01T18:05:37Z"
lastCommitAt: "2026-07-03T12:22:55Z"
lastReleaseAt: "2026-06-15T20:53:17Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 33
maintainers: ["scodner", "fsimonis"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cc46470bcdf5322c6ccc5ff9e55340fdd5456479ab6df101acf28bfbf3d3983/damogranlabs/classy_blocks"
discussionCount: 3
---

Python classes for easier creation of OpenFOAM's blockMesh dictionaries.

# About

`blockMesh` is a very powerful mesher but creating even simple meshes requires a lot of manual work. Attempts to simplify or parametrize blockMeshDicts with `#calc` or `m4` often become cryptic and hard to maintain.

`classy_blocks` aims to reduce this overhead by providing a more intuitive workflow, reusable building blocks and automatic helpers for constructing and optimizing block-structured hexahedral meshes. Nonetheless, it is not an automatic mesher, so some geometries are better suited than others.

## Tutorial

Check out the [classy_blocks tutorial on damogranlabs.com](https://damogranlabs.com/2023/04/classy_blocks-tutorial-part-1-the-basics/)!

## Useful For

### Fields

- Turbomachinery (impellers, propellers)
- Microfluidics
- Flow around buildings
- Heat transfer (PCB models, heatsinks)
- Airfoils (2D)
- Solids (heat transfer, mechanical stresses)

### Cases

- Simpler rotational geometry (immersed rotors, mixers, cyclones)
- Pipes/channels
- Tanks/plenums/containers
- External aerodynamics of blunt bodies
- Modeling thin geometry (seals, labyrinths)
- Parametric studies
- Background…
