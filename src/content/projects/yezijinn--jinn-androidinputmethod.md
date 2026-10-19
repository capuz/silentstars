---
repo: "yezijinn/Jinn_AndroidInputMethod"
name: "Jinn_AndroidInputMethod"
description: "Lightweight Android input method (IME): 26-key full pinyin / dual pinyin (7 schemes), clipboard history, categorized word libraries; all core features run locally, with no server."
originalDescription: "轻量安卓输入法（IME）：26 键全拼 / 双拼（7 套）、剪贴板历史、分类词库；核心功能全部本机运行，无服务端。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yezijinn/Jinn_AndroidInputMethod"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-17T08:35:13Z"
lastCommitAt: "2026-10-19T09:01:10Z"
lastReleaseAt: "2026-09-21T16:35:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 46
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/257527cd45af7f23af60e2f3f649ae83acd88ab6b166300c522c26b6e4781466/yezijinn/Jinn_AndroidInputMethod"
---

# Sprite Input Method

Lightweight Android input method (IME): 26-key full pinyin / dual pinyin (7 schemes), clipboard history, categorized word libraries. All core features run locally with no server;
The APK is about 3.2MB and does not include offline voice data.

[English](https://github.com/yezijinn/Jinn_AndroidInputMethod/blob/HEAD/README_EN.md) ｜ Chinese

> **Voice dictation is optional and does not work out of the box:** recognition runs on a server, so you need to deploy
> [CapsWriter Offline](https://github.com/HaujetZhao/CapsWriter-Offline) (Docker) yourself on a home NAS. The Android app uploads audio over WebSocket.
> Without a self-hosted server, it won't work. The pinyin keyboard, clipboard, and word libraries are unrelated to voice and do not need a server.

## Features

**Pinyin keyboard (26-key)**
- Full pinyin / dual pinyin / English; 7 dual-pinyin schemes (Natural Code, Xiaohe, Sogou, Microsoft, Ziguang, Smart ABC, Jiajia). Key faces automatically show finals and zh/ch/sh hints (the “Show finals on keys” option on the settings page can be turned off, after which key faces show only letters). Switch via “Pinyin input scheme” on the settings page; the selection…
