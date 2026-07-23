---
repo: "simvia-tech/meshlane"
name: "meshlane"
description: "Mesh conversion library, descendant of meshio."
readmeQualityOk: true
url: "https://github.com/simvia-tech/meshlane"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 25
forks: 2
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-06-18T13:37:52Z"
lastCommitAt: "2026-07-23T06:15:44Z"
lastReleaseAt: "2026-07-17T11:12:33Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 38
maintainers: ["mariam-simvia", "fznoussi", "SIMVIA-lucas-sovre"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2f9bb7ef5973aff57a654bfd39745777fa3025176695bd10f135b8f96e79ed3/simvia-tech/meshlane"
---

<h1 align="center">meshlane</h1>

> **meshlane** is an actively maintained descendant of
> [meshio](https://github.com/nschloe/meshio) by Nico Schlömer.
> It builds directly on meshio's codebase and history, and extends it with new
> format support and fixes geared toward FEA/CFD interoperability
> (code_aster, Ansys, OpenFOAM, Salome/MED). See [Relationship to meshio](#relationship-to-meshio).

There are many mesh formats for representing unstructured meshes. meshlane reads
and writes all of the following and converts smoothly between them:

> [Abaqus](http://abaqus.software.polimi.it/v6.14/index.html) (`.inp`),
> ANSYS msh (`.msh`),
> **Ansys/APDL input** (`.inp`, `.cdb`),
> [AVS-UCD](https://lanl.github.io/LaGriT/pages/docs/read_avs.html) (`.avs`),
> [CGNS](https://cgns.github.io/) (`.cgns`),
> [DOLFIN XML](https://manpages.ubuntu.com/manpages/jammy/en/man1/dolfin-convert.1.html) (`.xml`),
> [Exodus](https://nschloe.github.io/meshio/exodus.pdf) (`.e`, `.exo`),
> [FLAC3D](https://www.itascacg.com/software/flac3d) (`.f3grid`),
> [H5M](https://www.mcs.anl.gov/~fathom/moab-docs/h5mmain.html) (`.h5m`),
> [Kratos/MDPA](https://github.com/KratosMultiphysics/Kratos/wiki/Input-data)…
