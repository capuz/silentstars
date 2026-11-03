---
repo: "cubk1/b-launcher"
name: "b-launcher"
description: "Lightweight Minecraft launcher"
originalDescription: "轻量 Minecraft 启动器"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cubk1/b-launcher"
homepage: "https://b.cubk.cn"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 45
forks: 3
openIssues: 5
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-10-28T03:09:55Z"
lastCommitAt: "2026-11-03T11:15:34Z"
lastReleaseAt: "2026-10-31T17:53:30Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 41
maintainers: ["Loyisa", "cubk1", "Skyyyyyys"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b604902421de89b62c7f14dc003e77f5fb7b34c5fbe29e4b412f115ca46c7c0/cubk1/b-launcher"
---

## B Launcher™

A lightweight Minecraft launcher, developed in pure C++

QQ group: 858714745

## Advantages

- Developed in pure C++ with a native UI; no Java, Electron, Tauri, or .NET
- Low memory usage, friendly to low-end computers
- Has its own Client ID, not Prism Launcher's
- Automatically migrates accounts from PCL, HMCL, and the official launcher
- No cloud control, obfuscation, VMProtect, or .NET Reactor
- All code is fully open source under a permissive open-source license.
- Includes a theme color picker for custom themes, and you don't have to pay anything for it.
- Supports custom skins and capes for 1.19+
- Fixes Chinese input for Minecraft 1.7 and 1.8
- Maintained by developers whose prompt-writing skills and sense of aesthetics are both still intact

## Build

```bash
pip install fonttools
scoop install upx

cmake -S . -B build -G "Visual Studio 17 2022" -A x64
cmake --build build --config Release
cmake --build build --config MinSizeRel
```

## Screenshots

