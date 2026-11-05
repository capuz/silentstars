---
repo: "madbird1304/naparrrnik"
name: "naparrrnik"
description: "Naparrrnik bot"
originalDescription: "Naparrrnik bot"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/madbird1304/naparrrnik"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-05-24T10:16:59Z"
lastCommitAt: "2026-11-05T00:21:53Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 33
maintainers: ["madbird1304"]
openGraphImageUrl: "https://opengraph.githubassets.com/70f10e552946ffaa17cd6ed40f19ed247989d1905bb729b40b42612cbd1b7930/madbird1304/naparrrnik"
---

# Naparrrnik

A Telegram bot that voices text using the ELAN TTS Russian (Nicolai 16Khz) voice via `balcon.exe` under Wine. The whole point is this voice, so the engine and Wine version are pinned in the image. This is an x86 image; on ARM it runs through QEMU.

- In a private chat, the bot voices any message.
- In a group, use the command `/pizdani text`.
- In any chat, inline mode works: `@naparrrnik_bot text`, then select 'Voice it'.
  A placeholder appears first, then it is replaced with audio. A phrase that has already been voiced is returned right away as a real voice message.

## Setup

1. Copy `.envrc.template` to `.envrc` and fill in `TG_BOT_TOKEN`.
   Inline mode requires `INLINE_STORAGE_CHAT`: a chat where the bot briefly uploads files. An empty `INLINE_USERS` means inline mode is open to everyone.
2. In `@BotFather`, enable inline (`/setinline`) and set `/setinlinefeedback` to **Enabled**. Values like `1/100` won't work: messages will get stuck on the placeholder.
3. Place the files `wineprefix.tar.gz` and `balcon.tar.gz` in `vendor/`. They are not in git because the repository is public. Verify with: `cd vendor && sha256sum -c ../vendor.sha256`.
4. On ARM, install…
