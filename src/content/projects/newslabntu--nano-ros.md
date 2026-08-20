---
repo: "NEWSLabNTU/nano-ros"
name: "nano-ros"
description: "no_std ROS 2 client for microcontrollers and RTOS (Zephyr, FreeRTOS, NuttX, ThreadX) and Linux. Rust-first with C/C++ APIs; pluggable Zenoh / XRCE-DDS / Cyclone DDS backends; interoperates with standard ROS 2."
readmeQualityOk: true
url: "https://github.com/NEWSLabNTU/nano-ros"
homepage: "https://newslabntu.github.io/nano-ros-book/"
language: "Rust"
languages: ["Rust"]
languagePcts: [67]
topics: ["cortex-m", "cyclonedds", "dds", "embedded", "esp32", "freertos", "micro-ros", "microcontroller", "middleware", "no-std"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-17T09:32:50Z"
lastCommitAt: "2026-08-20T04:08:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 48
maintainers: ["jerry73204"]
openGraphImageUrl: "https://opengraph.githubassets.com/85bb846d6c92e7c83b14af7bfc0dc2337180fa33c9089516f13fb7e17c15f843/NEWSLabNTU/nano-ros"
---

# nano-ros

A `no_std` ROS 2 client library for bare-metal and RTOS targets, written in Rust. Built on [zenoh-pico](https://github.com/eclipse-zenoh/zenoh-pico) for lightweight pub/sub, services, and actions over TCP, serial, or raw Ethernet.

nano-ros runs directly on microcontrollers without an OS, on RTOS kernels (Zephyr, FreeRTOS, NuttX, ThreadX), and on Linux — using the same API. It interoperates with standard ROS 2 nodes via the rmw_zenoh protocol. QEMU emulation is provided for Cortex-M3 (bare-metal + FreeRTOS MPS2-AN385), ESP32-C3, NuttX (ARM virt + RISC-V rv-virt), and ThreadX RISC-V64, plus a ThreadX Linux simulator — enabling full integration testing without hardware.

The project integrates formal verification (Kani bounded model checking, CBMC for the C API) and WCET measurement (DWT cycle counters, static stack analysis) into the build pipeline, providing a foundation for schedulability analysis in safety-critical systems.

## Features

- **Bare-metal and RTOS**: runs on Cortex-M3, STM32F4, ESP32-C3 bare-metal and on Zephyr, FreeRTOS, NuttX, and ThreadX kernels; no heap allocator required on bare-metal
- **ROS 2 interoperability**: communicates with ROS 2 Humble…
