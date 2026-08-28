---
repo: "fuddlesworth/PlasmaZones"
name: "PlasmaZones"
description: "FancyZones-style window tiling for KDE Plasma"
readmeQualityOk: true
url: "https://github.com/fuddlesworth/PlasmaZones"
homepage: "https://phosphor-works.github.io/plasmazones/"
language: "C++"
languages: ["C++"]
languagePcts: [81]
topics: ["fancyzones", "kde", "kde-plasma-6", "kwin", "kwin-effect", "qt6", "tiling-window-manager", "powertoys", "tiling", "zones"]
stars: 316
forks: 17
openIssues: 4
closedIssues: 42
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2026-01-15T01:50:21Z"
lastCommitAt: "2026-08-28T15:33:04Z"
lastReleaseAt: "2026-02-05T22:33:45Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub"]
healthScore: 98
undervaluedScore: 30
maintainers: ["fuddlesworth"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f96d6b605e1c9505613526eb277e748c214f2216e2e3028d049331750b3c2e7/fuddlesworth/PlasmaZones"
fundingLinks: ["KO_FI:https://ko-fi.com/fuddlesworth"]
discussionCount: 178
---

# PlasmaZones

**Window snapping, tiling and scrolling for KDE Plasma**

Three placement modes in one daemon. Snap windows into zones you drew, let an algorithm tile them for you, or scroll them along an endless strip. Every monitor picks its own.

<br>

**Docs and screenshots: [phosphor-works.github.io/plasmazones](https://phosphor-works.github.io/plasmazones/)**

</div>

---

## Three Placement Modes

Each monitor runs one mode, chosen per virtual desktop and per activity, so a widescreen can scroll while the laptop panel tiles. `Meta+Shift+T` cycles the focused screen through the enabled modes, and any mode can be turned off entirely.

### Snapping

Hold **Alt** (or your configured modifier) while dragging a window. The zones light up. Drop the window into one and it resizes to fill that zone.

</p>

Zones are named regions you draw yourself, in a visual editor with drag-to-resize, snap-to-grid, and mirroring. A library of layouts ships built in (grids, BSP, master and stack, fibonacci, plus portrait, ultrawide, and super-ultrawide variants), and after a snap the remaining zones show as thumbnails so the next window is one click away. Zones can span, and keyboard users can skip…
