---
repo: "RedMadKnight/BC5"
name: "BC5"
description: "BC-250 + PS5. A native PS5 GPU path for the AMD BC-250 (Cyan Skillfish, gfx1013). User-space backend that feeds PS5 AGC command streams and native RDNA ISA shaders to amdgpu on Linux, without GNM→Vulkan translation or shader recompilation."
readmeQualityOk: true
url: "https://github.com/RedMadKnight/BC5"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [33, 31]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-28T16:31:48Z"
lastCommitAt: "2026-10-23T12:04:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["RedMadKnight"]
openGraphImageUrl: "https://opengraph.githubassets.com/f299599d891cc7252ea7c50dfc70ffc8aa91bddb8836cd13b1613d1ef7195532/RedMadKnight/BC5"
---

# BC5

**A PlayStation 5 emulator for the AMD BC-250, on Linux.**

The BC-250 is a small board AMD made for cryptocurrency mining. Its chip has the same building blocks as the PS5's: an 8-core Zen 2 CPU, a GPU that runs the same shader code as the console's (`gfx1013`, "Cyan Skillfish"), and 16 GB of fast GDDR6 memory that both share. BC5 uses that likeness to run PS5 games on it.

PC emulators have to translate a console's graphics for a different GPU. BC5 does not: the game's own graphics commands and shaders go straight to the BC-250's GPU. The rest of the console (system libraries, files, sound, controller) is rewritten inside the emulator. No PS5 firmware is needed. The flip side: BC5 runs on the BC-250 only. The games' shaders use instructions that no graphics card you can buy for a PC has in this combination.

### What it can do today

- **ASTRO BOT is fully playable**, at about 60 fps in its first level, with the DualSense's motion, haptics and adaptive triggers, and with saves.
- **Marvel's Wolverine plays** (called "the second title" in the findings and below) from its menus through the opening into gameplay, with sound, saves and pause, and with its ray-traced…
