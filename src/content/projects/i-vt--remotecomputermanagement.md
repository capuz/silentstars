---
repo: "i-vt/RemoteComputerManagement"
name: "RemoteComputerManagement"
description: "RemoteComputerManagement (RCM)"
readmeQualityOk: true
url: "https://github.com/i-vt/RemoteComputerManagement"
language: "Rust"
languages: ["Rust"]
languagePcts: [71]
stars: 7
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-07-16T04:32:01Z"
lastCommitAt: "2026-07-19T06:11:03Z"
lastReleaseAt: "2026-07-07T10:44:04Z"
status: "thriving"
tags: []
healthScore: 78
undervaluedScore: 76
maintainers: ["i-vt"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcc5aac3dbc0501fab1c8a3914a56a3919a6c2543172db0eb1ba5efe8c156f75/i-vt/RemoteComputerManagement"
---

# RCM — Remote Computer Management

A modular command-and-control framework written in Rust, built for authorized red team operations.

## Features

- **Multi-transport** — Raw TLS, TCP, named pipes, HTTP(S) with proxy support
- **Malleable profiles** — Traffic shaping to mimic legitimate services (Slack, Google Drive, CDN); 5 pre-built traffic profiles
- **SNI/ALPN overrides** — Control TLS ClientHello fields independently of the C2 host; domain-fronting ready
- **Fallback resilience** — 4 strategies (priority, round-robin, random, failover) with per-endpoint malleable profiles; 7 pre-built templates
- **Domain generation** — Seed-based DGA injects algorithmically-derived fallback domains per time window
- **Hibernation mode** — Dweller model: agent connects, claims a task batch, executes, disconnects, sleeps; no persistent socket
- **Chunked file transfer** — SHA-256-verified chunked upload and download; handles files over 1 GB with constant RAM usage
- **Loot browser** — Panel-side file browser with streaming ZIP download of entire folders (no memory buffering)
- **Extensions** — Agent-side Rhai scripts pushed via `ext:load`; 44 built-in extensions including `auto_persist`,…
