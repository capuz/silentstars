---
repo: "DoYoungDo/clip"
name: "clip"
description: "A small and beautiful tool for clipboard history"
originalDescription: "A small and beautiful tool for clipboard history"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/DoYoungDo/clip"
homepage: "https://doyoungdo.github.io/clip/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["clipborad", "copy", "group", "history", "paste", "share", "translator", "clipboradhistory"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-02-05T09:36:34Z"
lastCommitAt: "2026-10-20T08:49:29Z"
lastReleaseAt: "2026-10-15T07:27:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 52
maintainers: ["DoYoungDo"]
openGraphImageUrl: "https://opengraph.githubassets.com/f87a7a1d46a91e9eb38261b898cddeeef0ba7bffc9ae0f8a97f42341076c1bac/DoYoungDo/clip"
---

# Clip - Cross-platform Clipboard Manager

A system tray clipboard history manager that supports text and images, group management, translation, and LAN sharing.

## Features

- 📋 Automatically records clipboard history (text/images)
- 📁 Group management, saving different categories of content separately
- 🔍 Quick search of history records
- 🌈 Color format recognition and conversion (Hex ↔ RGB)
- 🌍 Integrates Baidu Translate / Youdao Translate
- 🔐 Translator keys are stored in the system credential store
- 🌐 Real-time clipboard sharing over LAN

## Build

```bash
# Quick build
./build.sh

# Specify platform
./script/build-mac-arm64.sh     # macOS Apple Silicon
./script/build-mac-amd64.sh     # macOS Intel
./script/build-linux-amd64.sh   # Linux
./script/build-win-amd64.sh     # Windows
```

> **Note**: Signing macOS apps requires purchasing a certificate. The author does not have one, so the packaged macOS apps are unsigned. To force-run them, see: [Common questions about installing unknown apps on mac](https://doyoungdo.github.io/essay/#/Other/mac_install_unknown_app)

## Usage

### Basic operations
- **Left click** - View history; click an entry to copy it
- **Right…
