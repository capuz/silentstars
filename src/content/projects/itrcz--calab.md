---
repo: "itrcz/calab"
name: "calab"
description: "OpenSource team chats and video conferences inspired with Discord, Telegram & Zoom"
originalDescription: "OpenSource team chats and video conferences inspired with Discord, Telegram & Zoom"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/itrcz/calab"
homepage: "https://calab.ru"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [72, 25]
topics: ["messager", "streaming", "voip", "livekit", "sfu", "webrtc"]
stars: 5
forks: 1
openIssues: 3
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-09-26T04:29:35Z"
lastCommitAt: "2026-09-28T10:05:58Z"
lastReleaseAt: "2026-09-27T09:21:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 64
maintainers: ["itrcz", "meowfield"]
openGraphImageUrl: "https://opengraph.githubassets.com/f256db6369c19160c3ef9c59a58acd1524f3c365cc5a57bfcff38519ff669b3f/itrcz/calab"
---

</p>

<h1 align="center">Calab</h1>

  Voice rooms, chat and screen sharing for your team — on your server.<br>
  <sub>Self-hosted voice-first team messenger: voice rooms, Telegram-style chat, screen sharing. macOS · Windows · Linux · Web.</sub>
</p>

</p>

  <picture>
    <source media="(prefers-color-scheme: light)" srcset="docs/images/chat-light-shadow@2x.png">
  </picture>
</p>

---

## What this is

Calab is a corporate messenger where the main thing is **voice**. Enter a room — you immediately hear your colleagues; next to it is a chat with files and reactions; you can show your screen at any time. Everything runs on your server: one `docker compose up`, PostgreSQL and LiveKit inside, no external services and subscriptions.

Designed for teams up to 20–30 people simultaneously in voice and up to 3 streams in a room (MVP); scales through Kubernetes.

## What inspired us

| | Source | What we took |
|---|---|---|
| 🎙 | **Discord** | structure of a corporate voice messenger: spaces → rooms → participants, push-to-talk and voice activation, roles and permissions for each room, dragging participants, guest links |
| 💬 | **Telegram** | convenient chat: message bubbles, replies,…
