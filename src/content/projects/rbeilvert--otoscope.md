---
repo: "rbeilvert/otoscope"
name: "otoscope"
description: "Wi-Fi otoscope companion app"
readmeQualityOk: true
url: "https://github.com/rbeilvert/otoscope"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-26T22:52:58Z"
lastCommitAt: "2026-07-11T05:56:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 17
maintainers: ["rbeilvert"]
openGraphImageUrl: "https://opengraph.githubassets.com/edd90d008bdf700335254933777fd16c7e2bb8ab39811ababf874c36ddd5e9e1/rbeilvert/otoscope"
---

<h1 align="center">
Otoscope
</h1>

    A FOSS Android app for cheap Wi-Fi otoscope cameras.
</p>

---

Otoscope is a reverse-engineered drop-in replacement for the proprietary companion apps these cameras ship with, with none of their ad SDKs, analytics, or trackers.

- Discovers the camera over Bluetooth Low Energy.
- Joins the camera's Wi-Fi access point in an isolated, process-bound network. No impact on your saved Wi-Fi config.
- Streams live video over the camera's UDP protocol (pure Kotlin, no proprietary `.so`, no FFmpeg dependency).
- Auto-rotates the image using the camera's on-board accelerometer / gyro, clipped to a circular mask matching the otoscope lens.
- Horizontal-mirror toggle for self-examination.

## Hardware compatibility

The app supports three camera families. The hardware is identified by its BLE advertisement, and the right protocol is selected automatically.

| Family | SSID prefix | Wi-Fi auth | Companion app | Status |
| ------ | ----------- | ---------- | ------------- | ------ |
| Wudaopu / Xylla | `Enjoy-XXXXXX`, `JesHome-XXXX` | open | "AIR-Look" (`com.air.airlook`) | working |
| iTiMO | `iTiMO-XXXXXX` | open | "iTiMO" (`com.molink.john.itimo`) |…
