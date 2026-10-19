---
repo: "WK2D/White-Knight-Chronicles-2-Recomp"
name: "White-Knight-Chronicles-2-Recomp"
description: "Native C/C++ recompilation research for White Knight Chronicles II (PS3)."
readmeQualityOk: true
url: "https://github.com/WK2D/White-Knight-Chronicles-2-Recomp"
language: "Python"
languages: ["Python", "C++", "C"]
languagePcts: [36, 35, 21]
topics: ["cpp", "game-preservation", "ps3", "static-recompilation", "vulkan", "white-knight-chronicles"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-15T22:45:03Z"
lastCommitAt: "2026-10-19T09:14:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 44
maintainers: ["WK2D", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/14a63d1ae11136ee0d43c3a08759ecacea3a48d6a8788ddd3ee0ea45fbb11c50/WK2D/White-Knight-Chronicles-2-Recomp"
fundingLinks: ["KO_FI:https://ko-fi.com/wk2d"]
---

# White Knight Chronicles II Recomp

A native C++ port of **White Knight Chronicles II** built by statically recompiling
the PS3 game code. Development targets **Windows with Vulkan** and starts with
**White Knight Chronicles I**, which is included on the disc.

for capture settings and the progress gallery, newest first.</sub>

## Status

Early development build. The native Windows build reaches the WKC1 starting town and
can resume from a local save.

**Verified**

- Startup screens, title menus, movie playback and avatar creation.
- Town rendering, short character movement, camera control and pause/resume.
- Logic Stone targeting, saving one starting-town slot and loading it through
  Continue after restarting.
- A dedicated **Triangle → System → Graphics Settings** panel with persistent
  preferences, the game's menu frame and a scrollbar.
- **92 Windows regression checks** pass in both Debug and optimized Release. The
  latest native check loads Continue and moves briefly in town.

**Graphics settings:** windowed, borderless and fullscreen modes; named output
resolutions; VSync; anisotropic filtering from Off to 16×; Off/FXAA anti-aliasing;
30/40/60/120/144/Unlocked frame…
