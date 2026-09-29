---
repo: "ArgonFetch/ArgonFetch"
name: "ArgonFetch"
description: "ArgonFetch is yet Another Media Downloader. A powerful tool for downloading videos, music, and other media from various online sources."
readmeQualityOk: true
url: "https://github.com/ArgonFetch/ArgonFetch"
homepage: "https://argonfetch.dev"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [63, 24]
topics: ["audio", "media", "video", "yt-dlp"]
stars: 17
forks: 1
openIssues: 3
closedIssues: 90
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2025-02-23T12:07:50Z"
lastCommitAt: "2026-09-29T08:10:55Z"
lastReleaseAt: "2026-08-24T14:19:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 75
maintainers: ["PianoNic"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/937577152/e0ac203a-0563-465a-8617-9662ac9af95d"
discussionCount: 1
---

# <p align="center">ArgonFetch</p>
</p>
  <strong>ArgonFetch is Yet Another Media Downloader.</strong>
  A powerful tool for downloading videos, music, and other media from various online sources.
</p>
</p>

---

> **⚠️ Important Note:** This project is currently under development and may not function as described directly from the main branch. For a working version, please check the [Releases tab](https://github.com/ArgonFetch/ArgonFetch/releases) for the latest stable release.

## What it does

Paste a link, get the media. ArgonFetch resolves the URL, picks the best available
streams and serves them back as a normal file download.

- **No API keys.** Nothing to register, no credentials to configure — including Spotify.
- **Plugins.** Sources yt-dlp cannot reach are installed by name rather than built in, and anyone can publish one.
- **Audio or video**, at a quality you choose.
- **Web interface and REST API**, with a browsable API reference.
- **A playback endpoint.** `GetPlayback` hands a player the video and audio tracks apart, each one
  seekable, which is what [Argon Play](https://github.com/ArgonFetch/ArgonPlay) watches YouTube
  through.
- **MCP endpoint** at `/mcp`, so…
