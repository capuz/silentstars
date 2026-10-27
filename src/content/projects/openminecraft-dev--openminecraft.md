---
repo: "OpenMinecraft-Dev/openminecraft"
name: "openminecraft"
description: "New engine!"
readmeQualityOk: true
url: "https://github.com/OpenMinecraft-Dev/openminecraft"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-11-08T10:08:13Z"
lastCommitAt: "2026-10-27T12:39:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 65
maintainers: ["MetsukiMio"]
openGraphImageUrl: "https://opengraph.githubassets.com/765fb77c275a71fb404c90b5184053f6093f305c0f63fc1b4dacb0522a75481a/OpenMinecraft-Dev/openminecraft"
---

[中文](https://github.com/OpenMinecraft-Dev/openminecraft/blob/HEAD/README-zh.md)

# OpenMinecraft

New engine/client project

## Submodules

- openminecraft-core/binary (string hash, endians)
- openminecraft-core/geom (font shaping wrapper, fallbacks)
- openminecraft-core/i18n (internationalization utils)
- openminecraft-core/io (json parser)
- openminecraft-core/log (Logging system)
- openminecraft-core/mem (memory tracker & allocator)
- openminecraft-core/network (network transfer wrappers, WIP)
- openminecraft-core/renderer (renderer api backend abstraction layer)
- openminecraft-core/specs (parsers for jpeg, png, zip etc.)
- openminecraft-core/util (internal utils)
- openminecraft-core/vfs (virtual file system)
- openminecraft-core/vm (elysia vm implementation)
- openminecraft-core/world (in-game data management)
- openminecraft (shell layer & demo)

## How to build

### Requirements

xmake<br>
python<br>
cmake, meson, ninja (optional)

### Steps

#### Download Resources

Run ```python scripts/fetchsrc.py```

#### Pack Bundles

##### Windows

Ensure you have the ```zip``` utility installed<br>
Use ```choco install zip``` to install<br>
Use the following command to create the…
