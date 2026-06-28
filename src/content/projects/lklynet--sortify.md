---
repo: "lklynet/sortify"
name: "sortify"
description: "An audio tagger that doesn't touch your files and playlist generator using those tags."
url: "https://github.com/lklynet/sortify"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["music", "playlist", "tagging"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-03-24T17:25:15Z"
lastCommitAt: "2026-06-28T02:01:54Z"
lastReleaseAt: "2026-06-27T23:13:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 23
maintainers: ["lklynet"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfe6c2bd15e0934150e1f676516a48c6b535760e89f5cc540ddc937e2d566409/lklynet/sortify"
---

</p>

# Sortify

It's is a self-hosted playlist assistant for Navidrome. It scans your library, stores metadata locally, and generates recommended playlists from the web UI. It does NOT touch your files metadata and instead stores it in a local SQLite database, keeping your files safe and untouched.

## Screenshot

## Requirements

- Navidrome
- Last.FM API key

## Docker build

```
services:
  sortify:
    image: "ghcr.io/lklynet/sortify:latest"
    container_name: sortify
    ports:
      - "3001:3001"
    restart: unless-stopped
    volumes:
      - ./data:/data
```

Change `./data` if you want data to persist through container restarts.

## Configuration

All settings can be updated via the app UI. It supports these environment variables:

- `PORT`
- `SUBSONIC_URL`
- `SUBSONIC_USER`
- `SUBSONIC_PASSWORD`
- `LASTFM_API_KEY`
- `MAX_TRACKS_PER_PLAYLIST`

## Playlist modes

In the **Current playlists** panel, the mode button is icon-only. Clicking it cycles through:

- **↻ Weekly (dynamic):** replaced by Sortify on refresh cycles.
- **📌 Pinned:** keeps the playlist in place, but refreshes its tracks.
- **🔒 Locked:** keeps the playlist exactly as-is, with no automatic changes.…
