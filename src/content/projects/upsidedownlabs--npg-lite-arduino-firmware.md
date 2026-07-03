---
repo: "upsidedownlabs/NPG-Lite-Arduino-Firmware"
name: "NPG-Lite-Arduino-Firmware"
description: "Neuro Play Ground (NPG) Lite firmware repository"
url: "https://github.com/upsidedownlabs/NPG-Lite-Arduino-Firmware"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 34
forks: 12
openIssues: 6
closedIssues: 5
watchers: 3
contributors: 6
recentReleases: 3
createdAt: "2025-02-25T05:43:40Z"
lastCommitAt: "2026-07-03T06:22:40Z"
lastReleaseAt: "2026-05-18T06:32:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 60
maintainers: ["CIumsy", "Amanmahe", "lorforlinux"]
openGraphImageUrl: "https://opengraph.githubassets.com/3de08896f22f3ad9270940ea3f1a9c2991b00e4a8777ebedda1ccb72ac7aa3be/upsidedownlabs/NPG-Lite-Arduino-Firmware"
---

# NPG Lite Arduino Firmware

**Neuro PlayGround (NPG) Lite** is an open-source neuroscience development board by [Upside Down Labs](https://upsidedownlabs.tech/) that lets you read, process, and act on bio-potential signals like EEG, EMG, and EOG. This repository contains several standalone examples for the NPG Lite hardware.

## What This Repo Contains

Each folder is a self-contained Arduino sketch targeting a specific application. Sketches range from raw signal streaming over serial to full Brain-Computer Interface (BCI) pipelines that control external devices wirelessly via Bluetooth Low Energy (BLE), infrared (IR), or Wi-Fi.

---

## Firmware Sketches

| Example | Code |
| ------- | ---- |
| Default program to show Visual, Auditory, and Haptic feedback on NPG| [NPG-Default.ino](NPG-Default/NPG-Default.ino) |
| Calculate FFT & Band Power of single channel EEG and print on Serial | [Serial-FFT.ino](Serial-FFT/Serial-FFT.ino) |
| Bluetooth Low Energy (BLE) server to notify client with real-time NPG data | [BLE-Server.ino](BLE-Server/BLE-Server.ino) |
| BLE client to take notification from server and trigger GPIO | [BLE-Client.ino](BLE-Client/BLE-Client.ino) |
| BLE server to…
