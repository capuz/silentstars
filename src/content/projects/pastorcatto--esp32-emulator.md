---
repo: "PastorCatto/ESP32-Emulator"
name: "ESP32-Emulator"
description: "Placeholder info, work in progress"
readmeQualityOk: true
url: "https://github.com/PastorCatto/ESP32-Emulator"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
stars: 32
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-08-04T02:45:23Z"
lastCommitAt: "2026-11-08T23:22:27Z"
lastReleaseAt: "2026-08-11T02:36:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 16
maintainers: ["PastorCatto"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6b951f5225d6e97d527c41a3b2c9ebc7986d269d0496317ae6d849733863d43/PastorCatto/ESP32-Emulator"
---

# ESP32-Emulator

An emulator for ESP32-S3 boards, built to run PURR OS and other ESP32 firmware
without the hardware. It opens a window with the board's screen, touch panel,
keyboard and SD card, or runs with no window so a script can press the screen,
take pictures and read the serial log.

It is made of two parts: a patched copy of Espressif's QEMU, which emulates the
chip, and a Rust program in this repository, which supplies everything the chip
talks to (display, touch, keyboard, SD card, Ethernet) and the window.

> **Status.** The ESP32-S3 boards boot real PURR OS images, with screen, touch,
> keyboard, SD card and (on the VM board) wired Ethernet. There is no Wi-Fi,
> Bluetooth or LoRa radio. The plain-ESP32 boards (the CYD family) boot to a
> serial console, but their screens are not modelled. Every chapter in
> [docs/](https://github.com/PastorCatto/ESP32-Emulator/blob/HEAD/docs/README.md) ends with what is untested. The short list is at
> [the end of this page](#what-is-untested).

## What it needs

| | |
|---|---|
| Rust | 1.82 or newer is declared in `Cargo.toml`. Built here with 1.99.1; 1.82 itself has not been tried |
| The patched QEMU |…
