---
repo: "JFF-WM/jff"
name: "jff"
description: "A minimal stacking Wayland compositor, just for fun. Written in Rust."
readmeQualityOk: true
url: "https://github.com/JFF-WM/jff"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 9
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-05T19:30:52Z"
lastCommitAt: "2026-11-25T13:17:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: ["killown"]
openGraphImageUrl: "https://opengraph.githubassets.com/93de69022d6df69a9ac2ac4cfae0550fe717a0f41f31a1720866e9456469e90e/JFF-WM/jff"
---

# jff

      A hybrid tiling-and-stacking Wayland compositor that started as
      "just for fun" and kept growing.

<https://github.com/user-attachments/assets/30af95f7-ad35-4bdc-ad52-a0ea2c519913>

## What it does

- **Windows:** stacking, click-to-focus, Alt+drag to move or resize anything,
  maximize, fullscreen, snap to a half of the monitor, minimize, a scratchpad,
  and an Alt+Tab switcher.
- **Tiling when you want it:** windows float by default. Turn on
  `tiling-containers` and any group of windows can tile among themselves, with
  splits you drag, names you give them, and layouts you save and bring back.
  Everything else stays floating, so you never have to pick a side.
- **Workspaces:** nine by default, shared across monitors, or one set per
  monitor.
- **Overview:** every window of the current monitor as a thumbnail, with a
  built-in app launcher search. Drag a window to another monitor or workspace.
- **Window rules:** decide what an app does the moment it opens.
