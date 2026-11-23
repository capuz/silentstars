---
repo: "hanxi/songloft-plugin-ytdlp"
name: "songloft-plugin-ytdlp"
description: "yt-dlp import plugin"
originalDescription: "yt-dlp 导入插件"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hanxi/songloft-plugin-ytdlp"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [46, 33]
topics: ["songloft-plugin"]
stars: 7
forks: 3
openIssues: 2
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-23T09:31:14Z"
lastCommitAt: "2026-11-23T10:29:29Z"
lastReleaseAt: "2026-07-21T03:05:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["hanxi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f92f179a0505d9c898b24487834420cb4adf303286662eed232c23cba3da834e/hanxi/songloft-plugin-ytdlp"
---

# yt-dlp Music Import

Songloft JS plugin — import playlists from YouTube, Bilibili, SoundCloud and other platforms into Songloft via [yt-dlp](https://github.com/yt-dlp/yt-dlp).

## Features

- **Playlist import**: paste a link to extract playlist metadata and import it into the music library
- **On-demand playback**: imported as online songs; the audio URL is resolved and cached on first playback
- **Download locally**: optionally download songs as local files for offline use
- **Multi-platform support**: supports all platforms supported by yt-dlp (1000+)
- **Automatic deduplication**: the same video will not be imported twice

## Installation

Install from the Songloft plugin management page, or manually download the `.jsplugin.zip` file from [Releases](https://github.com/hanxi/songloft-plugin-ytdlp/blob/HEAD/../../releases).

### Plugin source URL

```
https://raw.githubusercontent.com/hanxi/songloft-plugin-ytdlp/main/registry.json
```

In Songloft Settings → JS Plugins → Plugin Sources, add the above URL to receive updates automatically.
