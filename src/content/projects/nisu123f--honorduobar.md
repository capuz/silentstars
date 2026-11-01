---
repo: "nisu123f/HonorDuoBar"
name: "HonorDuoBar"
description: "Honor Duo Bar - LSPosed module: merge Wi-Fi / mobile signal / battery into one status-bar glyph"
originalDescription: "Honor Duo Bar - LSPosed module: merge Wi-Fi / mobile signal / battery into one status-bar glyph"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/nisu123f/HonorDuoBar"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-21T11:31:54Z"
lastCommitAt: "2026-11-01T10:44:20Z"
lastReleaseAt: "2026-10-24T15:27:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 44
maintainers: ["nisu123f"]
openGraphImageUrl: "https://opengraph.githubassets.com/57112a6fb807f4f2614c06f3effa4ecf78cbf76f98e11f6cd5dca4c9756594e4/nisu123f/HonorDuoBar"
---

# Honor SystemUI Enhancement (HonorSystemUI)

An LSPosed module for the Honor / Honor system UI (`com.android.systemui`) that provides only **status bar merging**: it combines Wi-Fi, mobile signal, and battery into a single Duo-style glyph.

> This project uses AI to imitate [HyperDuo](https://github.com/yixing233/HyperDuo) and implement the status bar merging feature on Honor MagicOS 11.

---

## Feature Overview

### Status Bar

| Switch | Default | Description |
| --- | --- | --- |
| Status bar merging | On | Merges Wi-Fi, mobile signal, and battery into one Duo-style glyph: an outer battery ring, Wi-Fi arcs / battery percentage inside the ring, and signal dots at the bottom. The three native icons are hidden. |
| Merged: show Wi-Fi arcs | On | Draws Wi-Fi arcs in the upper part of the ring. The number of arcs follows the actual signal strength. |
| Merged: show mobile signal dots | On | Draws 4 signal dots at the bottom of the ring (single SIM, uses the default data card). |
| Merged: show battery percentage | On | Shows the battery percentage at the center of the ring. A lightning bolt is always shown while charging. |
| Merged: show 5G/4G when no Wi-Fi | On | When there is…
