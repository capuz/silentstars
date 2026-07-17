---
repo: "siriushsu/taiwan-rail-live"
name: "taiwan-rail-live"
description: "Rail Island - Animating all railways in Taiwan on a real map: TRA (including real-time delays), THSR, various MRTs and light rails operate according to actual schedules; you can follow trains to see avoidance of intersections, check predictions for level crossings, and nearby train schedules."
originalDescription: "軌島——在真實地圖上動畫化全台鐵道：台鐵（含即時誤點）、高鐵、各捷運與輕軌依實際時刻表運行；可跟隨列車看待避交會、查平交道通過預測與附近火車班次。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/siriushsu/taiwan-rail-live"
homepage: "https://railisland.tw"
language: "HTML"
languages: ["HTML"]
languagePcts: [76]
stars: 10
forks: 0
openIssues: 3
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-08T16:40:08Z"
lastCommitAt: "2026-07-17T05:59:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 47
maintainers: ["siriushsu"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c21d572939a6345e5f915c9c3a130660b64dca63ab7e67f071d83550d58a6f5/siriushsu/taiwan-rail-live"
---

# Rail Island · Real-time Trajectory of Taiwan Railways

**Online version: https://railisland.tw** (Backup: https://siriushsu.github.io/taiwan-rail-live/)

> Animating the operation of all railway trains in Taiwan on a real map - TRA (including real-time delays every minute), THSR, and various MRTs and light rails, operating according to actual schedules; you can follow trains to see avoidance of intersections, check predictions for level crossings, and nearby train schedules.
> (Inspired by Brilliant Maps' NYC transport/London Underground timelapse.)
> All front-end is in one file `index.html`; data is in `data/`; scripts for fetching/building data are in `scripts/`.

## How to Run

```bash
cd MRT Animation
python3 -m http.server 5178      # Or use the "static" setting in .claude/launch.json
# Open http://localhost:5178
```

Requires internet (Leaflet CDN, CARTO/Esri map tiles). Data files are already in the repo, trains can be loaded offline.

## Covered Systems

The system menu is presented in grouped tabs: **All Taiwan in one frame (default) / National Rail (TRA + THSR) / North Taipei / Central and Southern Taiwan**.

| System | Mode | Data |
|---|---|---|
| TRA | Official…
