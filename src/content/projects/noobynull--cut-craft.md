---
repo: "NoobyNull/Cut-Craft"
name: "Cut-Craft"
description: "Cut Craft: a source-available (free for noncommercial use), Vectric Aspire-style 2D/3D design and CNC toolpath app in Rust"
readmeQualityOk: true
url: "https://github.com/NoobyNull/Cut-Craft"
homepage: "https://cutcraft.myminiapp.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["carving", "cnc", "just-for-fun", "vibe-coding"]
stars: 30
forks: 1
openIssues: 1
closedIssues: 287
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-24T03:24:19Z"
lastCommitAt: "2026-11-17T12:03:07Z"
lastReleaseAt: "2026-11-08T20:43:24Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 50
maintainers: ["NoobyNull", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/c047bcbd8a7b6d55dc7bf4427daa3daa1a5372bd136bb72454a189bab46cdb4a/NoobyNull/Cut-Craft"
---

# Cut Craft

A desktop app for designing 2D and 3D work and turning it into CNC toolpaths and G-code.
Draw vectors, build relief models, pick tools from a tool database, preview the cut in 3D and
save G-code for your machine, all in one window. Written in Rust; runs on Linux, macOS and Windows.

Cut Craft is free for noncommercial use only (see [License](#license)). It is an early **alpha**: expect rough edges, and
please report them (see [Reporting bugs](#reporting-bugs)).

## Contents

- [What it does](#what-it-does)
- [A tour](#a-tour)
- [Getting Cut Craft](#getting-cut-craft)
- [Using it](#using-it)
- [Reporting bugs](#reporting-bugs)
- [Building from source](#building-from-source)
- [Acknowledgements](#acknowledgements)
- [How the code is laid out](#how-the-code-is-laid-out)
- [License](#license)

## What it does

### Design (2D)

- Rectangles (square, rounded or notched corners), circles, ellipses, polygons, stars, arcs,
  curves, polylines and freehand lines; text, text bent into an arc with handles, text in a
  box that stretches to fit, text on a curve, auto layout text (words wrapped and sized to
  fill a shape), dimensions.
- Node editing, joining and closing vectors,…
