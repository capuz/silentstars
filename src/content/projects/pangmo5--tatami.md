---
repo: "PangMo5/Tatami"
name: "Tatami"
description: "macOS workspace manager with yabai-style window tiling"
readmeQualityOk: true
url: "https://github.com/PangMo5/Tatami"
homepage: "https://pangmo5.dev/Tatami/"
language: "Swift"
languages: ["Swift"]
languagePcts: [96]
topics: ["composable-architecture", "macos", "menu-bar", "productivity", "swift", "swiftui", "tiling-window-manager", "window-manager", "workspace-manager", "yabai"]
stars: 16
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-26T08:19:56Z"
lastCommitAt: "2026-07-15T05:53:27Z"
lastReleaseAt: "2026-06-06T18:13:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 49
maintainers: ["PangMo5"]
openGraphImageUrl: "https://opengraph.githubassets.com/bea1a447d2ecbba77032232848cf46dd654c710ea774910296dc0cce741a23a7/PangMo5/Tatami"
---

# Tatami <img src="Resources/Marketing/app-icon.png" align="right" height="128" />

A macOS workspace manager with yabai-style window tiling.

Tatami groups your apps into virtual workspaces you switch between with a
keystroke or a trackpad swipe, and tiles their windows automatically with a
yabai-style BSP engine — no SIP changes and no shell scripting required.

## Demo

  </a>
</p>

## Features

### Workspaces

- Group apps into virtual workspaces with per-workspace app assignments
- Switch by hotkey, trackpad swipe, or "recent workspace"
- One **key equivalent** per workspace: hold the switch / assign / borrow modifier with it to switch to it, assign the focused app to it, or borrow it — the same keys drive the recent / next / previous targets, and any action takes an explicit override
- Optional loop-around, skip-empty, and follow-app-focus behaviors
- Auto-open assigned apps when a workspace activates — and reopen them on re-entry if their window was closed
- Per-display workspaces — pin one to a display or follow apps dynamically; each display keeps its own active workspace, and you can cycle per-display or across every display
- Jump focus between displays, or move the…
