---
repo: "yuzi52/st-yuzi-phone"
name: "st-yuzi-phone"
description: "SillyTavern standalone phone extension that provides a small phone home screen and a standalone QQ system app."
originalDescription: "SillyTavern 独立手机扩展，提供小手机主屏和 QQ 独立系统 App。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yuzi52/st-yuzi-phone"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-11T10:49:17Z"
lastCommitAt: "2026-10-24T08:20:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 44
maintainers: ["yuzi83"]
openGraphImageUrl: "https://opengraph.githubassets.com/34e448c30c888a74eac7571f6a149abcfc74ae7453824228469d662e47d5bc4a/yuzi52/st-yuzi-phone"
---

# 📱 Yuzi Phone (玉子手机)

A standalone phone extension for SillyTavern, providing a phone home screen, real-time QQ chat, a general table viewer, the Theater mini-theater, a world book workbench, and settings management.

## Features

- 📱 Phone container: floating display, drag to move, scaling, and position memory
- 🏠 Home screen and apps: home screen entry, table viewing, and settings pages
- 💬 QQ: standalone conversations, contacts, and message storage, using a user-configured OpenAI-compatible API
- 🔐 API presets: the QQ key is not stored as a plaintext field in regular preset records
- 📚 World book workbench: select the world books and entries that the phone system reads
- 🖼️ QQ media messages: images, voice, stickers, and transfers belong to QQ's own data model
- 🎨 Table and scene styling: general table templates and Theater scenes each render separately
- ⚙️ Data and settings: supports database tables, appearance, and independent local storage

## Development and Release

This extension is a native third-party SillyTavern extension. `manifest.json` actually loads `dist/yuzi-phone.bundle.js` and `dist/yuzi-phone.bundle.css`. The source entry points are `index.js` and…
