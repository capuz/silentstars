---
repo: "ohugonnot/sharebox"
name: "sharebox"
description: "🎬 Lightweight self-hosted streaming & file-sharing server — your media in a Netflix-style grid, shared by link. No library scan, no DB server, no accounts. A lean alternative to Plex/Jellyfin for sharing & watching. Runs on a Raspberry Pi · Docker-ready. ▶️ Live demo + admin (admin / demo2026)."
readmeQualityOk: true
url: "https://github.com/ohugonnot/sharebox"
homepage: "http://199.231.187.166:8282/dl/browse"
language: "JavaScript"
languages: ["JavaScript", "PHP"]
languagePcts: [60, 27]
topics: ["ffmpeg", "file-sharing", "php", "self-hosted", "sharebox", "sqlite", "video-streaming", "docker", "jellyfin-alternative", "media-server"]
stars: 25
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-09T10:04:46Z"
lastCommitAt: "2026-10-11T10:14:17Z"
lastReleaseAt: "2026-06-20T15:14:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 49
maintainers: ["ohugonnot", "odilonhugonnot-cyber"]
openGraphImageUrl: "https://opengraph.githubassets.com/6df1a2fd426f90357ed804789091180cffcaf2d342d4a06b68ec278e4a7744ac/ohugonnot/sharebox"
---

# ShareBox

**A lightweight, self-hosted alternative to Plex, Jellyfin, and Emby.**

Stream your media library instantly -- no library scan, no database server, no plugins. Just point at your files and share.

**Looking for a Plex alternative that runs on a Raspberry Pi? A Jellyfin alternative with zero setup? A self-hosted media server you can deploy in 30 seconds?** That's ShareBox.

## Why I built this

I wanted to send a movie link to someone. That's it.

Plex wanted me to set up a media library, scan my files, create user accounts, install plugins. Jellyfin was lighter but still required a database server and metadata agents. Emby wanted a subscription. All I needed was: point at a file, get a link, let them watch.

So I built ShareBox -- a single PHP app with zero external dependencies. No framework, no accounts to create, no media library to pre-scan. You share a link, they click play, ffmpeg transcodes on the fly. It runs on a $5 VPS with 256 MB of RAM, a Raspberry Pi 4, or a Synology NAS.

## Live Demo

**[Try the demo](http://199.231.187.166:8282/dl/browse?p=Films&view=grid)** -- no install needed. Netflix-style grid with TMDB posters, series, movies, and anime.

[Admin…
