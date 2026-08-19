---
repo: "pyed/transmission-telegram"
name: "transmission-telegram"
description: "Control your Transmission through a Telegram bot"
readmeQualityOk: true
url: "https://github.com/pyed/transmission-telegram"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["transmission", "transmission-telegram", "telegram", "telegram-bot"]
stars: 313
forks: 53
openIssues: 10
closedIssues: 24
watchers: 12
contributors: 10
recentReleases: 0
createdAt: "2016-06-19T05:15:43Z"
lastCommitAt: "2026-08-19T04:08:12Z"
lastReleaseAt: "2017-03-18T18:14:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 27
maintainers: ["pyed"]
openGraphImageUrl: "https://opengraph.githubassets.com/c20acfa4d5892779feeb1f342502b50e1c8fc45bf70c8293d72c74f715d751bc/pyed/transmission-telegram"
---

# transmission-telegram

#### Manage and monitor your Transmission BitTorrent client through Telegram.

---

## Key Features

- ⚡ **Modern Telegram Bot Engine**: Built with [`github.com/go-telegram/bot`](https://github.com/go-telegram/bot) with native graceful shutdown, context propagation, and structured `log/slog` logging.
- 🎛 **Interactive Inline Buttons**: Control torrents (`[ ⏸ Pause ]`, `[ ▶ Resume ]`, `[ 🗑 Delete ]`) directly from `/info` with instant feedback.
- 📊 **Visual Progress Bars**: Clean Unicode progress bars (`[█████░░░░░] 50.0%`) on `/head`, `/tail`, `/active`, `/paused`, `/checking`, and `/info`.
- 🔔 **Polling Completion Alerts**: Automatic completion notifications via Transmission RPC — works across Docker, Kubernetes, NAS, and remote seedboxes without needing local log file access.
- 🐢 **Turtle Mode & Utilities**: Instant speed toggling (`/turtle`), free disk space checker (`/free`), and manual tracker re-announcing (`/reannounce`).
- 🔒 **Flexible Authorization**: Secure `-master` list supporting both Telegram `@usernames` and permanent numeric user IDs.
- 👥 **Group Chat Ready**: Clean handling of group mentions (e.g. `/list@BotName`).
- 📱 **Telegram…
