---
repo: "ciws/eve-o-preview-macos"
name: "eve-o-preview-macos"
description: "macOS live-preview companion app for EVE Online clients with quick switching, floating previews, and packaged .app/.dmg releases."
readmeQualityOk: true
url: "https://github.com/ciws/eve-o-preview-macos"
language: "C#"
languages: ["C#"]
languagePcts: [94]
stars: 6
forks: 1
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-03-13T11:27:59Z"
lastCommitAt: "2026-11-20T12:24:11Z"
lastReleaseAt: "2026-11-20T11:38:14Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 50
maintainers: ["ciws", "geglne"]
openGraphImageUrl: "https://opengraph.githubassets.com/778f81f3d2316c7e18bb73cc34c2c395bf218237c14ae43edbebb6bed25f1aea/ciws/eve-o-preview-macos"
---

# EVE-O Preview for macOS

`EVE-O Preview for macOS` is a lightweight companion app for EVE Online multiboxing on macOS.

It helps you keep track of multiple running clients with live preview overlays and quick client switching, while staying focused on a simple, practical workflow.

## Screenshots

Main app window:

EVE Online on macOS:

## What it does

- detects running EVE Online clients
- shows live thumbnail previews
- lets you click a preview to focus the matching client
- remembers thumbnail positions
- saves local app settings
- ships as a ready-to-test macOS `.app` and `.dmg`

## Built for macOS

This project is a dedicated macOS implementation built with:

- .NET 8
- Avalonia UI
- CoreGraphics for client discovery
- ScreenCaptureKit for native window preview streams
- AppleScript / System Events as a client activation fallback

## How to use

1. Start one or more EVE Online clients.
2. Launch `EVE-O Preview for macOS`.
3. Allow macOS permissions if prompted.
4. Use the main window to detect clients and manage settings.
5. Click a floating preview to bring the matching client to the front.
