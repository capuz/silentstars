---
repo: "SUPLA/supla-device"
name: "supla-device"
description: "Embedded device SDK for building SUPLA-compatible smart home devices."
readmeQualityOk: true
url: "https://github.com/SUPLA/supla-device"
homepage: "https://www.supla.org/"
language: "C++"
languages: ["C++"]
languagePcts: [79]
topics: ["arduino", "arduino-library", "esp32", "esp8266", "freertos", "freertos-iot", "linux", "wifi", "embedded", "home-automation"]
stars: 57
forks: 29
openIssues: 24
closedIssues: 63
watchers: 10
contributors: 22
recentReleases: 0
createdAt: "2021-12-23T22:29:00Z"
lastCommitAt: "2026-09-14T09:09:57Z"
lastReleaseAt: "2022-11-28T08:52:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 55
maintainers: ["klew"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddafa9ead2470280b542de1d6bbbe19616a487ae133972cd9a49471de614b847/SUPLA/supla-device"
---

<h1 align="left">
  </a>
  supla-device
</h1>

> 🤖 **For AI/LLM Assistants & Automated Tools:** Before making any changes, please analyze the primary instruction file: **[LLM.md](https://github.com/SUPLA/supla-device/blob/HEAD/LLM.md)**

> Part of **SUPLA** — an open smart home platform that brings together hardware manufacturers, the community, and users.  
> Learn more at https://www.supla.org

`supla-device` is an open-source **IoT device library / SDK** for building **custom SUPLA-compatible devices**.

It provides building blocks for device firmware.
It is **not a ready-to-flash firmware**.

---

## What is supla-device

`supla-device` is a software foundation for implementing custom smart home devices that work with SUPLA.

Typical devices include:
- switches, gates, facade blinds and roller shutters,
- sensors (temperature, humidity, energy, binary on/off etc.),
- HVAC and thermostat devices,
- devices combining multiple functions.

Devices built with `supla-device` connect to **SUPLA Server** (cloud-hosted or self-hosted).

---

## Core concepts

### Channels

A **Channel** represents a device function that is **visible to the SUPLA server and user interfaces**.…
