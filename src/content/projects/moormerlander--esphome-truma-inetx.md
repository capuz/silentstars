---
repo: "Moormerlander/esphome-truma-inetx"
name: "esphome-truma-inetx"
description: "ESPHome component: connect the Truma iNet X panel directly to Home Assistant via ESP32 Bluetooth – no BLE proxy needed"
readmeQualityOk: true
url: "https://github.com/Moormerlander/esphome-truma-inetx"
language: "C++"
languages: ["C++"]
languagePcts: [89]
topics: ["ble", "bluetooth-low-energy", "camper", "esphome", "inetx", "motorhome", "truma", "wohnmobil", "esphome-device", "home-assistant"]
stars: 5
forks: 2
openIssues: 2
closedIssues: 1
watchers: 4
contributors: 2
recentReleases: 10
createdAt: "2026-11-17T08:02:41Z"
lastCommitAt: "2026-11-26T15:23:46Z"
lastReleaseAt: "2026-11-25T15:27:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 50
maintainers: ["Moormerlander", "AppleFossil"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7616877da0ecf2240c6f0c88093b8123b7ae262435140d1f79a52fe391ab6b1/Moormerlander/esphome-truma-inetx"
discussionCount: 2
---

# Truma iNet X → ESPHome (direct BLE connection)

🇬🇧 English · 🇩🇪 [Deutsche Version](https://github.com/Moormerlander/esphome-truma-inetx/blob/HEAD/README.de.md)

ESPHome component for a **classic ESP32**: the ESP pairs with the Truma iNet X panel by
itself and keeps the Bluetooth connection open permanently. Home Assistant only talks to
the ESP via the ESPHome API over WiFi.

No Home Assistant integration (`truma_inetx`) and no Bluetooth proxy needed.

> **Status: public beta 0.8.6 (November 2026) – testers wanted!**
> Tested with an iNet X Pro panel (software 3.4.27), a Combi 6 heater and a Schaudt EBL; by testers
> also with panel software 3.5.38, Combi D 4 GEN2, Combi 4 D E, Aventa compact, Aventa Compact Plus
> 2nd gen and a Nordelettronica NE315 Gen2.
> With a **classic ESP32** (ESP32-D0WD) the connection is stable (long-term tests of 30 hours
> and more). The ESP32-C3 is not supported, see [Hardware](#hardware).
