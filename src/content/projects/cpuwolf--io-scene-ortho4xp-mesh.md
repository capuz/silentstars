---
repo: "cpuwolf/io_scene_ortho4xp_mesh"
name: "io_scene_ortho4xp_mesh"
description: "Ortho4xp .mesh file import/export"
readmeQualityOk: true
url: "https://github.com/cpuwolf/io_scene_ortho4xp_mesh"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-10-10T03:36:03Z"
lastCommitAt: "2026-10-21T21:12:44Z"
lastReleaseAt: "2026-10-20T22:59:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 37
maintainers: ["cpuwolf"]
openGraphImageUrl: "https://opengraph.githubassets.com/90ac4faee30f29114ee3fdf6b20370427012b6333ca271535b4a81f56bd31e82/cpuwolf/io_scene_ortho4xp_mesh"
---

# X-Plane DSF & Ortho4XP Mesh (Blender extension)

Two X-Plane tile importers in one extension, for Blender 4.2+ (tested on Blender 5.2.2 LTS,
macOS):

* **Ortho4XP `.mesh`** — read *and write* the intermediate tile mesh, e.g.
  `Data+27+089.mesh`, with the tile's `.ter` orthophotos attached on import. This is the file
  to edit when water cuts, coastlines or airport levelling need fixing before the tile is
  rebuilt into a DSF.
* **X-Plane `.dsf`** — import the terrain mesh of a *shipped* scenery tile (including the
  7z-compressed Global Scenery files) with its terrain-type materials and textures. Import
  only: a DSF carries layers this add-on does not model, so it is never written back.

---

## Install

This repository *is* the package: `blender_manifest.toml` plus four Python modules. There is
nothing to build and no Python packages to install outside Blender (`numpy` ships with
Blender; the `.mesh` codec itself is numpy-only).

It is packaged as a **Blender extension**, so it needs **Blender 4.2 or newer**.

**From the extensions platform** — *Edit → Preferences → Get Extensions*, search for
**Ortho4XP Mesh**, then *Install*.  (Listing: <https://extensions.blender.org/>)…
