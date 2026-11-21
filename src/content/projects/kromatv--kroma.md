---
repo: "kromatv/kroma"
name: "kroma"
description: "Self-hosted, direct-play, HEVC-first media streaming — Rust server + web, Samsung (Tizen) & LG (webOS) TV clients. A personal Netflix/Plex for your NAS."
readmeQualityOk: true
url: "https://github.com/kromatv/kroma"
homepage: "https://kroma.tv"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [59, 37]
topics: ["axum", "bun", "direct-play", "h265", "hevc", "jellyfin", "media-server", "monorepo", "nas", "plex"]
stars: 82
forks: 9
openIssues: 25
closedIssues: 130
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-06-28T00:21:37Z"
lastCommitAt: "2026-11-21T13:33:44Z"
lastReleaseAt: "2026-07-16T11:08:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 35
maintainers: ["maxscharwath", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/51c7d3ad0f34a4a98c074e8df7a1de54b947474bcbc157adb7fbc86315b2d4d6/kromatv/kroma"
---

A self-hosted media server and the apps that play from it.<br/>
One Rust binary scans your files and streams them to the web, your phone, your TV and your desktop.<br/>
Everything past playback and catalog is a module you install from inside the app.

## Features

## Get started

KROMA is a server that holds your films and series, and apps that play them.
On a Linux computer or a NAS with Docker, one command starts the server:

```bash
docker run -d --name kroma --restart unless-stopped \
  -p 4040:4040 \
  -v kroma-data:/data \
  -v /srv/media:/media \
  ghcr.io/kromatv/kroma:latest
```

Replace `/srv/media` with the folder that holds your media. Then open
`http://SERVER_IP:4040` from a browser on the same network, create your
account, and add your folders under `/media`.

The [setup guides](https://github.com/kromatv/kroma/blob/HEAD/docs/setup/README.md) take you through the rest, step by
step:
