---
repo: "prokrypt/CrossDink"
name: "CrossDink"
description: "Dual-core ESP32-S3 fork of CrossInk"
readmeQualityOk: true
url: "https://github.com/prokrypt/CrossDink"
language: "C"
languages: ["C", "C++"]
languagePcts: [48, 47]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 275
recentReleases: 0
createdAt: "2026-09-27T06:37:09Z"
lastCommitAt: "2026-11-02T15:18:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 47
maintainers: ["prokrypt", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f0dd0259e5b60d2627e6730da8d98128f5f4e389a43e78735b6b4d581b727b8/prokrypt/CrossDink"
fundingLinks: ["KO_FI:https://ko-fi.com/uxjulia"]
---

# CrossDink

> **CrossDink is a fork of [CrossInk](https://github.com/uxjulia/CrossInk)**, which is itself a fork of [CrossPoint Reader](https://github.com/crosspoint-reader/crosspoint-reader). It keeps CrossInk's fonts, reader features and reading stats, and rebuilds the firmware around the dual-core ESP32-S3 in the newer Xteink and Seeed readers.

The project started as DualPoint, a plan to put the S3's second core to work. It is now CrossDink.

### Supported Devices

CrossDink runs only on ESP32-S3 readers:

- Xteink X4 Pro
- Xteink X4 Classic
- Seeed Studio Sticky

The ESP32-C3 Xteink X3 and X4 are not supported. For those, use [CrossInk](https://github.com/uxjulia/CrossInk).

## Goals

- **Use both cores.** The screen, the reader's background work, networking and input each get their own task, so page turns and taps don't wait on indexing, image decoding or transfers.
- **Assume PSRAM.** With the ESP32-C3 limits gone, large buffers, caches and Wi-Fi buffers live in PSRAM, which keeps internal RAM free for the things that need it.
- **Spend less power while idle.** The Sticky and X4 Pro drop into automatic light sleep between loop ticks, and the Wi-Fi screens idle in modem…
