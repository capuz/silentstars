---
repo: "YofaGh/knightwatch"
name: "knightwatch"
description: "Monitor system performance, live screenshots and process telemetry from your browser, with optional Telegram alerts and webhooks."
readmeQualityOk: true
url: "https://github.com/YofaGh/knightwatch"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["dashboard", "monitoring", "process-monitoring", "rust", "screen-capture", "system-performance", "docker-container", "systemd-service"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-25T21:23:55Z"
lastCommitAt: "2026-10-31T09:53:17Z"
lastReleaseAt: "2026-05-29T12:56:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 57
maintainers: ["YofaGh"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bab24229335520602d163bc1539cde8ceac046e4bc45868dfabeee1770de8ea/YofaGh/knightwatch"
---

# 🖥️ Knightwatch

A lightweight, real-time browser-based dashboard for monitoring system performance, live screenshots, and process activity on a remote or local machine.

---

## Overview

Knightwatch provides a sleek dark-mode web interface that streams system performance, live screen captures, and process telemetry directly in your browser. The backend is a Rust server built on [Tokio](https://tokio.rs/) and [Axum](https://github.com/tokio-rs/axum), keeping the footprint small and performance high — no heavy agents or desktop apps required.

companions `knightwatch-cli` and `knightwatch-tui` clients are also available for connecting to a remote or local knightwatch server through its API from the terminal.

---

## Features

- **REST API** — Axum-powered HTTP API for querying state and sending commands programmatically
- **Server-Sent Events (SSE)** — Real-time event stream available at `/sse` via the Axum API server
- **TCP & WebSocket Sockets** — Optional persistent, bidirectional socket interfaces (length-prefixed JSON) for queries, commands, and live event streaming over a single connection
- **Live Screenshots** — Displays one or more connected screens, refreshed every 2…
