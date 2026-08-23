---
repo: "Kweepa/Quake64"
name: "Quake64"
description: "Quake for Commodore 64, in wireframe"
readmeQualityOk: true
url: "https://github.com/Kweepa/Quake64"
language: "Assembly"
languages: ["Assembly", "HTML", "JavaScript"]
languagePcts: [33, 28, 27]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-15T18:41:20Z"
lastCommitAt: "2026-08-23T04:09:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: ["Kweepa"]
openGraphImageUrl: "https://opengraph.githubassets.com/5eaba2ce4fbc7226c74f32fa1a9e5c99fddfee166fd1280562517a37b69536a0/Kweepa/Quake64"
---

# Quake64

A Commodore 64 *Quake* demake: a 3D line-drawn world in custom character graphics, with portal rooms, stick-figure enemies, and sprite weapons.

This is an early prototype. The playable binary is **`quake64.d64`** (download from the repo). Autostart it in VICE: skill/options menu, then the core line engine — a double-buffered Bresenham line drawn world in VIC Bank 3 — plus a HUD font, frame profiler, and sprite weapons (axe, super shotgun, nailgun, grenade launcher).

## Display

The 3D view is a **192×128** custom-charset window (24×16 tiles), double-buffered in VIC Bank 3 (`$C000–$FFFF`). A raster IRQ at the mid-window split (`$D018`) switches between two 256-tile charsets so the viewport can use **512 unique glyphs**. Buffer flips only retarget screen and charset pointers, so the visible frame never gets drawn into.

Each frame **wipes the live 24 charset columns** (~16.6k cycles). Dirty-tile tracking was dropped: the bookkeeping slowed the line plotter, and the savings only showed up in sparse frames. The HUD occupies the full-width rows above the 3D viewport (black, dark-red labels / orange digits): title, map name, ammo, health, and armour. The viewport sits at…
