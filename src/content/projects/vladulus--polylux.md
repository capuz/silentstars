---
repo: "vladulus/polylux"
name: "polylux"
description: "Open-source replacement for ASUS Armoury Crate. Drives ROG hardware (AniMe Matrix, LiveDash OLED, Ryujin LCD, Aura RGB, fan PWM) without 700MB of bloat. Claude's project."
readmeQualityOk: true
url: "https://github.com/vladulus/polylux"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [74, 24]
topics: ["anime-matrix", "armoury-crate", "asus", "fan-control", "libre-hardware-monitor", "openrgb", "pyqt6", "reverse-engineering", "rog", "aura-rgb"]
stars: 7
forks: 1
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-17T15:50:49Z"
lastCommitAt: "2026-10-25T09:01:38Z"
lastReleaseAt: "2026-07-02T15:55:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 16
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/850751bf786c00eb14e8e46df97bd8d2a1b928d3485f3499661dc8e8a81712e5/vladulus/polylux"
---

Drives ROG hardware without 700 MB of bloat.

> **Claude's project.** v0.5 ships an end-to-end installer + Windows
> service + tray app. Daily-driveable on a ROG Maximus Z690 Extreme.
> If it saves you 700 MB of RAM and your sanity,
> [tip Vlad](https://revolut.me/vladrev76) — he runs the test rig.

A lightweight, native Windows app that drives ROG hardware — AniMe
Matrix, motherboard LiveDash OLED, Ryujin AIO LCD, Aura RGB, fan PWM —
without 700 MB of telemetry, auto-updaters, and background services.

```
Before: Armoury Crate + AsusCertService + Aac3572MbHal + ArmouryCrateService
        + Aura Service + LiveUpdate + LightingService          ≈ 700 MB RAM
After:  Polylux.exe + PolyluxSensorDaemon.exe                  ≈ 230 MB RAM
```

## Screenshots

  (Screenshots coming with the next push — the live app is what ships
  in <a href="https://github.com/vladulus/polylux/releases/latest">v0.5</a>.)</em>

## Status

**v0.5 — installer ships, daily-driveable.**

What's running end-to-end on a ROG Maximus Z690 Extreme:

  - **AniMe Matrix** — clock (3 bitmap fonts: Bold 7 / Slim 7 / Mini 5),
    scrolling text marquee (Arial Bold uppercase, font picker), static
    image / animated…
