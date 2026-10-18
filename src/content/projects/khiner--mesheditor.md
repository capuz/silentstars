---
repo: "khiner/MeshEditor"
name: "MeshEditor"
description: "glTF viewer/editor/exporter supporting conversion of meshes into interactive rigid body audio models"
readmeQualityOk: true
url: "https://github.com/khiner/MeshEditor"
language: "C++"
languages: ["C++"]
languagePcts: [78]
topics: ["3d-graphics", "imgui", "mesh-editor", "modal-analysis", "physical-audio-modeling", "gltf", "gltf-viewer", "pbr", "physically-based-rendering", "modal-synthesis"]
stars: 34
forks: 3
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2023-10-23T13:16:14Z"
lastCommitAt: "2026-10-18T08:15:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 58
maintainers: ["khiner"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c370dfe1298e5900bd0bd69b54e229c61b73267ed6f45d9677e6f92d2ccda4e/khiner/MeshEditor"
---

# Mesh Audio Editor

Real-time mesh viewer and editor that converts meshes to rigid-body audio models using linear modal analysis and synthesis.

## Features

### General

* Branching undo/redo and navigation to any recorded state through the History window
* Save history and imported source assets in portable projects
* Create and delete meshes and mesh instances
  - Editable mesh primitives (Rect, Circle, Cube, IcoSphere, UVSphere, Torus, Cylinder, Cone)
  - Load `.obj` and `.ply` mesh files (via [tinyobjloader](https://github.com/tinyobjloader/tinyobjloader) and [tinyply](https://github.com/ddiakopoulos/tinyply))
* Select meshes, vertices, edges, or faces by clicking or box selection, through geometry with Blender's X-ray toggle (Alt+Z)
* Blender-style edit-mode topology operators on the GPU
  - Delete (X), dissolve (Ctrl+X), merge (M), extrude (E), duplicate (Shift+D), split (Y), and separate (P)
  - Fill (F), triangulate (Ctrl+T), tris to quads (Alt+J), loop cut (Ctrl+R), and rip (V)
  - Mouse-sized inset (I), bevel edges (Ctrl+B) and vertices (Ctrl+Shift+B) with wheel or -/= segments, and knife cuts (K)
  - Right-click, Ctrl+V, Ctrl+E, and Ctrl+F menus list additional…
