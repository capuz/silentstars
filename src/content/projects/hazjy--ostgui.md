---
repo: "hazjy/OSTGUI"
name: "OSTGUI"
description: "Steam local library installation GUI: search-to-add · manifest/key source cascade · full DLC unlock · online launch (480/custom identity) · launch without Steam · D encryption mode switching. Companion kernel ZSteamTool (based on OpenSteamTool)"
originalDescription: "Steam 本地入库图形界面：搜索入库 · 清单/密钥源级联 · DLC 全解锁 · 联机启动（480/自定义身份）· 免 Steam 启动 · D 加密模式切换。配套内核 ZSteamTool（基于 OpenSteamTool）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hazjy/OSTGUI"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 33
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-14T16:33:10Z"
lastCommitAt: "2026-10-24T08:08:43Z"
lastReleaseAt: "2026-09-20T05:49:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 40
maintainers: ["hazjy"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5d73c4e559d3bf8063e73b81a063e2080cad9c16755242d85848d390cb50013/hazjy/OSTGUI"
---

# OSTGUI

Graphical interface for local Steam library installation and unlocking (Windows 10/11 · WinUI 3 · native compilation).

OSTGUI is the graphical interface for the [ZSteamTool](https://github.com/hazjy/ZSteamTool) kernel. The kernel injects into Steam and takes over ownership, depot decryption keys, and manifest requests. OSTGUI handles searching and adding games, generating Lua configs, managing added games, as well as online launch and launching without Steam deployment. This repository contains no kernel code and no game files.
## Features

- **Search & add**: Search by game name, AppID, or Steam link. Manifests come from MHub (requires an API Key), and keys and tokens come from Sudama. Optional: “Add all DLCs”, “Write fixed version config”, “Download Manifest”. The process can be cancelled.
- **Library management**: List / grid browsing and filtering, switching version mode, completing version configs, editing Lua, copying AppID and name, deleting.
- **Achievements**: Edit achievement unlock status. Changes are first written to a local backup, then saved manually with “Save to Steam” (requires Steam online).
- **Trainer**: Search for and download the Fenglingyueying…
