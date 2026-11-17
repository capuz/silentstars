---
repo: "roepkefeller/air-quality-sensor"
name: "air-quality-sensor"
description: "DIY air quality monitor: ESP32-C3, 4 Sensirion/Bosch sensors, custom 4-layer PCB, ESPHome firmware with Home Assistant integration."
readmeQualityOk: true
url: "https://github.com/roepkefeller/air-quality-sensor"
language: "HTML"
languages: ["HTML"]
languagePcts: [99]
topics: ["air-quality", "air-quality-monitor", "air-quality-sensor", "co2-sensor", "esp32", "esp32-c3", "esphome", "home-assistant", "iot", "iot-device"]
stars: 60
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2026-04-17T14:25:05Z"
lastCommitAt: "2026-11-17T14:33:01Z"
lastReleaseAt: "2026-11-17T14:33:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 25
maintainers: ["roepkefeller"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1213575049/d581a332-5405-4c92-9d8f-e87a2f351ac0"
---

# Air Quality Sensor

A DIY open-source air quality monitor built around an [ESP32-C3-WROOM-02](https://documentation.espressif.com/esp32-c3-wroom-02_datasheet_en.pdf), featuring a custom 4-layer PCB with four Sensirion/Bosch sensors, a laser-cut glass top panel, and a 3D-printed holder. Firmware runs on [ESPHome](https://esphome.io) and integrates natively with Home Assistant. An optional [PMSA003I particulate matter add-on](#particle-sensor-add-on) connects via the onboard QWIIC connector to add PM1.0, PM2.5, PM10, and EPA AQI measurements.

Installed boards are updated over the air: publishing a GitHub release makes a small [update server](#firmware-updates) on the home network build the firmware for every board, and Home Assistant offers it as a regular *Update available*. A [fault model](#sensor-fault-detection) watches every sensor not just for dropouts but also for frozen and drifting readings.

---

## Table of contents

- [What it measures](#what-it-measures)
- [System overview](#system-overview)
- [Hardware design](#hardware-design)
  - [Sensors](#sensors)
  - [Power system](#power-system)
  - [PCB](#pcb)
  - [Enclosure](#enclosure)
- [Assembly](#assembly)
  -…
