---
repo: "socquique/capsule-radar"
name: "capsule-radar"
description: "Live ADS-B aircraft radar for the Waveshare ESP32-S3-Touch-AMOLED-1.75 (round AMOLED + touch). Browser-flashable."
readmeQualityOk: true
url: "https://github.com/socquique/capsule-radar"
language: "C"
languages: ["C"]
languagePcts: [91]
stars: 94
forks: 47
openIssues: 5
closedIssues: 13
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2026-06-08T15:44:03Z"
lastCommitAt: "2026-09-22T08:46:09Z"
lastReleaseAt: "2026-06-09T13:31:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 34
maintainers: ["socquique", "sgmess", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/8422b30a147e8865358a862259eba837e5c3da5c8cb3b1be1d64e6ffab17e5d7/socquique/capsule-radar"
---

# Capsule Radar 🛩️

</p>

</p>

A live **ADS-B aircraft radar** for the **Waveshare ESP32-S3-Touch-AMOLED-1.75** — a round 466×466 AMOLED with capacitive touch. It pulls nearby aircraft from a free online feed over WiFi and plots them on a touch radar scope centered on your location, with live flight details and selectable visual skins.

> Visual reference: open [`assets/plane_radar_2.0_mockup.html`](https://github.com/socquique/capsule-radar/blob/HEAD/assets/plane_radar_2.0_mockup.html) in a browser.

| Phosphor | Orb | Amber CRT | Military |
|:--:|:--:|:--:|:--:|
|  |  |  |  |

<sub>Captured from the bundled desktop simulator (the device screen is round; the square corners are off-panel).</sub>

## Features

- **Live traffic** from [airplanes.live](https://airplanes.live), [adsb.fi](https://adsb.fi/) and [adsb.lol](https://adsb.lol) (free, non-commercial), updated every couple of seconds. Each provider is paced independently, so one refusing or rate-limiting does not stop the feed. Memory-safe streaming parser with a hard aircraft cap. *Note: airplanes.live is now [contributor-only](https://airplanes.live/get-started/) — if you run one of their feeders, your radar uses their…
