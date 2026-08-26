---
repo: "YamsSE/Arc-Power"
name: "Arc-Power"
description: "Arc Power"
readmeQualityOk: true
url: "https://github.com/YamsSE/Arc-Power"
homepage: "https://yamsse.github.io/Arc-Power/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [71, 23]
topics: ["gpu", "gpu-monitoring", "intel-arc", "intel-arc-control-setup", "intel-arc-pro", "overclock", "overclocking", "overclocking-software", "overclocking-tools", "overclocking-tuning"]
stars: 24
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-08-04T21:04:19Z"
lastCommitAt: "2026-08-26T04:16:44Z"
lastReleaseAt: "2026-08-26T03:44:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 40
maintainers: ["YamsSE"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d6b6c5c159ae38963a37717750903b6402855d1f8120346f179cdea11dba014/YamsSE/Arc-Power"
---

</p>

</p>

<h1 align="center">Arc Power</h1>

## Features

- **Tuning** - power limit (W), core frequency offset (MHz) or a clock lock (frequency + voltage pair), voltage offset, and temperature limit (°C), applied through Intel's documented IGCL API with a warranty-waiver gate and read-back verification on every apply. Offset and lock applies are mutually exclusive (applying one clears the other). Power-limit applies land in under a second, with an instant driver-store fallback when the sysman runtime isn't ready. Expert controls (VRAM frequency offset, VRAM voltage offset, custom VF curves) appear only on hardware that reports them.
- **Extended range** - on Alchemist, power limits up to **375 W** and temperature limits up to **115 °C** (elevation prompt + explicit confirm required). Above 252 W the limit applies through the Level Zero sysman power pair (sustained + burst written together); values above the app-verified 375 W ceiling are refused honestly, never clamped.
- **Fan control** - auto / curve / fixed modes with an interactive SVG curve editor and adaptive presets (Driver Curve / Quiet / Max) derived from the driver's own curve. Fixed mode is verified on Alchemist…
