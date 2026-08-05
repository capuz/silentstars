---
repo: "webprofusion/soundshed-guitar"
name: "soundshed-guitar"
description: "Soundshed Guitar is a fully featured guitar/bass effects app and plugin."
readmeQualityOk: true
url: "https://github.com/webprofusion/soundshed-guitar"
homepage: "https://guitar.soundshed.com"
language: "C++"
languages: ["C++", "TypeScript"]
languagePcts: [49, 33]
topics: ["guitar", "guitar-effects", "guitar-pedals", "linux", "macos", "neural-amp-modeler", "windows"]
stars: 42
forks: 5
openIssues: 15
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-10-19T07:01:37Z"
lastCommitAt: "2026-08-05T06:08:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 81
undervaluedScore: 40
maintainers: ["webprofusion-chrisc", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc57f66cafdcfa7c4727ee4885ebb15692ee673ada04d37810a4c007310466dc/webprofusion/soundshed-guitar"
discussionCount: 1
---

# Soundshed Guitar

Soundshed Guitar is a guitar/bass effects app and plugin combining Neural Amp Modeler (NAM) with a modern UI. It targets VST3, AU, CLAP and AAX formats with an extensible signal graph architecture.

Downloads: https://guitar.soundshed.com

Requirements: x64 CPU with AVX2 support (circa late 2015+; use `build_windows.bat --no-avx2` for a non-AVX2 Windows build), or M1 onwards for macOS.

## Features

- Neural Amp Modeler DSP for amp/pedal captures
- Flexible signal graph with arbitrary effect ordering and parallel paths
- Preset management with category support and content-addressed resource deduplication
- Remote preset search/download for community sharing
- WebView UI (HTML/CSS/TypeScript)

## Documentation

See [docs/](https://github.com/webprofusion/soundshed-guitar/blob/HEAD/docs/) for architecture and reference documentation:

| Document | Description |
|----------|-------------|
| [Agent Quickstart](https://github.com/webprofusion/soundshed-guitar/blob/HEAD/docs/agent-quickstart.md) | Minimal, high-signal guide for AI agents |
| [Architecture Overview](https://github.com/webprofusion/soundshed-guitar/blob/HEAD/docs/architecture-overview.md) | System…
