---
repo: "SamiEnazi/infamous2-port"
name: "infamous2-port"
description: "inFAMOUS 2 (PS3) as a native Windows program: Setup recompiles YOUR copy on your PC (ps3recomp, Vulkan). No game files included."
readmeQualityOk: true
url: "https://github.com/SamiEnazi/infamous2-port"
language: "Python"
languages: ["Python", "PowerShell", "C#"]
languagePcts: [39, 29, 21]
topics: ["infamous-2", "ps3", "recompilation", "static-recompilation", "vulkan", "windows"]
stars: 6
forks: 0
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-11-09T04:16:59Z"
lastCommitAt: "2026-11-11T19:46:40Z"
lastReleaseAt: "2026-11-11T19:47:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 32
maintainers: ["SamiEnazi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1450926019/d212e3dc-c5ae-47ef-8152-113f6a74535d"
---

# ⚡ inFAMOUS 2: native Windows port

**Your own PS3 copy of inFAMOUS 2, recompiled into a real Windows program.**<br>
No emulator while you play.

## 🚀 Performance: native vs RPCS3

| Same PC, same save, same spot | RPCS3 0.0.42 | **This port** |
|---|:-:|:-:|
| 🏙️ City: the dock right after loading (720p) | 43 fps (39–46) | **99 fps** |
| 🎥 Camera turned to three more views (720p) | not measured | **104 / 132 / 139 fps** |
| 🖥️ The same four views at **native 1080p** with every picture extra on | | **99 / 103 / 133 / 140 fps** |
| 🔧 Developer build (profile-guided optimisation and hand-written SPU code, not in the Setup build), the same four views at 1080p with every extra | | 116 / 126 / 161 / 166 fps |

This port: measured on 10 Nov 2026 with the build Setup makes today. RPCS3: measured on 9 Nov 2026. Both on an
i5-13600K, RTX 2070 Super and 32 GB RAM, Windows 11. The PC was a normal desktop with a browser open in the
background. RPCS3 ran with its default settings: LLVM recompilers, Vulkan, 100% resolution (720p). Here the CPU
sets the pace, so native 1080p with every extra runs as fast as 720p. Story videos and cutscenes run at 30 fps in
both, as on the PS3. "Picture…
