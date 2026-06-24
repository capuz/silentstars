---
repo: "AidenAI-IO/aiden-hardware-demo"
name: "aiden-hardware-demo"
description: "AI Agent hardware for mobile phone"
url: "https://github.com/AidenAI-IO/aiden-hardware-demo"
homepage: "https://aidenai.io"
language: "Go"
languages: ["Go"]
languagePcts: [57]
topics: ["ai", "hardware", "agent"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 13
recentReleases: 10
createdAt: "2026-04-24T10:02:57Z"
lastCommitAt: "2026-06-24T23:38:13Z"
lastReleaseAt: "2026-05-18T02:17:16Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 61
maintainers: ["icodeface", "djdjzo", "ljunb"]
openGraphImageUrl: "https://opengraph.githubassets.com/c605db0631504fe235be903783cedbfcbaa99ba55cddc8ea568d696c1aaf1e09/AidenAI-IO/aiden-hardware-demo"
---

# Aiden Hardware Demo

Aiden Hardware Demo is the firmware and device-side agent runtime for the
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
custom…
