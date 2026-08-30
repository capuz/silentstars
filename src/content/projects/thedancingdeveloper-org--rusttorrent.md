---
repo: "TheDancingDeveloper-org/rustTorrent"
name: "rustTorrent"
description: "A modern BitTorrent client written in Rust — fast, lightweight, self-hosted"
readmeQualityOk: true
url: "https://github.com/TheDancingDeveloper-org/rustTorrent"
homepage: "https://rusttorrent.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
topics: ["bittorrent", "client", "downloader", "rust", "self-hosted", "aria2", "deluge", "qbittorrent", "transmission"]
stars: 11
forks: 0
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-04-09T20:26:06Z"
lastCommitAt: "2026-08-30T00:43:42Z"
lastReleaseAt: "2026-07-31T10:56:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 57
maintainers: ["thedancingdeveloper", "AusAgentSmith"]
openGraphImageUrl: "https://opengraph.githubassets.com/74d7fb90e417bca4402af63a0693facc61873ebe8c1b85fd0ae08ebff2675763/TheDancingDeveloper-org/rustTorrent"
---

# rustTorrent

A modern, self-hostable BitTorrent client written in Rust — a single small binary with a
clean web UI, a full HTTP API, and qBittorrent-compatible endpoints for the tools you
already run.

> **Beta software.** rustTorrent is under active development. Expect bugs, breaking
> changes, and incomplete features. [Report issues](https://github.com/TheDancingDeveloper-org/rustTorrent/issues).

**Website:** [rusttorrent.dev](https://rusttorrent.dev/) ·
**Live demo:** [rusttorrent.dev/demo](https://rusttorrent.dev/demo/) ·
**Discord:** [discord.gg/pu6chSqpnJ](https://discord.gg/pu6chSqpnJ)

## Features

- **Web UI** — responsive React + TypeScript interface with a compact table view, detail
  panes, and dark mode. Works from any browser, desktop or mobile.
- **HTTP API** — everything the UI does is an API call: add torrents, query state, select
  files, stream content. Swagger documentation included.
- **qBittorrent-compatible API** — speaks the qBittorrent WebUI protocol, so Sonarr,
  Radarr, and other *arr applications connect without adapters.
- **Full peer discovery** — DHT, HTTP and UDP trackers, peer exchange, local service
  discovery, and UPnP port forwarding. Magnet…
