---
repo: "ppxb/miyabi"
name: "miyabi"
description: "An all-in-one Jav & Emby management platform for 115 Cloud Storage"
originalDescription: "配合 115 网盘的一站式 Jav & Emby 管理平台"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ppxb/miyabi"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [79, 20]
topics: ["115", "golang", "javdb", "react", "tailwindcss", "typescript", "vite", "javbus", "magnet-link", "emby"]
stars: 150
forks: 18
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-09-03T08:09:10Z"
lastCommitAt: "2026-10-02T10:00:12Z"
lastReleaseAt: "2026-10-02T06:45:13Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 85
undervaluedScore: 28
maintainers: ["ppxb"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fd02db6c6136f0efec9cfca3841f8c28e3a863dfee76b922252f96f9a7f9df7/ppxb/miyabi"
---

# Miyabi

An all-in-one Jav & Emby management platform for 115 Cloud Storage.

Miyabi supports direct integration with 115 for scraping and subscription, and can also serve as an underlying service to support Emby.

## Project Preview

## Docker Deployment

> [!TIP]
> You can use AI to help complete project deployment. If you access it over the public network, please pay attention to network security.

Public image:

```text
ghcr.io/ppxb/miyabi
```

### 1. Run with Docker CLI

Please replace `/path/to/data` with your host's data persistence directory, and replace `change-this-password` with a custom password:

```bash
docker run -d \
  --name miyabi \
  --restart unless-stopped \
  --security-opt no-new-privileges:true \
  -p 8080:8080 \
  -v /path/to/data:/app/data \
  -e MIYABI_ACCESS_PASSWORD='change-this-password' \
  -e MIYABI_PUBLIC_URL='http://<host IP>:8080' \
  ghcr.io/ppxb/miyabi:latest
```

> [!NOTE]
> If used with Emby, the generated STRM playback direct links and metadata are output by default in `/app/data/emby` (corresponding to the host directory `/path/to/data/emby`). You can mount this directory to the Emby container as a media library.

### 2. Use Docker Compose…
