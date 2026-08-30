---
repo: "neurekadev/warrden"
name: "warrden"
description: "wArrden makes it easy to maintain your media libraries by finding missing or upgradeable content, as well as detecting and clearing stuck imports from supported arr queues."
readmeQualityOk: true
url: "https://github.com/neurekadev/warrden"
homepage: "https://github.com/neurekadev/warrden"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["radarr", "sonarr", "lidarr", "whisparr"]
stars: 27
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-05-17T01:25:55Z"
lastCommitAt: "2026-08-30T00:44:17Z"
lastReleaseAt: "2026-08-26T03:18:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 44
maintainers: ["neurekadev"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8cba00824e51b4cef76e3302388041da18f02b9fc675f2a13ce858e6f7023f4/neurekadev/warrden"
---

# wArrden

wArrden makes it easy to maintain your media libraries by finding missing or upgradeable content, as well as detecting and clearing stuck imports from supported arr queues.

</div>

> [!CAUTION]
> Images at `registry.neureka.dev/warrden/warrden` are no longer updated. Use `ghcr.io/neurekadev/warrden`.

> [!TIP]
> The `config.example.yaml` file can look overwhelming, but you don't need to understand every option to get started. Just add your arr URL and API key, then enable the instance — the defaults handle the rest.

## Quickstart

Download [`compose.yaml`](https://github.com/neurekadev/warrden/blob/HEAD/compose.yaml) and [`.env.example`](https://github.com/neurekadev/warrden/blob/HEAD/.env.example).

## Features

wArrden supports multiple instances of each arr type, so you can manage separate libraries (movies, series, anime, music) independently with their own schedules and cooldowns.

| Supported |       API       | Queue Cleanup | Missing Search | Upgrade Search |
| --------- | :-------------: | :-----------: | :------------: | :------------: |
| Radarr    |      `v3`       |      ✔️       |       ✔️       |       ✔️       |
| Sonarr    |      `v3`       |      ✔️…
