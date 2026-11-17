---
repo: "xutongxue233/crazywaterworld"
name: "crazywaterworld"
description: "WeChat mini-game \"Crazy Water World\" protocol-side idle tool: connects directly to the game gateway to complete daily tasks, quests, hero management, and sea-loop missions, with a local web console"
originalDescription: "微信小游戏《疯狂水世界》协议侧挂机工具：直连游戏网关完成日常/任务/英雄/海面循环，附本地网页控制台"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xutongxue233/crazywaterworld"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["automation", "nodejs", "protobuf", "protocol", "reverse-engineering", "websocket", "wechat-minigame"]
stars: 22
forks: 13
openIssues: 6
closedIssues: 36
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-10T08:03:29Z"
lastCommitAt: "2026-11-17T14:38:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 49
maintainers: ["xutongxue233", "1284477813"]
openGraphImageUrl: "https://opengraph.githubassets.com/936007de9630fff7817c84b57a5aff2384a870816d8f43d05a5a828330e28915/xutongxue233/crazywaterworld"
---

# Crazy Water World · Voyage Console

  [](LICENSE)

Manage your Crazy Water World accounts on this machine. Connect directly to the game WebSocket and schedule reward claims, base management, hero development, and fleet missions. Each account independently saves its switches, detailed settings, and usage records. Run logs explain the actions actually completed, the earnings, and the reasons for any skipped steps.

[Quick Start](#快速开始) · [Feature Overview](#功能一览) · [Configuration and Budget](#配置与预算) · [Common Commands](#常用命令) · [Project Documentation](#项目文档)

## Quick Start

Requires Windows and Node.js 20.11 or later. First, open Crazy Water World once in the desktop version of WeChat so the tool can read the local game protocol package. Configuration tables and the world map are updated automatically from the game CDN by default. To add a Douyin account, you also need to be logged into the desktop Douyin app on this machine. The first time you use Alipay QR login, Chromium matching the Playwright version is downloaded automatically (the server must be able to reach the download source and have free disk space). An existing browser can still be reused, or you can specify one with…
