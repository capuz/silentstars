---
repo: "WOLVAREX/wolfXspotify-API"
name: "wolfXspotify-API"
description: "Free, unlimited Spotify music data API. No API key, no OAuth, no sign-up required."
readmeQualityOk: true
url: "https://github.com/WOLVAREX/wolfXspotify-API"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [51, 49]
topics: ["silentwolf", "spotify", "spotify-api", "spotify-music", "wolftech", "wolfxapis"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-20T15:22:23Z"
lastCommitAt: "2026-08-30T00:46:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["WOLVAREX"]
openGraphImageUrl: "https://opengraph.githubassets.com/77fb3844f124145b068b0b9a4d322ea7aea37e3f19250dad65b7a1a0687b5856/WOLVAREX/wolfXspotify-API"
---

# wolfXspotify-API

> **Free, unlimited Spotify music data API. No API key, no OAuth, no sign-up required.**

**Live API:** [https://spotify.xwolf.space](https://spotify.xwolf.space)

---

## What Is This?

**wolfXspotify-API** is a free public REST API that gives developers instant access to Spotify music catalogue data — tracks, albums, artists, playlists and search — without needing a Spotify developer account, API key, or OAuth flow.

It works by combining three data sources, falling through them in order until a result is found:

1. **Spotify Embed Scraping** — parses the open embed pages which are publicly accessible and carry full metadata including thumbnails, track lists, and preview URLs
2. **Spotify Partner GraphQL** — calls the internal Spotify GraphQL API using a TOTP-generated web-player token, used for search and richer playlist data (followers, owner info)
3. **MusicBrainz + Wikidata fallback** — for artist and album lookups, queries the MusicBrainz URL API and Wikidata SPARQL (P1902 for artists, P1729 for albums) to resolve IDs when direct embeds are unavailable

Built and maintained by **Silent Wolf** under **WOLF TECH**.

---

## Owner & Author

| | |
|---|---|…
