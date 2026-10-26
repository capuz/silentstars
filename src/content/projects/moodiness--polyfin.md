---
repo: "moodiness/polyfin"
name: "polyfin"
description: "Self-hosted server that brings your addons and IPTV to any Jellyfin app."
readmeQualityOk: true
url: "https://github.com/moodiness/polyfin"
homepage: "https://moodiness.github.io/polyfin/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [73, 21]
topics: ["debrid", "docker", "epg", "ffmpeg", "go", "iptv", "jellyfin", "jellyfin-api", "live-tv", "m3u"]
stars: 27
forks: 3
openIssues: 2
closedIssues: 145
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-02T15:25:53Z"
lastCommitAt: "2026-10-26T20:59:55Z"
lastReleaseAt: "2026-10-03T21:09:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "community_hub"]
healthScore: 100
undervaluedScore: 52
maintainers: ["moodiness"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1401988628/34389e82-2130-4021-aacc-c250dfb31ea3"
discussionCount: 27
---

Polyfin is a self-hosted server that speaks the Jellyfin API. Its content comes from:
- **Stremio addons:** catalogs, metadata, streams and subtitles;
- **Eclipse music addons:** music, audiobooks and podcasts;
- **IPTV sources:** M3U playlists and Xtream Codes accounts, with XMLTV guides.

Any Jellyfin app connects to it like a regular Jellyfin server, with real user accounts and transcoding, and without Jellyfin installed.

See it on the [website](https://moodiness.github.io/polyfin/): the ad above, a short tour, a video for each feature, and the documentation.

> [!NOTE]
> Polyfin is in early development. Expect changes between releases, and report problems in the [issues](https://github.com/moodiness/polyfin/issues).

## Features

- **Works with Jellyfin apps:** sign in with a password or Quick Connect, then browse, search and play. Polyfin targets the Jellyfin 12.3 API.
- **Stremio addons as libraries:** catalogs become libraries and collections, streams become versions of a title, and addon subtitles become subtitle tracks.
- **Live TV and IPTV:** TV catalogs, M3U playlists and Xtream Codes accounts become Live TV, with a programme guide and recordings. IPTV providers'…
