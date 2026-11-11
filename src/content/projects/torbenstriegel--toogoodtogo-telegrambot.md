---
repo: "TorbenStriegel/TooGoodToGo-TelegramBot"
name: "TooGoodToGo-TelegramBot"
description: "A Telegram bot that monitors your TooGoodToGo favorites and notifies you when stock changes occur (new bags, sold out, etc.)."
readmeQualityOk: true
url: "https://github.com/TorbenStriegel/TooGoodToGo-TelegramBot"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["tgtg", "toogoodtogo", "toogoodtogo-bot"]
stars: 23
forks: 7
openIssues: 0
closedIssues: 6
watchers: 3
contributors: 2
recentReleases: 1
createdAt: "2023-07-24T15:12:54Z"
lastCommitAt: "2026-11-11T19:48:50Z"
lastReleaseAt: "2026-11-11T19:48:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 40
maintainers: ["TorbenStriegel"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a9dc724646078f97d61ced788b2e38f89a303105e2f41c036b63d23c7da0d61/TorbenStriegel/TooGoodToGo-TelegramBot"
---

# Too Good To Go – Telegram Bot 🍽

A self-hosted Telegram bot that watches your [Too Good To Go](https://www.toogoodtogo.com/) **favorites** and
messages you as soon as bags become available – faster than waiting for the app's push notification.

## Features

- 🔔 **Notifications** for your favorites: new bags, sold out, fewer bags, more bags – each switchable with one tap.
  Only *new bags* make a sound, everything else arrives silently.
- 🔑 **Login in 2 messages** – send your email, then the PIN from the TGTG email. No password, no commands to remember.
- 🛍 **Rich messages** – store, bag type, ⭐ rating, price vs. original value, pickup window (*Today 17:00–18:30*,
  in your time zone), address plus buttons **📱 Open in app** and **📍 Route**
- ℹ️ `/info` shows what's available right now – and which favorites have nothing today
- 🇩🇪 🇬🇧 **German and English** – picked automatically from the user's Telegram language
- 👥 **Multi-user** – everyone logs in with their own TGTG account; optionally restrict the bot to your own Telegram IDs
- 🛡 **Careful with the API** – only polls when someone wants notifications, adds jitter, and backs off automatically
  when TGTG's bot…
