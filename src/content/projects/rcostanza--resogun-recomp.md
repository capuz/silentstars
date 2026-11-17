---
repo: "rcostanza/resogun-recomp"
name: "resogun-recomp"
description: "Resogun (PS4) - Recompiled to PC"
readmeQualityOk: true
url: "https://github.com/rcostanza/resogun-recomp"
language: "C++"
languages: ["C++"]
languagePcts: [82]
stars: 57
forks: 1
openIssues: 6
closedIssues: 8
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-11-08T06:27:30Z"
lastCommitAt: "2026-11-17T13:38:09Z"
lastReleaseAt: "2026-11-11T18:09:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 36
maintainers: ["rcostanza", "Xarishark"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5a7ce6cf73b183698b8d02fef67db5282e544635460ff4bec18ab1694858a27/rcostanza/resogun-recomp"
---

# Resogun (PS4) - Recompiled to PC

An (obviously) unofficial static recompilation of the PS4 version of <b>Resogun</b>, Housemarque's awesome shmup exclusive to PS platforms.

The game's own x86-64 code runs directly on Windows and Linux: the PS4 system libraries it calls are reimplemented, and its GPU commands are drawn with Vulkan.

🚨 **No game files are included** 🚨

This requires you to provide a decrypted dump of your own copy of the game: tested with **CUSA00038** with **update 1.10**, unmodified. Setup checks the files and, for any other version or a patched dump (such as a DLC unlocker; every add-on already shows as owned without one), warns once that they are untested and might cause bugs before going on.

## Features

- **30, 60, 90, 120, 144 or 180 FPS.** Higher framerates maybe possible in the future; 30 is for lower-powered PCs.
  - Note: if the game fails to reach the set FPS cap, it will run slower. So choose a cap that your device can reach.
- **4K support** (not native, the game's own checkerboard mode) or 1080p.
- **Aspect ratios (16:9, 16:10, 4:3, 21:9 and 32:9):** ultrawide shows more of the level to the sides,
  16:10 and 4:3 more above and below, nothing…
