---
repo: "Hancapo/fivefury"
name: "fivefury"
description: "A Python toolkit for GTA V resource files."
readmeQualityOk: true
url: "https://github.com/Hancapo/fivefury"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 17
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-27T01:04:59Z"
lastCommitAt: "2026-08-14T05:13:38Z"
lastReleaseAt: "2026-04-06T08:15:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 47
maintainers: ["Hancapo"]
openGraphImageUrl: "https://opengraph.githubassets.com/655827f6435840ab68502dd943a886e5f0b5fb17578328b4ed58a5da0121b239/Hancapo/fivefury"
---

# FiveFury

FiveFury is a Python toolkit for authoring, inspecting, validating, converting, and packaging GTA V assets. It exposes typed models and declarative builders over the game's binary resource formats, metadata containers, and RPF archives without hiding the lower-level data needed for advanced workflows.

FiveFury is designed for tools that need to do more than convert a single file:

- Read, modify, and rebuild assets while preserving data that is not yet modeled.
- Create maps, collisions, navigation data, drawables, fragments, animations, and archives from Python objects.
- Target GTA V Legacy or Enhanced where their binary layouts differ.
- Validate resource pointers, packed limits, ownership, and format-specific invariants before writing.
- Index a game installation and resolve assets, hashes, textures, parent dictionaries, and map dependencies.
- Run expensive hashing, resource-layout, geometry, collision, and archive operations through the bundled native extension.

## Installation

```bash
pip install fivefury
```

FiveFury requires Python 3.11 or newer.

Static mesh import uses Trimesh and accepts file paths, bytes, `trimesh.Trimesh`, and `trimesh.Scene` objects.…
