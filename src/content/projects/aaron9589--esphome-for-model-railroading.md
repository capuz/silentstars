---
repo: "aaron9589/esphome-for-model-railroading"
name: "esphome-for-model-railroading"
description: "Using ESPHome for Model Railroad Automation and Control"
readmeQualityOk: true
url: "https://github.com/aaron9589/esphome-for-model-railroading"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [49, 26]
topics: ["esphome", "jmri-model-railroad", "model-railroad", "model-railroad-automation", "model-railway", "model-railroading"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-08-28T10:31:53Z"
lastCommitAt: "2026-11-23T12:23:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 67
maintainers: ["aaron9589"]
openGraphImageUrl: "https://opengraph.githubassets.com/9396421d3cf762456b6a89f279ab4e0a8fbe7bfd76605bfcf674a80b76f0a0cd/aaron9589/esphome-for-model-railroading"
---

# ESPHome for Model Railroading

ESP32 boards for a model railroad: block detection and point control, talking to JMRI/CATS over MQTT.

A board watches the track and throws points. JMRI (with CATS doing the signalling logic) is the brain. The boards and JMRI meet on MQTT.

## How it fits together

The layout computer runs Mosquitto and JMRI. CATS writes the signalling into JMRI’s tables, and those tables are the MQTT topics. Each ESP joins the 2.4 GHz Wi-Fi and uses the computer’s LAN address, never `localhost`. The point servos take a separate 5V supply. Signal masts are in the configurator: each mast is its own WS2812B strip, or one GPIO per lamp, painted from the JMRI aspect string. The earlier WLED setup in the advanced samples is obsolete.
