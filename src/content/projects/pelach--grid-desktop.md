---
repo: "pelach/grid-desktop"
name: "grid-desktop"
description: "A powerful desktop widget ecosystem & native icon manager for GNOME Shell, built on a screen-adaptive canvas grid."
readmeQualityOk: true
url: "https://github.com/pelach/grid-desktop"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["customization", "dektop-widgets", "gjs", "gnome-shell", "gnome-shell-extension", "gtk4", "linux-desktop", "widgets", "dektop-icons"]
stars: 18
forks: 5
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-26T17:34:36Z"
lastCommitAt: "2026-11-17T14:37:02Z"
lastReleaseAt: "2026-11-04T07:28:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 56
maintainers: ["pelach", "AD2076"]
openGraphImageUrl: "https://opengraph.githubassets.com/564ae409b65e8359b323f3c97ee872a4e539dd3dc2675de2b9fa7cd129c9598d/pelach/grid-desktop"
---

# Grid Desktop

A high-performance desktop widget ecosystem and icon manager for GNOME Shell, powered by a screen-adaptive canvas grid and pure Clutter rendering.

### Core Architecture & Highlights

- **Modern 1x1 Logical Grid**: Redesigned from the ground up on a true 1x1 base unit. Offers selectable base cell sizes (Compact 68px, Standard 80px, Large 96px, HiDPI 112px) and fully configurable grid spacing (`grid-gap-size` from 4px to 32px) directly from Preferences.
- **Dynamic Grid Scaling**: Automatically adapts cell sizing and layout to any display resolution and aspect ratio — full native support for standard 16:9 displays and Ultrawide (21:9 / 32:9) monitors with seamless v2 layout migration.
- **Precision Alignment & Cleaner Drag-and-Drop**: Snap-to-grid placement with dynamic collision avoidance and interactive resizing across widget size tiers. Features a clean, color-coded drop placeholder without intrusive full-screen grid flashes. Optionally show the desktop while dragging widgets, then restore the previous window state when the drag ends.
- **Rubberband (Lasso) Multi-Selection**: Drag a macOS-inspired selection rectangle (lasso) across the desktop canvas to select,…
