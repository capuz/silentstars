---
repo: "mblauberg/PureMouse"
name: "PureMouse"
description: "Tiny, offline replacement for Logi Options+ on macOS: button mapping, gestures, DPI and smooth scrolling."
readmeQualityOk: true
url: "https://github.com/mblauberg/PureMouse"
language: "Swift"
languages: ["Swift"]
languagePcts: [91]
topics: ["button-remapping", "gestures", "hidpp", "logi-options", "logitech", "macos", "macos-app", "mouse", "mx-master", "mx-master-3s"]
stars: 5
forks: 0
openIssues: 41
closedIssues: 42
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-10-15T03:23:56Z"
lastCommitAt: "2026-11-02T11:36:02Z"
lastReleaseAt: "2026-10-16T04:56:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 55
maintainers: ["mblauberg"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1420117108/d11b6a28-5d0a-4f4c-964f-410bc4368a2c"
---

A lightweight, native alternative to Logi Options+ for Logitech MX mice on macOS.<br>
  Buttons, gestures, smooth scrolling, DPI and per-app settings, in about 5 MB of memory (about 20 MB with the menu bar app).

PureMouse talks to the mouse directly over Logitech's HID++ protocol: no account, no cloud sync and
no updater in the background. It is written in Swift with no third-party dependencies, and when
the mouse is idle, so is PureMouse.

## Lightweight by design

| | PureMouse (main), as measured |
|---|---|
| Download | 8.1 MB dmg, 11.6 MB installed; universal (Apple silicon and Intel) |
| Memory | Background process: 4-6 MB. Menu bar app: about 9 MB fresh, about 13 MB once its menu has been opened. Settings: about 34 MB in its own process while its window is open, then nothing (medians of 5 on macOS 27.0.1) |
| Idle CPU | Zero in normal use: no polling, no timers, no wake-ups* |
| Processes | Two: the background process and an optional menu bar app, plus Settings while its window is open |
| Network | None, unless you press **Check for Updates** |
| Privacy | No account, no telemetry, nothing stored on the mouse |

The background process uses only system frameworks and no UI…
