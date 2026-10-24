---
repo: "SimonKagstrom/radbuzz"
name: "radbuzz"
description: "GPS map / trip meter / speedometer for VESC-based electric vehicles"
readmeQualityOk: true
url: "https://github.com/SimonKagstrom/radbuzz"
language: "C++"
languages: ["C++"]
languagePcts: [85]
topics: ["ble", "cpp23", "esp32", "vesc", "moped", "motorcycle"]
stars: 8
forks: 1
openIssues: 4
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-07-04T14:55:13Z"
lastCommitAt: "2026-10-24T08:07:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 64
maintainers: ["SimonKagstrom"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee8149ea47a6e0022cbc42e90897473f5fd00cd30a0a0c9070746008ffa14d1f/SimonKagstrom/radbuzz"
---

# Radbuzz
Radbuzz is an infotainment and trip computer for electric mopeds and motorcycles, targeting VESC-based
controllers. It's built for an ESP32P4 microcontroller, but can also be run on the desktop for testing.

Features:

* OpenStreetMap-based map (currently OpenCycleMap) with different zoom levels, via a GPS module
* Supports receiving Google maps/OsmAnd/etc navigation instructions via the [Gadgetbridge](https://github.com/Freeyourgadget/Gadgetbridge) app
* Speedometer, both based on VESC data and GPS
* Trip data, with average consumption, distance etc
* Tesla-style power meter bar on the right
* Trip log shown on the map, with power indicator in color
* Range estimation shown on the map
* BMS status via BLE (currently em3ev KingShark/Ali new energy BMSes)
* Incoming phone calls can accepted/declined
* SMS:es and emails are forwarded from the phone
* A menu for configuration
* Written in clean and modern C++ (C++23)

Hardware:

* [Waveshare 4.3" ESP32P4 Touch](https://www.waveshare.com/product/arduino/boards-kits/esp32-p4/esp32-p4-wifi6-touch-lcd-4.3.htm)
* A rotary encoder
* UART-based GPS (UBLOX Neo-6M / Neo-7M tested)
* A CAN-bus adapter to communicate with the VESC (a…
