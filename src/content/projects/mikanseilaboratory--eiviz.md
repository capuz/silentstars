---
repo: "MikanseiLaboratory/eiviz"
name: "eiviz"
description: "Next-generation vision mixer with unlimited M/E & Cross-platform support. Inspired by vMix, Panasonic Kairos, OBS-Studio."
readmeQualityOk: true
url: "https://github.com/MikanseiLaboratory/eiviz"
homepage: "https://mikanseilaboratory.github.io/eiviz/"
language: "Rust"
languages: ["Rust", "C#"]
languagePcts: [55, 25]
topics: ["video-processing", "video-streaming", "videoswitcher", "visionmixer", "ndi", "omt", "openmediatransport", "avoverip"]
stars: 35
forks: 3
openIssues: 55
closedIssues: 167
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-08-23T15:14:49Z"
lastCommitAt: "2026-11-16T04:29:01Z"
lastReleaseAt: "2026-08-31T02:09:41Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 95
undervaluedScore: 46
maintainers: ["FlowingSPDG"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1343903785/74e0bc49-e31a-4a9c-a84a-ea779ab2c3a3"
discussionCount: 1
---

# eiviz

A cross-platform vision mixer with unlimited M/E. eiviz / 映像(eizou) + visual.

| Platform | Graphics | Status |
| --- | --- | --- |
| Windows x64 | Direct3D 12 or Vulkan | Supported |
| Windows Arm | Direct3D 12 or Vulkan | Under Development |
| macOS | Metal | Supported (Apple Silicon; verified on M3) |
| Linux | Vulkan | CLI Only |

[Documentation](https://mikanseilaboratory.github.io/eiviz/en/) · [日本語](https://github.com/MikanseiLaboratory/eiviz/blob/HEAD/README.ja.md)

## Install

[Download](https://github.com/MikanseiLaboratory/eiviz/releases/latest) · [all releases](https://github.com/MikanseiLaboratory/eiviz/releases)

### Windows x64

Run `eiviz-*-win-x64-setup.exe`.

### macOS Apple Silicon (`macos-arm64`)

Run `eiviz-*-macos-arm64.pkg`.

macOS 14 or later on Apple Silicon is the supported target. The package is ad-hoc
signed until notarization credentials are wired into the release; if Gatekeeper
blocks it, right-click the package and choose Open, or run
`xattr -dr com.apple.quarantine /Applications/eiviz.app` after installing.

macOS DeckLink I/O is not supported; use Windows for DeckLink hardware. The
macOS Pro module still provides RTMP, Replay, and…
