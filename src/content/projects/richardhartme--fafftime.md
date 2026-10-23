---
repo: "richardhartme/fafftime"
name: "fafftime"
description: "Ultra cycling faff time analyser."
readmeQualityOk: true
url: "https://github.com/richardhartme/fafftime"
homepage: "https://fafftime.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 8
forks: 2
openIssues: 11
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-07T10:46:53Z"
lastCommitAt: "2026-10-23T08:47:35Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 62
undervaluedScore: 44
maintainers: ["richardhartme"]
openGraphImageUrl: "https://opengraph.githubassets.com/035c9c169f1aee788496d64e794829bd1f8eafbfad82d6aabac33269dc126ddc/richardhartme/fafftime"
---

# Ultra Cycling Faff Time Analyser

Ultra Cycling Faff Time Analyser helps ultra-distance riders understand where their time went during long events. Drop a Garmin FIT file into the React dashboard to explore faff/stop detection, gap analysis, and route visualisation – everything runs locally in the browser via the official Garmin FIT SDK.

Use the tool live at [https://fafftime.com](https://fafftime.com)

## Screenshot

## Key Features

- **Client-side Garmin FIT decoding** using `@garmin/fitsdk` with no server round trips
- **Faff and gap analysis** that surfaces slow periods, paused logging, and configurable stop thresholds
- **Comprehensive ride summary** for elapsed vs moving time, total distance, and key timestamps
- **Leaflet-powered mapping** with the full activity trace, per-period mini-maps, and Google Maps / Street View deep links
- **CSV export** of faff periods and recording gaps for further analysis in a spreadsheet
- **React UI workflow** with drag-and-drop uploads, a bundled example FIT file, instant recalculation, and tweakable analysis controls

## Project Structure

```
src/
├─ core/              # Pure TypeScript analysis pipeline and FIT helpers (with…
