---
repo: "NEWSLabNTU/nano-ros"
name: "nano-ros"
description: "no_std ROS 2 client for microcontrollers and RTOS (Zephyr, FreeRTOS, NuttX, ThreadX) and Linux. Rust-first with C/C++ APIs; pluggable Zenoh / XRCE-DDS / Cyclone DDS backends; interoperates with standard ROS 2."
readmeQualityOk: true
url: "https://github.com/NEWSLabNTU/nano-ros"
homepage: "https://newslabntu.github.io/nano-ros-book/"
language: "Rust"
languages: ["Rust"]
languagePcts: [71]
topics: ["cortex-m", "cyclonedds", "dds", "embedded", "esp32", "freertos", "micro-ros", "microcontroller", "middleware", "no-std"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-17T09:32:50Z"
lastCommitAt: "2026-07-17T05:57:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 45
maintainers: ["jerry73204"]
openGraphImageUrl: "https://opengraph.githubassets.com/3272352ddba0216b708a4c1189aa43303dfabc675835d51ce94dc0068bdb93e0/NEWSLabNTU/nano-ros"
---

# nano-ros

A `no_std` ROS 2 client library for bare-metal and RTOS targets, written in Rust. Built on [zenoh-pico](https://github.com/eclipse-zenoh/zenoh-pico) for lightweight pub/sub, services, and actions over TCP, serial, or raw Ethernet.

nano-ros runs directly on microcontrollers without an OS, on RTOS kernels like Zephyr, and on Linux — using the same API. It interoperates with standard ROS 2 nodes via the rmw_zenoh protocol. QEMU emulation is provided for Cortex-M3 and ESP32-C3, enabling full integration testing without hardware.

The project integrates formal verification (Kani bounded model checking, CBMC for the C API) and WCET measurement (DWT cycle counters, static stack analysis) into the build pipeline, providing a foundation for schedulability analysis in safety-critical systems.

## Features

- **Bare-metal and RTOS**: runs on Cortex-M3, STM32F4, ESP32-C3, and Zephyr with no heap allocator required
- **ROS 2 interoperability**: communicates with ROS 2 Humble nodes via rmw_zenoh
- **QEMU emulation**: Cortex-M3 (MPS2-AN385) and ESP32-C3 targets with TAP networking for CI
- **Customizable platform/transport**: swap platform crates (clock, heap, RNG) and transport…
