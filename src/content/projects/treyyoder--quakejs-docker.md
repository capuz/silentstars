---
repo: "treyyoder/quakejs-docker"
name: "quakejs-docker"
description: "Dockerized quakejs server"
readmeQualityOk: true
url: "https://github.com/treyyoder/quakejs-docker"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["quakejs", "docker", "docker-game-server", "quake", "quake3", "gaming"]
stars: 241
forks: 77
openIssues: 0
closedIssues: 22
watchers: 6
contributors: 5
recentReleases: 0
createdAt: "2020-04-19T20:05:34Z"
lastCommitAt: "2026-09-06T08:04:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 85
undervaluedScore: 29
maintainers: ["treyyoder"]
openGraphImageUrl: "https://opengraph.githubassets.com/b516a4aff1ab55135140cecb2300b5a26b40ddbe8fe26bcab57cb9130cc4ed05/treyyoder/quakejs-docker"
discussionCount: 2
---

# [QuakeJS-Docker](https://github.com/treyyoder/quakejs-docker)

</div>

Fully local and Dockerized QuakeJS server. This project bundles assets and server binaries so gameplay does not depend on content.quakejs.com. Source: [github.com/treyyoder/quakejs-docker](https://github.com/treyyoder/quakejs-docker).

## Install

You need Docker (Docker Desktop or the engine) and about a gigabyte of disk for the image. Everything runs on one published port: the page, the game's websocket traffic, the assets and the console all go through it, so one port forward or one reverse-proxy host is all a public server needs.

**With Docker Compose**, from the repository root:

```bash
docker compose up -d
```

**With `docker run`**, from the published image:

```bash
docker run -d --name quakejs -p 8080:80 \
  -v quakejs-assets:/var/www/html/assets \
  -v quakejs-state:/var/lib/quakejs \
  treyyoder/quakejs:latest
```

Then open `http://localhost:8080/`. The front page shows the server and a **Join** button; the console is at `/admin/`.

**First start.** No password is baked into the image. Unless you set `ADMIN_PASSWORD`, the console generates one the first time it starts and prints it once to the…
