---
repo: "xiaoxiunique/agent-port"
name: "agent-port"
description: "Local-first monitor & control surface for agent sessions (Claude Code, Codex) running in tmux — Rust service + cross-platform Flutter client"
readmeQualityOk: true
url: "https://github.com/xiaoxiunique/agent-port"
language: "Dart"
languages: ["Dart"]
languagePcts: [83]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-06-24T03:01:55Z"
lastCommitAt: "2026-08-04T06:11:30Z"
lastReleaseAt: "2026-07-14T10:17:34Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 50
maintainers: ["xiaoxiunique"]
openGraphImageUrl: "https://opengraph.githubassets.com/52de8b21a80f91fa55e94a3905b22edc8cac5674205f9b7d3777e19236ae189f/xiaoxiunique/agent-port"
---

# Agent Port

Local-first monitor and control surface for agent sessions (Claude Code, Codex, …) running in tmux on your Mac.

Ships as a Flutter client in this repo; the service it talks to is the
[`amux`](https://github.com/xiaoxiunique/amux) CLI (Axum + portable-pty + tmux),
maintained in its own repo and bundled inside the macOS host app:
- **`amux serve`** — Rust service (the macOS host builds it with `--features full`)
- **Flutter client** (`lib/`) — one Dart codebase, six platforms (iOS / Android / macOS / Linux / Windows / Web)

## Features

- **Live session/pane list** — WebSocket `/ws` with HTTP polling fallback
- **Interactive terminal** — xterm over `/terminal/ws` (PTY lives on the server, no local PTY needed)
- **Actions/messages** — text + control-key input (Codex auto-Tab, Claude Enter), action chips
- **Image upload** — `image_picker` → raw bytes to `/api/upload-image`
- **Multi-server profiles** + onboarding + settings
- **CC Switch** provider switching + project history launch
- **macOS host** — menu-bar tray, Rust subprocess lifecycle (health-check + auto-restart), control center, cc/cx wrapper install, LAN IP detection
- **iOS push** — APNs device-token…
