---
repo: "openwch/arduino_core_ch32"
name: "arduino_core_ch32"
description: "Core library for CH32duino"
readmeQualityOk: true
url: "https://github.com/openwch/arduino_core_ch32"
language: "C"
languages: ["C"]
languagePcts: [93]
stars: 409
forks: 104
openIssues: 36
closedIssues: 158
watchers: 24
contributors: 21
recentReleases: 3
createdAt: "2023-05-30T09:27:09Z"
lastCommitAt: "2026-11-13T05:38:47Z"
lastReleaseAt: "2026-11-13T05:44:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 40
maintainers: ["medtty", "jobitjoseph", "DeqingSun"]
openGraphImageUrl: "https://opengraph.githubassets.com/755f34c93a7a63c79f71ee5d39caa1f0960ab18e661598f18184ce69c87b5c69/openwch/arduino_core_ch32"
---

# Arduino Core for WCH CH32

**Program WCH's RISC-V CH32 microcontrollers with the Arduino IDE, Arduino CLI and the Arduino API you already know.**

[Install](#installation) · [Boards](#supported-chips-and-boards) · [Features](#features) · [Getting started](#getting-started) · [Upload](#upload) · [Changelog](https://github.com/openwch/arduino_core_ch32/blob/HEAD/CHANGELOG.md) · [Contributing](https://github.com/openwch/arduino_core_ch32/blob/HEAD/CONTRIBUTING.md)

---

## Why this core

- **One core for the CH32V family**: V003 and the V002/V004/V005/V006/V007 family, X035, V103, V203, V307, L103 and V407, from 16 KB to 512 KB of flash, with the same sketch code.
- **Standard Arduino API**: `digitalWrite`, `analogRead`, `analogWrite`, `attachInterrupt`, `Serial`, `Wire`, `SPI`, `tone`, `HardwareTimer`, plus the WCH peripheral drivers for everything else.
- **WCH's own toolchain**: GCC 15.2 with the WCH extensions (`xw` compressed instructions, hardware stack push/pop) and OpenOCD 2.12 for the WCH-LinkE, both installed by the Boards Manager.
- **Tuning menus**: clock source and speed, optimization (LTO for the 16 KB V003), C library (nano, float printf/scanf), USB stack, upload…
