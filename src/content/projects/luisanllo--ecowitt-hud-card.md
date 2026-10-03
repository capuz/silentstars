---
repo: "luisanllo/ecowitt-hud-card"
name: "ecowitt-hud-card"
description: "Custom Lovelace card for Home Assistant for Ecowitt weather stations — temperature, wind, pressure, rain, sun position, and heat/UV risk indices in one tappable panel."
readmeQualityOk: true
url: "https://github.com/luisanllo/ecowitt-hud-card"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["custom-card", "ecowitt", "hacs", "hacs-plugin", "home-assistant", "lovelace-card", "weather-station"]
stars: 7
forks: 2
openIssues: 1
closedIssues: 11
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-07-23T18:17:53Z"
lastCommitAt: "2026-10-03T09:21:31Z"
lastReleaseAt: "2026-07-29T21:41:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 63
maintainers: ["luisanllo", "ohaue"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1310244199/e0678a18-7467-4fd1-820f-c25e94687f67"
---

# Weather Station Card (Ecowitt & more)

An instrument-panel Lovelace card for Home Assistant, built for Ecowitt
weather stations — and works with any station whose Home Assistant
integration exposes comparable sensors (temperature, wind, rain, UV...).
Temperature, wind, pressure, rain, and heat/UV risk indices in a single
readable panel — every value is tappable and opens Home Assistant's native
history dialog.

 

*Light and dark mode — follows your active Home Assistant theme automatically.*

## Features

- 🌡️ Current temperature, feels-like, and **last 24h high/low with the time each occurred**
- 📈 Temperature trend chart for the last few hours, with an optional humidity overlay (dual axis, customizable colors) and a hover tooltip showing time/temperature/humidity
- 🌅 Sun position bar (sunrise/sunset) with a live marker and countdown — can be hidden
- 🧭 Wind compass with speed, gust, and direction
- ☔ Rain block: peak intensity over a short recent window (avoids the "always reads 0" problem of spiky instantaneous rain-rate sensors), today's total (or a rolling window total for cumulative-counter sensors), and rain sensor status
- ⛈️ Optional lightning block: strike count,…
