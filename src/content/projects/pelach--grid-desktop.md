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
stars: 17
forks: 4
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 9
createdAt: "2026-09-26T17:34:36Z"
lastCommitAt: "2026-11-03T12:47:03Z"
lastReleaseAt: "2026-11-02T17:35:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 53
maintainers: ["pelach", "anupamme"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad6217598741031416c9dbc8a61f1e327d2bd275902efad279ea3447c4d8d2c2/pelach/grid-desktop"
---

# Grid Desktop

A high-performance desktop widget ecosystem and icon manager for GNOME Shell, powered by a screen-adaptive canvas grid and pure Clutter rendering.

### Core Architecture & Highlights

- **Modern 1x1 Logical Grid**: Redesigned from the ground up on a true 1x1 base unit. Offers selectable base cell sizes (Compact 68px, Standard 80px, Large 96px, HiDPI 112px) and fully configurable grid spacing (`grid-gap-size` from 4px to 32px) directly from Preferences.
- **Dynamic Grid Scaling**: Automatically adapts cell sizing and layout to any display resolution and aspect ratio — full native support for standard 16:9 displays and Ultrawide (21:9 / 32:9) monitors with seamless v2 layout migration.
- **Precision Alignment & Cleaner Drag-and-Drop**: Snap-to-grid placement with dynamic collision avoidance and interactive resizing across widget size tiers. Features a clean, color-coded drop placeholder without intrusive full-screen grid flashes.
- **Pure Clutter Engine**: High-performance, lightweight rendering directly via Clutter without external CSS dependencies, built for GNOME 48, 49, 50, and 51.
- **macOS-Inspired Desktop Icon Manager**:
  - Native desktop icons snapped…
