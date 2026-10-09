---
repo: "itrcz/calab"
name: "calab"
description: "OpenSource team chats and video conferences inspired with Discord, Telegram & Zoom"
readmeQualityOk: true
url: "https://github.com/itrcz/calab"
homepage: "https://calab.io"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [63, 34]
topics: ["messager", "streaming", "voip", "livekit", "sfu", "webrtc"]
stars: 79
forks: 11
openIssues: 3
closedIssues: 32
watchers: 1
contributors: 7
recentReleases: 10
createdAt: "2026-09-26T04:29:35Z"
lastCommitAt: "2026-10-09T18:56:15Z"
lastReleaseAt: "2026-09-27T09:21:07Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 41
maintainers: ["itrcz", "meowfield"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbc1dadb7300124ee364cff2caecd83c672d2f0d4cffc75f30ae6a2a99907c3b/itrcz/calab"
---

Your whole team in one window: voice rooms, chat, meetings and tasks — on your own server.<br>

---

## What it is

Calab is a team messenger where **voice** comes first. Join a room and you hear your colleagues right away; next to it is a Telegram-style chat, a calendar with meetings and Linear-style task boards. Everything runs on your own server: one `docker compose`, PostgreSQL and LiveKit inside, no external services or subscriptions.

It is built for teams of up to 20–30 people in voice at once and up to 3 screen shares per room. The client is light: 0.05 % CPU outside a call and ≈ 7 % in voice on a MacBook Air M4.

## Features

### 🎙 Voice and video

- **Voice rooms** — one click to join; who is talking is visible right in the room list; room status, timer and member limit.
- **Clean sound** — AEC3 echo cancellation and RNNoise noise suppression (no external services), Opus with DTX; voice activation or **push-to-talk** on any key, even in the background.
- **Musician mode** — a personal toggle that turns off echo cancellation, noise suppression and auto gain and switches Opus to a music profile (128 kbps mono / 192 kbps stereo, FEC, no DTX): play an instrument or sing…
