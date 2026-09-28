---
repo: "ppxb/miyabi"
name: "miyabi"
description: "All-in-one Jav & Emby management platform for 115 Cloud Storage"
originalDescription: "配合 115 网盘的一站式 Jav & Emby 管理平台"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ppxb/miyabi"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [76, 20]
topics: ["115", "golang", "javdb", "react", "tailwindcss", "typescript", "video", "vite", "javbus", "magnet-link"]
stars: 143
forks: 16
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-09-03T08:09:10Z"
lastCommitAt: "2026-09-28T10:05:56Z"
lastReleaseAt: "2026-09-24T08:45:30Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 31
maintainers: ["ppxb"]
openGraphImageUrl: "https://opengraph.githubassets.com/f256db6369c19160c3ef9c59a58acd1524f3c365cc5a57bfcff38519ff669b3f/ppxb/miyabi"
---

# Miyabi

All-in-one Jav & Emby management platform for 115 Cloud Storage.

Miyabi supports direct integration with 115 for scraping and subscription, and can also serve as a backend service to support Emby.

## Project Preview

## Docker Deployment

> [!TIP]
> You can use AI to assist with project deployment. If accessing from the public internet, please pay attention to network security.

Public image:

```text
ghcr.io/ppxb/miyabi
```

### 1. Running with Docker CLI

Please replace `/path/to/data` with the data persistence directory on your host, and replace `change-this-password` with your custom password:

```bash
docker run -d \
  --name miyabi \
  --restart unless-stopped \
  --security-opt no-new-privileges:true \
  -p 8080:8080 \
  -v /path/to/data:/app/data \
  -e MIYABI_ACCESS_PASSWORD='change-this-password' \
  -e MIYABI_PUBLIC_URL='http://<Host IP>:8080' \
  ghcr.io/ppxb/miyabi:latest
```

> [!NOTE]
> If used with Emby, the generated STRM playback links and metadata are output by default in `/app/data/emby` (corresponding to the host directory `/path/to/data/emby`). You can mount this directory to the Emby container as a media library.

### 2. Using Docker Compose…
