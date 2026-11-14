---
repo: "ttf248/local-gallery"
name: "local-gallery"
description: "Local album browser, comic reader"
originalDescription: "本地相册浏览器、漫画阅读器"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ttf248/local-gallery"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [50, 44]
topics: ["album", "photo-gallery"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 17
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-13T20:45:35Z"
lastCommitAt: "2026-11-14T21:50:06Z"
lastReleaseAt: "2025-06-18T18:26:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 75
maintainers: ["ttf248"]
openGraphImageUrl: "https://opengraph.githubassets.com/e298c86e20a5ae11a2c5c0621eeb54bff337d00076fecaa89ceb14181a60445e/ttf248/local-gallery"
---

# Local Gallery

Local Gallery is a gallery for photos, comics, and videos that runs on your own machine. The Go backend reads the configured directories directly, and the browser provides the interface. Application state is stored in local JSON files, so no database is required. Media analysis and semantic search both run locally; the semantic search model must be downloaded separately the first time.

For collaboration rules, see [AGENTS.md](https://github.com/ttf248/local-gallery/blob/HEAD/AGENTS.md).

## Core Features

| Workspace | Main features |
| --- | --- |
| Photos | Multiple directories merged into one media library; browse by album, collection, tag, year, and GPS location. The Footprints page has a header strip (time-span filter and whole-library scale), and the main body's right column is a map that clusters photo coordinates into a grid, with trips listed on the left. Chinese semantic search and search by image; photo wall, large-image preview, side-by-side comparison, 'Picks', favorites, and recently viewed. |
| Comics | Standalone works list; single-page, continuous, two-page, and RTL reading; zoom, rotate, table of contents, reading progress restore, unread list,…
