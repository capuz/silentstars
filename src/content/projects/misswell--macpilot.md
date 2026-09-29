---
repo: "misswell/MacPilot"
name: "MacPilot"
description: "All-in-one macOS menu-bar toolbox: smart screenshots & OCR, screen recording with GIF export, clipboard history, PiP, window switcher, input-source automation, BLE proximity lock — native Swift, free, notarized."
readmeQualityOk: true
url: "https://github.com/misswell/MacPilot"
homepage: "https://github.com/misswell/MacPilot/releases/latest"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["clipboard-manager", "macos", "menu-bar", "picture-in-picture", "screen-recording", "swift", "swiftui", "gif-recorder", "input-source", "ocr"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-11T00:26:05Z"
lastCommitAt: "2026-09-29T10:04:22Z"
lastReleaseAt: "2026-08-04T07:24:19Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: ["misswell"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e47eea04b2124743dc8da4ccada54114602ecc1f18cb8822841ad45df53d69d/misswell/MacPilot"
---

# MacPilot

[简体中文](https://github.com/misswell/MacPilot/blob/HEAD/README.zh-CN.md)

MacPilot is a native macOS menu-bar toolkit for automation, capture, window navigation, and system utilities. It has 18 independently switchable feature modules. Turn features on from Home; turning one off stops its shortcuts and background monitoring.

Requires macOS 14 or later. The release includes builds for Apple silicon (`arm64`) and Intel (`x86_64`).

## Features

### Automation and control

#### App inactivity rules

- Set an idle timeout for each app and choose whether MacPilot hides the app, closes its windows while leaving the process running, or quits it.
- Add a second timeout to quit an app after it has stayed hidden.
- Import existing Quitter rules from MacPilot Settings.

#### Scheduled app launch

- Start selected apps after login, with a separate delay for each app.
- Choose how each app appears: in front, hidden, or with its windows closed.
- MacPilot's own **Start at Login** setting is separate from these per-app launch rules.

#### Awake

- Start a temporary or unlimited session manually, or start the default session when MacPilot launches or the Mac wakes.
- Start and stop…
