---
repo: "nurkert/kanshi_gui"
name: "kanshi_gui"
description: "kansh_gui is the simple and elegant solution for managing monitor setups under Wayland with a click instead of a config file."
readmeQualityOk: true
url: "https://github.com/nurkert/kanshi_gui"
homepage: "https://kanshi-gui.nurkert.de/"
language: "Dart"
languages: ["Dart"]
languagePcts: [96]
stars: 11
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-03-18T08:01:48Z"
lastCommitAt: "2026-09-09T08:18:34Z"
lastReleaseAt: "2026-05-05T19:59:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 70
maintainers: ["nurkert"]
openGraphImageUrl: "https://opengraph.githubassets.com/94d5e18f4b5f2a5f85ec8270df4ac701a4eba9f608b2f06a02ba5b67d9fd4eae/nurkert/kanshi_gui"
---

**kanshi_gui** is a graphical user interface based on Flutter for managing dynamic monitor setups under Wayland. It simplifies the creation and switching between different display profiles and thus extends/simplifies the functionality of the [kanshi](https://sr.ht/~emersion/kanshi/) tool.

Currently, _kanshi_gui does not claim to map all functionalities of kanshi_ in a graphical environment. It was originally only intended to be a helpful tool for configuring new monitor setups quickly, easily and precisely.

## Features

- **Live apply** — drag, scale or rotate a monitor and the change goes into the running compositor immediately. No more "save & restart" for every tweak.
- **Safety net** — mode changes and output-disables come with a 15-second countdown banner; "Keep" cements them, otherwise the layout reverts itself.
- **Hard block** against locking yourself out: the last enabled output cannot be disabled.
- **Smart snapping** — Figma-style cyan guide lines, corner alignment (top / bottom / center) when an edge snaps, and a learning alignment magnet that backs off after you escape it twice in one drag.
- **Hotplug aware** — connect or disconnect a monitor and the app refreshes…
