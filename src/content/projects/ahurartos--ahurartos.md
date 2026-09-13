---
repo: "AhuraRTOS/AhuraRTOS"
name: "AhuraRTOS"
description: "The Versatile RTOS for All MCU"
readmeQualityOk: true
url: "https://github.com/AhuraRTOS/AhuraRTOS"
homepage: "https://AhuraRTOS.github.io"
language: "C"
languages: ["C"]
languagePcts: [88]
topics: ["ahura", "esp32", "free", "mcu", "nrf", "rtos", "stm32", "ahurartos"]
stars: 45
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-08T15:49:16Z"
lastCommitAt: "2026-09-13T08:30:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 79
undervaluedScore: 43
maintainers: ["nimaltd"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d98d626612dd3c402f63e69b3e07b7b436c96015612ee3759482b34beb1be14/AhuraRTOS/AhuraRTOS"
fundingLinks: ["GITHUB:https://github.com/nimaltd", "KO_FI:https://ko-fi.com/nimaltd"]
---

# ⚡ AhuraRTOS

**A small, portable, preemptive RTOS for microcontrollers.**

One public header · no editable kernel files · every feature a compile-time switch

**[Why](#why-ahurartos)** ·
**[Features](#what-you-get)** ·
**[Verified](#verified-on-hardware)** ·
**[Install](#install-it)** ·
**[Documentation](#documentation)**

</div>

> [!WARNING]
> **Early and under active development.** The kernel is functional and
> self-testing on every board in the table below, but **APIs may still change**
> and it is not yet recommended for production use.

## Why AhuraRTOS

**It costs one exception vector.** The kernel takes over the lowest-priority
exception - PendSV on Cortex-M, the machine software interrupt on RISC-V - and
nothing else. `SVC` is left entirely to the application, which keeps it
compatible with everything that legitimately wants it: Nordic's SoftDevice,
TF-M and other secure firmware, vendor bootloaders and ROM APIs. The tick is a
single application call to `os_tick_handler()`, and its timer is configurable,
so parts whose SysTick stops in low-power modes are first-class rather than
special cases. No HAL, no CMSIS dependency, no linker-script edits.

**Misintegration fails…
