---
repo: "grymmjack/pixel-viewer"
name: "pixel-viewer"
description: "A pixel-art, and art scene focused viewer, organizer, and browser."
readmeQualityOk: true
url: "https://github.com/grymmjack/pixel-viewer"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["16colors", "adf", "ansi-art", "ansimation", "ascii-art", "bbs", "crt-effects", "eframe", "egui", "grid-layout"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-27T01:38:07Z"
lastCommitAt: "2026-08-04T06:11:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["grymmjack"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cde1b6217a5b3d523e7c1aed064433c3fcb7174ed008d803094975794492e0b/grymmjack/pixel-viewer"
---

# pixel-viewer

A fast, **pixel-art-first** image **browser** for Linux/macOS/Windows, written in
Rust with [egui/eframe](https://github.com/emilk/egui). 

> I wrote this to accompany my https://github.com/grymmjack/pixelmon so I could easily see my generated AI art and rate it fast.
> Needless to say, things got a little...

It decodes everything from PNG and Photoshop files to Commodore PETSCII and EGA
vector RIPscript, browses inside archives (`.zip`/`.lha`/`.arj`/…), and can mount
[16colo.rs](https://16colo.rs) — the online ANSI archive — as a virtual folder.

Think *Gwenview for pixel art and the BBS scene*: crisp nearest-neighbor zoom, palette-preserving decoders,
a virtualized thumbnail grid, and first-class support for ANSI / PETSCII / RIPscript
and the rest of the demoscene / textmode art world — right down to baud-rate
"watch it type" playback and CRT effects.

---

## Table of contents

- [Highlights](#highlights)
- [Supported formats](#supported-formats)
- [Install & build](#install--build)
- [Quick start](#quick-start)
- [Feature tour](#feature-tour)
  - [Browsing & navigation](#browsing--navigation)
  - [The thumbnail grid](#the-thumbnail-grid)
  - [The single-image…
