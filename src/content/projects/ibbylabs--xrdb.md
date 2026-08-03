---
repo: "IbbyLabs/XRDB"
name: "XRDB"
description: "The Home for XRDB, eXtended Ratings DataBase"
readmeQualityOk: true
url: "https://github.com/IbbyLabs/XRDB"
homepage: "https://extendedratings.com"
language: "Go"
languages: ["Go"]
languagePcts: [80]
stars: 53
forks: 5
openIssues: 4
closedIssues: 47
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-31T18:23:38Z"
lastCommitAt: "2026-08-03T06:43:01Z"
lastReleaseAt: "2026-04-02T03:29:48Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 39
maintainers: ["IbbyLabs", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/39895e990196bf53c976dc9006ed500b159630274e838cf2049d8955670af5e1/IbbyLabs/XRDB"
---

# XRDB — eXtended Ratings DataBase

Ratings overlays and artwork for your media library. XRDB fetches posters,
backdrops, thumbnails, and logos, composes rating badges and metadata onto
them, and serves the result as an image URL — built for Plex, Jellyfin,
Stremio (via AIOMetadata), and anything else that takes one.

- **One container.** The web configurator is embedded in a single Go binary.
- **Fast.** Pure-Go render pipeline with a two-tier (memory + disk) cache.
- **Small.** A default poster is around 38 KB, inside Stremio's 100 KB limit
  and under its 50 KB recommendation. Larger tiers are a setting away.
- **12 rating sources** with official provider logos: IMDb, TMDB, Rotten
  Tomatoes (critics + audience), Metacritic, Letterboxd, MDBList, Trakt,
  SIMKL, MyAnimeList, AniList, Kitsu.
- **Configurable overlays:** rating badges (pill/square/glass, dark/light),
  quality badges (4K/HDR/DV/…), age rating, genres, streaming providers,
  aggregate score bar, trending tag — across normal/large/4K output sizes.
- **Profiles** with memorable aliases and password-protected editing; the
  artwork URL is just `…/poster/{id}?config=your-alias`.

## The configurator

Every control…
