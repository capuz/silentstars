---
repo: "AidenAI-IO/aiden-firmware"
name: "aiden-firmware"
description: "AI Agent hardware for mobile phone"
readmeQualityOk: true
url: "https://github.com/AidenAI-IO/aiden-firmware"
homepage: "https://aidenai.io"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [57, 21]
topics: ["ai", "hardware", "agent"]
stars: 18
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 13
recentReleases: 10
createdAt: "2026-04-24T10:02:57Z"
lastCommitAt: "2026-07-23T06:14:13Z"
lastReleaseAt: "2026-05-18T02:17:16Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 50
maintainers: ["ljunb", "HuangHan96", "icodeface"]
openGraphImageUrl: "https://opengraph.githubassets.com/48b7ee6c0933002e0eff3c66066c1b87bde9aad4d2b3a64c3f483be83226a6cc/AidenAI-IO/aiden-firmware"
---

# Aiden Firmware

Aiden Firmware is the firmware and device-side agent runtime for the
current Aiden development board. The board observes a target device through
HDMI capture and controls it through USB HID, so the agent can operate normal
mobile or desktop apps without relying on app-specific automation APIs.

This repository is for the development-board implementation: firmware overlay,
C++ hardware services, the Go Agent, OTA tooling, tests, and benchmark support.
It is not a final integrated hardware product.

## What Aiden Does

The current hardware setup connects to a phone or computer through a USB-C hub:

- the target device's display output is captured through HDMI and the TC358743
  HDMI-to-CSI path;
- the Luckfox Pico Zero exposes a composite USB gadget with keyboard/pointer HID
  and USB ECM networking;
- the Go Agent sends screenshots to a configured multimodal model, decides the
  next action, and writes keyboard/mouse/touch reports to `/dev/hidg0` and
  `/dev/hidg1`;
- voice mode records audio on the board, applies VAD, then uses configured STT,
  LLM, and TTS providers.

The basic control path does not require jailbreak, ADB, developer mode, or a
custom app on the…
