---
repo: "waraku-chise/niricapture"
name: "niricapture"
description: "NiriCapture is a versatile screenshot tool for the Niri compositor."
originalDescription: "NiriCapture 是一款使用 Niri 合成器的多功能截图工具。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/waraku-chise/niricapture"
language: "C++"
languages: ["C++"]
languagePcts: [84]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-05T08:11:12Z"
lastCommitAt: "2026-11-24T14:04:25Z"
lastReleaseAt: "2026-11-09T05:45:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 55
maintainers: ["waraku-chise"]
openGraphImageUrl: "https://opengraph.githubassets.com/64ca454661d2e2c854f1c509cb82f3d1af252a2a8706a77f799cd4a7c8d43a0a/waraku-chise/niricapture"
---

# NiriCapture

[**Simplified Chinese**](https://github.com/waraku-chise/niricapture/blob/HEAD/README.md) | [English](https://github.com/waraku-chise/niricapture/blob/HEAD/README.en.md)

A native screenshot and annotation tool for **Niri**.

For region or full-screen captures, NiriCapture first freezes the desktop, then draws the selection overlay on all outputs, and then shows the annotation toolbar directly on the frozen selection. The freeze backend prefers the optional DMS CLI. Without DMS, it automatically falls back to `grim`. Window captures use **compositor-side, per-window rendering in Niri** rather than cropping from a desktop screenshot, so windows that are fully covered by other windows, as well as windows on non-current workspaces, can be captured in full.

## Interface Preview

The animation below comes from a real screen recording: drawing a rectangle and an arrow on the frozen selection, and opening the color / line width panel with `Q`.
