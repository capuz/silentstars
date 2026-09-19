---
repo: "Damocles-fr/jellyfin-tmdb-more-like-this"
name: "jellyfin-tmdb-more-like-this"
description: "TMDB-powered \"More like this\" rows on movie/series pages, filtered to what's already in your library. Combines TMDB recommendations, similar, and same-collection (sagas), configurable. Fix Jellyfin recommendations"
readmeQualityOk: true
url: "https://github.com/Damocles-fr/jellyfin-tmdb-more-like-this"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["collection", "collections", "jellyfin", "jellyfin-plugin", "jellyfin-script", "jellyfin-scripts", "jellyfin-web", "more-like-this", "recommendation", "recommendations"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-08-01T01:38:01Z"
lastCommitAt: "2026-09-19T08:16:04Z"
lastReleaseAt: "2026-09-16T23:07:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 52
maintainers: ["Damocles-fr"]
openGraphImageUrl: "https://opengraph.githubassets.com/d418c75ea20e6e02948d330e46fa59afc82c760cf7b1004607bf417b6aa4e9fc/Damocles-fr/jellyfin-tmdb-more-like-this"
---

# Jellyfin Watch Next : Extra More More Like This 🎬🔗📚
Adds a **Watch Next** section to movie and series detail pages. Suggestions come from TMDB (merge `recommendations`, `similar`, and `collections`) and are filtered so that **only titles already present in your Jellyfin library** are shown.

## Jellyfin 12.0 and above :
### Rebuilt for Jellyfin 12.
- The new native “More Like This” section is great, so this script now adds a “Watch Next” row that complements it : up to 28 new suggestions
- The previous and next movies from the same saga first, in the correct order (configurable), and none of the titles already shown in the native row (filtered).
- Same rows, cards and buttons as Jellyfin 12. Feel free to use it as a starting point for further improvements or other projects.

## Features

- Combines **TMDB recommendations, similar, and same-collection (sagas)**
- Movies in a TMDB collection (saga) are placed first : next film, then previous film (configurable)
- **Titles already shown in Jellyfin's native "More Like This" row are skipped**, saga films always stay
- **Same row, cards and buttons as Jellyfin 12**
- Dropdown menu, collapsed by default, nothing runs (no API call,…
