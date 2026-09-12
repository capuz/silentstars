---
repo: "open-sources-port/muplar"
name: "muplar"
description: "Run native Linux/Windows/Android apps on MacOS"
readmeQualityOk: true
url: "https://github.com/open-sources-port/muplar"
language: "C++"
languages: ["C++", "C"]
languagePcts: [35, 31]
stars: 34
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-04-14T04:16:13Z"
lastCommitAt: "2026-09-12T08:05:05Z"
lastReleaseAt: "2026-06-17T12:30:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 36
maintainers: ["doanbaotrung"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c492d1e89ec25bfb1b077ef74f1e212199b695e84d186eb8d8bf33bda75d396/open-sources-port/muplar"
---

# Mular

**Mular** is a next-generation native execution layer for macOS that enables running applications from other platforms (Android, Windows) **without traditional virtualization or emulation**.

It focuses on **direct execution, system bridging, and composited rendering**, providing a lightweight and high-performance alternative to conventional approaches.

---

## 🚀 Vision

Mular aims to become a unified runtime layer where:

- Android apps run as native macOS windows
- Windows applications integrate seamlessly into macOS
- Multiple platform runtimes coexist under a single system layer
- No full OS virtualization is required

---

## ✨ Key Features (Planned)

- ⚡ **Native execution approach** (no heavy VM)
- 🧩 **Multi-runtime support**
  - Android (ART / Java layer)
  - Windows (Win32 / compatibility layer)
- 🖼 **Custom compositor**
  - Unified rendering pipeline for all platforms
- 🔗 **System bridge layer**
  - Translates platform APIs → macOS (Darwin)
- 📦 **App lifecycle management**
- 🛠 **CLI tooling (`mup`)**

---

## 🏗 Muplar Progress
| Platform | Instance | Capability | Status |
|---|---|---|---|
| Windows X86_64|Windows Compatibility Layer|Execute Windows…
