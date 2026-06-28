---
repo: "Silo-Server/silo-server"
name: "silo-server"
description: "Self-hosted media streaming server with a Go backend, React web UI, Docker deployment, transcoding, and Jellyfin-compatible APIs."
url: "https://github.com/Silo-Server/silo-server"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [68, 30]
topics: ["silo"]
stars: 35
forks: 7
openIssues: 29
closedIssues: 26
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2026-05-23T00:26:38Z"
lastCommitAt: "2026-06-28T01:44:28Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 35
maintainers: ["Quick104", "d3v1l1989", "CoffeeKnyte"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4b4ad722f93ebc9eaf5e7b2746fee6dd720f16c4c4b38156b6b71f350a6cc69/Silo-Server/silo-server"
---

# Silo

A self-hosted media streaming server with a React frontend and Go backend. Supports direct play, remuxing, and hardware-accelerated transcoding. Includes optional Jellyfin/Emby-compatible app support for clients such as VidHub and Findroid.

Join the community on [Discord](https://discord.gg/4RxuUQAEnW).

## Deploy with Docker (recommended)

The easiest way to run Silo is with Docker Compose. The default stack assumes you do not already have PostgreSQL and Redis available, so it bundles PostgreSQL, Redis, FFmpeg, and the application for a one-command start.

1. **Create a `.env` file**

   ```sh
   cp .env.example .env
   ```

2. **Set your media path**

   Edit `.env` and set:

   ```dotenv
   MEDIA_ROOT=/path/to/your/media
   ```

   `MEDIA_ROOT` is the one value most users need to change. You can also override `SILO_DATA_ROOT` if you do not want bind mounts under `/opt/silo`, and change ports if the defaults conflict with something else on the host.

3. **Start the default integrated stack**

   ```sh
   docker compose up -d
   ```

   This starts PostgreSQL, Redis, and the integrated Silo server. The app is available at `http://localhost:8090`. Jellyfin-compatible app…
