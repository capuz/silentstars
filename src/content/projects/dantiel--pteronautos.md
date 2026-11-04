---
repo: "dantiel/PteronautOS"
name: "PteronautOS"
description: "Open-source firmware for servo-driven ornithopters"
readmeQualityOk: true
url: "https://github.com/dantiel/PteronautOS"
homepage: "https://dantiel.github.io/PteronautOS/"
language: "C"
languages: ["C"]
languagePcts: [77]
topics: ["birds", "elrs", "ornithopter", "pterosaur", "rc", "esp32", "esp8266", "lora", "remote-control", "arduino"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 127
recentReleases: 0
createdAt: "2026-07-11T07:54:34Z"
lastCommitAt: "2026-11-04T02:52:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 50
maintainers: ["dantiel", "schugabe", "MUSTARDTIGERFPV"]
openGraphImageUrl: "https://opengraph.githubassets.com/91ddcbcc731793e5dc57a3184b50e62ecbae76178095779d1b63b5696acbfe84/dantiel/PteronautOS"
discussionCount: 0
---

*Welcome, Pteronaut.*

**Open-source firmware for servo-driven ornithopters** — built on [ExpressLRS](https://github.com/ExpressLRS/ExpressLRS).

> 🌐 **[Documentation & Website](https://dantiel.github.io/PteronautOS/)** — [EN](https://dantiel.github.io/PteronautOS/en/) · [PT](https://dantiel.github.io/PteronautOS/)

PteronautOS replaces the traditional fixed-wing flight controller with an adaptive flapping oscillator built directly into the receiver. No intermediate FC required. The radio link directly drives the wings.

## Features

- **Adaptive Flapping Oscillator** — configurable waveform, amplitude, and frequency per channel
- **Automatic Gliding** — wings lock at neutral below throttle threshold (with hysteresis)
- **Zephyrus Gyro Stabilization** — MPU6050-based crest rudder correction for roll + yaw stability
- **Failsafe** — wings return to neutral on link loss, re-arm on reconnect
- **Direct PWM Output** — drives two wing servos + rudder + auxiliary channels
- **Minimal Footprint** — non-essential ELRS modules stripped (Telemetry, Baro, VTX, Thermal, Serial1)

## Build

The one-command path builds the WebUI, compiles the firmware, and flashes it:

```bash…
