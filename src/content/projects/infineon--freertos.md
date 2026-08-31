---
repo: "Infineon/freertos"
name: "freertos"
description: "FreeRTOS kernel, distributed as standard C source files with configuration header file."
readmeQualityOk: true
url: "https://github.com/Infineon/freertos"
language: "C"
languages: ["C"]
languagePcts: [96]
stars: 22
forks: 9
openIssues: 0
closedIssues: 0
watchers: 11
contributors: 4
recentReleases: 0
createdAt: "2019-09-03T15:14:08Z"
lastCommitAt: "2026-08-31T09:44:49Z"
lastReleaseAt: "2023-09-29T13:47:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 30
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/0e737c4c9eac389e349e6d57a79ae29a956af73175fd28a03f20be3a2b1bd2bb/Infineon/freertos"
---

# FreeRTOS for Infineon MCUs

## Overview

This package provides the FreeRTOS kernel port and integration assets for Infineon MCUs. It enables deterministic task scheduling, inter-task communication, and low-power operation in ModusToolbox applications.

This README is self-contained for both developers and LLM assistants in offline workspace use.

FreeRTOS integration in this asset is core-based rather than platform-dependent: select sources and configuration by CPU core (CM0, CM0+, CM4, CM33, CM55, CM7, or CR4).

## Features

- FreeRTOS kernel integration for Arm Cortex-M0, M0+, M4, M33, M55, M7, and Cortex-R4 (CR4)
- Core RTOS primitives: tasks, queues, semaphores, mutexes, event groups, stream/message buffers, and software timers
- Configurable scheduling and memory strategies, including multiple heap allocation schemes
- Tickless idle support for low-power operation, including DSRAM use cases through application sleep hooks
- TrustZone integration flow for CM33 nonSecure and Secure projects

## When to Use

Use this middleware when your application needs deterministic multi-tasking on Infineon MCUs and requires a production-proven RTOS kernel with configurable memory and…
