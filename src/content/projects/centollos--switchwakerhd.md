---
repo: "centollOS/SwitchWakerHD"
name: "SwitchWakerHD"
description: "Wind Waker HD (Wii U) static recompilation for Nintendo Switch, deko3d renderer. Requires your own game dump."
readmeQualityOk: true
url: "https://github.com/centollOS/SwitchWakerHD"
homepage: "https://github.com/centollOS/SwitchWakerHD/releases"
language: "C++"
languages: ["C++", "C"]
languagePcts: [57, 23]
topics: ["deko3d", "nintendo-switch", "static-recompilation", "switch-homebrew", "wii-u", "wind-waker-hd", "zelda"]
stars: 224
forks: 11
openIssues: 15
closedIssues: 49
watchers: 7
contributors: 13
recentReleases: 10
createdAt: "2026-10-04T22:49:00Z"
lastCommitAt: "2026-11-03T11:15:29Z"
lastReleaseAt: "2026-10-28T09:00:29Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 32
maintainers: ["Pulpparty", "lschaupp", "teclilla18"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b7d96468e9e7d55c78763a53721376f835b2528cfe1cc98363f056e3a58dc15/centollOS/SwitchWakerHD"
discussionCount: 3
---

# SwitchWakerHD

## What it is

SwitchWakerHD is an unofficial native port of a 2013 Wii U adventure game (title ID
`00050000-10143500` USA or `00050000-10143600` Europe, version 0) to the Switch (homebrew). The game's PowerPC code is
translated to C ahead of time by a static recompiler, the Cafe OS libraries the game uses are
reimplemented natively, and its GX2 graphics are drawn with deko3d, the Switch's own GPU API. There
is no CPU emulation and no GPU command emulation.

It is a fork of [ZeldaWWHDRecomp](https://github.com/ZeldaWWHDRecomp/ZeldaWWHDRecomp), which runs
the same recompilation on macOS, Linux, Windows and Android. Those platforms still build from this
repository; their instructions are in the upstream README, kept as
[docs/upstream-README.md](https://github.com/centollOS/SwitchWakerHD/blob/HEAD/docs/upstream-README.md). How the recompilation works:
[docs/how-it-works.md](https://github.com/centollOS/SwitchWakerHD/blob/HEAD/docs/how-it-works.md).

## What you need

- **Your own legally obtained copy of the game**: the USA version (title `00050000-10143500`) or the
  European one (title `00050000-10143600`, in its five languages), version 0 (the disc or eShop…
