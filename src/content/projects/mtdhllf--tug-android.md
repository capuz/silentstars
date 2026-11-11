---
repo: "mtdhllf/Tug-Android"
name: "Tug-Android"
description: "Android download manager + reusable Kotlin download core library. Multi-connection HTTP/HTTPS downloads with resume, BitTorrent/magnet P2P, torrent files, background downloads, and a Compose UI. Download engine modules are published on Maven Central."
originalDescription: "Android download manager + reusable Kotlin download core library. Multi-connection HTTP/HTTPS downloads with resume, BitTorrent/magnet P2P, torrent files, background downloads, and a Compose UI. Download engine modules are published on Maven Central."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mtdhllf/Tug-Android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-10-23T04:24:18Z"
lastCommitAt: "2026-11-11T11:20:04Z"
lastReleaseAt: "2026-10-23T04:40:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 20
maintainers: ["mtdhllf"]
openGraphImageUrl: "https://opengraph.githubassets.com/b77176dc966284ad5808e63f90f277a742398a8a8f46ceba576c18c2874d7ca3/mtdhllf/Tug-Android"
---

Tug-Android is the Android version of [Tug](https://github.com/mtdhllf/Tug-Desktop). The desktop version (Rust) focuses on BitTorrent and Windows integration. The Android version centers on **HTTP/HTTPS multi-connection downloads, resumable downloads, and background downloads**, and also splits the download core into lightweight Kotlin libraries that can be reused externally.

### Project Results

- Completed HTTP/HTTPS multi-connection downloads, resumable downloads, background downloads, and publishing to the public directory.
- Completed BitTorrent/magnet downloads (libtorrent4j), with Files/Peers/Trackers detail views.
- Split the download core into 5 reusable libraries (`tug-engine-core`, `tug-http`, `tug-http-okhttp`, `tug-store-sqlite`, `tug-engine-torrent`), including two HTTP implementations: JDK and OkHttp.
- Provides two minimal integration demos, `sample-http` and `sample-torrent`, covering initialization, settings, list status, and pause/resume/delete. The HTTP demo integrates both the JDK and OkHttp implementations.

---

## Screenshots

| Home | Task List | Settings | New Download |
|---|---|---|---|
|  |  |  |  |

---

## Features

### Downloads
- HTTP/HTTPS…
