---
repo: "hopechen067/MapStage"
name: "MapStage"
description: "MapStage: a narrative map stage for historical videos. MapLibre engine + agent skill, antique parchment look, routes, place names, seek(t) frame capture."
readmeQualityOk: true
url: "https://github.com/hopechen067/MapStage"
homepage: "https://hopechen067.github.io/MapStage/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
topics: ["agent-skill", "china", "gis", "historical-map", "maplibre", "maplibre-gl-js", "skill", "antique-map", "video", "narrative-map"]
stars: 488
forks: 66
openIssues: 1
closedIssues: 0
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2026-08-11T07:53:51Z"
lastCommitAt: "2026-10-25T08:40:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 20
maintainers: ["hopechen067", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/7df78cc406aada0fc178842a89115fa508a73b7ebe287eb1912606b79e448bfe/hopechen067/MapStage"
---

# MapStage

**English** | [中文](https://github.com/hopechen067/MapStage/blob/HEAD/README.zh-CN.md)

A narrative map stage for historical videos: one **MapLibre** engine plus one **agent skill**. Antique parchment basemap, routes that march, place names that fade in, cameras that follow the narration, and a `seek(t)` contract so HyperFrames, Remotion or Playwright can capture frame by frame.

## Live site

- **https://hopechen067.github.io/MapStage/** (GitHub Pages)
- **https://mapstage1.pages.dev/** (Cloudflare Pages mirror)

Home, docs, examples and the Studio tuner. Satellite imagery and terrain tiles are fetched at runtime, so you need internet access. Nothing to install.

| Path | What |
|------|------|
| `/` | Home: live map hero with a scrubbable timeline |
| `/docs/` | Docs, rendered straight from `mapstage/references/*.md` (people and agents read the same files) |
| `/examples/` | Example library, filtered by Look / Story / Stage / Play, each with source |
| `/studio/` | Studio: tune the look, copy the preset JSON |

## What it does

Three layers:

- **Look**: the basemap preset (v3), exported from the Studio tuner. Skins, relief, settlement tiers, optional region isolate.…
