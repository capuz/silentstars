---
repo: "JayCRL/MobileVC"
name: "MobileVC"
description: "Turn your phone into the control center for an AI coding assistant CLI session (Claude or Codex) running on your computer."
originalDescription: "Turn your phone into the control center for an AI coding assistant CLI session (Claude or Codex) running on your computer."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/JayCRL/MobileVC"
homepage: "https://www.mobilevc.top"
language: "Go"
languages: ["Go", "Dart"]
languagePcts: [49, 42]
topics: ["dsh-plugin", "dsh-plugins", "harness", "mobile", "mobile-app", "vibecoding"]
stars: 208
forks: 27
openIssues: 7
closedIssues: 6
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-03-19T00:11:15Z"
lastCommitAt: "2026-10-26T09:17:57Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 24
maintainers: ["JayCRL", "yibaiba", "RuiZhang-cn"]
openGraphImageUrl: "https://opengraph.githubassets.com/b85f9c29a5f1cfe3028fc43fc54b85e4ae22b684418ef8bf3f589996f232b8bc/JayCRL/MobileVC"
---

# MobileVC

**MobileVC-style mobile / PWA surface for DeepSeek Harness.**

Chinese | [English](https://github.com/JayCRL/MobileVC/blob/HEAD/README.en.md)

MobileVC adds a mobile interface to DSH: connect to the DSH you are running, then view sessions, send messages, interrupt, approve, upload images/files, and manage plugins directly from your phone.

It is not a second Agent, nor another relay/session system. All reads and writes go through DSH's `sessionController`, **one session, one runtime**.

- Version: `0.1.0`
- Verified with: DSH `0.2.0-rc.2`, Node 22+
- Form: DSH Host plugin + static PWA UI
- Official site: https://mobilevc.top/
- Screenshots: `docs/images/`
- Demo: `docs/media/mobilevc-demo.mp4`
- Promo video: `docs/media/mobilevc-promo.mp4`

## Bilibili Promo Video

## New Promo Video

## Features

- **Real sessions**: reads DSH's session list, history, and tool calls
- **Live stream**: `sessionController.follow()` + `assistantStream`, token-by-token thinking and body text
- **Thinking card**: shows "Thinking" while running; becomes a collapsible "Deep thinking · N characters" when finished
- **Tool card**: collapsed by default, shows tool name, parameters, and status;…
