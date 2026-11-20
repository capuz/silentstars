---
repo: "sp-hy/CrossFix"
name: "CrossFix"
description: "Fix mod for the PC release of Chrono Cross"
readmeQualityOk: true
url: "https://github.com/sp-hy/CrossFix"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-11T09:02:04Z"
lastCommitAt: "2026-11-20T11:57:43Z"
lastReleaseAt: "2026-02-15T07:14:51Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 27
maintainers: ["sp-hy"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b427f33791fc1123f615526dab918dbea2b993860e7c17a8c24edfbd035098d/sp-hy/CrossFix"
---

Enhancements for the PC version of Chrono Cross Radical Dreamers Edition.

Supports the latest Steam release v1.0.1.0

## Features

- **Widescreen** - Dynamic aspect ratio (16:9, 21:9, 32:9), correct camera boundaries, UI textures, and scaled battle/dialog/shop/save menus
- **60 FPS Mode** - Unlock the frame rate to 60 FPS everywhere
- **Resolution scale (1x-16x)** - Renders the 3D picture at any multiple of the PS1 resolution instead of the game's fixed 4x, framebuffer effects such as the battle swirl included
- **Background Play** - Keep the game running when tabbed out (prevents pause on focus loss)
- **Mod Loader** - Load replacement assets from a `mods/` folder instead of editing .dat files (experimental)
- **Texture Replacer** - Replace in-game textures with custom .png or .dds files in `mods/textures/` (hash-based filenames; use texture dump to discover hashes)
- **Voices** - Play custom MP3 voice lines during field and battle dialogue; voice packs in `mods/<pack>/voices/` (or `mods/voices/`) by scene, dialog index, page, and speaker, the same layout OpenCross reads
- **PGXP** - Precise sub-pixel 3D vertex positions, culling correction and perspective-correct textures
