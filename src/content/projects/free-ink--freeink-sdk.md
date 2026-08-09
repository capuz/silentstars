---
repo: "Free-Ink/freeink-sdk"
name: "freeink-sdk"
description: "A hardware-independent SDK for building e-paper reader firmware."
readmeQualityOk: true
url: "https://github.com/Free-Ink/freeink-sdk"
homepage: "https://freeink.org"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 183
forks: 44
openIssues: 5
closedIssues: 0
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2026-06-03T01:24:39Z"
lastCommitAt: "2026-08-09T04:46:56Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 77
undervaluedScore: 24
maintainers: ["itsthisjustin", "winst0niuss", "uxjulia"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc6d9640c307c00a4ca9f873b7fdd53a7901b938bcb3d88b464e95cdc646bc08/Free-Ink/freeink-sdk"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/freeink"]
---

# FreeInk SDK

A hardware-independent SDK for building e-paper reader firmware. FreeInk
abstracts every device-specific detail — display controller, waveforms/LUTs,
GPIOs, bus speeds, input style, touch, frontlight, audio — behind small,
injectable interfaces, so the firmware calls one generic API and gets
device-specific behavior. Adding a new device means adding data (a board
profile + a driver config), not editing the generic code.

It is **drop-in compatible** with firmware written against the original
`EInkDisplay` / `InputManager` / `BatteryMonitor` / `SDCardManager` / `BoardConfig`
API: switching to FreeInk is a matter of repointing the library path.

## What's included

- **Display facade and panel drivers** for SSD1677, SSD1683, UC8253, ED2208,
  IT8951, and external-library-backed panels.
- **Board profiles and capability gates** for display, input, touch, SD,
  frontlight, audio, microphone, RTC, sensors, buzzer, LEDs, and TLS networking.
- **Device managers** that keep firmware code stable across different boards:
  input, battery, SD, frontlight, LEDs, audio, microphone, RTC, sensors, and IMU.
- **FreeInkUI**, an optional immediate-mode UI layer for e-paper reader…
