---
repo: "webtor-io/torrent-web-seeder"
name: "torrent-web-seeder"
description: "Wrapper around BitTorrent-client"
readmeQualityOk: true
url: "https://github.com/webtor-io/torrent-web-seeder"
homepage: "https://webtor.io"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["torrent", "torrent-stream", "streaming"]
stars: 72
forks: 12
openIssues: 3
closedIssues: 0
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2019-11-28T20:44:40Z"
lastCommitAt: "2026-09-25T08:47:29Z"
lastReleaseAt: "2025-03-21T16:48:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 66
undervaluedScore: 37
maintainers: ["vintikzzz"]
openGraphImageUrl: "https://opengraph.githubassets.com/27c41c96398f4a074c25ca75f29c0fbc1a9ac6b24c745689e2e86fd9c898a8c7/webtor-io/torrent-web-seeder"
fundingLinks: ["PATREON:https://patreon.com/pavel_tatarskiy"]
---

# torrent-web-seeder

BitTorrent client with HTTP interface for streaming torrent content. Part of the [Webtor](https://github.com/webtor-io) platform.

Built on [anacrolix/torrent](https://github.com/anacrolix/torrent) (custom [fork](https://github.com/webtor-io/torrent)) with mmap-based storage, LRU piece eviction, and Prometheus instrumentation.

## Features

- **HTTP file streaming** — serve any file from a torrent over HTTP with range request support
- **gRPC status service** — real-time download progress, piece states, peer counts via `Stat`/`StatStream`/`Files` RPCs
- **Remote torrent store** — fetch `.torrent` metadata from a gRPC [torrent-store](https://github.com/webtor-io/torrent-store) service
- **Vault integration** — redirect to pre-cached files on S3 when available
- **Memory-mapped storage** — mmap-backed piece storage with per-torrent LRU cache eviction; files open on first touch with a bounded number kept open per torrent (`MAX_OPEN_FILES_PER_TORRENT`, default 2048), files under `MMAP_MIN_FILE_SIZE` (64 KB) are read with pread instead of a mapping
- **Diagnostics CLI** — `diagnose` command for troubleshooting torrent download issues

## Architecture

```…
