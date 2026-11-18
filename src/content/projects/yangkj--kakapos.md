---
repo: "yangKJ/Kakapos"
name: "Kakapos"
description: "🌀 High-performance media orchestration engine for Apple platforms."
readmeQualityOk: true
url: "https://github.com/yangKJ/Kakapos"
language: "Shell"
languages: ["Shell", "Swift"]
languagePcts: [56, 43]
topics: ["exporter", "filter", "video", "either", "metal", "camera", "timeline", "player"]
stars: 42
forks: 7
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-12-23T01:16:04Z"
lastCommitAt: "2026-11-17T19:42:24Z"
lastReleaseAt: "2026-03-27T09:00:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 49
maintainers: ["yangKJ"]
openGraphImageUrl: "https://opengraph.githubassets.com/97d74871d4f8e2df0ba9e0ea21940dfd4c29e3e4b957431c91e551264d24d9dc/yangKJ/Kakapos"
---

# Kakapos

---

## 📖 Overview

**Kakapos** is a media orchestration engine for Apple platforms. It organizes local assets, player frames, camera frames, images, recordings, and timeline clips into a predictable media pipeline, then passes each frame through pluggable `FrameProcessor` objects.

To keep adoption lightweight, the public surface is grouped into four small boards: **Export**, **Preview**, **Record**, and **Timeline**. `KakaposSurface` is the primary public entry layer for all four boards.

Kakapos is not a filter-kernel library. It owns media lifecycle, frame sourcing, preview routing, recording, offline export, and timeline composition. When paired with [Harbeth](https://github.com/yangKJ/Harbeth), Kakapos handles the media engine layer while Harbeth handles high-quality GPU rendering for each frame.

At the top level, Kakapos can also be understood as three public engines over one shared core: **Video Engine**, **Camera Engine**, and **Timeline Engine**. `Media Core` provides the shared frame, processor, source, sink, and pipeline contracts.
