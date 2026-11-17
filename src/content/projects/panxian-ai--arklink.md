---
repo: "panxian-AI/ArkLink"
name: "ArkLink"
description: "ArkBot protocol plugin layer: Milky / Satori channels + QQ NT native protocol reverse-engineering toolkit"
originalDescription: "ArkBot 协议外挂层：Milky / Satori 通道 + QQ NT 原生协议逆向工具箱"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/panxian-AI/ArkLink"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-11-12T06:28:59Z"
lastCommitAt: "2026-11-17T14:35:37Z"
lastReleaseAt: "2026-11-15T02:18:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 35
maintainers: ["panxian-AI"]
openGraphImageUrl: "https://opengraph.githubassets.com/95a7f065b0f5c5cf94bfe1ae30760e84b690b4691d5adb4241d4615fb86c06a0/panxian-AI/ArkLink"
---

# ArkLink

> **Sister repository**: [ArkBot](https://github.com/panxian-AI/ArkBot) is the upper-layer business framework. Plugins, rules, scheduling, and the outbox all live there. This repository only handles "how to connect to QQ". The two have one-way dependencies, independent versioning, and can each be installed on their own.

Five channels, one contract:

| Channel | Purpose | Status |
|------|------|------|
| `milky` | Milky 1.3 (NapCat / Lagrange / Acidify / LLOneBot) | ✅ Available |
| `satori` | Satori v1 (Koishi / Chronocat, also connects Telegram/Discord) | ✅ Available |
| `ntqq-hook` | Detects the official QQ process → injects a custom module → receives pushes via pipe (Win + Linux) | 🟡 Pipeline working on a real device; packet-receiving side pending kernel API integration |
| `ntqq-native` | QQ NT native SSO: QR-code login / read-only roster / receive pushes | 🟡 Read-only available, cannot send messages |
| `ntqq-client` | Operates the **already logged-in official client** (Win32 keyboard/mouse, text only) | ⚠️ Available, the final notification leg |

It is not another bot framework. Business plugins are written in [ArkBot](https://github.com/panxian-AI/ArkBot).…
