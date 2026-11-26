---
repo: "thermeng/SciRender"
name: "SciRender"
description: "Qt 6 + OpenGL 4.6 scientific rendering application supporting the VTK XML formats (.vtu, .vts, .vti, .vtp, .vtr, .vtm multi-block), VTK legacy (.vtk), STL, and OBJ files. Maps scalar data to surface colormaps, draws instanced vector-field arrow glyphs, integrated streamlines, particle traces, volume ray-marching, and isosurface & much more"
readmeQualityOk: true
url: "https://github.com/thermeng/SciRender"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["mesh", "visualization", "computational-fluid-dynamics", "gpu", "opengl", "colormaps", "line-integral-convolution", "streamline"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-15T20:03:51Z"
lastCommitAt: "2026-11-26T12:58:49Z"
lastReleaseAt: "2026-11-25T12:54:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 57
maintainers: ["thermeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/209e6ba2712e121a99b20aa4ea773cbda17978dd98032205dc4e93104ce3368a/thermeng/SciRender"
---

Qt 6 + OpenGL 4.6 scientific rendering application. Loads VTK XML (`.vtu`, `.vts`, `.vti`, `.vtp`, `.vtr`, `.vtm` multi-block), VTK legacy (`.vtk`), STL, and OBJ meshes, plus `.pvd` time-series collections. Maps scalar data to surface colormaps, draws instanced vector-field arrow glyphs, integrates streamlines, renders particle traces, Line Integral Convolution (LIC), volume ray-marching, and isosurface extraction via marching cubes. Streams `.pvd` animations and exports them to MJPEG AVI video or PNG frame sequences.

Includes a CFD module: a steady/transient finite-volume (SIMPLE/PISO) solver with k-omega SST turbulence, 2D/3D unstructured mesh support, boundary conditions (velocity inlet, pressure outlet, walls, symmetry), transient restart, and `.scfd` case save/load with full field and clock preservation.

Features include a 5-direction PBR-calibrated lighting kit, axis triad overlay with pole-view handling, axis-aligned clipping and slice planes, wireframe overlay, GPU-compute level-of-detail (LOD), depth-peel order-independent transparency (1–8 layers), orthographic/perspective projection, screenshot export, and a rich Qt Widgets sidebar with per-page control panels.
