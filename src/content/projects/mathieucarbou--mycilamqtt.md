---
repo: "mathieucarbou/MycilaMQTT"
name: "MycilaMQTT"
description: "A simple and efficient MQTT helper for Arduino / ESP32 based on Espressif MQTT Client"
readmeQualityOk: true
url: "https://github.com/mathieucarbou/MycilaMQTT"
homepage: "https://mathieu.carbou.me/MycilaMQTT/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [77, 23]
stars: 9
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-01-28T15:14:36Z"
lastCommitAt: "2026-11-23T13:28:50Z"
lastReleaseAt: "2024-02-14T14:42:11Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 82
undervaluedScore: 66
maintainers: ["mathieucarbou", "dependabot[bot]", "Laxilef"]
openGraphImageUrl: "https://opengraph.githubassets.com/d720e71f2f26140ebe04c17d97f5afb95c2e885217561d0cc849b6c5ddaa82bc/mathieucarbou/MycilaMQTT"
fundingLinks: ["GITHUB:https://github.com/mathieucarbou", "CUSTOM:https://paypal.me/mathieucarboufr"]
discussionCount: 1
---

# MycilaMQTT

A simple, efficient and modern MQTT/MQTTS client library for ESP32 Arduino projects, built on top of the Espressif ESP-IDF MQTT API.

## ✨ Features

- 🔄 **Automatic reconnection** with configurable intervals
- 📡 **Automatic resubscription** to topics after reconnection
- 🎯 **Simple configuration** - Easy integration with any configuration system
- 🔌 **Hot reload** - Quick restart with `end()` and `begin()`
- 💀 **Will topic management** - Automatic handling of last will and testament
- 🔐 **SSL/TLS support** - Both server certificates and CA certificate bundles
- ⚡ **Async/Sync modes** - Choose between blocking and non-blocking publish operations
- 📝 **Message retention** - Support for retained messages
- 🎨 **Wildcard subscriptions** - Full support for MQTT topic wildcards (`+` and `#`)
- 🧩 **Arduino 3 compatible** - Works with ESP-IDF 5
- 🪶 **Lightweight** - Minimal memory footprint with configurable buffer sizes
- 🎛️ **Highly configurable** - Fine-tune task priority, stack size, timeouts, and more
