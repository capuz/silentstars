---
repo: "roomkit-live/roomkit"
name: "roomkit"
description: "Pure async Python framework for multi-channel conversations"
readmeQualityOk: true
url: "https://github.com/roomkit-live/roomkit"
homepage: "https://www.roomkit.live"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 35
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-05T23:44:45Z"
lastCommitAt: "2026-10-21T19:55:40Z"
lastReleaseAt: "2026-02-11T17:23:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 45
maintainers: ["sboily"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa223ab9fe87264d070aca43a75c05608efb8059388e23c29e7b64c1b412a0a3/roomkit-live/roomkit"
---

# RoomKit

**Pure async Python 3.12+ framework for multi-channel conversation orchestration.**

RoomKit gives you one abstraction — the **room** — to wire together any combination of SMS, WhatsApp, Email, Teams, Telegram, Discord, Voice, Video, Conference, WebSocket, and AI channels. Messages flow in, pass through a hook pipeline, get routed to the right agent, and broadcast out to every attached channel. You focus on the conversation logic; the framework handles routing, transcoding, audio processing, video processing, and agent handoffs.

**Website:** [roomkit.live](https://www.roomkit.live) &nbsp;|&nbsp; **Docs:** [roomkit.live/docs](https://www.roomkit.live/docs/) &nbsp;|&nbsp; **API Reference:** [roomkit.live/docs/api](https://www.roomkit.live/docs/api/)

---

## How it works

Every channel implements the same interface: `handle_inbound()` converts a provider message into a `RoomEvent`, and `deliver()` pushes events out. Channels have two categories: **transport** (delivers to external systems) and **intelligence** (generates content, like AI agents).

> **Provider-agnostic.** Intelligence providers are pluggable (Anthropic, OpenAI, Gemini, Mistral, Ollama, PolarGrid, …) —…
