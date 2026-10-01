---
repo: "GeiserX/Telegram-Archive"
name: "Telegram-Archive"
description: "Own your Telegram history. Automated, incremental backups with a local web viewer that feels just like the real app. Docker-ready and supports public chat sharing"
readmeQualityOk: true
url: "https://github.com/GeiserX/Telegram-Archive"
homepage: "https://geiserx.github.io/Telegram-Archive/"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["archive", "backup", "docker", "telegram", "chat-history", "homelab", "incremental-backup", "media", "self-hosted", "telegram-backup"]
stars: 215
forks: 39
openIssues: 0
closedIssues: 119
watchers: 2
contributors: 16
recentReleases: 0
createdAt: "2025-11-25T00:28:14Z"
lastCommitAt: "2026-10-01T10:24:41Z"
lastReleaseAt: "2025-12-02T20:40:13Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 39
maintainers: ["GeiserX", "dependabot[bot]", "WalterLederer"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1103497752/a9a75388-750e-489c-93b2-edc269121f7e"
fundingLinks: ["GITHUB:https://github.com/GeiserX", "PATREON:https://patreon.com/geiser", "BUY_ME_A_COFFEE:https://buymeacoffee.com/geiser", "THANKS_DEV:https://thanks.dev/u/gh/geiserx"]
---

</p>

</p>

Telegram Archive backs up one or more Telegram accounts to a machine you host. It runs in Docker or from `pip`, and saves messages, media, edits and deletions to SQLite or PostgreSQL on your own disk. A web viewer, which never talks to Telegram, lets you read and search what it saved.

Telegram Desktop's own export is a one-off file with no earlier versions and no deleted messages; this runs on a schedule, keeps earlier versions and deleted messages, and can import that export too.

## Features

- Runs on a schedule and fetches only what is new, so every run after the first is short; an optional listener saves new messages, edits and deletions the moment they happen.
- Keeps every edit with its earlier text, and keeps every deleted message, marked as deleted, with its text and media.
- Saves photos, videos, voice notes, stickers, documents and link previews once each, however many chats share them, and skips files over a size you set.
- Reads like Telegram: chats, forum topics, folders, archived chats, reactions, pinned messages, polls and shared media, with search across every chat.
- Shows what Telegram no longer does: a What changed feed of deletions, edits and new…
