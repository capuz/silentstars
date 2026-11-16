---
repo: "ttf248/local-gallery"
name: "local-gallery"
description: "Local photo album browser and comic reader"
originalDescription: "本地相册浏览器、漫画阅读器"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ttf248/local-gallery"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [49, 43]
topics: ["album", "photo-gallery"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 17
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-13T20:45:35Z"
lastCommitAt: "2026-11-16T09:38:46Z"
lastReleaseAt: "2025-06-18T18:26:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 75
maintainers: ["ttf248"]
openGraphImageUrl: "https://opengraph.githubassets.com/e298c86e20a5ae11a2c5c0621eeb54bff337d00076fecaa89ceb14181a60445e/ttf248/local-gallery"
---

# Local Gallery · Local Gallery

Local Gallery is a photo, comic, and video gallery that runs on your own machine. The Go backend reads the configured directories directly, and the browser provides the interface. Application state is stored in local JSON files, so no database is needed. Media analysis and semantic search both run locally; the semantic search model must be downloaded separately the first time.

For collaboration rules, see [AGENTS.md](https://github.com/ttf248/local-gallery/blob/HEAD/AGENTS.md).

## Core Features

| Workspace | Main Features |
| --- | --- |
| Photos | Multiple directories merged into one media library; browse by album, collection, tag, year, and GPS location. The footprints page has a header strip (time-span filter and whole-library scale), and the main right column is a map that clusters photo coordinates into a grid, with trips listed on the left. Smart albums prioritize themes curated from source folders; detailed categories by time, place, people, and scene can still be browsed separately. Chinese semantic search and search by image; wall view, large-image preview, side-by-side comparison, curated picks, favorites, and recently viewed. |
|…
