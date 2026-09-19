---
repo: "dmanlfc/sm2-emu"
name: "sm2-emu"
description: "A Sega Model 2 emulator"
readmeQualityOk: true
url: "https://github.com/dmanlfc/sm2-emu"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-08-19T07:00:11Z"
lastCommitAt: "2026-09-19T02:44:03Z"
lastReleaseAt: "2026-09-16T13:48:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 79
undervaluedScore: 59
maintainers: ["dmanlfc", "aderumier"]
openGraphImageUrl: "https://opengraph.githubassets.com/90d148fc169736bcac1fc23ca4b1050d86fce16d4156b7463e4872e79b402ecf/dmanlfc/sm2-emu"
fundingLinks: ["KO_FI:https://ko-fi.com/https://ko-fi.com/dmanlfc"]
---

```
  ____  __  __  ____         _____ __  __ _   _
 / ___||  \/  ||___ \       | ____|  \/  | | | |
 \___ \| |\/| |  __) |_____ |  _| | |\/| | | | |
  ___) | |  | | / __/|_____|| |___| |  | | |_| |
 |____/|_|  |_||_____|      |_____|_|  |_|\___/

 A   S E G A   M O D E L   2   E M U L A T O R
```

Background: I started this emulation journey back in February 2025 to look to
improve upon Model 2 emulation for Linux, since my favourite OS lacked a native
emulator and at the time MAME had incompatibility issues and was just slow for
small ARM-based SBCs. The mission was to look into what MAME did well and learn
more from research and analysis of Supermodel (a Model 3 emulator) as
inspiration. Supermodel actually led me to wire up OpenGL ES and Vulkan for
that emulator, as I could get quicker results on the possibility of running
Model 2 emulation on a Raspberry Pi 5 and bringing it to the emulation
community.

Linux is the primary target. macOS is supported just because that's partly what
I used for development and runs Vulkan through MoltenVK. I don't care for
Windows... there, I said it.

The journey included a lot of discussions with GenAI. I'm not going to lie, but
its ability…
