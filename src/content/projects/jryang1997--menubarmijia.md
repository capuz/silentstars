---
repo: "jryang1997/MenuBarMijia"
name: "MenuBarMijia"
description: "Native macOS (Swift 6 + SwiftUI) & Windows 11 (Tauri v2) menu-bar/tray controller for Xiaomi Mijia & Home Assistant with hold-to-talk voice control · 跨端米家与 HA 菜单栏智控中心"
readmeQualityOk: true
url: "https://github.com/jryang1997/MenuBarMijia"
language: "Swift"
languages: ["Swift", "TypeScript"]
languagePcts: [74, 21]
topics: ["home-assistant", "macos", "menubar", "mijia", "smart-home", "swift", "swiftui", "xiaomi", "apple-silicon", "tauri"]
stars: 27
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-10-15T12:45:38Z"
lastCommitAt: "2026-10-25T02:45:56Z"
lastReleaseAt: "2026-10-24T14:03:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["jryang1997"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8eb0ab1ba45f90bec010ce374298c28d80d656fc5f9250c4ba72ceb498b15b0/jryang1997/MenuBarMijia"
discussionCount: 0
---

Hold the menu-bar icon, speak a command, release to execute across multiple devices in ~0.2s — or run the entire panel from the keyboard.

This project is a personal open-source app (`MenuBarMijia.app` on macOS, plus a companion Windows 11 Tauri v2 tray app in `windows/` and Synology NAS Home Assistant scripts in `nas/`). It is not affiliated with, authorized by, or endorsed by Xiaomi, Mi Home, or Midea. “Xiaomi”, “Mi Home” (米家), and “Midea” are trademarks of their owners and are used here only to name compatible products.

## Requirements

- macOS 14 (Sonoma) or later (`Package.swift` sets `.macOS(.v14)`; macOS 26 renders native SwiftUI `.glassEffect` Liquid Glass, while macOS 14 and 15 fall back to `.ultraThinMaterial`; `MijiaCore` also builds on Linux with Swift 6.1)
- Swift 6 toolchain to build

The Swift package has no third-party Swift dependencies and uses Swift 6 strict concurrency.

## Install

### GitHub Releases

Releases: <https://github.com/jryang1997/MenuBarMijia/releases>

**v1.0.2** is the latest. It includes `MenuBarMijia-1.0.2.dmg` for macOS (with full English & Simplified Chinese UI and voice commands) and Windows installers.

The macOS app is ad-hoc signed and…
