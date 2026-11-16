---
repo: "Ersiter/Eric-AirportItlwm"
name: "Eric-AirportItlwm"
description: "Native macOS Wi-Fi for Intel cards, from 802.11n to Wi-Fi 7 (BE200/BE201): Tahoe 26 and Sequoia 15, WPA3, 6 GHz, 802.11be, AirDrop/AWDL in development."
readmeQualityOk: true
url: "https://github.com/Ersiter/Eric-AirportItlwm"
homepage: "https://ersiter.github.io/Eric-AirportItlwm/"
language: "C++"
languages: ["C++", "C"]
languagePcts: [50, 48]
topics: ["airportitlwm", "itlwm", "macos", "openbsd", "sequoia", "tahoe", "intel-wifi", "kext", "be200", "ax210"]
stars: 8
forks: 0
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-10-25T13:36:02Z"
lastCommitAt: "2026-11-16T04:28:03Z"
lastReleaseAt: "2026-11-16T04:26:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 52
maintainers: ["Ersiter"]
openGraphImageUrl: "https://opengraph.githubassets.com/284cc58f4e19cd00348767cb00983addb01b7fbd68c45e83dbb48759624c8372/Ersiter/Eric-AirportItlwm"
discussionCount: 2
---

macOS Tahoe 26 and Sequoia 15 · WPA3 · 6 GHz · 802.11be · BE200 / BE201 and every card itlwm supports</p>

---

AirportItlwm taken from Wi-Fi 6 to Wi-Fi 7 (BE200, BE201), with AirDrop and Instant Hotspot on the way.
Every card it supported still works, on macOS's own Wi-Fi, with no HeliPort.

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
| AirDrop / AWDL | AC (9260/9560), AX, BE | 🧪 experimental: a test package exists, results on real hardware are pending, see [Continuity](#continuity) |
| Instant Hotspot (iPhone in the Wi-Fi menu) | all | 🧪 in development |

**Measured on a BE200** (macOS 26, 6 GHz, 320 MHz, two streams): link rate…
