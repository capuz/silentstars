---
repo: "NickTacke/brawltome"
name: "brawltome"
description: "Brawlhalla player tracking: stats, rankings, clans, rating history and live opponent insights"
readmeQualityOk: true
url: "https://github.com/NickTacke/brawltome"
homepage: "https://brawltome.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["2d-platformer", "brawlhalla", "statistics", "bun", "discord-bot", "hono", "monorepo", "nextjs", "postgresql", "tauri"]
stars: 11
forks: 1
openIssues: 11
closedIssues: 139
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-05T21:49:10Z"
lastCommitAt: "2026-11-09T03:30:28Z"
lastReleaseAt: "2026-05-06T14:34:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 69
maintainers: ["NickTacke"]
openGraphImageUrl: "https://opengraph.githubassets.com/02d22b228548cae9b335a4d7c21cfcb84c2bcca51ba096a160d297e6199f6ada/NickTacke/brawltome"
---

Brawlhalla player tracking for stats, rankings, clans, rating history, and live opponent insights.

## Features

- **Player profiles:** ranked stats, legends, weapons, and rating history
- **Leaderboards:** 1v1, 2v2, Solo 2v2, and 3v3 with region filters and pagination
- **Queue:** recent ranked activity inferred from leaderboard scan deltas
- **Clans and discovery:** clan pages and searchable player aliases and former names
- **Discord bot:** slash commands for player, clan, and service information
- **Desktop overlay:** live Windows opponent detection and player insights
- **Durable refresh operations:** PostgreSQL-backed refresh, ranking, discovery, and projection work
- **Replay analysis preview:** backend replay processing coordinated through the replay bridge

## Architecture

```mermaid
flowchart LR
  Web[Web / Next.js] -->|tRPC + HTTP| API[Hono + tRPC API]
  Desktop[Windows desktop overlay] -->|HTTP| API
  Discord[Discord bot] -->|tRPC| API
  Bridge[Replay bridge] <-->|claims and results| API
  API <--> PG[(PostgreSQL)]
  Worker[Operations worker] <--> PG
  PG -. LISTEN / NOTIFY .-> Worker
  Worker --> BH[Brawlhalla API]
  Bridge <--> Processor[Replay processor]
```

-…
