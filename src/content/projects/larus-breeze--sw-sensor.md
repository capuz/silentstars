---
repo: "larus-breeze/sw_sensor"
name: "sw_sensor"
description: "Firmware for Larus sensor"
readmeQualityOk: true
url: "https://github.com/larus-breeze/sw_sensor"
language: "C"
languages: ["C"]
languagePcts: [95]
topics: ["gnss", "variometer", "stm32f4", "flight-data-logger", "soaring"]
stars: 5
forks: 6
openIssues: 15
closedIssues: 133
watchers: 10
contributors: 6
recentReleases: 0
createdAt: "2020-11-21T15:46:58Z"
lastCommitAt: "2026-10-18T08:16:16Z"
lastReleaseAt: "2024-08-18T16:08:59Z"
status: "watched"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 93
undervaluedScore: 81
maintainers: ["realtimepeople", "MaxBaex", "dspreitz"]
openGraphImageUrl: "https://opengraph.githubassets.com/7064df1e7b372f5da8ce879e2f6c4fc5b7b1fca9a1298f4b0cbec54bb592f6c1/larus-breeze/sw_sensor"
---

# Software Sensor
- For hardware design see: https://github.com/larus-breeze/hw_sensor 

## Facts
- STM32CubeIDE
- STM32F407VG
- FreeRTOS
- IMU 
- GNSS 
- Static pressure 
- Differential pressure
- CAN interface
- Bluetooth ESP32
- RS232 NMEA output channels

# How to use it
Some usefull git commands to work with this repository and the included submodule **command line**: 

Clone via https:

    git clone --recurse-submodules https://github.com/larus-breeze/sw_sensor
    
Clone via ssh:

    git clone --recurse-submodules git@github.com:larus-breeze/sw_sensor.git

Switch to a branch:

    git checkout branch_name --recurse-submodules
      
Pull latest changes:

    git pull --recurse-submodules  
      
# STM32 Build Configurations
- Release used for release versions (Max. optimized, no debug info)
- Debug used for development

# Release toolchain
Releases are built with **STM32CubeIDE 2.2.0**, i.e. with the compiler
*GNU Tools for STM32 14.3.rel1.20251027-0700* (GCC 14.3.1). The expected
compiler identification is recorded in `sw_stm32/scripts/release_toolchain.txt`,
and `build_firmware.py` checks every build against it. The language standards
are set explicitly in the project:…
