---
repo: "hk21x/nightfire-recomp"
name: "nightfire-recomp"
description: "007 Nightfire recompilation for a native PC port."
readmeQualityOk: true
url: "https://github.com/hk21x/nightfire-recomp"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-28T07:12:34Z"
lastCommitAt: "2026-10-30T11:02:49Z"
lastReleaseAt: "2026-10-30T09:42:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 33
maintainers: ["hk21x"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ac51c1f8320548324674109e8cd896651de8421c1ffa5acd5b74ec7d87d41e4/hk21x/nightfire-recomp"
---

# 007: NightFire - XBE Recomp

An unofficial native PC port of the original Xbox version of 007: NightFire, with extended graphics options and other
enhancements. The game's own x86 code is statically recompiled into Windows executables with the
[Xbox XBE Recomp](https://github.com/TGP482/XboxXBE-Recomp) tool; the Xbox's graphics, sound and system libraries are
reimplemented for Windows (Direct3D 12 or 11, XAudio2, SDL). It is not an emulator.

> [!NOTE]
> This project does not include any game assets. You must provide the files from your own legally acquired copy of
> the game to build and play.

## Supported Versions

The European (PAL) and North American (NTSC) Xbox releases of 007: NightFire (title id 45410026):

| Release | `default.xbe` (on foot, menus) | `Driving.xbe` (the driving missions) |
| --- | --- | --- |
| Europe (PAL; also the En, Fr, De, Es, It, Nl, Sv disc) | `796222e048be3595c323b4c6d9795107132dc4ca` | `e0c41209d8979fcd03ac3d656be78759006023cb` |
| USA (NTSC) | `7e4b8f8a54bacc61a5897ba5245fdd65bddc0752` | `8d46a023dfbd5c89d4ee04fe28b24a9620de546a` |

The two releases run the same code (their xbes differ only in the signature and certificate); each plays its own…
