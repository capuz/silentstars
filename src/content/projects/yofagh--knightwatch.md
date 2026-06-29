---
repo: "YofaGh/knightwatch"
name: "knightwatch"
description: "Monitor system performance, live screenshots and process telemetry from your browser, with optional Telegram alerts and webhooks."
url: "https://github.com/YofaGh/knightwatch"
language: "Rust"
languages: ["Rust", "Svelte"]
languagePcts: [70, 28]
topics: ["dashboard", "monitoring", "process-monitoring", "rust", "screen-capture", "system-performance", "docker-container", "systemd-service"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-02-25T21:23:55Z"
lastCommitAt: "2026-06-29T07:23:01Z"
lastReleaseAt: "2026-05-29T12:56:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 57
maintainers: ["YofaGh"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0d6080e733992eeb7a76da69813b318da6d366981994b4ba50651ec579d439f/YofaGh/knightwatch"
---

# 🖥️ Knightwatch

A lightweight, real-time browser-based dashboard for monitoring system performance, live screenshots, and process activity on a remote or local machine.

---

## Overview

Knightwatch provides a sleek dark-mode web interface that streams system performance, live screen captures, and process telemetry directly in your browser. The backend is a Rust server built on [Tokio](https://tokio.rs/) and [Axum](https://github.com/tokio-rs/axum), keeping the footprint small and performance high — no heavy agents or desktop apps required.

---

## Features

- **REST API** — Axum-powered HTTP API for querying state and sending commands programmatically
- **Server-Sent Events (SSE)** — Real-time event stream available at `/sse` via the Axum API server
- **Live Screenshots** — Displays one or more connected screens, refreshed every 2 seconds
- **Screen Commands** — control polling via API or Telegram (requires `--allow-screen-commands`)
- **Process Monitor** — Tracks a root process and its children with real-time CPU, memory, and state indicators
- **Process Commands** — Kill, track, untrack processes and control polling via API or Telegram (requires `--allow-process-commands`)…
