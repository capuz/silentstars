---
repo: "ibratabian17/LyricsPlus"
name: "LyricsPlus"
description: "The source code of the YouLy+ API implementation. Built with Golang. It’s a lightweight, high-performance lyrics scraper and provider."
readmeQualityOk: true
url: "https://github.com/ibratabian17/LyricsPlus"
homepage: "https://lyricsplus.prjktla.my.id"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 41
forks: 9
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-28T15:22:38Z"
lastCommitAt: "2026-10-19T09:14:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 52
maintainers: ["ibratabian17"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e23f62c59b83bac082f51bc35212c755348d0c36b8078d829d78f012a4c56e1/ibratabian17/LyricsPlus"
---

# LyricsPlus Backend

This is the backend service for LyricsPlus, primarily functioning as a lyrics scraper and provider for Youly+. Its main purpose is to fetch platform-specific lyrics timelines for users.

## Features

*   **Multi-Source Scraping**: Aggregates lyrics from various sources (e.g., Apple Music, Musixmatch, Spotify, QQ Music).
*   **Platform-Specific Timelines**: Provides synchronized lyrics tailored for specific platforms.
*   **User Submissions**: Supports user contributions for synchronized lyrics.
*   **Song Catalog Search**: Provides a search functionality for the song catalog.
*   **Advanced Similarity Matching**: Matches songs across different services.
*   **Caching**: Caches lyrics on Google Drive to optimize response times.

## How It Works

The backend operates by exposing a set of API endpoints that allow clients to fetch lyrics, metadata, and interact with the song catalog. It intelligently queries various supported sources, processes the retrieved data, and returns the most accurate and synchronized lyrics available. To optimize performance and reduce redundant scraping, uncached lyrics are stored on Google Drive after their initial retrieval.

## API…
