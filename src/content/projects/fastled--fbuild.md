---
repo: "FastLED/fbuild"
name: "fbuild"
description: "A blazing fast build tool for Esp32, Teensy, Avr, Nrf, Raspberri PI, Stm, Mgm240 and more."
url: "https://github.com/FastLED/fbuild"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 6
forks: 1
openIssues: 47
closedIssues: 254
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2025-06-29T20:47:28Z"
lastCommitAt: "2026-06-28T01:36:29Z"
lastReleaseAt: "2026-05-30T22:51:31Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 80
maintainers: ["zackees"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4c999bff0fd3070b27d7bbbf43e05a577747a866a2065fcba4029c95ed941d2/FastLED/fbuild"
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
[`docs/BOARD_STATUS.md`](docs/BOARD_STATUS.md).

## Installation

```bash
pip install fbuild
```

For source installs, platform notes, and first-run cache behavior, start with
the [getting started guide](docs/getting-started/README.md).

## Quick Start

Create a minimal Arduino project:

```bash
mkdir my-project
cd my-project
mkdir src
```

Add `platformio.ini`:

```ini
[env:uno]
platform = atmelavr
board = uno
framework = arduino
```

Add `src/main.ino`:

```cpp
void setup() {…
