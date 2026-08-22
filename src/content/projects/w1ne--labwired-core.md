---
repo: "w1ne/labwired-core"
name: "labwired-core"
description: "Deterministic firmware simulator for ARM Cortex-M and RISC-V — with hardware-validated parity"
readmeQualityOk: true
url: "https://github.com/w1ne/labwired-core"
homepage: "https://labwired.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["embedded-systems", "mcp-server", "virtual-hardware", "zephyr-rtos", "firmware-simulation", "mcu-digital-twin", "ai-agents", "arm", "cortex-m", "deterministic"]
stars: 59
forks: 34
openIssues: 6
closedIssues: 30
watchers: 0
contributors: 4
recentReleases: 6
createdAt: "2026-02-10T12:30:44Z"
lastCommitAt: "2026-08-22T04:06:22Z"
lastReleaseAt: "2026-06-22T11:21:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 96
undervaluedScore: 49
maintainers: ["w1ne"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1154470875/15e01b3c-056e-4a34-a806-429fd02fe703"
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/w1ne/labwired-core/main/docs/assets/brand/labwired-logo-dark.png">
  </picture>
</a>

# LabWired Core

Run your firmware on a virtual instance of a real chip, from your terminal, your CI, or your
AI coding agent. No board on your desk.

<sub>Recorded from [`docs/assets/demo.tape`](https://github.com/w1ne/labwired-core/blob/HEAD/docs/assets/demo.tape) against a real binary. You
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

This repository is the engine behind…
