---
repo: "centollOS/SwitchWakerHD"
name: "SwitchWakerHD"
description: "Wind Waker HD (Wii U) static recompilation for Nintendo Switch, deko3d renderer. Requires your own game dump."
readmeQualityOk: true
url: "https://github.com/centollOS/SwitchWakerHD"
homepage: "https://github.com/centollOS/SwitchWakerHD/releases"
language: "C++"
languages: ["C++", "C"]
languagePcts: [57, 24]
topics: ["deko3d", "nintendo-switch", "static-recompilation", "switch-homebrew", "wii-u", "wind-waker-hd", "zelda"]
stars: 172
forks: 10
openIssues: 26
closedIssues: 21
watchers: 5
contributors: 12
recentReleases: 9
createdAt: "2026-10-04T22:49:00Z"
lastCommitAt: "2026-10-22T08:51:36Z"
lastReleaseAt: "2026-10-14T17:31:39Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 87
undervaluedScore: 31
maintainers: ["Pulpparty", "depende3000"]
openGraphImageUrl: "https://opengraph.githubassets.com/e72e2586eb60ba23e2690783cf1ecab98942cb95a86ee3ca76daa3fac909aa4f/centollOS/SwitchWakerHD"
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
