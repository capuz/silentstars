---
repo: "cacuracaptors/oot-miyoomini"
name: "oot-miyoomini"
description: "Port of the zeldaret/oot decompilation to the Miyoo Mini Plus (OnionOS)"
readmeQualityOk: true
url: "https://github.com/cacuracaptors/oot-miyoomini"
language: "C"
languages: ["C", "Python"]
languagePcts: [63, 27]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-11-04T23:14:03Z"
lastCommitAt: "2026-11-11T11:16:51Z"
lastReleaseAt: "2026-11-11T11:20:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 54
maintainers: ["cacuracaptors"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd1bf1d3eb56cc4e238d32c506fdb56b0a5af752c3ab77911f457764ee6d4108/cacuracaptors/oot-miyoomini"
---

# The Legend of Zelda: Ocarina of Time - Miyoo Mini Plus / OnionOS Port

A native port of [**zeldaret/oot**](https://github.com/zeldaret/oot) - the Ocarina of Time decompilation - to the
**Miyoo Mini Plus** handheld running **OnionOS**.

The Miyoo Mini Plus has no 3D GPU, so this port draws the game with a software renderer written for it:
NEON-accelerated and spread over both CPU cores, with a dynamic resolution up to the full 640x480 screen. It plays
the **USA 1.1 (Rev A)** version of Ocarina of Time, built from your own ROM, and can also add German and French
from your European ROM.

**[Download the latest release](https://github.com/cacuracaptors/oot-miyoomini/blob/HEAD/../../releases)**

## OnionOS Exclusive Features

### Graphics and performance

- Native resolution with dynamic resolution (up to 640x480 on every device; on the Mini v4 and Mini Flip the
  2D chip scales the picture up to their 752x560 screen): the 3D picture gets sharper or softer by itself to keep the game smooth,
  with a target frame time you can choose. It can go from 640 down to 320 pixels wide (as on the N64), but in
  practice it rarely drops much: on the Mini Plus (1800 MHz) it stays at or near the…
