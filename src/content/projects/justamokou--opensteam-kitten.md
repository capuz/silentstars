---
repo: "justamokou/OpenSteam-Kitten"
name: "OpenSteam-Kitten"
description: "Lightweight GUI shell program to simplify the use of OpenSteamTool"
originalDescription: "轻量级 GUI 壳程序，用于简化 OpenSteamTool 的使用"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/justamokou/OpenSteam-Kitten"
language: "C#"
languages: ["C#"]
languagePcts: [93]
stars: 55
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-06-13T13:06:36Z"
lastCommitAt: "2026-07-24T06:08:05Z"
lastReleaseAt: "2026-07-24T05:58:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 31
maintainers: ["justamokou"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc257a4c25388c2ee42bd535b97fdeb1ad8c0cd0896ac64164a2c5a7a999ab51/justamokou/OpenSteam-Kitten"
---

# OpenSteam Kitten

OpenSteam Kitten is a lightweight WPF shell for [OpenSteamTool](https://github.com/OpenSteam001/OpenSteamTool). It provides a small floating window and tray menu for installing OpenSteamTool DLLs, managing Lua/manifest files, and handling kitten and kernel updates.

## Download and Run

Download the latest `OpenSteamKitten-*-Release.zip` from [Releases](https://github.com/justamokou/OpenSteam-Kitten/releases), extract it to any location, and run `OpenSteamKitten.exe`.

Please keep these files in the same directory:

```text
OpenSteamKitten.exe
VERSION
version.json
Resources/
```

The current release package is a slim version and requires .NET 6 Desktop Runtime. On the first run, if the runtime is missing, Windows will usually guide you to install it.

## Common Operations

| Operation | Function |
|---|---|
| Double-click floating window | Start Steam |
| Right-click floating window | Open function menu |
| Drag in `.lua` | Copy to `Steam/config/lua/` |
| Drag in `.manifest` | Copy to `Steam/config/depotcache/` |
| Ctrl + drag file | Delete corresponding file in Steam config directory |
| Drag floating window | Move position |

## Main Features

- One-click…
