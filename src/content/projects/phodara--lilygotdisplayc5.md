---
repo: "phodara/LilygoTDisplayC5"
name: "LilygoTDisplayC5"
description: "WiFi and Bluetooth analyzer for the LilyGO T-Display C5"
readmeQualityOk: true
url: "https://github.com/phodara/LilygoTDisplayC5"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["bluetooth-scanner", "esp32-c5", "lilygo", "lilygo-tdisplay", "wifi", "wifi-network-scanner-tool", "lilygo-tdisplay-c5"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-08-19T23:54:03Z"
lastCommitAt: "2026-08-28T15:36:20Z"
lastReleaseAt: "2026-08-28T14:01:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 48
maintainers: ["phodara"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bc28c439e34b9031a1fe1f63dca78cb2856fed1c49abfb9e3c0d550de2e9499/phodara/LilygoTDisplayC5"
---

# PocketProwler - LilyGO T-Display C5 WiFi and Bluetooth Scanner
A portable WiFi + BLE analyzer for the LilyGO T-Display C5.

PocketProwler turns the LilyGO T-Display C5 (ESP32-C5) into a self-contained handheld scanner. Scan nearby WiFi networks and Bluetooth LE devices, drill into per-device detail views, and run for hours on an internal LiPo battery — all inside a 3D-printed case.

</p>

## What It Does

- Initializes Serial over USB CDC at `115200`.
- Turns on the LCD backlight.
- Initializes the ST7789 display through `LovyanGFX`.
- Starts I2C on the board pins.
- Scans nearby WiFi networks every few seconds.
- Scans nearby Bluetooth devices in a separate screen with passive and active options.
- Shows SSID, RSSI, signal bar, channel, band, and security.
- Draws a compact RSSI history graph for the selected access point.
- Scans Bluetooth Low Energy devices in a separate Bluetooth mode.
- Supports passive and active BLE scan modes.
- Keeps intermittent BLE devices visible briefly after their last advertisement.
- De-duplicates named BLE devices that rotate addresses.
- Reduces display flicker by redrawing only changed screen regions.
- Uses the upper button to scroll through…
