---
repo: "sashkinbro/EmuCoreR"
name: "EmuCoreR"
description: "PlayStation 1 Emulator for Android"
readmeQualityOk: true
url: "https://github.com/sashkinbro/EmuCoreR"
homepage: "https://emucorer.web.app/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
topics: ["emucore", "emulator", "jetpack-compose", "kotlin", "playstation1", "ps1", "sony", "emucorer", "new"]
stars: 18
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-09-10T20:13:11Z"
lastCommitAt: "2026-10-03T09:21:42Z"
lastReleaseAt: "2026-09-30T09:11:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 58
maintainers: ["sashkinbro"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0670ae046e00715f2e4514694612e90b9bf282c4766d49cb7ef089ec3295ce3/sashkinbro/EmuCoreR"
---

# EmuCoreR

EmuCoreR is a PlayStation 1 emulator and game library for Android, built around the [SwanStation](https://github.com/libretro/swanstation) libretro PS1 core and a purpose-built Compose interface for phones, tablets, and Android TV.

## Website and Releases

Builds are published on the project website at **[emucorer.web.app](https://emucorer.web.app)**. Every release has localized notes in all 18 app languages and per-file download links, backed by Cloud Firestore. Release details can be opened directly from the app's Updates screen.

- Website: https://emucorer.web.app
- Changelogs and downloads: https://emucorer.web.app/#downloads
- Community: https://discord.com/invite/c5EBeNRpz2

## Highlights

- [SwanStation libretro core](https://github.com/libretro/swanstation) with an ARM64 CPU recompiler/JIT and interpreter fallback
- OpenGL ES, Vulkan, and software renderers with up to 10x internal resolution and texture filtering (Nearest, Bilinear, JINC2, xBR)
- True color rendering, scaled dithering, deinterlacing, and NTSC timing controls
- PGXP geometry precision, widescreen hacks, fast boot, and software renderer readbacks
- Disc image support for CUE/BIN, ISO, IMG, CHD,…
