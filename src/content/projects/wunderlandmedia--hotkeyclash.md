---
repo: "Wunderlandmedia/HotkeyClash"
name: "HotkeyClash"
description: "Find where your keyboard shortcuts clash. A free, open-source macOS menu bar app that detects shortcut conflicts across apps, config tools, and system settings."
url: "https://github.com/Wunderlandmedia/HotkeyClash"
homepage: "https://hotkeyclash.com"
language: "Swift"
languages: ["Swift"]
languagePcts: [92]
topics: ["developer-tools", "keyboard-shortcuts", "macos", "menu-bar", "swift", "swiftui"]
stars: 70
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-06-14T15:25:18Z"
lastCommitAt: "2026-07-03T12:41:01Z"
lastReleaseAt: "2026-06-29T06:19:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 21
maintainers: ["Wunderlandmedia"]
openGraphImageUrl: "https://opengraph.githubassets.com/97915d9559db3a671fadb52a3d3fd71860002f9b44f5f63918769c7f87f1c4eb/Wunderlandmedia/HotkeyClash"
---

<h1 align="center">HotkeyClash</h1>

  <i>Find where your keyboard shortcuts clash.</i>
</p>

</p>

</p>

Open-source macOS menu bar utility that scans running apps, config files, and system shortcuts to detect keyboard shortcut conflicts. Master-detail split view shows every clash at a glance.

## Features

- Scans running apps' menu bar shortcuts via Accessibility API
- Parses Karabiner-Elements, skhd, Keyboard Maestro, and BetterTouchTool configs
- Reads macOS system shortcuts (Spotlight, Mission Control, Screenshots, etc.)
- Classifies conflicts as definite (global vs global) or potential (menu vs menu)
- 720x520 split view: conflict sidebar + detail pane with app icons and source badges
- Zero external dependencies. Pure Apple frameworks.

## Install

### Homebrew

```bash
brew install --cask wunderlandmedia/tap/hotkeyclash
```

To update later: `brew upgrade --cask hotkeyclash`.

### Download

Grab the latest DMG or ZIP from [Releases](https://github.com/Wunderlandmedia/HotkeyClash/releases).

### Build from source

```bash
git clone https://github.com/Wunderlandmedia/HotkeyClash.git
cd HotkeyClash
xcodebuild -scheme HotkeyClash -configuration Release build
```

Requires…
