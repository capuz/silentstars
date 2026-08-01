---
repo: "Hancapo/fivefury"
name: "fivefury"
description: "A Python toolkit for GTA V resource files."
readmeQualityOk: true
url: "https://github.com/Hancapo/fivefury"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 14
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-27T01:04:59Z"
lastCommitAt: "2026-08-01T06:13:38Z"
lastReleaseAt: "2026-04-06T08:15:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 49
maintainers: ["Hancapo"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b8b544ec942f5c224098cfb5ed588f4d8c249fc8d63071755e06581686c8cac/Hancapo/fivefury"
---

# FiveFury

FiveFury is a Python library for reading, writing, and packaging GTA V asset files: drawables, collisions, map metadata, animations, navigation data, texture dictionaries, text tables, audio containers, cutscenes, DLC metadata, and RPF archives.

It targets practical modding workflows — declarative high-level helpers for common authoring tasks, with access to the underlying binary and resource layers when you need them. Heavy operations (vertex packing, collision generation, hashing, crypto, resource layout, archive scanning) run in a bundled native extension.

## Installation

```bash
pip install fivefury
```

Python 3.11+ is required.

The Assimp-backed import helpers (`assimp_to_ydr`, `obj_to_ydr`, `fbx_to_ydr`, `obj_to_nav`) additionally require the `impasse` package and a native `assimp` library reachable through the environment (usually via `PATH`).

## Format support

| Format | Status | Scope |
| --- | --- | --- |
| `YDR` | Full | Drawables: models, LODs, materials, shaders, lights, embedded textures and bounds, skeletons, skinning |
| `CDR` | Read | PS3 drawables: materials, LODs, QB/EDGE geometry, compressed indices, skeletons and skinning |
| `YDD` | Full |…
