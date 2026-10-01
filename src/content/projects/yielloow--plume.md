---
repo: "Yielloow/Plume"
name: "Plume"
description: "A light browser for Windows. Ads removed on YouTube, Twitch lives without ad breaks, sleeping tabs, and nothing that leaves your machine."
readmeQualityOk: true
url: "https://github.com/Yielloow/Plume"
homepage: "https://yielloow.github.io/Plume/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["browser", "lightweight", "mpv", "privacy", "python", "webview2", "windows"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-13T10:01:06Z"
lastCommitAt: "2026-10-01T10:24:29Z"
lastReleaseAt: "2026-09-14T13:18:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 49
maintainers: ["Yielloow"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c31c17d30e85ccd7aff73d6da05bfcc184551f2ba2c166ebbaf501d058c20da/Yielloow/Plume"
---

# Plume

A light browser for Windows. Français : [README.fr.md](https://github.com/Yielloow/Plume/blob/HEAD/README.fr.md)

Plume is a desktop browser built around the WebView2 engine that Windows
already ships. It keeps the window, the tabs and the drawing to itself, and
asks the engine only for the pages. The result is a browser that sits at a
few hundred megabytes instead of a few gigabytes, and that never sends
anything anywhere.

[Download the latest version](https://github.com/Yielloow/Plume/releases/latest)
 ·  [Site](https://yielloow.github.io/Plume/)  ·
[Changelog](https://github.com/Yielloow/Plume/blob/HEAD/CHANGELOG.md)

| The home page | The settings |
|---|---|
|  |  |

## What it looks like on the meter

A Task Manager capture, taken by a Plume user while a Twitch live was playing
in it:

| | CPU | Memory |
|---|---|---|
| Plume.exe | 0.5 % | 118.9 MB |
| Brave Browser | 30.7 % | 708.6 MB |

Plume's rendering engine, WebView2, runs as its own process and is counted
separately by Windows: on another capture it sat at 0 % and 275.5 MB. So the
honest figure for Plume with a page open is the sum of the two, and it is
still well under what a full browser costs. Both…
