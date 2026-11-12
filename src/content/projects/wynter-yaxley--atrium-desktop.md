---
repo: "wynter-yaxley/atrium-desktop"
name: "atrium-desktop"
description: "A native glass desktop for Windows 11: floating taskbar and desktop widgets with real-time refraction. Architecture review and verified feasibility probes."
originalDescription: "A native glass desktop for Windows 11: floating taskbar and desktop widgets with real-time refraction. Architecture review and verified feasibility probes."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wynter-yaxley/atrium-desktop"
language: "C++"
languages: ["C++", "C#"]
languagePcts: [70, 29]
topics: ["desktop-environment", "desktop-widgets", "direct3d11", "directcomposition", "liquid-glass", "taskbar", "win32", "windows-11"]
stars: 231
forks: 19
openIssues: 20
closedIssues: 13
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-10-31T10:33:54Z"
lastCommitAt: "2026-11-12T05:40:13Z"
lastReleaseAt: "2026-11-10T07:41:39Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 83
undervaluedScore: 27
maintainers: ["wynter-yaxley", "Hzlin7", "StoneBeast"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bb813b122add415ae7a955fc810b1f41154aceb3235091dcf58eab82ead9f13/wynter-yaxley/atrium-desktop"
---

Keep the way Windows works, swap in liquid glass with real-time refraction,<br>
  and use one design language to tie the taskbar, Start menu, control center, notifications, and widgets into a single whole.

## More than desktop beautification

Windows' desktop is layers of several generations of design: the taskbar, tray, Start menu, notifications, and quick settings each have their own corner radii, font sizes, and animations. Atrium redoes the layer you see every day, without changing how you use Windows.

- **Usage unchanged**: pinning apps, switching windows, right-click menus, and dragging files onto app icons to open them all work as before.
- **Same glass**: the bar, panels, menus, notifications, and widgets use the same material, reflecting the desktop behind them in real time.
- **Same design language**: corner radii, spacing, fonts, and animations follow one set of rules, so the same control feels the same everywhere.
- **Three independent modules**: the taskbar, desktop widgets, and stage manager can each be turned on separately; using just one is fine.
- **Chinese and English UI**: in the Settings Center, "System → Language" lets you choose Simplified Chinese, English,…
