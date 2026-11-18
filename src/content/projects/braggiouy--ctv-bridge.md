---
repo: "Braggiouy/ctv-bridge"
name: "ctv-bridge"
description: "📺 An open-source cross-platform desktop tool to build, deploy, and debug Tizen, webOS and AndroidTV applications on Connected TVs. Built with Electron, React, and TypeScript."
readmeQualityOk: true
url: "https://github.com/Braggiouy/ctv-bridge"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ctv", "deployment-tool", "developer-tools", "electron", "lg-webos", "react", "samsung-tizen", "smart-tv", "tizen", "typescript"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-03T13:50:12Z"
lastCommitAt: "2026-11-18T12:08:18Z"
lastReleaseAt: "2026-01-01T13:52:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 76
undervaluedScore: 40
maintainers: ["Braggiouy"]
openGraphImageUrl: "https://opengraph.githubassets.com/6778eb74ffe5ab43abb2e4dd480a0c9ee4170d5df14399f855fdeaf5ca5a3518/Braggiouy/ctv-bridge"
fundingLinks: ["KO_FI:https://ko-fi.com/braggio"]
---

# CTV Bridge

**CTV Bridge is an open-source desktop tool that simplifies deploying and debugging Connected TV applications directly on real Samsung Tizen, LG webOS, and Android TV devices.**

## Why CTV Bridge exists

Developing for Connected TVs often means dealing with fragmented tooling, repetitive CLI commands,
and fragile deployment workflows that slow down iteration and testing.

CTV Bridge was created to reduce that friction by providing a single, unified interface on top of
the official Tizen, webOS, and Android tooling, without reinventing or replacing vendor SDKs.

---

## High-level architecture

CTV Bridge acts as a thin UI layer on top of official vendor CLIs (Tizen, webOS, Android),
handling command orchestration, device management and log aggregation,
while keeping all execution local to the developer machine.

---

## 🚀 Key Features

### 📺 Multi-Platform Support

- **Samsung Tizen**: Seamless integration with Tizen Studio CLI (`sdb`, `tizen`).
- **LG webOS**: Full support for webOS OSE/TV CLI (`ares-*` tools).
- **Android TV**: Integration with Android Debug Bridge (`adb`) for APK deployment on Android TV / Fire TV.
