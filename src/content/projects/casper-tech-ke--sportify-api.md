---
repo: "Casper-Tech-ke/sportify-api"
name: "sportify-api"
description: "Free public Spotify data API — tracks, albums, artists, playlists and search. No API key or OAuth required. Built by CASPER TECH."
url: "https://github.com/Casper-Tech-ke/sportify-api"
homepage: "https://sportify.xcasper.space"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [55, 45]
stars: 9
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-04-02T13:53:03Z"
lastCommitAt: "2026-06-23T23:30:02Z"
lastReleaseAt: "2026-04-02T17:20:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 58
maintainers: ["Casper-Tech-ke"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ff0fe917bc9ea5a42dae82e12be68c8034ca85d4d7a2b8b0712f32c13a5c23c/Casper-Tech-ke/sportify-api"
---

# Sportify API

> **Free, unlimited Spotify music data API. No API key, no OAuth, no sign-up required.**

**Live API:** [https://sportify.xcasper.space](https://sportify.xcasper.space)

---

## What Is This?

Sportify API is a free public REST API that gives developers instant access to Spotify music catalogue data — tracks, albums, artists, playlists and search — without needing a Spotify developer account, API key, or OAuth flow.

It works by combining three data sources, falling through them in order until a result is found:

1. **Spotify Embed Scraping** — parses the open embed pages which are publicly accessible and carry full metadata including thumbnails, track lists, and preview URLs
2. **Spotify Partner GraphQL** — calls the internal Spotify GraphQL API using a TOTP-generated web-player token, used for search and richer playlist data (followers, owner info)
3. **MusicBrainz + Wikidata fallback** — for artist and album lookups, queries the MusicBrainz URL API and Wikidata SPARQL (properties P1902 for artists, P1729 for albums) to resolve IDs when direct embeds are unavailable

Built and maintained by **TRABY CASPER** under the **CASPER TECH** umbrella.

---

## Owner &…
