---
repo: "edde746/mpv-build"
name: "mpv-build"
description: "Unified mpv build and patch pipeline for Plezy: per-commit content-addressed libmpv binaries for Apple, Android, Linux and Windows"
readmeQualityOk: true
url: "https://github.com/edde746/mpv-build"
language: "C"
languages: ["C", "Shell"]
languagePcts: [52, 24]
stars: 5
forks: 5
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-09-01T09:49:12Z"
lastCommitAt: "2026-10-13T10:57:42Z"
lastReleaseAt: "2026-09-01T20:39:44Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 73
maintainers: ["edde746", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/80f8682d4e06668c179e908a464e76005ad3d27fb85c510537fd3a0c371de358/edde746/mpv-build"
---

# mpv-build

One repository for every mpv supply chain Plezy ships: the upstream pins, the
patch series, and the build drivers that turn them into `libmpv` binaries for
Apple (XCFrameworks), Android (per-ABI native trees), Linux (prefix bundles)
and Windows (MinGW dev packages), each under `platforms/` or
`Sources/BuildScripts/`.

This repository starts with a clean history. The code it unifies came from:
the Apple driver from [edde746/MPVKit](https://github.com/edde746/MPVKit)
(a fork of [mpvkit/MPVKit](https://github.com/mpvkit/MPVKit), itself derived
from [kingslay/FFmpegKit](https://github.com/kingslay/FFmpegKit)); the Android
driver from [edde746/libmpv-android](https://github.com/edde746/libmpv-android)
(a fork of [jarnedemeulemeester/libmpv-android](https://github.com/jarnedemeulemeester/libmpv-android));
the Linux driver from Plezy's `linux/packaging`; and the Windows driver wraps a
pinned [shinchiro/mpv-winbuild-cmake](https://github.com/shinchiro/mpv-winbuild-cmake).
Development history up to the unification lives in those repositories.

## Layout

| Path | Purpose |
| ---- | ------- |
| `versions.json` | Single source of truth for component pins: upstream version, URL…
