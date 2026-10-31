---
repo: "listicktv/listick"
name: "listick"
description: "Track what you watch: movies, shows and anime. Self-hosted, with smart lists, stats and an airing calendar."
readmeQualityOk: true
url: "https://github.com/listicktv/listick"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [79, 20]
topics: ["anime", "docker", "movies", "nextjs", "self-hosted", "tv-shows", "tv-tracker", "watchlist"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 0
recentReleases: 10
createdAt: "2026-10-21T20:13:15Z"
lastCommitAt: "2026-10-31T02:00:06Z"
lastReleaseAt: "2026-10-23T00:47:28Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 45
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bd6ccab0cca87d80846b6c34191d6040ddbd29ef890b896796ee1f2918d26ca/listicktv/listick"
fundingLinks: ["KO_FI:https://ko-fi.com/listicktv"]
---

# Listick

Track what you watch: movies, shows and anime. History, ratings, smart lists, Up next, Continue watching, an airing calendar,
stats, tracking from Stremio, Jellyfin and Seanime, anime progress synced to AniList and MyAnimeList, and imports from Trakt,
Simkl, Letterboxd, MyAnimeList, AniList and Kitsu.
Self-hosted, with invite-only sign-up, so you can share it with family and friends.

## Requirements

- Docker with Compose v2 (images for `linux/amd64` and `linux/arm64`)
- A free [TMDB API Read Access Token](https://www.themoviedb.org/settings/api)
- About 512 MB of free memory and 1 GB of disk

## Install

1. Download [`compose.yaml`](https://github.com/listicktv/listick/blob/HEAD/compose.yaml) and [`.env.example`](https://github.com/listicktv/listick/blob/HEAD/.env.example) into an empty folder.
2. `cp .env.example .env` and set `TMDB_ACCESS_TOKEN`.
3. `docker compose up -d`
4. Open http://localhost:3000 and create your account. The first account is the admin; invite others from Settings › Users.

Every other setting is optional and described in [`.env.example`](https://github.com/listicktv/listick/blob/HEAD/.env.example).

## On the internet

- Put it behind a reverse…
