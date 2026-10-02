---
repo: "trudenboy/ma-provider-yandex-station"
name: "ma-provider-yandex-station"
description: "Yandex Station player for Music Assistant — speaker control via Glagol API"
originalDescription: "Яндекс Станция / Yandex Station player for Music Assistant — управление колонками через Glagol API"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/trudenboy/ma-provider-yandex-station"
homepage: "https://trudenboy.github.io/ma-provider-yandex-station/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["alice", "glagol", "home-assistant", "music-assistant", "player-provider", "python", "russia", "russian-music", "smart-speaker", "yandex-station"]
stars: 10
forks: 1
openIssues: 5
closedIssues: 77
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-06T18:17:59Z"
lastCommitAt: "2026-10-02T10:01:15Z"
lastReleaseAt: "2026-04-20T14:34:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 54
maintainers: ["trudenboy", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/faf33e2b6764c1862952c11f80b689f0027256b38391f55a513f40254d2f0c8d/trudenboy/ma-provider-yandex-station"
discussionCount: 1
---

# Yandex Station Player Provider for Music Assistant

**📖 [Documentation](https://trudenboy.github.io/ma-provider-yandex-station/)** · **🔄 [Changelog](https://github.com/trudenboy/ma-provider-yandex-station/blob/HEAD/CHANGELOG.md)** · **🐛 [Issues](https://github.com/trudenboy/ma-provider-yandex-station/issues)** · **💬 [Discussions](https://github.com/trudenboy/ma-provider-yandex-station/discussions)**

**Related providers:** [Yandex Smart Home](https://github.com/trudenboy/ma-provider-yandex-smarthome) · [Yandex Alice](https://github.com/trudenboy/ma-provider-yandex-alice) · [Yandex Music](https://github.com/trudenboy/ma-provider-yandex-music)

Play music on Yandex Station smart speakers via the local Glagol WebSocket protocol.

## Features

- 🔊 **Local playback** via Glagol protocol (low latency, no cloud dependency for audio)
- 🔍 **Auto-discovery** via mDNS (`_yandexio._tcp.local.`)
- 📡 **Real-time state** updates via WebSocket
- 🎵 **Lossless audio** — FLAC streaming with proper Content-Length
- 🎛️ **Full transport control** — play, pause, stop, seek, next/previous, volume
- 📢 **TTS announcements** — Alice speaks…
