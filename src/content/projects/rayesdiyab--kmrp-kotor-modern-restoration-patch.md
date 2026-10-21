---
repo: "RayesDiyab/KMRP-KOTOR-Modern-Restoration-Patch"
name: "KMRP-KOTOR-Modern-Restoration-Patch"
description: "Modern UI restoration patch for Star Wars: KotOR — resolution-aware fonts, layouts, inventory and area map across 48 resolutions, from 4:3 to 32:9."
readmeQualityOk: true
url: "https://github.com/RayesDiyab/KMRP-KOTOR-Modern-Restoration-Patch"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [40, 36]
stars: 47
forks: 5
openIssues: 2
closedIssues: 51
watchers: 3
contributors: 2
recentReleases: 3
createdAt: "2026-08-29T12:01:05Z"
lastCommitAt: "2026-10-21T23:36:54Z"
lastReleaseAt: "2026-10-12T08:37:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 43
maintainers: ["RayesDiyab", "ivy"]
openGraphImageUrl: "https://opengraph.githubassets.com/23dbf0740cc693e07d2aac863e45dcd66212c0bec335336ab5f66c6107b522af/RayesDiyab/KMRP-KOTOR-Modern-Restoration-Patch"
---

# KMRP - KOTOR Modern Restoration Patch

**A resolution-aware interface patch for *Star Wars: Knights of the Old Republic* (2003).**

Vanilla KOTOR draws its interface at a fixed pixel size. On a modern display the
menus still work, but the text is tiny, list rows overlap once anything is
enlarged, and several layouts were only ever authored for 640×480. KMRP fixes
that in the engine itself rather than by swapping artwork: 66 resolutions built in,
from 800×600 to 15360×8640, and any other size from 4:3 to 32:9 made when the game
runs at it. The resolution is chosen in the game, with no reinstall.

[Features](#features) · [Install](#install) · [What it fixes](#what-it-fixes) · [How it works](#how-it-works) · [Build from source](#build-from-source) · [Documentation](#documentation) · [Case study](https://rayesdiyab.com/projects/kmrp/) · [Licence](#licence-and-attribution)

---

## Features

Everything KMRP 1.5 changes compared with the game as it comes from Steam or GOG.
The same list as a before-and-after comparison is in
[docs/features.md](https://github.com/RayesDiyab/KMRP-KOTOR-Modern-Restoration-Patch/blob/HEAD/docs/features.md), and with how each item is done in…
