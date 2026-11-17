---
repo: "xianer235/115-media-hub"
name: "115-media-hub"
description: "115 Media Hub is an all-in-one automation console for 115 cloud drive scenarios. It integrates TG channel resource discovery, magnet and cloud drive link parsing and import, movie and TV subscription tracking, folder monitoring and refresh, and batch task management. It helps you chain \"find resources, store resources, generate strm media library\" into a workflow that runs continuously."
originalDescription: " 115 Media Hub 是一个面向 115 网盘场景的一体化自动化控制台，集成 TG 频道资源发现、磁力/网盘链接解析导入、影视订阅追更、文件夹监控刷新与批量任务管理，帮助你把“找资源、存资源、生成strm媒体库”串成可持续运行的流程。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xianer235/115-media-hub"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [67, 22]
topics: ["115", "aliyundrive", "docker", "emby", "fastapi", "jellyfin", "media-library", "netdisk", "plex", "quark"]
stars: 122
forks: 19
openIssues: 3
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-04-05T14:57:06Z"
lastCommitAt: "2026-11-17T14:39:39Z"
lastReleaseAt: "2026-11-15T15:40:29Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 92
undervaluedScore: 37
maintainers: ["xianer235", "ptbsare"]
openGraphImageUrl: "https://opengraph.githubassets.com/86903dc25a939656ec3f06744f55437a1e2d752eb97a1c242a0257b95fdcaf31/xianer235/115-media-hub"
---

# 115 Media Hub

`115 Media Hub` is a media automation management panel based on FastAPI. It brings cloud drive transfers, 115 cloud drive `.strm` generation, movie and TV subscription tracking, file management, and cross-drive copying into one backend, so that Jellyfin / Emby / Plex can play the films stored on cloud drives directly.

It suits self-hosted setups of the form "movies stored on 115, series tracked through subscriptions, media libraries handled by Jellyfin/Emby/Plex". For anyone who doesn't want a cloud drive client and doesn't want to move files by hand, it is the least effort.

> **This project is free and open source under the MIT License. All features can be used directly. There is no paid version, and no license needs to be purchased.** If you see terms such as "Pro edition", "license key", or "activation" elsewhere, they are not offered by this project.

## Feature Overview

| Module | Purpose |
| --- | --- |
| Resource Center | Sync TG public channels, connect PanSou disk search, manually paste resources. Supports importing magnet / ED2K / direct links and share links from each cloud drive |
| Movie & TV Subscription Tasks | Automatically find resources by…
