---
repo: "mergeos-bounties/HIRI"
name: "HIRI"
description: "HIRI — Home Assistant bridge + ESP32/ESP8266 firmware + web/admin/mobile smart-home stack"
readmeQualityOk: true
url: "https://github.com/mergeos-bounties/HIRI"
homepage: "https://mergeos.shop"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["bounty", "esp32", "firmware", "home-assistant", "iot", "mergeos", "python", "smart-home"]
stars: 9
forks: 17
openIssues: 21
closedIssues: 41
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2026-07-12T13:33:25Z"
lastCommitAt: "2026-07-18T05:45:57Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 64
maintainers: ["TUPM96", "naninu123", "key1989han"]
openGraphImageUrl: "https://opengraph.githubassets.com/d99c3017281d96d77de2ced6eba7b1e5b83a91376f8f4eaee9840f8f5e47030a/mergeos-bounties/HIRI"
---

# HIRI

**HIRI** is a smart-home **bridge + firmware** stack for **Home Assistant** and multi-ecosystem device adapters — local registry, MQTT discovery, REST API, ESP firmware, and client scaffolds.

**Product:** [mergeos-bounties/HIRI](https://github.com/mergeos-bounties/HIRI)

---

## Table of contents

- [Monorepo packages](#monorepo-packages)
- [Highlights](#highlights)
- [Screenshots](#screenshots)
- [Quick start (bridge)](#quick-start-bridge)
- [CLI reference](#cli-reference)
- [Adapters](#adapters)
- [Diagrams](#diagrams)
- [Architecture](#architecture)
- [Safety](#safety)
- [Development](#development)
- [MergeOS bounties](#mergeos-bounties)
- [License](#license)

---

## Monorepo packages

| Package | Path | Role |
| --- | --- | --- |
| **HIRI-bridge** | `packages/bridge` | Device registry, adapters, HA MQTT discovery, FastAPI |
| **HIRI-firmware** | `packages/firmware` | ESP32 / ESP8266 firmware (PlatformIO) → MQTT → HA |
| **HIRI-web** | `packages/web` | User dashboard |
| **HIRI-admin** | `packages/admin` | Admin console (devices, adapters, logs) |
| **HIRI-android** / **ios** | `packages/…` | Mobile client scaffolds |

Primary offline path: **bridge** (`hiri-bridge…
