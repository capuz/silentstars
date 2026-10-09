---
repo: "M0VENTURA/Popularr"
name: "Popularr"
description: "🎵 Sync Spotify's track popularity to Navidrome ratings."
readmeQualityOk: true
url: "https://github.com/M0VENTURA/Popularr"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [67, 20]
stars: 10
forks: 0
openIssues: 2
closedIssues: 24
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-07-11T12:08:19Z"
lastCommitAt: "2026-10-09T10:51:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 72
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/01c16cce1b8a22ef3c24f780f77f7ece2d7504911e033cd6037ebcd2406d9b8e/M0VENTURA/Popularr"
---

# 🎵 Popularr

*Music intelligence for Navidrome — scores, rates, curates and completes your library.*

**Self-hosted** · **Python / Quart** · **PostgreSQL** · **Docker**



Popularr is a self-hosted music management companion for **[Navidrome](https://www.navidrome.org)**.
It looks at your library the way a data analyst would: it **scores every track for popularity**,
turns those scores into **1–5★ ratings**, **detects singles and cover songs**, **builds playlists**
from what you actually love, **downloads what's missing** over Soulseek, and pushes the ratings
back into Navidrome so every app that reads your library — Plex, Jellyfin, DSub, Feishin — shows
the same stars.

It is *not* a media server, a tag editor, or a replacement for Navidrome. It is the intelligence
layer that sits beside it.

## ✨ Why Popularr?

| Problem | Popularr's answer |
| --- | --- |
| "I have 40,000 tracks and no idea what deserves 5★" | Objective, explainable popularity scores blended from Last.fm, ListenBrainz and release age — re-anchored per album and per artist |
| "My ratings are inconsistent" | One deterministic pipeline rates every album the same way, and syncs the result…
