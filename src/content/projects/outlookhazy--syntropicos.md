---
repo: "outlookhazy/SyntropicOS"
name: "SyntropicOS"
description: "Modular cooperative RTOS for MCUs — protothread scheduler, industrial fieldbus (Modbus, EtherCAT, CANopen, LIN, PMBus), DSP/NN, motor control, IoT & 60+ drivers. Zero-dependency C99 for ARM Cortex-M, RISC-V, ESP32, RP2040, AVR. Bare-metal & Arduino."
readmeQualityOk: true
url: "https://github.com/outlookhazy/SyntropicOS"
homepage: "https://outlookhazy.github.io/SyntropicOS/"
language: "C"
languages: ["C"]
languagePcts: [95]
topics: ["arduino", "arduino-library", "avr", "bare-metal", "c", "cooperative-multitasking", "cortex-m", "dsp", "embedded", "embedded-systems"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 58
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-06-29T13:26:11Z"
lastCommitAt: "2026-07-28T14:54:02Z"
lastReleaseAt: "2026-07-27T15:41:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 70
maintainers: ["outlookhazy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1284047393/f1be1f58-9d25-48ba-9710-90aaf41e8081"
---

</p>

# SyntropicOS

**High-Performance Bare-Metal Application Framework & Cooperative OS**

SyntropicOS is a zero-overhead, production-grade C99 framework designed for deeply embedded microcontrollers (STM32, RP2040, ESP32, AVR, RISC-V). It combines stackless coroutines, non-blocking hardware drivers, industrial fieldbuses, fixed-point DSP, and display graphics into a single cooperative ecosystem.

---

## Technical Specifications At-a-Glance

| Property | Design Specification |
|---|---|
| **Concurrency** | Cooperative stackless coroutines (`syn_pt`). Continuation state costs **2 bytes RAM** per thread. |
| **Scheduler** | Cooperative task runner (`syn_sched`). Task descriptors cost **~16–28 bytes RAM** per task. |
| **Memory Allocation** | **100% Zero-Heap / Static Allocation**. No `malloc()` or dynamic pool fragmentation over long runtimes. |
| **Execution Model** | All 70+ drivers & protocol stacks are written as **non-blocking state machines**. |
| **Compatibility** | Standard **C99**. Compiles with GCC, Clang, IAR, Keil, STM32CubeIDE, and Arduino IDE. |

---

## System Architecture

> [!NOTE]
> *If the Mermaid architecture diagram below fails to render on first load, please…
