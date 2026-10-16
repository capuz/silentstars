---
repo: "warreth/melodybridge"
name: "melodybridge"
description: "Self-hosted music downloader and sync engine. Convert Spotify & YouTube playlists into tagged audio files, M3U playlists, or direct Jellyfin syncs."
readmeQualityOk: true
url: "https://github.com/warreth/melodybridge"
homepage: "https://melodybridge.app"
language: "C#"
languages: ["C#"]
languagePcts: [82]
topics: ["docker", "ffmpeg", "flaresolverr", "jellyfin", "m3u", "media-server", "music-downloader", "playlist-downloader", "playlist-sync", "playlists"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-01-27T14:40:26Z"
lastCommitAt: "2026-10-16T08:26:45Z"
lastReleaseAt: "2026-10-16T06:08:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 68
maintainers: ["warreth"]
openGraphImageUrl: "https://opengraph.githubassets.com/a367a2f1ebc30d1247911ad35c8c40fdf9b2db1a2bad142b000c966de737b371/warreth/melodybridge"
---

# MelodyBridge

Self-hosted music toolbox: fetch playlists from Spotify or YouTube, download the tracks through a plugin waterfall, and publish them as M3U, Jellyfin, Plex or Navidrome playlists.

## Quick start

You need Docker (or Podman) and nothing else. No clone required:

```bash
mkdir melodybridge && cd melodybridge
wget https://melodybridge.app/compose.yml
docker compose up -d
```

Open http://localhost:3333, add a playlist, press Download.

Podman works the same: `podman compose up -d`.

## Documentation

Full documentation lives at https://docs.melodybridge.app.

## Development

```bash
git clone https://github.com/warreth/melodybridge.git
cd melodybridge
dotnet run --project MelodyBridge.Server
```

Testing and architecture are covered in the [developer guide](https://github.com/warreth/melodybridge/blob/HEAD/docs/developer.md).

## License

AGPL v3, see [LICENSE](https://github.com/warreth/melodybridge/blob/HEAD/LICENSE).
