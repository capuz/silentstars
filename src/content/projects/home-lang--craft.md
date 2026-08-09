---
repo: "home-lang/craft"
name: "craft"
description: "Performant, native desktop & mobile apps with web languages."
readmeQualityOk: true
url: "https://github.com/home-lang/craft"
language: "Zig"
languages: ["Zig"]
languagePcts: [74]
topics: ["css", "html", "javascript", "tauri", "typescript", "electron", "zig"]
stars: 18
forks: 1
openIssues: 4
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-10-19T06:09:48Z"
lastCommitAt: "2026-08-09T04:48:13Z"
lastReleaseAt: "2026-03-25T17:00:18Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 79
undervaluedScore: 50
maintainers: ["chrisbbreuer", "glennmichael123"]
openGraphImageUrl: "https://opengraph.githubassets.com/ceefbfcb872f0f086faa1310865175051bcf9153c4ebb6ac80a57bec2cfbfbd9/home-lang/craft"
fundingLinks: ["GITHUB:https://github.com/chrisbbreuer", "OPEN_COLLECTIVE:https://opencollective.com/stacksjs"]
---

# Craft

Craft is a lightweight, high-performance cross-platform application framework. Create native apps that work on macOS, Linux, Windows, iOS, and Android with web technologies — with a small Zig-built binary and a fast cold start. Reproducible numbers live in [`benchmarks/`](https://github.com/home-lang/craft/blob/HEAD/benchmarks).

## Features

### 🌍 Platform Support

- 🖥️ **Desktop** — macOS, Linux, Windows
- 📱 **Mobile** — iOS _(WKWebView, UIKit)_ and Android _(WebView, Activity)_
- 🪟 **Menubar Apps** — Native system tray/menubar integration
- ⚡ **Native Performance** — sub-second cold start and small idle footprint; see [`benchmarks/`](https://github.com/home-lang/craft/blob/HEAD/benchmarks) for the latest numbers
- 🪶 **Compact Binary** — small enough to embed; sized in CI under `.github/workflows/binary-size.yml`
- 🔧 **Zig-Powered** — Built with Zig for maximum performance

### 📱 Mobile Platform Support

- **iOS Integration**
  - WKWebView with JavaScript bridge
  - UIKit native components
  - Haptic feedback _(light, medium, heavy, selection, success, warning, error)_
  - Device permissions _(camera, location, notifications, photos, contacts, microphone)_
  -…
