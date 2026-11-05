---
repo: "voc0der/ytdl-material"
name: "ytdl-material"
description: "Download, manage, and play YouTube media"
readmeQualityOk: true
url: "https://github.com/voc0der/ytdl-material"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [56, 32]
topics: ["library", "material-design", "youtube", "ytdlp"]
stars: 52
forks: 7
openIssues: 1
closedIssues: 79
watchers: 0
contributors: 83
recentReleases: 0
createdAt: "2026-03-07T12:35:07Z"
lastCommitAt: "2026-11-05T00:22:19Z"
lastReleaseAt: "2026-07-31T15:04:59Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 42
maintainers: ["voc0der", "voc0der-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/58803dc4bcaecdc43c70b6fccf98013382d62b67ca112d2d53de9dde19f66262/voc0der/ytdl-material"
---

ytdl-material

Download and watch video and audio from a web app you host yourself. Paste a link to download something, or subscribe to channels and playlists and new uploads show up automatically. Everything goes into a library you can watch from any browser, solo or together. It runs on [yt-dlp](https://github.com/yt-dlp/yt-dlp), which it installs and updates for you. See the [full feature list](https://voc0der.github.io/ytdl-material/features/).

**[Documentation](https://voc0der.github.io/ytdl-material/)** · [Quick start](https://voc0der.github.io/ytdl-material/getting-started/quick-start/) · [Troubleshooting](https://voc0der.github.io/ytdl-material/reference/troubleshooting/)

## Setup

### Docker

1. Download [docker-compose.yml](https://github.com/voc0der/ytdl-material/blob/main/docker-compose.yml):

```bash
curl -L https://raw.githubusercontent.com/voc0der/ytdl-material/refs/heads/main/docker-compose.yml -o docker-compose.yml
```

2. Start it:

```bash
docker compose pull   # if needed
docker compose up -d
```

Docker environment variables: [reference](https://voc0der.github.io/ytdl-material/reference/environment/). See the [NAS and ARM host…
