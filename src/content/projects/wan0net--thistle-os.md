---
repo: "wan0net/thistle-os"
name: "thistle-os"
description: "ThistleOS — ESP32-S3 operating system for LilyGo T-Deck Pro. Kernel, HAL, LVGL UI, dynamic ELF app loading."
readmeQualityOk: true
url: "https://github.com/wan0net/thistle-os"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [62, 34]
topics: ["embedded", "esp32", "esp32-s3", "iot", "lilygo", "lvgl", "operating-system", "rtos", "rust", "t-deck"]
stars: 10
forks: 2
openIssues: 10
closedIssues: 37
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-03-20T08:39:48Z"
lastCommitAt: "2026-08-01T06:14:51Z"
lastReleaseAt: "2026-05-03T11:44:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 54
maintainers: ["wan0net", "dependabot[bot]", "ec1oud"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb0c582547b53f676859f3a66f646d0d1093913de374289e7c9916eba9eb3457/wan0net/thistle-os"
---

# ThistleOS

</p>

  <strong>A portable, open-source operating system for ESP32 devices</strong><br>
  One kernel. Any hardware. Apps and drivers delivered over the air.
</p>

</p>

---

> **Beta Software** — Rust migration complete. 100% Rust kernel (57 modules, 51,000+ LOC, 1231 tests), 15 Rust hardware drivers, multi-board support (10 boards), and multi-arch builds (ESP32, S2, S3, C3, C6). Recovery auto-detects hardware via I2C/SPI/UART scanning.

## Why ThistleOS

The ESP32 ecosystem is full of great hardware — T-Deck, T-Beam, M5Stack, Heltec, custom boards — but every project starts from scratch. Different pin assignments, different displays, different radios, all requiring custom firmware.

ThistleOS separates the **kernel** from the **hardware**. The kernel runs across the supported ESP32 families — ESP32, S2, S3, C3, and C6. Drivers are loaded at boot from the SD card. Apps are downloaded from an online store. Update your OS by dropping a file on the SD card or tapping "Update" in Settings.

**The goal:** Flash ThistleOS once. The device figures out the rest.

## How It Works

```
┌─────────────────────────────────────────────┐
│         APPS (.app.elf from SPIFFS/SD)…
