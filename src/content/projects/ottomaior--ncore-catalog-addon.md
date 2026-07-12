---
repo: "ottomaior/ncore-catalog-addon"
name: "ncore-catalog-addon"
description: "Hungarian themed Stremio addons"
readmeQualityOk: true
url: "https://github.com/ottomaior/ncore-catalog-addon"
homepage: "https://ncore-catalog-addon.vercel.app"
language: "HTML"
languages: ["HTML"]
languagePcts: [72]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-24T01:32:24Z"
lastCommitAt: "2026-07-12T06:16:41Z"
lastReleaseAt: "2026-02-18T20:42:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/787af516c9e2c659e8ea0f59cc43f3d1ec6efde74d0eccd379ab3e8dcf303e62/ottomaior/ncore-catalog-addon"
---

# 🇭🇺 nCore Stremio Addons

Automated Hungarian content catalogs from nCore tracker for Stremio. **Series** use TVDB metadata; **movies** and Hungarian filters use TMDB.

##  Two Addons in One Server

This project serves **two separate Stremio addons** from a single deployment:

###  nCore Katalógus
**Catalog addon** that displays Hungarian movies and series from nCore tracker.

-  **Catalogs:** 🏆 Top Seed (filmek, sorozatok, magyar filmek, magyar sorozatok) + genre filtering; ⏰ Legfrissebb (filmek 2025–2026, sorozatok); ⏰ Streaming: Netflix, Disney+, HBO Max, Prime (legfrissebb filmek/sorozatok)
-  TVDB for series, TMDB for movies (no Trakt)
-  Direct nCore → TVDB/TMDB matching
-  Customizable catalog selection and order on the homepage before install
-  Installation: `https://your-deployment-url/manifest.json`

###  Magyar Előzetesek (Hungarian Trailers)
**Trailer addon** that provides Hungarian and English trailers for movies and series.

-  **4-stage fallback search**: TMDB hu-HU → YouTube HU → TMDB en-US → YouTube EN
-  Hungarian-first priority (dubbed/subtitled)
-  Season-specific trailers for series
-  Smart YouTube scraping when TMDB has no trailers
-  Works with both…
