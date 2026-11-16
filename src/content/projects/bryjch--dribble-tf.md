---
repo: "bryjch/dribble.tf"
name: "dribble.tf"
description: "View TF2 stv demos in the browser"
readmeQualityOk: true
url: "https://github.com/bryjch/dribble.tf"
homepage: "https://dribble.tf"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 23]
stars: 40
forks: 7
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2020-06-20T13:48:12Z"
lastCommitAt: "2026-11-16T11:52:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 76
undervaluedScore: 53
maintainers: ["bryjch", "Arie", "mitchcl"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f3d4b87d502496591882757a9fd5ed8477c43b8bb2cfa9e5a50bcb023d7987b/bryjch/dribble.tf"
fundingLinks: ["KO_FI:https://ko-fi.com/bryjch"]
---

## TF2 Demo Replay in Browser / [dribble.tf](https://dribble.tf/)

View your Team Fortress 2 STV demo files directly in the browser.

Utilizes [three.js](https://threejs.org) for browser based 3D rendering.

Models are primarily served as glTF assets.

### Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Runs the viewer locally. Models load from `public/models`, so freshly built maps can be checked here before they're uploaded. |
| `npm run build` | Builds the site for production, where models load from the CDN (`VITE_APP_ASSET_URL`). |
| `npm run assets` | The step-by-step way to update the models: gets TF2's files, rebuilds viewmodels and buildings, builds maps, uploads `public/models` to the CDN and refreshes its cache. It checks your AWS login and finds the bucket itself, and every step can be skipped. |
| `npm run build:maps -- <map>...` | Converts maps from their BSP (downloaded from serveme.tf) into `public/models/maps`. Unchanged maps are skipped; `--force` rebuilds them. |
| `npm run maps:popular` | Reads recent demos from demos.tf and lists the maps with no 3D map, or shown on another version, with a `build:maps` command for the most played ones. |
|…
