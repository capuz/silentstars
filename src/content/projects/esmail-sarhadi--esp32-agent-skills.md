---
repo: "Esmail-sarhadi/esp32-agent-skills"
name: "esp32-agent-skills"
description: "Two hundred and one agent skills and ten checkers that stop AI coding agents from writing ESP32 firmware that compiles and then kills the board. Installable as a Claude Code plugin."
readmeQualityOk: true
url: "https://github.com/Esmail-sarhadi/esp32-agent-skills"
homepage: "https://esmail-sarhadi.github.io/esp32-agent-skills/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["agent-skills", "ai-agents", "claude-code", "developer-tools", "embedded", "esp32", "firmware", "gpio", "iot", "platformio"]
stars: 16
forks: 9
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 1
createdAt: "2026-10-31T10:21:26Z"
lastCommitAt: "2026-11-03T10:52:44Z"
lastReleaseAt: "2026-11-02T08:00:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 45
maintainers: ["Esmail-sarhadi"]
openGraphImageUrl: "https://opengraph.githubassets.com/4adbd518e798a50bdda872b5a0081c30ba5ded8df54262738738b9c56240a178/Esmail-sarhadi/esp32-agent-skills"
---

# ESP32 Agent Skills

A practical ESP32 engineering toolkit for AI coding agents: curated skills, hardware-aware guardrails, and command-line validation tools that catch mistakes before a board is flashed.

[Read the project site →](https://esmail-sarhadi.github.io/esp32-agent-skills/)

## Why this exists

AI coding agents can write ESP32 firmware that compiles cleanly and still fails on hardware. The most common failures are not logic bugs; they are hardware constraints hidden in the pin map, boot settings, power budget, and protocol boundaries.

Examples:

- GPIO6 tied to SPI flash
- GPIO34 used as an output when it is input-only
- GPIO12 held high during reset on a 3.3 V flash board
- ADC2 readings failing while Wi‑Fi is active

This repository gives the agent the missing knowledge and gives the workflow a check that runs before flashing.

## What is included

- Skills for ESP32 architecture, GPIO, power, memory, OTA, Wi‑Fi/BLE, Modbus, CAN, sensors, debugging, and industrial interfaces
- Hardware-focused validation tools for common failure modes
- Agent-installation support for multiple harnesses and plugins
- Example boards, test data, and engineering references

## Quick…
