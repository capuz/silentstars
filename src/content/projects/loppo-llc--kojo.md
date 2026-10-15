---
repo: "loppo-llc/kojo"
name: "kojo"
description: "Mobile remote control for AI coding CLIs (Claude Code, Codex, Grok Build) — with persistent multi-device AI agents, over Tailscale"
readmeQualityOk: true
url: "https://github.com/loppo-llc/kojo"
language: "Go"
languages: ["Go"]
languagePcts: [85]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-22T15:41:12Z"
lastCommitAt: "2026-10-15T08:32:37Z"
lastReleaseAt: "2026-02-28T18:48:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 60
maintainers: ["kojo-dev-bitstar", "seibe", "demmys"]
openGraphImageUrl: "https://opengraph.githubassets.com/103da8b020891b6c16d27033a95b6d5091252830cd5359e6f11aa3aa32a9e28b/loppo-llc/kojo"
---

# kojo

> [日本語](https://github.com/loppo-llc/kojo/blob/HEAD/README.ja.md)

Remotely operate AI coding CLIs (Claude Code, Codex, Grok Build) from your mobile device — and run persistent AI agents, across one or more machines, that think, remember, and collaborate on their own.

```
┌───────────────────┐       Tailscale        ┌──────────────────┐
│  macOS / Win / Linux│◄─────(P2P encrypted)─────►│  Mobile Browser  │
│                     │                        │                  │
│  kojo server        │   WebSocket / HTTP     │  Web UI          │
│  ├─ PTY sessions    │◄─────────────────────►│  ├─ xterm.js     │
│  ├─ AI agents       │                        │  ├─ React        │
│  └─ credentials DB  │                        │  └─ Web Push     │
└───────────────────┘                        └──────────────────┘
```

## Features

- **Single binary** — Built with Go, web UI embedded
- **Cross-platform** — macOS/Linux (tmux + PTY) and Windows (ConPTY) native support
- **AI agents** — Persistent AI personas with memory, scheduled execution, encrypted credentials, and group DM
- **tmux-backed sessions** (macOS/Linux) — CLI tools run inside tmux for crash resilience and persistence…
