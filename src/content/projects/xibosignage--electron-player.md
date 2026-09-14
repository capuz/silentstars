---
repo: "xibosignage/electron-player"
name: "electron-player"
description: "Player application for Linux and Windows"
readmeQualityOk: true
url: "https://github.com/xibosignage/electron-player"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["digital-signage", "digital-signage-player", "electronjs"]
stars: 22
forks: 8
openIssues: 24
closedIssues: 73
watchers: 2
contributors: 7
recentReleases: 2
createdAt: "2025-03-13T13:12:16Z"
lastCommitAt: "2026-09-14T09:12:51Z"
lastReleaseAt: "2026-07-23T13:31:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 67
maintainers: ["nadzpogi", "rubenberttpingol", "dasgarner"]
openGraphImageUrl: "https://opengraph.githubassets.com/607e32b8c62e1e54d37273eef4e1d931c7400fe489ec5ce282860e1041031f15/xibosignage/electron-player"
---

# Xibo Player Application for ElectronJS

A cross-platform desktop digital signage player builth with Electron and Vite, designed for running Xibo layouts using the **Xibo Layout Renderer (XLR)**.

The application cleanly separates business logic and layout rendering, and supports package for **Windows** and **Linux** (DEB and Snap).

### Features
- **Main-process-driven architecture**
    - Centralized business logic
    - Configuration management
    - XMDS communication
    - Scheduling and playback orchestration
- **Renderer powered by XLR**
    - Uses the shared **Xibo Layout Renderer (XLR)** library
    - Focused purely on layout rendering and playback
    - No business logic leakage into the renderer
- **Modern tooling**
    - Electron + Vite for fast development and optimized builds
    - TypeScript-first codebase
- **Cross-platform packaging**
    - Windows installer
    - Linux
        - `.deb`
        - `.snap`

---

### Architecture Overview
The application follows Electron best practices by clearly separating responsibilities between the main and renderer process.

#### Main Process
The **main process** acts as the brain of the application and is responsible for all…
