---
repo: "deltahedra3d/freecad-launcher"
name: "freecad-launcher"
description: "A launcher to manage FreeCAD versions (stable & dev) and test FreeCAD Pull Requests."
readmeQualityOk: true
url: "https://github.com/deltahedra3d/freecad-launcher"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 46
forks: 3
openIssues: 6
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-09-17T15:13:13Z"
lastCommitAt: "2026-10-27T09:16:27Z"
lastReleaseAt: "2026-09-30T11:17:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 61
undervaluedScore: 25
maintainers: ["deltahedra3d"]
openGraphImageUrl: "https://opengraph.githubassets.com/476ee443ff8392e1bace1d6324d7c25d7ef86d546b1a0aadb20f1965c95c9f40/deltahedra3d/freecad-launcher"
---

# FreeCAD Smart Launcher

A desktop helper for **Linux** and **Windows** to manage FreeCAD builds, test GitHub pull requests, and browse local projects, all from one window.

> ⚠️ FreeCAD builds are downloaded directly from the official [FreeCAD GitHub releases](https://github.com/FreeCAD/FreeCAD).
> This is an unofficial launcher, not affiliated with the FreeCAD project.

## Features

- **Version management**: detect, download, launch, and delete FreeCAD **stable** and **weekly** builds automatically.
  - Linux: single-file `.AppImage`.
  - Windows: portable `.7z` / `.zip` archive, extracted into its own folder.
- **Pull request testing**: fetch open PRs from `FreeCAD/FreeCAD`, view the conversation/comments, compile a PR with `cmake`/`ninja` (or with [`pixi`](https://pixi.sh) if that's how you build FreeCAD), and launch the resulting build directly.
- **Guided full build with pixi**: no existing FreeCAD source tree? The **"Compile FreeCAD with pixi…"** button clones `FreeCAD/FreeCAD` (or reuses a folder you already have), then walks you through `pixi run configure` and `pixi run build` step by step, with a confirmation before each stage and a live progress dialog. `git` and…
