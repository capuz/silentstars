---
repo: "yoinkify/yoink"
name: "yoink"
description: "paste a spotify or apple music link. get the file."
readmeQualityOk: true
url: "https://github.com/yoinkify/yoink"
homepage: "https://yoinkify.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["apple-music", "flac", "lossless", "media-downloader", "music-downloader", "nextjs", "self-hosted", "spotify"]
stars: 150
forks: 3
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-20T21:04:15Z"
lastCommitAt: "2026-07-12T06:16:08Z"
lastReleaseAt: "2026-04-05T23:28:57Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 93
undervaluedScore: 18
maintainers: ["heysonder", "dependabot[bot]", "blacksmith-sh[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/31839cad9b9f207943a87c330b441e118d20fe54d7d3fe4fa94649e21831e358/yoinkify/yoink"
fundingLinks: ["KO_FI:https://ko-fi.com/chasemarsh"]
---

# yoink

paste a music link. get the file.

**[yoinkify.com](https://yoinkify.com)**

feedback is greatly appreciated — i thoroughly read every request. **[leave feedback](https://yoinkify.com/r/f)**

</p>

## features

- **tracks, playlists, albums, artists** — paste a link, download everything
- **lossless** — flac, alac, or 320kbps mp3
- **full metadata** — id3v2/vorbis tags, album art, synced lyrics, genre, track numbers, explicit flags
- **apple music catalog matching** — ISRC codes, album artist, and itunes catalog ids embedded into m4a files so apple music recognizes your library
- **cross-platform links** — apple music and youtube links resolved automatically via song.link
- **search** — type a song name instead of pasting a link
- **multi-source audio** — waterfall pipeline across deezer, tidal, and youtube with automatic fallback
- **metadata fallback chain** — spotify, deezer, and itunes as metadata sources with automatic failover
- **no accounts** — no sign-up, no cookies, no data stored

## how it works

1. you paste a spotify (or apple music / youtube) link
2. yoink pulls metadata from spotify, with fallbacks to deezer and itunes
3. audio is sourced from the best…
