---
repo: "adderek/vrdual"
name: "vrdual"
description: "VR for any 3d game"
readmeQualityOk: true
url: "https://github.com/adderek/vrdual"
language: "C++"
languages: ["C++"]
languagePcts: [74]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-18T19:37:29Z"
lastCommitAt: "2026-11-01T22:59:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 42
maintainers: ["adderek"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a181383fd4bf4ef873ff858375dd545f79e97a8b4cd5ab03c2d1f25bcfcdb64/adderek/vrdual"
fundingLinks: ["GITHUB:https://github.com/adderek", "LIBERAPAY:https://liberapay.com/adderek", "KO_FI:https://ko-fi.com/adderek"]
discussionCount: 0
---

# vrdual

Play ordinary 3D games in a VR headset with real stereo 3D: each eye gets
its own rendered view. The games don't need to know about it: no mods,
no VR support needed. Linux, Vulkan, OpenGL (via Zink) and Proton/DXVK games.

**One graphics card is enough**, any vendor (AMD, NVIDIA, Intel via Mesa).
The eyes are then rendered on alternate frames, so each eye gets half the
game's frame rate. A second, identical GPU is optional: it renders the other
eye in parallel, so each eye gets the full frame rate.

Status: early, but games run in the headset ([game list](https://adderek.github.io/vrdual/games.html)). Headset: Quest 3/3S
via [WiVRn](https://github.com/WiVRn/WiVRn) tested; any OpenXR runtime should work.

## Pictures

Video: [The Witcher 3, 5 s side-by-side](https://github.com/adderek/vrdual/blob/HEAD/screenshots/Witcher3.mp4) (3840x1080, made with `vrdual record`; play it in a VR video player as SBS).

## Install

**[INSTALL.md](https://github.com/adderek/vrdual/blob/HEAD/INSTALL.md)**: packages, then

```bash
git clone --recursive https://github.com/adderek/vrdual
cd vrdual
./vrdual install   # builds, prints the launch option: .../vrdual/run %command%
./vrdual xr…
