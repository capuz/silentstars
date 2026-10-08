---
repo: "Genshin-bots/gsuid_hub"
name: "gsuid_hub"
description: "💖 One set of business logic, multi-platform support! The frontend of the async core framework GsCore is open source!"
originalDescription: "💖一套业务逻辑，多个平台支持！异步核心框架GsCore的前端开源！"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Genshin-bots/gsuid_hub"
homepage: "https://docs.sayu-bot.com/Started/WebConsole.html"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 5
forks: 3
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-15T14:20:45Z"
lastCommitAt: "2026-10-08T10:51:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 62
maintainers: ["KimigaiiWuyi"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d33a972c2fa825b980518a4be3e1bd2cbbcda14909cf124d51391f679870b9a/Genshin-bots/gsuid_hub"
---

# GsCore Frontend / gsuid_hub v0.3.0

The web console frontend project for GsCore. This project provides [gsuid_core](https://github.com/Genshin-bots/gsuid_core) with a modern, responsive, internationalized web management console for managing core configuration, plugins, logs, databases, AI capabilities, and runtime status.

- Backend project: [gsuid_core](https://github.com/Genshin-bots/gsuid_core) 💖 One set of business logic, multi-platform support!
- Frontend project: [gsuid_hub](https://github.com/Genshin-bots/gsuid_hub) 💖 An easy-to-use web console that controls everything!
- Detailed documentation: [docs.sayu-bot.com](https://docs.sayu-bot.com) ([Quick Start](https://docs.sayu-bot.com/Started/InstallCore.html) | [Web Console](https://docs.sayu-bot.com/Started/WebConsole.html) | [Plugin Market](https://docs.sayu-bot.com/InstallPlugins/PluginsList.html))

## Project Overview

`gsuid_hub` is a single-page application built with Vite + React + TypeScript. It uses a Hash Router to suit backend mounting scenarios. In production, the default base path is `/app/`. In development, Vite's proxy connects to the local backend at `http://localhost:8765`.

Modules are divided into five…
