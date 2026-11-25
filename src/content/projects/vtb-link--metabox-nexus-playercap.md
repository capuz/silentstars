---
repo: "VTB-LINK/Metabox-Nexus-PlayerCap"
name: "Metabox-Nexus-PlayerCap"
description: "Extracts lyrics and song information in real time from multiple media players, and broadcasts them to external applications via WebSocket/HTTP/SSE. Pure Go implementation."
originalDescription: "从多个播放器中实时提取歌词与歌曲信息，通过 WebSocket/HTTP/SSE 广播给外部应用。纯 Go 实现。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/VTB-LINK/Metabox-Nexus-PlayerCap"
homepage: "https://vtb.link/PlayerCap"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 46
forks: 7
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-19T19:53:19Z"
lastCommitAt: "2026-11-25T03:13:43Z"
lastReleaseAt: "2026-04-11T17:24:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 38
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d52f612bf28ba85cc93f641354efb946e9031965c5b9a139f86209c2717ec15/VTB-LINK/Metabox-Nexus-PlayerCap"
discussionCount: 5
---

# VTB-TOOLS Metabox-Nexus-PlayerCap

Real-time lyrics push service for multiple players. It extracts lyrics, song information, and real-time audio waveforms from multiple music players, mirrors NetEase Cloud Music's special lyrics visual effects, and broadcasts them to external applications via WebSocket / HTTP / SSE.
**Pure Go implementation** · Windows only · Supports priority routing · Auto-update

## Supported Players

| Player | Identifier | Extraction method | Version |
|--------|----------|--------|------|
| 全民K歌 | `wesing` | In-process memory read | Unrestricted |
| 网易云音乐 | `cloudmusicv3` | CDP remote debugging | 3.x and above, official website installer edition; Microsoft Store edition not supported |
| QQ 音乐 | `qqmusic` | In-process memory read | `22.16` ～ `22.82` (11 versions supported, plus `20.05` and `21.81`) |
| 酷狗音乐 | `kugou` | CDP remote debugging | `20.1.22.27795` and above (x64 architecture) |
| 汽水音乐 | `sodamusic` | CDP remote debugging | Unrestricted |
| Apple Music | `applemusic` | In-process memory read | Unrestricted |
