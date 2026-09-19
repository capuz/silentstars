---
repo: "webprofusion/soundshed-guitar"
name: "soundshed-guitar"
description: "Soundshed Guitar is a fully featured guitar/bass effects app and plugin."
readmeQualityOk: true
url: "https://github.com/webprofusion/soundshed-guitar"
homepage: "https://guitar.soundshed.com"
language: "C++"
languages: ["C++", "TypeScript"]
languagePcts: [51, 33]
topics: ["guitar", "guitar-effects", "guitar-pedals", "linux", "macos", "neural-amp-modeler", "windows"]
stars: 67
forks: 17
openIssues: 16
closedIssues: 11
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2025-10-19T07:01:37Z"
lastCommitAt: "2026-09-19T01:18:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 44
maintainers: ["webprofusion-chrisc", "belowm", "AriKuorikoski"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f3d1f3939ae097b54555e5770ca06073f9d4f1fd3bd8710b3559befd88fd104/webprofusion/soundshed-guitar"
discussionCount: 1
---

# Soundshed Guitar

Soundshed Guitar is a guitar/bass effects app and plugin combining Neural Amp Modeler (NAM) with a modern UI. It targets VST3, AU, CLAP and AAX formats with an extensible signal graph architecture.

Downloads: https://guitar.soundshed.com

Requirements: x64 CPU with AVX2 support (Intel Haswell 2013+, AMD Excavator 2015+), or M1 onwards for macOS. Windows builds can drop to a lower SIMD baseline with `build_windows.bat --simd avx` (Intel Sandy Bridge 2011+, AMD Bulldozer 2011+, still fully vectorised) or `--simd sse2` (no AVX at all).

## Features

- Neural Amp Modeler DSP for amp/pedal captures, with optional global 2x–32x time-scaled oversampling
- Flexible signal graph with arbitrary effect ordering and parallel paths
- Preset management with category support and content-addressed resource deduplication
- Remote preset search/download for community sharing
- WebView UI (HTML/CSS/TypeScript)

## Documentation

See [docs/](https://github.com/webprofusion/soundshed-guitar/blob/HEAD/docs/) for architecture and reference documentation:

| Document | Description |
|----------|-------------|
| [Agent…
