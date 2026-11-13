---
repo: "Keralots/TouchDeck"
name: "TouchDeck"
description: "Touch control deck for the Guition JC3248W535 (ESP32-S3, 3.5\" touch): Home Assistant tiles, live PC stats, web portal setup. Local only, no cloud."
readmeQualityOk: true
url: "https://github.com/Keralots/TouchDeck"
homepage: "https://touchdeck.stolaris.dev/"
language: "C"
languages: ["C", "C++"]
languagePcts: [46, 33]
topics: ["arduino", "esp32-s3", "guition", "home-assistant", "iot", "jc3248w535", "lvgl", "pc-monitor", "platformio", "smart-home"]
stars: 57
forks: 3
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 1
recentReleases: 8
createdAt: "2026-10-13T15:54:53Z"
lastCommitAt: "2026-11-13T11:23:43Z"
lastReleaseAt: "2026-11-12T19:23:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 44
maintainers: ["Keralots"]
openGraphImageUrl: "https://opengraph.githubassets.com/b552e989247e936e49a980a1a6a7b1195f82ff23320a7bcc0119f6de692ef856/Keralots/TouchDeck"
fundingLinks: ["KO_FI:https://ko-fi.com/keralots"]
---

# TouchDeck

A touch control deck for the Guition JC3248W535 (3.5" 320x480 IPS, capacitive touch, ESP32-S3 with 16 MB flash and 8 MB PSRAM). Pages of tiles switch and read Home Assistant entities, show live PC stats from the TouchDeck Companion and follow Bambu Lab printers. Everything is set up from a web portal on the device. No cloud, no accounts: it talks to Home Assistant over its local WebSocket API and receives PC metrics over UDP on the LAN.

> A personal project built around my own desk setup, shared as is. Expect features that only make sense for that setup, and rough edges.

**Install from the browser:** [touchdeck.stolaris.dev](https://touchdeck.stolaris.dev) flashes the latest release over USB from desktop Chrome or Edge, sets up WiFi in the same tab and walks through Home Assistant and the PC companion.

**Full feature guide:** [GUIDE.md](https://github.com/Keralots/TouchDeck/blob/HEAD/GUIDE.md).

## Hardware

[Guition JC3248W535](https://aliexpress.com/item/1005007566315926.html): AXS15231B panel over QSPI, AXS15231B touch on I2C. Nothing to wire. 3D printed case: [MakerWorld model 3463113](https://makerworld.com/models/3463113). USB-C cable I use:…
