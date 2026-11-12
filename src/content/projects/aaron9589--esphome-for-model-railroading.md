---
repo: "aaron9589/esphome-for-model-railroading"
name: "esphome-for-model-railroading"
description: "Using ESPHome for Model Railroad Automation and Control"
readmeQualityOk: true
url: "https://github.com/aaron9589/esphome-for-model-railroading"
language: "JavaScript"
languages: ["JavaScript", "PowerShell"]
languagePcts: [47, 22]
topics: ["esphome", "jmri-model-railroad", "model-railroad", "model-railroad-automation", "model-railway", "model-railroading"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-08-28T10:31:53Z"
lastCommitAt: "2026-11-12T11:42:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 47
maintainers: ["aaron9589"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d6c04e76915d5066e29263a7cd028142946b952181228edf5cf73f6a30298f1/aaron9589/esphome-for-model-railroading"
---

# ESPHome for Model Railroading

ESP32 boards for a model railroad: block detection and point control, talking to JMRI/CATS over MQTT.

A board watches the track and throws points. JMRI (with CATS doing the signalling logic) is the brain. The boards and JMRI meet on MQTT.

## How it fits together

The layout computer runs Mosquitto and JMRI. CATS writes the signalling into JMRI’s tables, and those tables are the MQTT topics. Each ESP joins the 2.4 GHz Wi-Fi and uses the computer’s LAN address, never `localhost`. The point servos take a separate 5V supply. Signals are not in the configurator: a second ESPHome board listens for mast topics and drives a WLED board over a serial link.

A block publishes `ACTIVE` or `INACTIVE`. Leaving the block publishes `INACTIVE`. A point listens for `CLOSED` or `THROWN`, moves the servo, then publishes that same word on `<topic>/State` so the panel icon updates. The topics in the diagram are the My First Board examples. Yours are whatever you put in the configurator. Since JMRI 5.1.2 the `trains/` prefix is often blank, so check Preferences before copying one.

## What you’ll need

**Hardware.** Everything except transformers I source from…
