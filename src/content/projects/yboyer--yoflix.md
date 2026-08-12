---
repo: "yboyer/yoflix"
name: "yoflix"
description: "Homemade Netflix - Automated torrent management with Radarr / Sonarr and AllDebrid"
readmeQualityOk: true
url: "https://github.com/yboyer/yoflix"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["alldebrid", "flaresolverr", "radarr", "sonarr", "torrent"]
stars: 9
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-06-09T21:21:23Z"
lastCommitAt: "2026-08-12T05:14:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 59
maintainers: ["renovate[bot]", "yboyer"]
openGraphImageUrl: "https://opengraph.githubassets.com/aad865cab8dc03fcb8de9a551e5987d7ca37f46b1dc52a641d326b67b568e74a/yboyer/yoflix"
---

# Yoflix

Self-hosted media automation stack built around Jackett, Radarr, Sonarr, FlareSolverr, and two small Node services:

- `bootstrap`: one-shot provisioning for Radarr and Sonarr
- `uploader`: webhook receiver + torrent watcher for the local blackhole flow

## Services

- [Jackett](http://localhost:8031)
- [Radarr](http://localhost:8032)
- [Sonarr](http://localhost:8033)
- `bootstrap`: one-shot job, run manually
- `uploader`: Node service in `services/uploader/index.ts`, intended to listen on port `3000`

## Repository layout

```text
.
├── data/
│   ├── completed/   # blackhole watch folder
│   ├── files/       # Radarr/Sonarr root folder
│   └── torrents/    # blackhole torrent output
├── services/
│   ├── bootstrap/   # Radarr/Sonarr provisioning + config sync
│   └── uploader/    # webhook receiver + torrent watcher
└── docker-compose.yml
```

## Requirements

- Docker + Docker Compose
- an [AllDebrid API key](https://alldebrid.fr/apikeys/)
- at least one configured Jackett indexer

Optional:

- `JACKETT_API_KEY` if you want a fixed Jackett API key on first boot

The current setup expects only the API keys in `.env`. Paths, URLs, webhook target, and category defaults…
