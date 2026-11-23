---
repo: "qgx1992/pideck-mobile"
name: "pideck-mobile"
description: "PiDeck mobile client (fully native Kotlin + Jetpack Compose): pairing, session list, chat streaming with thinking and tool cards, right-side workspace, Q&A cards, and background completion notifications. Connects directly to the LAN web service of the PiDeck desktop app, without a WebView. This project was developed entirely by AI. If you're interested, feel free to give it a ⭐"
originalDescription: "PiDeck 手机客户端（全原生 Kotlin + Jetpack Compose）：配对、会话列表、聊天流式与工具卡、右侧工作区、问答卡、后台跑完提醒。直连 PiDeck 桌面端的局域网 Web 服务，不经 WebView。本项目全程由 AI 开发，感兴趣可以点个 ⭐"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qgx1992/pideck-mobile"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["android", "jetpack-compose", "kotlin", "mobile-client", "pi-agent", "pideck"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-28T09:41:41Z"
lastCommitAt: "2026-11-23T10:08:25Z"
lastReleaseAt: "2026-10-31T21:26:02Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 80
undervaluedScore: 57
maintainers: ["qgx1992", "op15066212"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f6c2feab56a4a29f741dfec68f6a15c05b1dd7d5fd7597fe9353c81edef9a13/qgx1992/pideck-mobile"
---

# PiDeck Mobile Client

Turns the desktop PiDeck's "LAN web service" into a native app on your phone:
pairing, session list, chat (streaming / thinking / tool cards), right-side workspace, Q&A cards, and background completion notifications.

> **Desktop app**: <https://pideck.caoayu.top/> · Source <https://github.com/ayuayue/PiDeck>
>
> This repository only contains the mobile client. Agent behavior, model calls, and session reading/writing are all handled by pi on the computer. The phone is just a "remote control + reader" connected to it.

**This project was developed entirely by AI** (from the first line of Compose code to the final APK). If you're interested, feel free to give it a ⭐.

Current version **0.5.75** (`versionCode 575`), package name `top.caoayu.pideck`,
Kotlin 2.0 + Jetpack Compose, fully native, no WebView.

> **Compatible desktop version: 0.11.0** (0.11.0–0.11.3 and 0.10.0 share the same routes, fields, and stream frames; 0.5.55 re-verified this).
> After a desktop upgrade, probes and unit tests are run before following it. When the desktop version is below 0.11.0, the settings page shows a one-line notice.
> See the "Compatibility" row in the table below.
