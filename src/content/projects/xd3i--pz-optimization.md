---
repo: "xD3I/PZ_Optimization"
name: "PZ_Optimization"
description: "Project Zomboid Build 42 performance work: class overrides, harness, findings"
readmeQualityOk: true
url: "https://github.com/xD3I/PZ_Optimization"
language: "Java"
languages: ["Java"]
languagePcts: [83]
stars: 38
forks: 1
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-09-15T13:31:27Z"
lastCommitAt: "2026-09-21T09:13:35Z"
lastReleaseAt: "2026-09-21T06:13:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 38
maintainers: ["xD3I"]
openGraphImageUrl: "https://opengraph.githubassets.com/b31e95d2847fa2b8869e2c82a50d93ecf603300a88c8ca39ae19654d5694b100/xD3I/PZ_Optimization"
discussionCount: 0
---

# PZ_Optimization

Performance patches for **Project Zomboid Build 42**, on the Java side of the game.
Not a Lua mod: a set of drop-in `.class` files that shadow 28 game classes and remove
the worst stalls from the chunk streamer, the renderer and the loading path.
`projectzomboid.jar` is never modified. Every change has a kill switch, and every
number in this file comes from the hands-off benchmark harness in this repo.

**Target: Build 42.20.4, jar revision `b0bbce05d5`, Windows and Linux.** Both Steam
depots ship the same jar. The overrides refuse to run against any other revision:
they log one line and the game behaves as stock.

Single-player only. Read [Known limitations](#known-limitations) before installing on
a machine you play on.

> **Important: turn off Steam's in-game performance monitor.** The newer FPS /
> performance overlay in Steam's settings (Settings > In Game > "In-game
> performance monitor"), not the classic Shift+Tab overlay, hooks every GL call
> and serialises the render thread. With it on, the optimized game stops at
> roughly 160 fps and the render thread sits at 90 % of a core, so the headroom
> these patches recover is hidden. The classic Steam…
