---
repo: "lshaf/unigeek"
name: "unigeek"
description: "Next generation from M5Geek. UniGeek, support in multiple device."
url: "https://github.com/lshaf/unigeek"
homepage: "https://unigeek.xid.run/"
language: "C++"
languages: ["C++", "C"]
languagePcts: [64, 25]
topics: ["esp32", "hacking", "lilygo", "m5", "pentesting"]
stars: 53
forks: 8
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 4
recentReleases: 4
createdAt: "2026-02-18T11:55:51Z"
lastCommitAt: "2026-06-27T00:47:15Z"
lastReleaseAt: "2026-04-12T06:50:01Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 95
undervaluedScore: 46
maintainers: ["lshaf", "vnxdtzip"]
openGraphImageUrl: "https://opengraph.githubassets.com/4429af4e477c43ec77d355bc0739879b3893295c25164724fc881916f608ce61/lshaf/unigeek"
fundingLinks: ["GITHUB:https://github.com/lshaf", "KO_FI:https://ko-fi.com/lshaf"]
---

# UniGeek Firmware

**Multi-tool firmware for ESP32-based handheld devices.**
Built with PlatformIO + Arduino framework + TFT_eSPI.

</div>

---

</p>

---

## What is it?

UniGeek is a single codebase that runs across ~18 ESP32 handheld boards, turning each into a
pocket security & RF multi-tool: WiFi attacks, Bluetooth scanning/spam, USB & BLE HID, NFC,
IR, Sub-GHz (CC1101), NRF24, GPS wardriving, plus utilities and games.

The **complete, always-current feature list lives on the docs site** — it's generated from the
firmware menu, so it never drifts:

👉 **https://unigeek.xid.run/features/**

### Highlights

- 📶 **Wi-Fi Attacks** — Evil Twin, Karma, beacon/SSID flood, deauther, EAPOL (WPA2) capture & offline crack, captive portals, packet monitor
- 🔵 **BLE Attacks** — device/beacon spam (Fast Pair, Continuity, Samsung), passive detector (Flipper/AirTag/skimmer), WhisperPair (CVE-2025-36911), BLE analyzer
- 📡 **Sub-GHz (CC1101)** — capture / replay / jam, peak frequency detector, 38 brand protocol decoders, KeeLoq auto-decode + rolling-code Replay +1
- 🛰️ **RF & GPS** — NRF24 spectrum / jammer / MouseJack, M5 RF433, GPS wardriving with Wigle export and on-device map
- 🪪…
