---
repo: "lalimatyus/Wobbly-Windows"
name: "Wobbly-Windows"
description: "The classic Compiz/KDE Plasma style Wobbly Windows effect for Windows 11!"
readmeQualityOk: true
url: "https://github.com/lalimatyus/Wobbly-Windows"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["dwm", "hooks", "native", "windhawk", "windhawk-mods", "windows", "windows-11", "wobbly-windows", "2d-physics", "physics"]
stars: 8
forks: 0
openIssues: 2
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-08-22T16:32:55Z"
lastCommitAt: "2026-11-01T10:43:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 44
maintainers: ["lalimatyus"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9c9dee5e037ff2dfeecd85a596456749578bceccf9d49b4fd0f3be6827a018d/lalimatyus/Wobbly-Windows"
---

> [!CAUTION]
> ## This repo has develpoment/test builds, which can cause instability and other issues. If you want to download the stable release download it directly from Windhawk.

# Wobbly Windows

The classic Compiz/KDE Plasma style Wobbly Windows effect for Windows 11!



## ⚠️ IMPORTANT ⚠️

Since this mod runs in `dwm.exe`, add `dwm.exe` to Windhawk's
**Settings > Advanced settings > More advanced settings > Process inclusion list**:



This mod runs inside `dwm.exe` and has been tested on Windows 11 `23H2`, `24H2`, `25H2`
and `Insider Preview 26H2`. If the required private
uDWM symbols or validated object layouts aren't available, the mod refuses to
initialize instead of using unverified addresses.

## Features

* Change the wobbliness of the windows from 5 presets
* Enable custom physics to change each parameter independently, instead of a preset
* Fluid wobble animations for dragging, snapping and even resizing windows
* Uses a 4x4 spring simulation fitted to a smooth whole-window transform

The experimental **GPU mesh overlay** renders the live window image on a curved
20×20 mesh in a separate Windhawk companion process. Select it under…
