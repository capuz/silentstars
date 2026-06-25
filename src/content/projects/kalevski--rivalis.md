---
repo: "kalevski/rivalis"
name: "rivalis"
description: "🔗 NodeJS library for building real-time applications"
url: "https://github.com/kalevski/rivalis"
homepage: "https://rivalis.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["game-server", "library", "multiplayer-game-server", "nodejs-server", "rivalis"]
stars: 24
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-01-16T12:54:35Z"
lastCommitAt: "2026-06-25T01:31:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 43
maintainers: ["kalevski"]
openGraphImageUrl: "https://opengraph.githubassets.com/95157889c42db76efce2a44de79d23039701a2f1a9f75b2700290fb7958e01c7/kalevski/rivalis"
---

<h3 align="center">Simple, secure and fast real-time application development on top of NodeJS</h3>

----

----

Rivalis is a free, open-source framework for building real-time applications and multiplayer game servers on Node.js. It gives you **rooms**, **actors**, and a **typed wire protocol** out of the box, with WebSocket transport, presence, rate limiting, heartbeats, graceful shutdown, and a browser client that handles reconnection.

## 👍 Good for

- **Real-time applications** — chat, presence, notifications, live dashboards, collaborative editing
- **Multiplayer games** — turn-based strategy, arena games, lobby/matchmaking systems
- **Server-authoritative state** — anywhere you need a single source of truth that broadcasts to many clients

## ⭐ What you get

- **Server** ([`@rivalis/core`](./core)) — Node framework: rooms, actors, auth middleware, WebSocket transport, per-actor rate limiting, per-IP connection limiting, configurable frame and topic size caps, graceful shutdown.
- **Client** ([`@rivalis/browser`](./browser)) — Browser WebSocket client: typed event listeners, exponential-backoff reconnect, ticket-refresh hook for short-lived JWTs, structured `client:kicked`…
