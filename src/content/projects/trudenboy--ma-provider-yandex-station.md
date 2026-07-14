---
repo: "trudenboy/ma-provider-yandex-station"
name: "ma-provider-yandex-station"
description: "Yandex Station player for Music Assistant — control speakers via Glagol API"
originalDescription: "Яндекс Станция / Yandex Station player for Music Assistant — управление колонками через Glagol API"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/trudenboy/ma-provider-yandex-station"
homepage: "https://trudenboy.github.io/ma-provider-yandex-station/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["alice", "glagol", "home-assistant", "music-assistant", "player-provider", "python", "russia", "russian-music", "smart-speaker", "yandex-station"]
stars: 6
forks: 1
openIssues: 10
closedIssues: 50
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-04-06T18:17:59Z"
lastCommitAt: "2026-07-14T05:53:18Z"
lastReleaseAt: "2026-04-20T14:34:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 64
maintainers: ["trudenboy", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f93605874c87aa207432d31370ce394d94a59292bbd4f8b8468e4214636bc62b/trudenboy/ma-provider-yandex-station"
discussionCount: 0
---

# Yandex Station Player Provider for Music Assistant

**📖 [Documentation / Документация](https://trudenboy.github.io/ma-provider-yandex-station/)** · **🔄 [Changelog / Журнал](https://github.com/trudenboy/ma-provider-yandex-station/blob/HEAD/CHANGELOG.md)** · **🐛 [Issues / Проблемы](https://github.com/trudenboy/ma-provider-yandex-station/issues)** · **💬 [Discussions / Обсуждения](https://github.com/trudenboy/ma-provider-yandex-station/discussions)**

**Related providers:** [Yandex Smart Home](https://github.com/trudenboy/ma-provider-yandex-smarthome) · [Yandex Alice](https://github.com/trudenboy/ma-provider-yandex-alice) · [Yandex Music](https://github.com/trudenboy/ma-provider-yandex-music)

Play music on Yandex Station smart speakers via the local Glagol WebSocket protocol.

## Features

- 🔊 **Local playback** via Glagol protocol (low latency, no cloud dependency for audio)
- 🔍 **Auto-discovery** via mDNS (`_yandexio._tcp.local.`)
- 📡 **Real-time state** updates via WebSocket
- 🎵 **Lossless audio** — FLAC streaming with proper Content-Length
- 🎛️ **Full transport control** — play, pause, stop, seek, next/previous, volume
- 📢 **TTS announcements** — Alice speaks…
