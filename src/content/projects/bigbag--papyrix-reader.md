---
repo: "bigbag/papyrix-reader"
name: "papyrix-reader"
description: "Lightweight open-source firmware for Xteink X4/X3 e-paper reader • EPUB/FB2/MD/TXT support • Custom themes & fonts"
readmeQualityOk: true
url: "https://github.com/bigbag/papyrix-reader"
language: "C"
languages: ["C", "C++"]
languagePcts: [72, 26]
topics: ["eink", "eink-devices", "esp32", "papyrix", "xteink", "xteink-x4", "epub", "fb2", "xteink-x3"]
stars: 451
forks: 31
openIssues: 5
closedIssues: 142
watchers: 5
contributors: 17
recentReleases: 0
createdAt: "2026-01-15T16:23:57Z"
lastCommitAt: "2026-08-25T04:09:48Z"
lastReleaseAt: "2026-01-30T16:00:03Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 24
maintainers: ["bigbag"]
openGraphImageUrl: "https://opengraph.githubassets.com/c57ca6219816501c6250045124ebc477fef1ec675b9803f71c618df63b6262f1/bigbag/papyrix-reader"
fundingLinks: ["KO_FI:https://ko-fi.com/bigbag"]
---

# Papyrix

Papyrix is firmware for the **Xteink X4** and **Xteink X3** e-paper readers.
You build it with **PlatformIO**.
The target microcontroller is the **ESP32-C3**.
One firmware file finds the panel type at start.
It scans I²C signatures (BQ27220 fuel gauge, DS3231 RTC, QMI8658 IMU).

> **Warning:** Some Xteink units (for example, units from AliExpress) lock USB flash.
> If USB flash is locked, you cannot update or recover through USB.
> Install, update, and do [emergency recovery](#emergency-recovery) from the SD card.
> Flash through USB only on devices that have unlocked USB.

## Motivation

E-paper devices are good for reading.
Most commercial readers are closed systems.
They give limited customization.
The **Xteink X4** and **Xteink X3** are low-cost e-paper devices.
The official firmware is closed.

Papyrix does this:
* It gives an **open-source alternative** to the official firmware.
* It reads documents, including EPUB, on hardware with limited memory.
* It lets you set **font, layout, and display** options.
* It runs on **Xteink X3 / X4 hardware** from one firmware file that finds the device type.

This project is **not affiliated with Xteink**.
It is a community…
