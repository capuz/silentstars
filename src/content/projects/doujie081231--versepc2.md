---
repo: "doujie081231/VersePc2"
name: "VersePc2"
description: "A brand-new generation Verse launcher, built on the Tauri framework with a Rust backend, lightweight and efficient"
originalDescription: " 全新一代 Verse 启动器，采用 tauri 框架，后端使用 rust 编写，轻便高效"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/doujie081231/VersePc2"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [70, 20]
stars: 13
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-10T16:06:59Z"
lastCommitAt: "2026-10-23T12:04:52Z"
lastReleaseAt: "2026-08-20T02:42:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 73
undervaluedScore: 45
maintainers: ["doujie081231", "JINGMO91"]
openGraphImageUrl: "https://opengraph.githubassets.com/df8b16e34678545266803390e617b82a10a90d1c154f8988f941aa034cc384f8/doujie081231/VersePc2"
---

---

**VersePC2** is the Tauri rewrite of VersePC, a Minecraft launcher built with a Rust backend and a web frontend. Compared with the Electron version, it is lighter, starts faster, and uses less memory, while retaining full functionality.

## Features

### Game Launching
- One-click installation and launch of Vanilla, Forge, Fabric, NeoForge, and OptiFine
- Automatic detection and installation of Java runtimes
- Smart memory allocation and JVM argument optimization (including CDS / JVM warm-up)
- Launch argument construction, per-version settings (isolation, memory, commands, etc.)
- Real-time game log monitoring and console output

### Account System
- Microsoft official account login (full OAuth flow: device code / interactive authorization)
- Offline accounts
- authlib-injector third-party authentication server login
- Avatar and skin management (multiple skin sources)

### Version Management
- Local / external version folder management
- Cross-disk "one-click version folder detection" with automatic scanning
- Per-version settings (icon / name / description / favorite / isolation)
- Version cleanup and disk usage management

### Mods and Modpacks
- CurseForge and Modrinth…
