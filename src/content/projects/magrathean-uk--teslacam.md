---
repo: "magrathean-uk/Teslacam"
name: "Teslacam"
description: "Native macOS app and Python CLI for browsing and exporting TeslaCam footage."
url: "https://github.com/magrathean-uk/Teslacam"
homepage: "https://magrathean.uk"
language: "Swift"
languages: ["Swift", "Python"]
languagePcts: [67, 27]
topics: ["cctv", "dashcam", "ffmpeg", "tesla", "video-processing", "dashcam-viewer", "macos", "open-source", "swift", "teslacam"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2025-11-05T19:56:07Z"
lastCommitAt: "2026-07-03T12:21:25Z"
lastReleaseAt: "2026-05-06T10:36:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 57
maintainers: ["bolyki"]
openGraphImageUrl: "https://opengraph.githubassets.com/a48d8a355dd756fe6f7b7dc9f16cf56cc8c0b0d5aa6f798da9abdb3717dfab02/magrathean-uk/Teslacam"
---

# Teslacam

Teslacam ships two developer surfaces from one repo:

Built by [Magrathean UK](https://magrathean.uk).

- a native macOS app for browsing and exporting TeslaCam footage on Apple Silicon Macs
- a separate cross-platform Python CLI for scripted or interactive exports on macOS, Linux, and Windows

The native app uses the shipping Swift export path. The CLI keeps the portable ffmpeg-based workflow.

## Canonical docs

- [Agent guide](./AGENTS.md)
- [Runbook](./RUNBOOK.md)

## Repo map

- `TeslaCam/` - macOS app source, native export, playback, telemetry, and resources
- `TeslaCamTests/` and `TeslaCamUITests/` - native test coverage
- `teslacam_cli/` - Python CLI package
- `tests/` - CLI unit and integration tests
- `script/test_native.sh` - native build-and-test lane
- `tools/TeslaCamOverlayGenerator.swift` - local utility built on the app parser
- `_legacy/` - old path, kept as reference only
- `TeslaCam/Resources/LICENSES.md` - kept third-party license asset

## Requirements

- Python 3.9+
- `ffmpeg` and `ffprobe`
- `libx265` support for lossless or CRF 6 HEVC CLI export
- Xcode on macOS for the native app

## Quick start

Primary CLI:

```sh
./teslacam-cli
```…
