---
repo: "gamarr-app/Gamarr"
name: "Gamarr"
description: "Self-hosted PVR for your game library — Radarr for PC and console games. Grabs from Usenet and BitTorrent via Prowlarr, then tracks versions, updates and DLC."
readmeQualityOk: true
url: "https://github.com/gamarr-app/Gamarr"
homepage: "https://gamarr-app.github.io/Gamarr/"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [73, 24]
topics: ["arr", "automation", "bittorrent", "docker", "dotnet", "game-library", "games", "gaming", "homelab", "nintendo-switch"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 23
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-02-02T04:21:12Z"
lastCommitAt: "2026-10-29T05:50:40Z"
lastReleaseAt: "2026-02-08T03:20:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 64
maintainers: ["claude", "dependabot[bot]", "markus101"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bdd52aa59909b5ba0b7b95b1354ce9521a129711c7f70e2f95723b4b77dcf25/gamarr-app/Gamarr"
discussionCount: 0
---

# Gamarr — Radarr for games, an \*arr-style PVR for your game library

Gamarr is Radarr for video games: a self-hosted \*arr-style PVR and game
collection manager for Usenet and BitTorrent users, running alongside the rest
of your arr stack. It monitors RSS feeds and indexers for the PC and console
games you want, hands grabs to your download client, and imports, renames, and
organizes the results.

Because games aren't movies, Gamarr also understands the things only games do: it
recognizes versions, updates, and DLC, and can automatically upgrade your library
when a newer version or a more complete repack shows up.

## Screenshots

| Library | Game details |
| --- | --- |
|  |  |

| Add a game | Game-native qualities |
| --- | --- |
|  |  |

## Getting Started

The easiest way to run Gamarr is Docker:

```yaml
services:
  gamarr:
    image: ghcr.io/gamarr-app/gamarr:latest
    container_name: gamarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
    volumes:
      - ./gamarr-config:/config
      - /path/to/games:/games
      - /path/to/downloads:/downloads
    ports:
      - "6767:6767"
    restart: unless-stopped
```

Open `http://localhost:6767`, then:…
