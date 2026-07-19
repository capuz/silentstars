---
repo: "power721/atv-player"
name: "atv-player"
description: "alist-tvbox Desktop Player"
originalDescription: "alist-tvbox 桌面播放器"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/power721/atv-player"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 36
forks: 6
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-04-15T08:10:03Z"
lastCommitAt: "2026-07-19T06:13:23Z"
lastReleaseAt: "2026-04-30T12:46:00Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 74
undervaluedScore: 35
maintainers: ["power721"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6cfad899bedb15a2285a517ec290eb5d90b2a9862683ed6fad00d7ac4e191d9/power721/atv-player"
---

# atv-player

The `alist-tvbox` desktop player is based on `PySide6` and `mpv`, currently prioritizing Linux as the target platform while retaining packaging support for macOS and Windows.

The application connects by default to `http://127.0.0.1:4567`, providing login, media browsing, playback history, live streaming, plugin extensions, and an independent player window around the `alist-tvbox` backend.

## Documentation Navigation

- [Detailed Help Documentation](https://github.com/power721/atv-player/blob/HEAD/docs/help.md)
- [Python Spider Plugin Development Guide](https://github.com/power721/atv-player/blob/HEAD/docs/python-spider-plugin-development-guide.md)

## Core Capabilities

### Content Access

- Automatically display tabs for Douban Movies, Telegram Movies, Bilibili, YouTube, live streaming, Emby, Jellyfin, Feiniu Movies, file browsing, playback history, etc., based on backend capabilities.
- Generate independent tabs for each enabled `TvBox Python` crawler plugin, automatically grouping excessive plugins into a "More" drawer with search support.
- The global search at the top will concurrently search all enabled sources and display the result count in the tab title.
-…
