---
repo: "7wp81x/NRSuite-Android"
name: "NRSuite-Android"
description: "No-root Android + ESP32 Wi-Fi/BLE security testing toolkit. Deauth, captive portal, packet capture, BLE HID, and defense/detection modules, controlled over USB-OTG, no custom kernel or external adapter required."
readmeQualityOk: true
url: "https://github.com/7wp81x/NRSuite-Android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [83]
topics: ["android", "badusb", "bluetooth-le", "deauth", "deauthentication-attack", "esp32", "evil-twin", "kotlin", "packet-capture", "pcap"]
stars: 177
forks: 31
openIssues: 2
closedIssues: 4
watchers: 6
contributors: 1
recentReleases: 9
createdAt: "2026-09-15T18:26:06Z"
lastCommitAt: "2026-11-02T11:36:09Z"
lastReleaseAt: "2026-11-02T11:31:11Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 92
undervaluedScore: 31
maintainers: ["7wp81x"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1371940294/441730f0-3f6e-4a07-9a71-e2ac18458fcd"
---

# NRSuite

**NRSuite turns a phone and a cheap ESP32 board into a portable Wi-Fi/BLE security research platform** - no laptop required.

Install the Android app, flash an ESP32 over USB-OTG with NRSuite firmware, and the app drives it as a combined offense/defense toolkit: Wi-Fi recon and attack modules, WPS Pixie Dust and lock/attempt detection, passive threat detection, BLE tooling, IR, BadUSB/HID, and more - all from a single pocketable setup.

> **Authorized use only.** NRSuite is for security research and testing on networks and devices you own or are explicitly authorized to test. See [LEGAL.md](https://github.com/7wp81x/NRSuite-Android/blob/HEAD/LEGAL.md).

---

## Quick Start

1. Grab the latest signed [prebuilt APK](https://github.com/7wp81x/NRSuite-Android/blob/HEAD/../../releases) and install it - verify its SHA256 first, see [Installation](#installation).
2. Flash an ESP32 with NRSuite firmware using the in-app flasher (no PC needed).
3. Connect ESP32 ↔ phone via USB-OTG, open the app, grant USB permission.

Want to build from source instead? See [Building from Source](#building-from-source).

---

## Community

Join the NRSuite Discord server for setup help, build…
