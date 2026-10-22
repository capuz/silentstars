---
repo: "jordanade/Hecklarr"
name: "Hecklarr"
description: "Pick comedians. Automatically add specials to Radarr."
readmeQualityOk: true
url: "https://github.com/jordanade/Hecklarr"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["comedy", "radarr", "jellyfin", "plex", "plex-media-server", "stand-up", "stand-up-comedy"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-10-14T07:54:18Z"
lastCommitAt: "2026-10-22T08:51:53Z"
lastReleaseAt: "2026-10-17T07:13:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 47
maintainers: ["jordanade"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1418561076/43173ccd-efe0-4884-9f81-64d5e4885c45"
---

# <img src="icon.png" alt="" width="56" align="absmiddle">&nbsp;&nbsp;Hecklarr

Track stand-up comedians and choose which specials to monitor in Radarr. Hecklarr uses TMDB to find titles; Radarr owns monitoring and handles searching and downloading.

## Install

Requirements: Docker Compose, Radarr, working indexers and a download client, and a TMDB API key or Read Access Token.

Hecklarr is a prebuilt container on [GitHub Container Registry](https://github.com/jordanade/Hecklarr/pkgs/container/hecklarr). Download the [Compose file](https://github.com/jordanade/Hecklarr/blob/HEAD/compose.yaml) from this repository. It uses `ghcr.io/jordanade/hecklarr:latest` and pulls the image automatically.

On a Linux host, create the configuration directory, then start Hecklarr:

```sh
mkdir -p config
sudo chown 1000:1000 config
sudo chmod 700 config
docker compose up -d
```

Open `http://<server-IP>:6162` from another computer on your network, or [http://localhost:6162](http://localhost:6162) on the Docker host. For localhost-only access, change the port mapping in `compose.yaml` to `127.0.0.1:6162:6162`. Use an HTTPS reverse proxy for access outside your private network, and do not expose…
