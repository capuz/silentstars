---
repo: "landonr/homething-c6"
name: "homething-c6"
description: "ESP32-C6 remote board inspired by homeThing"
readmeQualityOk: true
url: "https://github.com/landonr/homething-c6"
homepage: "https://homething.io/"
language: "Python"
languages: ["Python"]
languagePcts: [69]
topics: ["3d-printing", "esp32-c6", "esphome", "home-assistant", "kicad", "remote-control", "smart-home", "zigbee"]
stars: 9
forks: 0
openIssues: 14
closedIssues: 13
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-16T16:33:55Z"
lastCommitAt: "2026-11-13T11:20:17Z"
lastReleaseAt: "2026-08-01T14:46:01Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 87
undervaluedScore: 46
maintainers: ["landonr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1303010499/920b394e-633d-4e86-8672-80c273b8d253"
---

An open source universal remote that can control anything.<br>
  For your TV, Sonos, Zigbee lights, and Home Assistant. No touchscreen, no apps, no daily charging.

## What homeThing C6 does

- **Runs your TV.** It learns the IR codes from the remote you already have. Then the wheel and pad drive the TV.
- **Switches the lights.** A button talks straight to Zigbee lights and groups.
- **Any button, any device.** Each button can drive something different, for example a gas fireplace over Zigbee.
- **Sleeps on its own.** It sleeps between presses, with a target of about a month per charge.
- **No hub needed.** Presses go straight to your Zigbee lights and IR devices. They work without Wi-Fi, Home Assistant, or Zigbee2MQTT.
- **No flashing needed.** Set every button from the remote's own web page, in any browser. You do not edit YAML or rebuild the firmware.
- **Bluetooth keys too.** Pair it like a Bluetooth keyboard or gamepad, and send media keys to a computer, phone, or tablet.
- **Open source, all of it.** The board, the case, and the ESPHome firmware are in this repository.

## Specs

### One remote, no screen.

| Spec | Detail |
| --- | --- |
| **Controls** | Scroll wheel with…
