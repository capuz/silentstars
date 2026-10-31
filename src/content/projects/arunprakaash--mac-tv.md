---
repo: "Arunprakaash/mac-tv"
name: "mac-tv"
description: "Turn a Mac into an Apple TV-style box: tvOS-style home screen, streaming apps at full quality, and your phone as the remote."
readmeQualityOk: true
url: "https://github.com/Arunprakaash/mac-tv"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
stars: 19
forks: 1
openIssues: 4
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-10-30T19:35:50Z"
lastCommitAt: "2026-10-31T09:53:53Z"
lastReleaseAt: "2026-10-31T04:25:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 15
maintainers: ["Arunprakaash"]
openGraphImageUrl: "https://opengraph.githubassets.com/489c1242c2b027252c7e74f753018c794c3315856c9bee305aeec49d9e8afa96/Arunprakaash/mac-tv"
---

## Screenshots

| Top Shelf | App grid |
|---|---|
|  |  |
| **Settings** | **Screensaver** |
|  |  |

| Phone remote | Apps | TV controls |
|---|---|---|
|  |  |  |

## Install

1. Download `MacTV-<version>.dmg` from [Releases](https://github.com/Arunprakaash/mac-tv/blob/HEAD/../../releases), open it, and drag **Mac TV** to Applications.
2. The first time you open it, macOS says it can't check the app, because it isn't notarized by Apple. Open **System Settings › Privacy & Security**, scroll down and click **Open Anyway**.
3. When macOS asks whether Mac TV may accept incoming network connections, choose **Allow**. Without it, phones can't reach the remote.

Requires macOS 14 or later.

## How it works

Mac TV is a native Mac app. Each streaming service runs in its official web player inside Apple's Safari engine (WebKit), so it gets FairPlay DRM, the same playback quality as Safari, up to 4K on Netflix. It isn't Android TV and doesn't emulate anything.

- **Home screen:** Apple TV's layout. A Top Shelf fills the screen behind a frosted glass dock of app tiles, with the next row peeking below. The Top Shelf shows the focused app in its own colours; move up for Open, and down for…
