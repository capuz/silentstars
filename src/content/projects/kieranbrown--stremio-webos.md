---
repo: "kieranbrown/stremio-webos"
name: "stremio-webos"
description: "Stremio app for LG webOS TVs with working default audio language selection"
readmeQualityOk: true
url: "https://github.com/kieranbrown/stremio-webos"
language: "JavaScript"
languages: ["JavaScript", "Makefile", "HTML"]
languagePcts: [41, 33, 27]
stars: 44
forks: 16
openIssues: 0
closedIssues: 8
watchers: 5
contributors: 4
recentReleases: 2
createdAt: "2024-03-09T21:13:44Z"
lastCommitAt: "2026-10-30T10:22:26Z"
lastReleaseAt: "2026-10-30T10:24:02Z"
status: "thriving"
tags: []
healthScore: 75
undervaluedScore: 38
maintainers: ["kieranbrown", "Neotame", "supergarbo"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f83957e47eeac23865df8d9c95bf61716149b747b49ed530f383cd6f8c513dd/kieranbrown/stremio-webos"
---

# Stremio for webOS

Custom Stremio app for LG webOS TVs with working default audio language selection.

The official Stremio app has a bug where it always plays the first audio track in the list, ignoring the user's preferred audio language setting. This build fixes that by reading tracks from the TV's native media pipeline and automatically selecting the track matching your configured language.

Built from [Stremio Theater v1.9.2](https://github.com/NoobyGains/stremio-vidaa-tv) with the official Stremio streaming server.

## Compatibility

This build targets **LG TVs from 2020 onward running webOS 5.0 or later**, matching the model-year baseline for [Stremio's official LG app](https://www.stremio.com/downloads). This community build has not been tested on every model.

**webOS 4.x and earlier (2019 and older LG TVs) are not supported.** Both the Theater frontend and the bundled streaming server depend on newer runtimes. LG documents Chromium 53 and Node.js 0.12.2 for webOS 4.x, compared with Chromium 68 and Node.js 8.12.0 for webOS 5.x. See LG's [web engine versions](https://webostv.developer.lge.com/develop/specifications/web-api-and-web-engine) and [JavaScript service…
