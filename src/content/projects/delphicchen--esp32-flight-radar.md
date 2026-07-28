---
repo: "delphicchen/esp32_flight_radar"
name: "esp32_flight_radar"
description: "esp32 desktop device to show flight / weather / clock  integrated with Home assistant"
readmeQualityOk: true
url: "https://github.com/delphicchen/esp32_flight_radar"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [70, 23]
stars: 40
forks: 2
openIssues: 4
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-05T13:13:59Z"
lastCommitAt: "2026-07-28T14:56:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 31
maintainers: ["delphicchen", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac2525611506dde0ef7d4d1a77e7189461d521e22a81c5fc9027270abb0f8a30/delphicchen/esp32_flight_radar"
discussionCount: 0
---

# ✈️ ESP32 Flight Radar

A desktop flight-radar ornament for the **ESP32-S3 5" 800×480 RGB touch panel**, built entirely with **ESPHome**. It shows live aircraft over your location on an ATC-style radar scope, and doubles as a weather-radar display, a Home Assistant panel, and an alarm clock.

> 一款以 **ESPHome** 打造的桌面航班雷達擺件,執行於 **ESP32-S3 5 吋 800×480 RGB 觸控屏**。以航管雷達風格顯示你所在位置上空的即時航班,同時也是氣象雷達顯示器、Home Assistant 控制面板與鬧鐘。

Inspired by [AnthonySturdy/micro-radar](https://github.com/AnthonySturdy/micro-radar) — reimagined for a large landscape touch display with a much larger feature set.

---

**[English](#english) · [中文](#中文)**

## 📸 Demo / 畫面

## 🎬 Demo video / 示範影片

▶ **[Watch the full demo video / 觀看完整示範影片](https://github.com/delphicchen/esp32_flight_radar/blob/HEAD/docs/demo.mp4)**

---

## English

### Features

- **Live flight radar** — pulls aircraft states from the [OpenSky Network](https://opensky-network.org/), [airplanes.live](https://airplanes.live/) or [adsb.lol](https://adsb.lol/) around your coordinates and plots them on a 480×480 radar scope (up to **40 aircraft**, nearest first) with a rotating sweep, fading trail, and target glow as the beam passes each aircraft.
-…
