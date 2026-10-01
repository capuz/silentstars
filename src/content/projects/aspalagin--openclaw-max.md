---
repo: "aspalagin/openclaw-max"
name: "openclaw-max"
description: "MAX messenger (max.ru) channel plugin for OpenClaw"
originalDescription: "MAX messenger (max.ru) channel plugin for OpenClaw"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/aspalagin/openclaw-max"
homepage: "https://github.com/aspalagin/openclaw-max#readme"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-agent", "max", "max-messenger", "messenger", "openclaw", "openclaw-plugin"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-03-25T20:02:25Z"
lastCommitAt: "2026-10-01T10:23:44Z"
lastReleaseAt: "2026-09-29T20:12:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 68
maintainers: ["aspalagin"]
openGraphImageUrl: "https://opengraph.githubassets.com/286d97ba2ce7dea1a33ac112e4ba384e1e36fc0ac95629dbe3c5d8befcab4b99/aspalagin/openclaw-max"
---

# openclaw-max — MAX messenger channel for OpenClaw

[English version](https://github.com/aspalagin/openclaw-max/blob/HEAD/README_EN.md)

A channel plugin that connects the [OpenClaw](https://openclaw.ai) assistant to the [MAX](https://max.ru) messenger through MAX Bot API (`platform-api2.max.ru`). People write to your bot in MAX — in a private chat or in a group — and the OpenClaw agent responds there: with media, buttons, and voice.

The plugin is needed for those who use OpenClaw and want the assistant to be available in MAX. You'll need a MAX bot token (bots are created by organizations on [business.max.ru](https://business.max.ru/self)) and your own OpenClaw gateway.

Version 0.8.0. Changes: [CHANGELOG.md](https://github.com/aspalagin/openclaw-max/blob/main/CHANGELOG.md).

## Contents

- [Supported message types](#поддерживаемые-типы-сообщений)
- [Requirements and compatibility](#требования-и-совместимость)
- [Installation](#установка)
- [Quick start](#быстрый-старт)
- [Transports: webhook and long polling](#транспорты-webhook-и-long-polling)
- [Settings reference](#справочник-настроек)
- [Access and policies](#доступ-и-политики)
- [Actions of the `message` tool and where…
