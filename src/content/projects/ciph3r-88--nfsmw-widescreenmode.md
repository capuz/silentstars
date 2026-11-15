---
repo: "CiPH3R-88/NFSMW_WideScreenMode"
name: "NFSMW_WideScreenMode"
description: "A lightweight, modern widescreen plugin for Need for Speed: Most Wanted (2005) v1.3, built from the ground up with clean C++ and reverse engineering in IDA Pro."
readmeQualityOk: true
url: "https://github.com/CiPH3R-88/NFSMW_WideScreenMode"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-11-10T14:56:00Z"
lastCommitAt: "2026-11-15T11:25:00Z"
lastReleaseAt: "2026-11-15T11:06:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 38
maintainers: ["CiPH3R-88"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cc8a1fb8814194e9f4386cec51233a448c7edca83b93fe73b46b38f8bda687f/CiPH3R-88/NFSMW_WideScreenMode"
---

# NFSMW_WideScreenMode

A lightweight, modern widescreen plugin for **Need for Speed: Most Wanted (2005) v1.3**, built from the ground up with clean C++ and reverse engineering in IDA Pro.

---

## Features

### 🖥️ Display & Resolution

- **In-Game Resolution Picker:** Dynamically enumerates all monitor display modes directly into the in-game Video Options menu with seamless runtime switching.
- **Windowed & Borderless Modes:** Supports Fullscreen, Borderless, Bordered, Resizable, and Borderless Fullscreen Stretched modes.

### 🎯 FOV & HUD

- **Hor+ Camera FOV:** Automatically calculates and applies correct field of view for any aspect ratio.
- **Aspect-Correct HUD:** Fixes HUD stretching and moves HUD elements to widescreen screen edges.

### 🎬 Movies & FMVs

- **Widescreen FMV Scaling:** Options to zoom/fill 16:9 or maintain aspect ratio with clean pillarboxing (`WideScreenMovie`).
- **Movie Region Auto-Detection:** Automatically detects and loads NTSC (`_ntsc`) or PAL (`_pal`) movie formats, with optional manual override (`MovieType`).
- **Skip Intro:** Bypasses startup logos and intro movies (`SkipIntro`).
- **Full-Color Range Videos:** Custom YUV lookup table expansion…
