---
repo: "CramBL/geotrace"
name: "geotrace"
description: "High-performance GNSS data visualizer, with advanced debugging and anomaly detection features"
readmeQualityOk: true
url: "https://github.com/CramBL/geotrace"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["anomaly-detection", "debugging-tool", "gnss", "gui", "visualization"]
stars: 5
forks: 0
openIssues: 18
closedIssues: 74
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-05-30T13:54:46Z"
lastCommitAt: "2026-09-06T08:02:51Z"
lastReleaseAt: "2026-06-26T07:00:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 59
maintainers: ["CramBL"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc74a5ba3c034c838c80e02721a7b07e8df501c77df3a31c6a8d3760a5d5717e/CramBL/geotrace"
---

# GeoTrace

> [!NOTE]
> **Beta** - expect minor issues/quirks and frequent updates.

GeoTrace is a desktop application for inspecting GPS/GNSS navigation data.
It reads `.gtd` recording files and renders position traces, per-satellite signal quality, derived analysis metrics, and interference data on an interactive map and time-series plot.

Everything in a recording is drawn as recorded. Outliers, gaps, and bad fixes are surfaced.
Narrowing the view is done through explicit steps, such as a time span filter, per-category visibility toggles, a query, etc.

_(synthetic tiles) A short ride with multi-constellation satellite data, custom and event markers, and a 59-second tunnel fix-loss followed by gradual signal reacquisition.
The screenshot always matches the current build: it is the UI snapshot test baseline, which draws a labelled grid in place of the base map._

## Features

**Map** - OpenStreetMap and satellite basemaps, several recordings at once, drag-and-drop loading.
Track points, markers, satellite labels, and sky glyphs are drawn as vector meshes and each category can be hidden on its own.

**Time-series plot** - velocity, heading, EPH, clock delta, satellites seen and…
