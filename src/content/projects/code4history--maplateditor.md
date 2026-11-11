---
repo: "code4history/MaplatEditor"
name: "MaplatEditor"
description: "Maplat is the cool Historical Map/Illustrated Map Viewer. MaplatEditor is support project of Maplat, providing the data editor of Maplat."
readmeQualityOk: true
url: "https://github.com/code4history/MaplatEditor"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [49, 40]
stars: 19
forks: 0
openIssues: 22
closedIssues: 75
watchers: 5
contributors: 3
recentReleases: 3
createdAt: "2017-08-04T13:15:36Z"
lastCommitAt: "2026-11-11T18:47:45Z"
lastReleaseAt: "2026-10-03T19:00:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 66
maintainers: ["kochizufan"]
openGraphImageUrl: "https://opengraph.githubassets.com/c14550db968aa5759e7fb4c5945117e6e765bbc48ff287742ed56b8ae2cbab61/code4history/MaplatEditor"
---

## About MaplatEditor

MaplatEditor is the desktop data-authoring tool for the
[Maplat](https://github.com/code4history/Maplat) historical map viewer. It
provides a GUI for registering maps, setting ground control points, generating
tiles, and assembling the app data consumed by the Maplat viewer libraries
(`@maplat/ui` / `@maplat/core`). MaplatEditor runs on Windows and macOS.

MaplatEditor is open-source under the Apache License 2.0 (from version 0.7.0).
The package is **not published to npm** (`private: true` in `package.json`);
binaries are distributed via GitHub Releases.

## Caution

> ⚠ **Map positions and the map data format version change.**

**[Read this document in Japanese / 日本語で読む](https://github.com/code4history/MaplatEditor/blob/HEAD/README.ja.md)**

## Key Features

### Map and App Data Authoring

- Desktop application for authoring Maplat historical map data (Windows / macOS)
- GUI for map registration, ground control point (GCP) placement, and tile
  generation, with geocoder-assisted address search and one-click estimation
  of home position/zoom from GCPs or app sources
- Right-click a correspondence line to insert a midpoint GCP and split the
  line, restoring…
