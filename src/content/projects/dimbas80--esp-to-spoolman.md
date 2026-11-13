---
repo: "dimbas80/esp_to_spoolman"
name: "esp_to_spoolman"
description: "This ESP32-based project reads NTAG2xx NFC tags mounted on filament spools and sets the active spool in the Spoolman service via Moonraker."
originalDescription: "Данный проект на базе ESP32 реализует считывание NFC меток типа NTAG2xx установленных на катушках с филаментом, и установку активной катушки в сервис Spoolman через Moonraker"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/dimbas80/esp_to_spoolman"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 7
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2025-12-23T14:06:43Z"
lastCommitAt: "2026-11-13T11:26:09Z"
lastReleaseAt: "2026-11-13T11:23:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 54
undervaluedScore: 56
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/40c65cb066bd88a3086b43f259b620b12dc76e245abb8e502124213f0d98918e/dimbas80/esp_to_spoolman"
discussionCount: 0
---

# ESP_TO_SPOOLMAN

NFC filament spool scanner: the device reads an NTAG tag, finds the spool in [Spoolman](https://github.com/Donkie/Spoolman), and sets it as active on the printer via Moonraker (optionally, with gate selection in the Happy Hare MMU). Writing and erasing tags is done by the device itself through its web interface, without third-party applications.

**Tag format: OpenSpool** (`application/json`, `protocol: "openspool"`). FilaMan has dropped out (it moved to a paid model) and is no longer used. Old FilaMan tags can still be read (`sm_id` as a fallback), but when a tag is rewritten, it is fully rewritten in openspool format with data from Spoolman.

## Components used

1. ESP32-C3 super mini controller
2. RFID-RC522 NFC reader
3. WS2812B LED
4. Button
5. NTAG215 and NTAG216 tags (with open writing, meaning no lock bits set)

The project is built for ESP32-C3, but it can be installed on another type of ESP32 by replacing the pins with the corresponding ones. Requires Spoolman **v0.27+** (Tag API) on the local network. For MMU, a printer with Klipper/Moonraker and the Happy Hare + Spoolman integration is required.

Web interface (menu built on the SettingsGyver…
