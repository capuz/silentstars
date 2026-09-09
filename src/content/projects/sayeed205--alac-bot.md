---
repo: "sayeed205/alac-bot"
name: "alac-bot"
description: "Extract alac"
readmeQualityOk: true
url: "https://github.com/sayeed205/alac-bot"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 12
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-10-22T14:16:52Z"
lastCommitAt: "2026-09-09T08:18:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 53
maintainers: ["sayeed205"]
openGraphImageUrl: "https://opengraph.githubassets.com/3df4fa9b989e486d6f1cf12e1b4c07baa32724886f198f77b097df5a38818962/sayeed205/alac-bot"
---

# ALAC Bot

A high-performance Telegram bot for downloading Apple Music lossless (ALAC) audio tracks, albums, and playlists with synchronized lyrics, embedded high-resolution artwork, and smart channel caching.

Built in Rust: [ferogram](https://github.com/ankit-chaubey/ferogram) (Telegram MTProto), tokio, and Diesel/PostgreSQL.

> **Migration note**: this codebase is the Rust port of the original Bun/TypeScript bot. The TypeScript implementation is preserved on the `typescript` branch; the migration history and per-milestone parity records live in [docs/](https://github.com/sayeed205/alac-bot/blob/HEAD/docs/).

---

## Features

- **True Lossless Audio**: Streams native Apple Lossless Audio Codec (ALAC 16-bit / 24-bit up to 192kHz) directly from decryption mirrors.
- **Automatic Fallback Engine**: If the primary mirror encounters downtime or timeouts, the bot automatically fails over to a secondary wrapper or custom mirror without interrupting downloads.
- **Instant Dump Channel Caching**: Every ripped track is indexed with full metadata and stored in a private Telegram dump channel. Cache hits deliver in under 200ms without consuming mirror bandwidth.
- **Full Album & Playlist…
