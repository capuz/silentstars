---
repo: "craft-native/craft"
name: "craft"
description: "Performant, native desktop & mobile apps with web languages."
readmeQualityOk: true
url: "https://github.com/craft-native/craft"
language: "Zig"
languages: ["Zig", "TypeScript"]
languagePcts: [60, 22]
topics: ["css", "html", "javascript", "tauri", "typescript", "electron", "zig"]
stars: 21
forks: 2
openIssues: 14
closedIssues: 161
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-10-19T06:09:48Z"
lastCommitAt: "2026-10-21T21:13:34Z"
lastReleaseAt: "2026-03-25T17:00:18Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 61
maintainers: ["chrisbbreuer", "glennmichael123"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a8609580b43454d5d72e0cfdb95cec07ec5b73178640e3c91ae2345ca769c09/craft-native/craft"
fundingLinks: ["GITHUB:https://github.com/chrisbbreuer", "OPEN_COLLECTIVE:https://opencollective.com/stacksjs"]
---

# Craft

Craft is a lightweight, high-performance cross-platform application framework. Create native apps that work on macOS, Linux, Windows, iOS, and Android with web technologies — with a small Zig-built binary and a fast cold start. Reproducible numbers live in [`benchmarks/`](https://github.com/craft-native/craft/blob/HEAD/benchmarks).

## Features

### 🌍 Platform Support

- 🖥️ **Desktop** — macOS, Linux, Windows
- 📱 **Mobile** — iOS and Android, with a default web renderer and an opt-in native STX renderer
- 🪟 **Menubar Apps** — Native system tray/menubar integration
- ⚡ **Native Performance** — sub-second cold start and small idle footprint; see [`benchmarks/`](https://github.com/craft-native/craft/blob/HEAD/benchmarks) for the latest numbers
- 🪶 **Compact Binary** — small enough to embed; sized in CI under `.github/workflows/binary-size.yml`
- 🔧 **Zig-Powered** — Built with Zig for maximum performance

### 📱 Mobile Platform Support

Choose the renderer explicitly. The default `web` mode hosts web content in
WKWebView on iOS or WebView on Android. Experimental `native` mode runs the
compiled STX route bundle without a browser view: JavaScriptCore and UIKit on
iOS,…
