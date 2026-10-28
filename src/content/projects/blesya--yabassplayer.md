---
repo: "Blesya/YaBassPlayer"
name: "YaBassPlayer"
description: "Console audio player for local music and Yandex.Music."
originalDescription: "Консольный аудиоплеер для работы с локальной музыкой и с Яндекс.Музыка."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Blesya/YaBassPlayer"
homepage: "https://blesya.github.io/YaBassPlayer/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["bass-library", "csharp", "terminalgui", "yandex-music"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2025-11-17T20:21:38Z"
lastCommitAt: "2026-10-28T09:55:23Z"
lastReleaseAt: "2026-10-23T10:50:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 69
maintainers: ["Blesya"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6ae8027080de93074d0d5046b164f807f66ef5489ff29dfe2097be288761c2f/Blesya/YaBassPlayer"
---

# YamBassPlayer

Console music player with a terminal user interface (TUI): local media library and Yandex.Music as plugins, radio, spectrum visualization.

## Description

YamBassPlayer is a cross-platform music player with a text interface. It plays music from a **local media library** (folders with files) and from **Yandex.Music**, connected via a plugin. It includes 8 spectrum visualization modes, a 10-band equalizer, personal radio (“My Wave”), song lyrics, and ASCII covers.

## Features

- Plugin architecture: local music is built in, Yandex.Music is an external plugin
- The app launches without an account: sources are visible right away; sign-in is under “Plugins → Yandex.Music → Setup”
- Sign-in by code on the website (OAuth Device Flow), QR code, or token
- Playback from Yandex.Music with preloading of the next track
- Local media library: adding folders, scanning, reading ID3 tags (TagLib#)
- Radio: “My Wave” (personal and by track) with launch settings: tracks, mood, language
- Song lyrics with caching in SQLite
- “About track” window (F7/`about`): availability and reason for blocking, explicit/18+/foreign agent labels, credits and artist description
- ASCII covers in…
