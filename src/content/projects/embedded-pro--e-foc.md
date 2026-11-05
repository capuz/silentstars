---
repo: "embedded-pro/e-foc"
name: "e-foc"
description: "Comprehensive embedded motor control toolkit demonstrating Field-Oriented Control (FOC) and PID implementations for DC, BLDC, and PMSM motors"
readmeQualityOk: true
url: "https://github.com/embedded-pro/e-foc"
homepage: "https://embedded-pro.github.io/e-foc/"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["clarke-transform", "embedded", "foc", "microcontroller", "park-transform", "real-time"]
stars: 11
forks: 2
openIssues: 28
closedIssues: 109
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2024-12-31T12:12:57Z"
lastCommitAt: "2026-11-05T14:05:24Z"
lastReleaseAt: "2026-10-30T20:25:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 83
maintainers: ["gabrielfrasantos", "embedded-releaser-app[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b5d5a3b2e892c0cae9bda3851a60afef98373d6462729ecddb9e5e28e1cec6a/embedded-pro/e-foc"
---

# e-foc

An embedded motor control application implementing Field-Oriented Control (FOC) for BLDC and PMSM motors with strict real-time and memory constraints. Built for deterministic execution on resource-constrained microcontrollers.

## Overview

This project provides a production-ready motor control implementation designed for embedded systems with no heap allocation, deterministic execution, and minimal memory footprint. It demonstrates FOC algorithms with complete hardware integration for ST and TI microcontrollers.

## Features

### Core Capabilities
- **Field-Oriented Control (FOC)**: Complete implementation for BLDC and PMSM motors
- **Space Vector Modulation (SVM)**: Efficient PWM generation
- **PID Control**: Anti-windup implementations for current and velocity loops
- **Sensored Control**: Quadrature encoder feedback
- **Auto-Tuning**: Resistance and Inductance estimation
- **Real-Time Performance**: Deterministic execution with no heap allocation

### Embedded Constraints
- **Zero Heap Allocation**: All memory statically allocated at compile-time
- **Fixed Memory Footprint**: Uses `infra::BoundedVector`, `infra::BoundedString` instead of standard containers
-…
