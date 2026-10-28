---
repo: "hk21x/007eon-recomp"
name: "007eon-recomp"
description: "007 Everything or Nothing recompilation for a native PC port."
readmeQualityOk: true
url: "https://github.com/hk21x/007eon-recomp"
language: "C++"
languages: ["C++"]
languagePcts: [87]
stars: 44
forks: 0
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2026-10-24T09:16:42Z"
lastCommitAt: "2026-10-28T09:58:01Z"
lastReleaseAt: "2026-10-26T22:57:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 31
maintainers: ["hk21x"]
openGraphImageUrl: "https://opengraph.githubassets.com/9084adb962984f872578f1dd7df653a54d6f0d52039adaa19378e8daaa6fa465/hk21x/007eon-recomp"
---

# 007: Everything or Nothing - XBE Recomp

An unofficial native PC port of the original Xbox version of 007: Everything or Nothing, with extended graphics
options and other enhancements. The game's own x86 code is statically recompiled into Windows executables with the
[Xbox XBE Recomp](https://github.com/TGP482/XboxXBE-Recomp) tool; the Xbox's graphics, sound and system libraries are
reimplemented for Windows (Direct3D 12 or 11, XAudio2, SDL). It is not an emulator.

> [!NOTE]
> This project does not include any game assets. You must provide the files from your own legally acquired copy of
> the game to build and play.

## Supported Version

The European (PAL) Xbox release of 007: Everything or Nothing (title id 45410042):

| File | SHA-1 |
| --- | --- |
| `default.xbe` (on foot, menus) | `62298fe4e618d9d81863080fb1b00c1667d871c9` |
| `driving.xbe` (the driving missions) | `da2b27d66d4b5f23af47421b9572fcad06669d22` |

The game is two programs: the driving missions are a second xbe that the game launches and returns from. Both are
recompiled, into `EoN.exe` and `EoNDriving.exe`, and the switch between them happens on its own. The log names the
SHA-1 of each xbe it found. Other…
