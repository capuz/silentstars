---
repo: "roncanfil/spotify-playlists-to-MP3"
name: "spotify-playlists-to-MP3"
description: "A Python script that downloads songs from YouTube and converts them to MP3/FLAC files with proper metadata, using Spotify playlist data exported as CSV files."
readmeQualityOk: true
url: "https://github.com/roncanfil/spotify-playlists-to-MP3"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [70, 25]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-05T09:03:07Z"
lastCommitAt: "2026-09-01T08:49:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 32
maintainers: ["roncanfil"]
openGraphImageUrl: "https://opengraph.githubassets.com/b84a8c0f514859fc40b23ef371e64c45e131d468f59722bbba87f2b7b99f3988/roncanfil/spotify-playlists-to-MP3"
---

# 🎵 Spotify playlists → MP3

Takes a Spotify playlist and produces a folder of tagged MP3s, sourcing the
audio from YouTube.

## 📂 Layout

| Folder | What it is |
|---|---|
| [`web-ui/`](https://github.com/roncanfil/spotify-playlists-to-MP3/blob/HEAD/web-ui) | **The app.** A Dockerised web UI: connect Spotify, browse playlists, queue downloads. Start here. |
| [`deploy/`](https://github.com/roncanfil/spotify-playlists-to-MP3/blob/HEAD/deploy) | **Deployment guide.** CasaOS, Proxmox, updating, and how the image is published. The compose file itself lives in `web-ui/`. |
| [`cli/`](https://github.com/roncanfil/spotify-playlists-to-MP3/blob/HEAD/cli) | **Historical.** The original command-line script and a record of why the project moved to a web UI. Not maintained. |

## 🚀 Install

The image is published publicly on GHCR — nothing to build, no login to pull:

```
ghcr.io/roncanfil/spotify-playlists-to-mp3:latest
```

Supports `linux/amd64` and `linux/arm64`.

### CasaOS / ZimaOS / Portainer / Dockge

Paste [`web-ui/docker-compose.yml`](https://github.com/roncanfil/spotify-playlists-to-MP3/blob/HEAD/web-ui/docker-compose.yml)
into the UI's custom-install / stack editor. It needs…
