---
repo: "getgantry/gantry"
name: "gantry"
description: "Native macOS app for managing and monitoring Docker — local and over SSH. Agent-ready: built-in MCP server and App Intents. Free and open source."
readmeQualityOk: true
url: "https://github.com/getgantry/gantry"
homepage: "https://getgantry.github.io/"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["containers", "developer-tools", "docker", "macos", "mcp", "ssh", "swift", "swiftui", "ai-agents", "mcp-server"]
stars: 78
forks: 7
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-04T10:27:32Z"
lastCommitAt: "2026-11-06T12:18:12Z"
lastReleaseAt: "2026-06-05T10:45:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 32
maintainers: ["andrewkomkov", "github-actions[bot]", "neonwatty"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d9cc3b7c5da60223655d15d73430fa8f26a45b4a5d0595140457141f2c472f1/getgantry/gantry"
discussionCount: 0
---

# Gantry

**Native Docker management for your Mac. Local and over SSH. Agent-ready with a built-in MCP server. Free, open source, no limits.**

Gantry is a fully native macOS app (SwiftUI, Swift 6) for managing and monitoring
Docker — the local daemon and any number of remote hosts over SSH — plus
[apple/container](https://github.com/apple/container) hosts on your Mac. No
Electron, no subscription, no artificial limits. It is built to be driven by AI agents
too: a bundled [MCP server](#agent-friendly) and App Intents expose your Docker
hosts to Claude, Shortcuts, Siri and scripts.

Website: **[Gantry — native Docker & apple/container app for Mac](https://getgantry.github.io/)**

## Features

### Core
- **Containers** — list, inspect, start/stop/restart/kill/pause, rename, remove,
  create and run with ports/env/volumes/restart-policy, commit to image,
  export filesystem, view processes (`top`), update restart policy
- **Images** — list, **build from a Dockerfile** (drag-and-drop, live build log),
  history, tag, pull with per-layer progress, remove, prune
- **Private registries** — pulls resolve credentials from your
  `~/.docker/config.json` (inline `auth`, credential helpers,…
