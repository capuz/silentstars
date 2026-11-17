---
repo: "clawntl/BLDC-Driver"
name: "BLDC-Driver"
description: "BLDC Driver with STM32G431 and DRV8316"
readmeQualityOk: true
url: "https://github.com/clawntl/BLDC-Driver"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-07-08T13:38:06Z"
lastCommitAt: "2026-11-17T14:46:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["clawntl", "engbuildspace", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/71349dea48af37b01854bff7b7aff4a9b54f97266189245263b52ebba7e2489a/clawntl/BLDC-Driver"
---

# BLDC-Driver: a compact FOC driver board

BLDC-Driver is an integrated brushless motor driver built around an **STM32G431** microcontroller and a **TI DRV8316** three-phase gate driver with integrated MOSFETs. It runs field-oriented control (FOC) with [SimpleFOC](https://github.com/simplefoc) and takes current (torque) commands over CAN. It suits gimbal motors and small direct-drive wheels.

The board includes an optional **AS5048A** magnetic encoder on a break-away tab. With the tab removed, the board measures just **39 mm × 36 mm**.

## Features

| | |
|---|---|
| **MCU** | STM32G431CBU6 (Cortex-M4F, 170 MHz max, run at 160 MHz; CORDIC used for fast trig) |
| **Power stage** | DRV8316 with integrated FETs: 3 A continuous / 8 A peak, 6-PWM control over SPI |
| **Supply** | 5–35 V DC. The DRV8316 buck converter generates 5 V, and an XC6206 LDO generates 3.3 V |
| **Current sense** | DRV8316 integrated low-side current-sense amplifiers on all three phases |
| **Position sensor** | AS5048A 14-bit magnetic encoder (SPI1) on a break-away tab, or an external sensor via the SPI1 header |
| **Communication** | CAN via a TJA1051T/3 transceiver (FDCAN capable up to 5 Mbit/s; the firmware…
