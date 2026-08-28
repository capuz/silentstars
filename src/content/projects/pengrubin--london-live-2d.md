---
repo: "pengrubin/london-live-2d"
name: "london-live-2d"
description: "Real-time 2D map of all London transport — live Tube, DLR, Overground, Elizabeth line, buses, trains, river boats, and more on one interactive map."
readmeQualityOk: true
url: "https://github.com/pengrubin/london-live-2d"
homepage: "https://london.pengrubin.com"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [77, 21]
topics: ["live-map", "london", "map", "maplibre", "maplibre-gl", "pmtiles", "protomaps", "public-transport", "real-time", "tfl"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-23T20:02:19Z"
lastCommitAt: "2026-08-28T12:22:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 47
maintainers: ["pengrubin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/50c21242e3597d43775bed12da48754eba8bd1d6d9c864f0b0a36b1892aec3d1/pengrubin/london-live-2d"
---

# London Live — 2D Real-Time Transport Map

**Every train, bus, boat, ship, plane and helicopter over London — live, on one map.**

### 🌍 Live demo: **[london.pengrubin.com](https://london.pengrubin.com)**

Inspired by [Zone One](https://london.jamespotter.dev/), rebuilt in 2D at
Greater-London scale. Author: **PENG**.

## What's on the map

| Layer | Source | How positions are derived |
|---|---|---|
| 🚇 Tube · DLR · Overground · Elizabeth (19 lines) | TfL Unified API | No GPS in the feed — positions **inferred from arrival countdowns**, scheduled inter-station run times, and animated along real OSM track geometry |
| 🚆 National Rail (431 stations) | Darwin via Rail Data Marketplace | Inferred from departure boards + calling points, pathed over a baked station-to-station rail graph |
| 🚌 Buses (~6,700 live) | DfT Bus Open Data (SIRI-VM) | Real GPS + per-vehicle α-β-style tracker; **self-learning route geometry** snaps buses to their true paths (auto-retrains daily from collected traces) |
| ⛴ Riverboats (RB1/RB4/RB6/Woolwich Ferry) | TfL | Countdown inference along the OSM Thames centreline, with curved pier approaches |
| 🚡 Cable Car · 🚊 Tram | TfL Unified API | Same…
