---
repo: "Hackdex-App/hackdex-website"
name: "hackdex-website"
description: "A website for easy hack discovering, uploading, and patching."
readmeQualityOk: true
url: "https://github.com/Hackdex-App/hackdex-website"
homepage: "https://hackdex.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 67
forks: 16
openIssues: 21
closedIssues: 26
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2025-10-16T10:12:44Z"
lastCommitAt: "2026-08-30T00:43:45Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 84
undervaluedScore: 38
maintainers: ["jschoeny", "andygeorge"]
openGraphImageUrl: "https://opengraph.githubassets.com/a488c9598f4a15de74e19c95f66b7ce32826357b31154beabfc0b12dfba9c10c/Hackdex-App/hackdex-website"
fundingLinks: ["KO_FI:https://ko-fi.com/te_on"]
---

# Hackdex

> **Disclaimer**: A good chunk of this code was initially written with AI assistance using Cursor. I later pledged to not use AI in future contributions, but due to life circumstances causing my time to be incredibly limited now, I made the difficult decision to resume using AI assistance in order to prevent Hackdex from going dormant and becoming neglected.

## What is Hackdex?

Hackdex is a community hub for discovering and sharing Pokémon romhack patches. Players link their own legally obtained base roms once, then easily patch locally in the browser and download the patched rom. Hackdex only stores patches, screenshots, and metadata—never any roms—so distribution stays practical without any of the legal pitfalls. Creators get a consistent place to publish, version, and present their projects.

## Core features

- **Discover**: curated hacks with screenshots, tags, versions, and summaries
- **Submit**: metadata, screenshots, social links, and a `.bps` or `.xdelta` patch file
- **Patch in the browser**: BPS via [RomPatcher.js](https://github.com/marcrobledo/RomPatcher.js); xdelta (VCDIFF) via a WASM build of [xdelta3](https://github.com/jmacd/xdelta) with glue from…
