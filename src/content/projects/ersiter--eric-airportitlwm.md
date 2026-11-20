---
repo: "Ersiter/Eric-AirportItlwm"
name: "Eric-AirportItlwm"
description: "Native macOS Wi-Fi for Intel cards, from 802.11n to Wi-Fi 7 (BE200/BE201): Tahoe 26 and Sequoia 15, WPA3, 6 GHz, 802.11be, AirDrop/AWDL in development."
readmeQualityOk: true
url: "https://github.com/Ersiter/Eric-AirportItlwm"
homepage: "https://ersiter.github.io/Eric-AirportItlwm/"
language: "C++"
languages: ["C++", "C"]
languagePcts: [51, 48]
topics: ["airportitlwm", "itlwm", "macos", "openbsd", "sequoia", "tahoe", "intel-wifi", "kext", "be200", "ax210"]
stars: 13
forks: 2
openIssues: 4
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-10-25T13:36:02Z"
lastCommitAt: "2026-11-19T11:47:12Z"
lastReleaseAt: "2026-11-16T04:26:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 74
undervaluedScore: 49
maintainers: ["Ersiter"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f9999c146e1b860cef55be3e2198f4560440f5f13281dcc360c4ff5a8f4525d/Ersiter/Eric-AirportItlwm"
discussionCount: 2
---

macOS Tahoe 26 and Sequoia 15 · WPA3 · 6 GHz · 802.11be · BE200 / BE201 and every card itlwm supports</p>

---

AirportItlwm taken from Wi-Fi 6 to Wi-Fi 7 (BE200, BE201), with AirDrop and Instant Hotspot on the way.
Every card it supported still works, on macOS's own Wi-Fi, with no HeliPort and no OpenCore Legacy Patcher Wi-Fi patches.

## What works

| Feature | Cards | Status |
|---|---|---|
| Scan, join, roam, private Wi-Fi address | all | ✅ |
| WPA2-Personal, WPA2-Enterprise (PEAP), WPA2/WPA3 transition networks | all | ✅ |
| WPA3-Personal (SAE, H2E), Enhanced Open (OWE) | all | ✅ on BE200 |
| 802.11ac (VHT), 160 MHz | AC and newer | ✅ |
| 802.11ax (HE) | AX and BE | ✅ on by default |
| 6 GHz | AX210/AX211/AX411, BE | ✅ on BE200 |
| 802.11be (EHT), 320 MHz, multi-link (eMLSR) | BE | ✅ 320 MHz on hardware; a multi-link router joins; link pairing still experimental |
| Sleep and wake, recovery from firmware errors | all | ✅ |
| AirDrop / AWDL | iwn (PAN), iwm, AX, BE | 🧪 experimental, see [Continuity](#continuity) |
| Instant Hotspot (iPhone in the Wi-Fi menu) | all | 🧪 in development |
