---
repo: "w1ne/labwired-core"
name: "labwired-core"
description: "Open-source circuit and MCU firmware simulator for mixed-signal co-simulation, deterministic CI, and MCP workflows. STM32, ESP32, RP2040."
readmeQualityOk: true
url: "https://github.com/w1ne/labwired-core"
homepage: "https://labwired.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["embedded-systems", "mcp-server", "virtual-hardware", "zephyr-rtos", "firmware-simulation", "mcu-digital-twin", "ai-agents", "arm", "cortex-m", "deterministic"]
stars: 150
forks: 42
openIssues: 30
closedIssues: 54
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-10T12:30:44Z"
lastCommitAt: "2026-11-10T22:26:20Z"
lastReleaseAt: "2026-06-22T11:21:05Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 37
maintainers: ["w1ne", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1154470875/15e01b3c-056e-4a34-a806-429fd02fe703"
discussionCount: 0
---

# LabWired Core

Run your firmware on a virtual instance of a real chip, from your terminal, your CI, or your
AI coding agent. No board on your desk.

can re-run it. The second half breaks an assertion on purpose, so you can see the gate
fail.</sub>

## What is LabWired Core?

LabWired Core loads a firmware ELF and executes it against modeled silicon: CPU, buses,
peripherals, sensors, displays, and protocol devices. You get UART output, GPIO and bus
traces, register state, and a pass/fail exit code.

Runs are deterministic. The same ELF and the same board manifest give the same trace on
every machine. That is what makes a simulator run usable as a CI gate.

Supported cores:

* ARM Cortex-M0+, Cortex-M3, Cortex-M4, Cortex-M7, Cortex-M33
* RISC-V
* Xtensa LX6 and LX7 (selected ESP32 paths)

This repository is the engine behind [labwired.com](https://labwired.com/). The hosted
browser [Playground](https://app.labwired.com/) and the hosted MCP connector run the same
models. To look before installing anything, open a lab:
[SSD1306 hello](https://app.labwired.com/?lab=ssd1306-hello-lab),
[U575 Star Catcher](https://app.labwired.com/?lab=nucleo-u575-star-catcher&run=1),
[BME280…
