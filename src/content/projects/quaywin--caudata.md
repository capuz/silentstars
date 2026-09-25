---
repo: "quaywin/caudata"
name: "caudata"
description: "Collaborative zero-config multi-server log streamer built with Elixir/OTP, Ratatui, and Phoenix LiveView"
readmeQualityOk: true
url: "https://github.com/quaywin/caudata"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [99]
topics: ["docker", "logging", "ssh", "tui"]
stars: 29
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-03T04:44:05Z"
lastCommitAt: "2026-09-25T09:01:29Z"
lastReleaseAt: "2026-06-08T04:04:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 68
undervaluedScore: 29
maintainers: ["quaywin"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c36de401416e27a47bc9b4dda926bd9a7ea5e77d832ecdeac35b9eab2acca61/quaywin/caudata"
---

# Caudata 🦎

Caudata is a collaborative, zero-config multi-server log streamer, real-time metrics dashboard, and high-performance TUI engine. It aggregates and streams real-time logs from multiple remote Linux servers securely over SSH config profiles, as well as the **local machine**, without installing any agents on remote hosts.

⭐ If you like this project, star it on GitHub — it helps a lot!

[Features](#features) • [Installation](#installation) • [Quick Start](#quick-start) • [CLI Options](#cli-options) • [Keybindings & Mouse Controls](#keybindings--mouse-controls) • [Configuration](#configuration) • [Alternatives](#alternatives)

---

Tired of SSH-ing into 5 different servers just to tail Docker logs? Caudata brings them all (and your local setup) into a single, responsive terminal dashboard.

- **Zero-Agent SSH**: Connects seamlessly via `~/.ssh/config` or manual settings. No remote agents or daemons required.
- **Local Machine Monitoring**: Monitor local containers and system services via direct connection.
- **Container Auto-Discovery**: Auto-discovers Docker containers and reconnects log streams on container rebuilds/restarts.
- **Docker Management**: Control containers…
