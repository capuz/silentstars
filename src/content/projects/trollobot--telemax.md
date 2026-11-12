---
repo: "Trollobot/Telemax"
name: "Telemax"
description: "MAX ↔ Telegram bridge via your personal MAX account (by phone number, not a bot) — all MAX chats are mirrored to Telegram automatically. Your own server, private, without installing MAX on your phone."
originalDescription: "Мост MAX ↔ Telegram через ваш личный MAX-аккаунт (по номеру, не бот) — все чаты Макса зеркалятся в Telegram автоматически. Свой сервер, приватно, без установки MAX на телефон."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Trollobot/Telemax"
homepage: "https://telemax.svnest.ru/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["max-messenger", "max-bridge", "max-proxy", "max-telegram-bridge", "messenger-bridge", "self-hosted", "telegram-bot", "telegram-bridge", "max-messenger-bridge", "telegram-max-bridge"]
stars: 48
forks: 4
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 7
createdAt: "2026-08-13T12:16:14Z"
lastCommitAt: "2026-11-12T11:36:58Z"
lastReleaseAt: "2026-09-22T07:51:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 46
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/7c63db5a13608087af4787e1c2ec06539faa12a0bdf8398ffaefecf635237586/Trollobot/Telemax"
discussionCount: 1
---

# Telemax — two-way bridge MAX ↔ Telegram

🌐 Project site: **[telemax.svnest.ru](https://telemax.svnest.ru/)**

A two-way bridge between the **MAX** messenger and **Telegram**. It connects to your **personal MAX account by phone number — not via a bot**, so **all** of your MAX chats are mirrored to Telegram automatically (bot-based bridges can't do this — they only work in chats where the bot has been added). Each MAX number becomes a Telegram group with forum topics (one per MAX chat), and messages flow both ways in a single window. On the Telegram side there is your own bot, and everything runs on your server: data travels only through your infrastructure, with no cloud intermediaries.

> ⚠️ Unofficial project. Not affiliated with MAX or Telegram. It works on top of your own number/account at your own risk — see [«Отказ от ответственности»](#отказ-от-ответственности).

## Features

- Text messages, photos, files, voice messages, videos and video notes (both sides)
- Large files — via link: from Telegram to MAX if over 20 MB (up to 4 GB — MAX limit), from MAX to Telegram if over 50 MB; own file-sharing in the control panel (see [«Большие файлы»](#большие-файлы))
- MAX bot…
