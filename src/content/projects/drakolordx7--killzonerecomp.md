---
repo: "drakolordx7/KillzoneRecomp"
name: "KillzoneRecomp"
description: "Native PC port of Killzone (PS2) via static recompilation. Mouse and keyboard, 120+ fps, upscaling. Bring your own disc."
readmeQualityOk: true
url: "https://github.com/drakolordx7/KillzoneRecomp"
language: "C++"
languages: ["C++"]
languagePcts: [78]
topics: ["killzone", "pc-port", "playstation-2", "ps2", "ps2recomp", "static-recompilation"]
stars: 119
forks: 4
openIssues: 9
closedIssues: 8
watchers: 4
contributors: 2
recentReleases: 4
createdAt: "2026-09-30T23:04:05Z"
lastCommitAt: "2026-10-25T02:36:08Z"
lastReleaseAt: "2026-10-22T14:24:18Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 31
maintainers: ["drakolordx7"]
openGraphImageUrl: "https://opengraph.githubassets.com/2db78a7ece009c1bccf4447ca555f4a6af9f7b7c5a774ebbf535685f41c91a5f/drakolordx7/KillzoneRecomp"
---

# Killzone for Windows (native PC port)

A native Windows port of Killzone (PlayStation 2, 2004) by [drakolordx7](https://github.com/drakolordx7). The game's code is recompiled to C++ with [PS2Recomp](https://github.com/ran-j/PS2Recomp), so it runs as a PC program with mouse and keyboard aim, high frame rates, higher resolutions and ultrawide support.

[Download the latest build](https://github.com/drakolordx7/KillzoneRecomp/releases/latest)

No game files are included; you need your own disc image of Killzone, US version (SCUS-97402). Not affiliated with Sony or Guerrilla Games.

## Requirements

- Windows 10 or 11, 64-bit
- CPU with AVX2: Intel 4th gen (Haswell), AMD Ryzen or newer
- GPU with Direct3D 11, Direct3D 12 or Vulkan

## Usage

1. Unzip the build into a folder and run `killzone.exe`.
2. In the launcher, browse to your Killzone `.iso`.
3. Pick your settings and press Play.

Settings are in `killzone.ini` and saves in `disc\mc0`, both next to `killzone.exe`. To update, unzip a new build over the old one; settings and saves stay.

Mouse and keyboard work out of the box, and so do controllers with the original PS2 layout. The launcher's Controls tab lists the keys; change…
