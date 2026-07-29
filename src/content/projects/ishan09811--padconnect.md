---
repo: "Ishan09811/PadConnect"
name: "PadConnect"
description: "Turn your phone into a PC game controller"
readmeQualityOk: true
url: "https://github.com/Ishan09811/PadConnect"
homepage: "https://padconnect.in"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 14
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-01-10T19:18:51Z"
lastCommitAt: "2026-07-29T06:16:30Z"
lastReleaseAt: "2026-07-10T15:52:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: ["Ishan09811"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec526c059ebf64754bfc183d1d947a052e6e63c8933671c7868e6cfc6123cd4b/Ishan09811/PadConnect"
---

# PadConnect

    </a>

> **Low latency virtual gamepad** — built with **Kotlin** and **Jetpack Compose**

PadConnect lets your phone act as a **real controller (Xbox 360/DualShock4)** for a PC. It streams gamepad input with very low latency and exposes it on Windows using **ViGEm** and natively in linux.

This project is split into two parts:

* **PadConnect** -> Android / client app (virtual controller UI)
* **[PadConnectReceiver](https://github.com/Ishan09811/PadConnectReceiver)** -> PC / receiver app (creates virtual controller)

---

## Features

* **Xbox 360(working)/DualShock4(soon) compatible** virtual controller
* **Low latency input streaming** (UDP based)
* Built with **Kotlin**
* UI powered by **Jetpack Compose**
* Windows receiver using **ViGEm**
* Supports buttons, triggers, sticks, and D-Pad
* Works over **local Wi-Fi** (no internet required)

---

## How it works

```
[ Android Phone ] ── UDP ──▶ [ PadConnectReceiver (PC) ] ──▶ [ ViGEm ] ──▶ Game
```

1. **PadConnect (Android)**

    * Renders a virtual controller using Compose
    * Captures button / axis input
    * Serializes input events
    * Sends them over UDP

2.…
