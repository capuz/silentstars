---
repo: "deadlock-api/deadlock-api"
name: "deadlock-api"
description: "A comprehensive set of endpoints to access Deadlock game data, match history, player statistics, hero analytics, and more. Whether you're a developer integrating game data or a player analyzing performance, the Deadlock API has you covered."
readmeQualityOk: true
url: "https://github.com/deadlock-api/deadlock-api"
homepage: "http://deadlock-api.com/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [55, 40]
stars: 37
forks: 8
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-03-28T21:16:08Z"
lastCommitAt: "2026-10-08T10:51:42Z"
lastReleaseAt: "2026-06-03T19:13:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 46
maintainers: ["raimannma", "github-actions[bot]", "victorblino"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2609f9d0ed15ecd34b6fa5853c9d9064a877aef1d0c9fe0d555435479dd380b/deadlock-api/deadlock-api"
fundingLinks: ["GITHUB:https://github.com/raimannma", "PATREON:https://patreon.com/user?u=68961896"]
---

# Deadlock API

Monorepo for the [Deadlock API](https://deadlock-api.com) project.

## Structure

- **[`api/`](https://github.com/deadlock-api/deadlock-api/blob/HEAD/api/)** - Rust API backend (Axum) serving game data, analytics, leaderboards, and more
- **[`website/`](https://github.com/deadlock-api/deadlock-api/blob/HEAD/website/)** - React frontend (Vite + React Router) for the Deadlock API website
- **[`tools/`](https://github.com/deadlock-api/deadlock-api/blob/HEAD/tools/)** - Rust microservices for data ingestion, scraping, and pipeline processing
- **[`live-events/`](https://github.com/deadlock-api/deadlock-api/blob/HEAD/live-events/)** - Rust service for live match event streaming via SSE
- **[`valveprotos/`](https://github.com/deadlock-api/deadlock-api/blob/HEAD/valveprotos/)** - Rust bindings for the Steam and Deadlock protobufs (formerly `valveprotos-rs`)
- **[`haste/`](https://github.com/deadlock-api/deadlock-api/blob/HEAD/haste/)** - Source 2 demo and broadcast parser (formerly `deadlock-api/haste`), including the
  `dungers` bit buffer, varint and char cursor crates it uses (formerly `deadlock-api/dungers`)

All Rust crates are members of one cargo workspace…
