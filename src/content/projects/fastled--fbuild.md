---
repo: "FastLED/fbuild"
name: "fbuild"
description: "A blazing fast build tool for Esp32, Teensy, Avr, Nrf, Raspberri PI, Stm, Mgm240 and more."
readmeQualityOk: true
url: "https://github.com/FastLED/fbuild"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 9
forks: 1
openIssues: 2
closedIssues: 411
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2025-06-29T20:47:28Z"
lastCommitAt: "2026-07-15T05:54:01Z"
lastReleaseAt: "2026-05-30T22:51:31Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 79
maintainers: ["zackees"]
openGraphImageUrl: "https://opengraph.githubassets.com/20abc22aab430ea6d9168c5d4e5824ccc157cd224a773aa64900b96bd5502939/FastLED/fbuild"
---

# fbuild

`fbuild` is a fast, multi-platform compiler, deployer, emulator runner, and
serial monitor for embedded development. It reads the same `platformio.ini`
files already used by PlatformIO sketches, but uses a Rust-native, data-driven
build pipeline.

## Build Matrix

These board builds are part of the front door. They show the platform breadth
that fbuild actively protects in CI.

### AVR

### MegaAVR

### Renesas

### ESP8266

### ESP32

### CH32V (RISC-V)

### CH32X (RISC-V, USB PD)

### Teensy

### STM32

### SAM / SAMD

### RP2040 / RP2350

### Nordic NRF52

### Apollo3

### NXP LPC (Cortex-M0+)

### Silicon Labs

### Raspberry Pi Pico

Board descriptions and family deep-dives live in
[`docs/BOARD_STATUS.md`](https://github.com/FastLED/fbuild/blob/HEAD/docs/BOARD_STATUS.md).

## Installation

```bash
pip install fbuild
```

For source installs, platform notes, and first-run cache behavior, start with
the [getting started guide](https://github.com/FastLED/fbuild/blob/HEAD/docs/getting-started/README.md).

## Command Quick Start

fbuild reads the same `platformio.ini` files as PlatformIO. Use these commands
as direct replacements for the most common PlatformIO workflows:…
