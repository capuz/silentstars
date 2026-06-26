---
repo: "RegexCore/stm32-robot-arm-controller"
name: "stm32-robot-arm-controller"
description: "Embedded firmware for a 6-DOF robotic arm with gripper on STM32 featuring inverse kinematics, real-time control and a modular C/C++ architecture."
url: "https://github.com/RegexCore/stm32-robot-arm-controller"
language: "C"
languages: ["C"]
languagePcts: [100]
topics: ["bare-metal", "c", "cortex-m", "cpp", "embedded", "embedded-systems", "firmware", "hardware-abstraction-layer", "inverse-kinematics", "kinematics"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-15T20:03:28Z"
lastCommitAt: "2026-06-26T21:33:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 15
maintainers: ["RegexCore"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b1f4272dacf82b8d19a89061efa22e79461551e2b9d1faaad35c325389db3cb/RegexCore/stm32-robot-arm-controller"
discussionCount: 0
---

# Robot Arm Controller Firmware

Embedded firmware for a **6-DOF robotic arm with gripper** based on an STM32 microcontroller.
The project combines low-level hardware access in C with higher-level control logic in C++ and provides both **manual joystick control** and **automatic positioning using forward and inverse kinematics**.

  <em>Demo: Robotic arm movement and control.</em>
</p>

  <em>Figure: Robotic arm hardware prototype.</em>
</p>

## Engineering Highlights

- Deterministic 100 Hz control loop using timer interrupt scheduling
- Continuous ADC acquisition via DMA
- Hybrid C / C++ architecture with clear module separation
- Forward and inverse kinematics
- Smooth servo interpolation
- Emergency stop safety concept

The software is designed with a modular architecture to ensure a clear separation between hardware abstraction, motion control, mathematical modelling, configuration data and shared data structures. This improves readability, maintainability and extensibility of the codebase.

This project was developed as part of personal advanced training in embedded C / C++ and robotics (see [Disclaimer](#disclaimer)).

---

## Table of Contents

- [Robot Arm Controller…
