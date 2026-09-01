---
repo: "whitewhidow/bboink"
name: "bboink"
description: "WiFi handshake/PMKID capture firmware for ESP32 — LilyGo T-Embed CC1101, T-Display C5 & Waveshare ESP32-C5-LCD. Cloud cracking (wpa-sec/OnlineHashCrack/PwnCrack) via a hosted relay, a BLE phone console, and a browser USB flasher."
readmeQualityOk: true
url: "https://github.com/whitewhidow/bboink"
homepage: "https://whitewhidow.github.io/bboink/"
language: "C++"
languages: ["C++"]
languagePcts: [88]
topics: ["ble", "esp-web-tools", "esp32", "esp32-c5", "esp32-s3", "firmware", "handshake", "lilygo", "platformio", "pmkid"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-30T15:10:06Z"
lastCommitAt: "2026-09-01T08:50:24Z"
lastReleaseAt: "2026-07-02T16:50:50Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 63
maintainers: ["whitewhidow"]
openGraphImageUrl: "https://opengraph.githubassets.com/d00014ca3d06378f150e24ed0736e4460f04fe0216bffcae59415d5cd46b68df/whitewhidow/bboink"
---

# 🐷 BBoink

**A pocket WiFi handshake hunter.** BBoink turns a LilyGo or Waveshare board into a
capture rig: it channel-hops, deauths eligible APs, grabs WPA **4-way handshakes + PMKIDs**,
and gets them cracked — in the cloud or on your own machine — then shows the recovered
**password** right on the screen. One firmware, three boards.

**[🌐 Site + live screenshots](https://whitewhidow.github.io/bboink/)**  ·
**[⚡ Web flasher](https://whitewhidow.github.io/bboink/flasher/)**  ·
**[📖 Getting started](https://github.com/whitewhidow/bboink/blob/HEAD/docs/GETTING-STARTED.md)**  ·
**[🧭 Reference](https://github.com/whitewhidow/bboink/blob/HEAD/docs/REFERENCE.md)**

> ⚠️ BBoink transmits **deauth frames** to force handshakes. Use it **only** on networks you
> own or are explicitly authorized to test.

## Supported hardware

Three boards, one firmware. Buy links are the official vendor stores; the wiki/docs links are
the manufacturer's own hardware documentation.

<table>
<tr>
<td width="33%" valign="top" align="center">

**LilyGo T-Embed CC1101 / PLUS**<br>
ESP32-S3 · 16 MB · encoder + button<br>
_buttons + on-device menu (or BLE)_…
