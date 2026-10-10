---
repo: "Basjohn/ShittyRandomPhotoScreenSaver"
name: "ShittyRandomPhotoScreenSaver"
description: "Supports folders, rss feeds, major music players, reddit, gmail inbox control, steam achievements/friends/news/guilt, weather, four displays, too many visualizers and will ideally not look like shit. Maybe."
readmeQualityOk: true
url: "https://github.com/Basjohn/ShittyRandomPhotoScreenSaver"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["media", "media-control", "screensaver", "wallpapers", "gmail-notifier", "multi-monitor", "multimonitor", "musicbee", "reddit", "spotify"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-01T12:27:14Z"
lastCommitAt: "2026-10-10T10:05:52Z"
lastReleaseAt: "2025-12-29T13:43:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 66
maintainers: ["Basjohn"]
openGraphImageUrl: "https://opengraph.githubassets.com/446c4aa8f9c1fd3b04d21b82f9222f5794485dd9b5f9e029a7d3cfd4e157a6b9/Basjohn/ShittyRandomPhotoScreenSaver"
discussionCount: 1
---

# ShittyRandomPhotoScreenSaver (SRPSS)

ShittyRandomPhotoScreenSaver (SRPSS) is a modern Windows (W10/W11) screensaver that is suprisingly less shit than the majority of ancient decrepid screensavers around today. Born from my sheer exhaustion of still using a screensaver from 2005 to do less than what this does.

---

## Developer Python toolchain

Windows development and frozen builds use a single standard-GIL CPython 3.14 x64 repo-root `.venv`. See [`Docs/Guides/Python314_Cutover.md`](https://github.com/Basjohn/ShittyRandomPhotoScreenSaver/blob/HEAD/Docs/Guides/Python314_Cutover.md) for the destructive operator-authorized cutover and MSVC build requirements. The operator has accepted the source migration and focused Windows tests; frozen-product build and packaging acceptance remain operator-run.

## Features
A look at the current features. Developer contracts and work-in-progress details live under `Docs/`.

- **Random Image Slideshow**
  - Local folders (recursive) as primary source
  - Optional RSS/JSON image feeds (e.g. curated Reddit wallpaper feeds) with a one click "Just Make It Work" button to fill feeds for you.
  - Mixed mode (folders + RSS) support with ratio control…
