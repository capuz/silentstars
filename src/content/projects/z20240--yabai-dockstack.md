---
repo: "z20240/yabai-dockstack"
name: "yabai-dockstack"
description: "Visual enhancement suite for yabai: stack indicators, cross-space window menu, and Dock window previews."
readmeQualityOk: true
url: "https://github.com/z20240/yabai-dockstack"
language: "Swift"
languages: ["Swift"]
languagePcts: [96]
topics: ["dock", "dockview", "macos", "menu-bar", "screencapturekit", "stackline", "swift", "tiling", "window-manager", "window-switcher"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-28T15:39:35Z"
lastCommitAt: "2026-11-12T11:41:15Z"
lastReleaseAt: "2026-06-30T14:49:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 49
maintainers: ["z20240", "Signynt"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf58d57c4a12553bf0bf1078994d956d1fe82ea162afc0eaf310f3c7ce7062dc/z20240/yabai-dockstack"
---

English · [繁體中文](https://github.com/z20240/yabai-dockstack/blob/HEAD/README.zh-Hant.md)

keywords: yabai, stackline, dockview, alt-tab, macOS window manager, tiling, stack indicator,
dock preview, window switcher, cmd-tab replacement, menu bar, Mission Control alternative</sub>

---

`yabai-dockstack` adds the visual layer that yabai lacks:

- **Stack indicators** — a floating indicator next to each window stack so you see, at
  a glance, which apps are stacked and in what order (inspired by **stackline**).
- **Cross-space window menu** — every window grouped by Display → Space in the menu
  bar; click to jump and focus.
- **Dock window previews** — hover a Dock icon to peek an app's windows across all
  spaces with thumbnails; click to jump (inspired by **DockView**).
- **AltTab-style window switcher** — hold ⌥, tap Tab: one thumbnail per **window**
  (not per app) across every space, most-recently-used first; release to switch.
  Finally tell five editor windows apart — the thing ⌘⇥ can't do (inspired by
  **AltTab**).

It is a clean Swift rewrite — **not** a fork of stackline (which required Hammerspoon).

## What's new — v0.4.0

- **Your rc files are yours** (#11, thanks…
