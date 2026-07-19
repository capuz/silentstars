---
repo: "buk7456/FreeTX"
name: "FreeTX"
description: "Open source radio control system for almost anything."
readmeQualityOk: true
url: "https://github.com/buk7456/FreeTX"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["radio-controller", "rc-transmitter", "remote-control", "rc", "transmitter"]
stars: 49
forks: 9
openIssues: 4
closedIssues: 3
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2023-11-12T14:41:05Z"
lastCommitAt: "2026-07-19T06:11:00Z"
lastReleaseAt: "2024-12-28T15:53:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 36
maintainers: ["buk7456"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/717769816/3be79c2f-8270-4ff5-a7c0-65ace878237e"
---

# FreeTX
Open source radio control system for almost anything.  
Remotely operate model airplanes, multicopters, helicopters, boats, land vehicles, robots, animatronics, etc.

## Main features
- 20 fully proportional RC channels, each encoded with 10 bits.
- Configurable RC channel output signal format.
- Update rate of 50x per second for all RC channels.
- Receiver binding, adjustable RF power, frequency hopping.
- Reverse, subtrim, endpoints, failsafe, dual rates and expo, custom curves, flight modes.
- Powerful mixer system, logical switches, function generators, counters, timers.
- Telemetry, alarms, warnings, notifications, home screen widgets.
- Custom splash screen, screenshot capture, etc.
- Model memory, I2C EEPROM and SD card supported. Model types, context-aware nomenclature.
- Intuitive user interface.

## Hardware and Schematics
The transmitter and receiver schematics can be found in the 'schematics' folder. 
The major components are
- 1x Atmega2560 microcontroller, 2x Atmega328p microcontrollers.
- 2x SX1276/77/78/79 or RFM95 based Lora modules. Other RF modules can possibly be used with some modifications to the source code.
- A 128x64 graphical…
