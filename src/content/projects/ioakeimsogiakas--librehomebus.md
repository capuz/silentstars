---
repo: "IoakeimSogiakas/LibreHomeBus"
name: "LibreHomeBus"
description: "Centralized home automation fieldbus using CH32V003 nodes over RS-485, dynamic UID auto-discovery, and ESPHome as a fast polling master for Home Assistant."
readmeQualityOk: true
url: "https://github.com/IoakeimSogiakas/LibreHomeBus"
language: "C"
languages: ["C", "Python"]
languagePcts: [63, 37]
topics: ["ch32v003", "ch32v003f4p6", "ch32v003fun", "esphome", "home-assistant", "modbus-rtu", "modbus-rtu-slave"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-15T16:47:51Z"
lastCommitAt: "2026-11-07T09:29:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 33
maintainers: ["IoakeimSogiakas"]
openGraphImageUrl: "https://opengraph.githubassets.com/673a082bc4361bff959a6a21a5ccb555841cf294822a76aecce8cc97c549d0ec/IoakeimSogiakas/LibreHomeBus"
---

## What’s New in Alpha

The project moves from Pre-Alpha to Alpha. The main change is that it now runs on a real RS-485 bus instead of a single board doing UART testing from Python.

Two CH32V003 nodes on a physical RS-485 bus, talking to a PC through a USB-RS485 dongle.
Discovery works on real hardware. Both nodes received unique addresses from the script.
The binary search is more forgiving of the timing on a real bus. A “no answer” now means three tries with no reply, and the result is checked afterwards: the lowest UID must answer and the number just below it must not. If the check fails, the search runs again.
Fixed CRC failures on the slave. Debug prints inside the frame polling loop were slow enough to corrupt frames on real RS-485. Per-frame logging is now behind a DEBUG_BUS switch in config.h, off by default.
Tested a switch (FID 1) driving a dimmer (FID 3) through both Home Assistant automations and ESPHome automations. The ESPHome version responds noticeably faster. The cause isn’t determined. The test setup has several hops (dongle, Windows, WSL, ESPHome host build, Home Assistant), and the extra latency might also be inherent to the Home Assistant path. This will be…
