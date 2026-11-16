---
repo: "sourpatchdad/patchboard"
name: "patchboard"
description: "Self-hosted homelab dashboard and start page. Finds your Docker apps, shows what needs you, and puts the fix one click away: containers, Sonarr, Radarr, downloads, Home Assistant, wall tablets and e-ink."
readmeQualityOk: true
url: "https://github.com/sourpatchdad/patchboard"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["dashboard", "docker", "home-server", "homelab", "self-hosted", "start-page", "eink", "home-assistant", "jellyfin", "kiosk"]
stars: 37
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-11-04T18:39:52Z"
lastCommitAt: "2026-11-16T04:23:58Z"
lastReleaseAt: "2026-11-12T03:28:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 45
maintainers: ["sourpatchdad"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1446056581/83b3ff55-15e6-4190-81a2-8b2d008a6694"
discussionCount: 0
---

# <img src="https://raw.githubusercontent.com/sourpatchdad/patchboard/HEAD/web/public/icon-192.png" alt="" width="40" align="top"> Patchboard

A self-hosted homelab dashboard and start page that tells you what's broken.
It reads the Docker socket, finds your apps, and puts a stopped container, a full pool or a stuck
download at the top, one click from the fix.

## Try the demo

Fake data, nothing saved:

```sh
docker run --rm -p 3200:3200 -e DEMO=1 ghcr.io/sourpatchdad/patchboard:latest
```

Open `http://your-server:3200` (or <http://localhost:3200> on the same
machine). Ctrl-C stops it. Its only outside requests load posters from
TVmaze, pictures from Wikimedia and app icons from jsDelivr.

## Install

```sh
mkdir patchboard && cd patchboard
base=https://raw.githubusercontent.com/sourpatchdad/patchboard/main
curl -fsSL $base/examples/docker-compose.yml -o docker-compose.yml
docker compose up -d
```

Sign-in is off by default, for a home network. Read [SECURITY.md](https://github.com/sourpatchdad/patchboard/blob/HEAD/SECURITY.md)
before you expose it anywhere: turn on a password in Settings, Connections,
Sign-in and keys, or use `AUTH=forward` behind Authelia, Authentik or…
