---
repo: "buckyos/buckyos"
name: "buckyos"
description: "BuckyOS is an open-source Personal AI OS for building your own distributed private cloud. It turns your devices into a secure Zone where apps, data, services, and AI agents run under your control—local-first, privacy-first, and ready for the next generation of AI-native applications."
readmeQualityOk: true
url: "https://github.com/buckyos/buckyos"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [70, 25]
stars: 23
forks: 13
openIssues: 125
closedIssues: 268
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2024-02-24T04:47:45Z"
lastCommitAt: "2026-09-06T08:03:00Z"
lastReleaseAt: "2026-05-01T05:16:05Z"
status: "thriving"
tags: ["community_hub", "fork_magnet"]
healthScore: 93
undervaluedScore: 65
maintainers: ["streetycat", "waterflier", "glen0125"]
openGraphImageUrl: "https://opengraph.githubassets.com/68351a1c74b0c9f967de6c57c520c41bb52f04946877320b9dc265a2d165a649/buckyos/buckyos"
discussionCount: 51
---

# BuckyOS Beta2 (0.6.0) Release!

Beta2 is a major BuckyOS update for the AI era. Key additions include:

- Two new kernel components: `kmsgqueue` + `kevent`, which together enable high-performance distributed event notification
- A complete BuckyOS Desktop WebUI
- A completed port of [OpenDAN](https://github.com/fiatrete/OpenDAN-Personal-AI-OS), reimplemented in Rust
  - Built-in Jarvis agent
  - Core UI-Session <-> WorkSession architecture
  - An Agent-Behavior Loop that supports certain behavior patterns more accurately than skills alone
  - Agent Tool redesigned around the Intent Engine, together with the necessary meta-tools
  - Upgraded Agent Memory using `set_memory` + `topic`, plus automatic memory query/compression and filesystem-based manual lookup by agents
  - Support for a TODO-list-based SubAgent system
  - A Runtime Sandbox with fully controlled isolation between agents
- A new AI Computer Center for unified cluster AI capability management and model routing
- A new Msg Center that provides unified Message Inbox/Outbox management for DID entities and serves as the foundation for the planned default apps Message Hub and Home Station
  - Msg Center support for Msg…
