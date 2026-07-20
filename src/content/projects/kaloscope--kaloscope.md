---
repo: "kaloscope/kaloscope"
name: "kaloscope"
description: "A workflow-powered local media manager"
originalDescription: "A workflow-powered local media manager"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kaloscope/kaloscope"
homepage: "https://kaloscope.org"
language: "Python"
languages: ["Python", "Svelte"]
languagePcts: [50, 35]
topics: ["anime", "danmaku", "media", "python", "svelte", "workflow", "bt", "nas", "torrent", "manga"]
stars: 419
forks: 23
openIssues: 2
closedIssues: 11
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2024-11-20T09:11:22Z"
lastCommitAt: "2026-07-20T06:29:36Z"
lastReleaseAt: "2026-05-07T16:17:47Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 41
maintainers: ["C5H12O5"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd36969f4614cbd2dc1f71f60e5c15a599cb52595fbf031199ac599b82d54852/kaloscope/kaloscope"
---

Kaloscope is a local media library management tool based on a visual workflow engine. Its capabilities for resource searching and metadata scraping are driven by editable workflows, allowing flexible integration with any resource site and metadata source.

## Quick Start

An example of pulling and running a single Kaloscope container directly via Docker command line:

```bash
docker run -d \
  --name kaloscope \
  --add-host=host.docker.internal:host-gateway \
  -e PUID=1026 \
  -e PGID=100 \
  -e UMASK=022 \
  -e TZ=Asia/Shanghai \
  -e AUTO_TLS=true \
  -e TLS_HOSTNAME=192.168.31.2 \
  -e ENABLE_ARIA2=true \
  -v /volume1/kaloscope/workspace:/workspace \
  -v…
