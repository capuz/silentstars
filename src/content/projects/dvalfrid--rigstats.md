---
repo: "dvalfrid/rigstats"
name: "rigstats"
description: "Hardware monitor & control center for Windows gaming PCs — live CPU/GPU telemetry on a second screen or game overlay, plus fan curves, power profiles, Ryzen/Radeon tuning and RGB lighting"
readmeQualityOk: true
url: "https://github.com/dvalfrid/rigstats"
homepage: "https://rigstats.app/"
language: "Rust"
languages: ["Rust", "C#"]
languagePcts: [61, 32]
topics: ["cpu", "dashboard", "gaming", "gpu", "hardware-monitoring", "rust", "system-monitor", "windows", "egui", "secondary-display"]
stars: 13
forks: 2
openIssues: 23
closedIssues: 128
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-13T23:09:33Z"
lastCommitAt: "2026-10-09T10:50:03Z"
lastReleaseAt: "2026-03-21T23:33:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 54
maintainers: ["dvalfrid", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c45db3324136a889e3d49be23f5b49474fbc80b2d5e546e14f0ca0d32f4a5d1/dvalfrid/rigstats"
---

# RIGStats (rig-dashboard)

RIGStats is a free hardware monitor and control center for Windows gaming PCs, built as a native Rust/egui app — no WebView, no telemetry.

- **Monitor** — live CPU, GPU, RAM, storage, network and motherboard sensors on a dedicated secondary display (portrait or landscape), as freely placed floating panels, or drawn into the desktop wallpaper.
- **Game overlay** — a compact, click-through metric strip on top of your game, toggled with **Ctrl+Alt+O**.
- **Control Center** — per-profile fan curves, Windows power plans, AMD Ryzen and Radeon power tuning, and RGB lighting (Aura Sync, Dynamic Lighting, Philips Hue), run by a background service so it keeps working with the app closed.
- **Session history** — record a session and chart it afterwards.

For the full product overview, screenshots, and download, see [rigstats.app](https://rigstats.app).

## Installation

- **winget:** `winget install Codeby.RIGStats`
- **Direct download:** grab the latest installer from the [Releases page](https://github.com/dvalfrid/rigstats/releases/latest)

Both install the same signed NSIS installer, which also registers the sensor sidecar as a Windows Service. See…
