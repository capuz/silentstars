---
repo: "NEWSLabNTU/nano-ros"
name: "nano-ros"
description: "no_std ROS 2 client for microcontrollers and RTOS (Zephyr, FreeRTOS, NuttX, ThreadX) and Linux. Rust-first with C/C++ APIs; pluggable Zenoh / XRCE-DDS / Cyclone DDS backends; interoperates with standard ROS 2."
readmeQualityOk: true
url: "https://github.com/NEWSLabNTU/nano-ros"
homepage: "https://newslabntu.github.io/nano-ros-book/"
language: "Rust"
languages: ["Rust"]
languagePcts: [57]
topics: ["cortex-m", "cyclonedds", "dds", "embedded", "esp32", "freertos", "micro-ros", "microcontroller", "middleware", "no-std"]
stars: 16
forks: 3
openIssues: 7
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 5
createdAt: "2026-01-17T09:32:50Z"
lastCommitAt: "2026-10-19T08:46:36Z"
lastReleaseAt: "2026-10-15T21:45:44Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 54
maintainers: ["jerry73204"]
openGraphImageUrl: "https://opengraph.githubassets.com/a64c2d91fa1e56f362fdb22a8aeb3218f6234b405fb3db37efe5f693635162c9/NEWSLabNTU/nano-ros"
---

# nano-ros

A `no_std` ROS 2 client library for bare-metal and RTOS targets, written in Rust. Built on [zenoh-pico](https://github.com/eclipse-zenoh/zenoh-pico) for lightweight pub/sub, services, and actions over TCP, serial, or raw Ethernet.

nano-ros runs directly on microcontrollers without an OS, on RTOS kernels (Zephyr, FreeRTOS, NuttX, ThreadX), and on Linux — using the same API. It interoperates with standard ROS 2 nodes via the rmw_zenoh protocol. QEMU emulation is provided for Cortex-M3 (bare-metal + FreeRTOS MPS2-AN385), NuttX (ARM virt + RISC-V rv-virt), and ThreadX RISC-V64, plus a ThreadX Linux simulator — enabling full integration testing without hardware.

The project integrates formal verification (Kani bounded model checking, CBMC for the C API) and WCET measurement (DWT cycle counters, static stack analysis) into the build pipeline, providing a foundation for schedulability analysis in safety-critical systems.

## Features

- **Bare-metal and RTOS**: runs on Cortex-M3 and STM32F4 bare-metal and on Zephyr, FreeRTOS, NuttX, and ThreadX kernels; no heap allocator required on bare-metal
- **ROS 2 interoperability**: communicates with ROS 2 Humble nodes via rmw_zenoh…
