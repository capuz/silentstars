---
repo: "pf-robotics/kachaka-button-hub"
name: "kachaka-button-hub"
description: "Kachaka Button Hub"
readmeQualityOk: true
url: "https://github.com/pf-robotics/kachaka-button-hub"
language: "C"
languages: ["C"]
languagePcts: [74]
topics: ["kachaka", "m5stack", "grpc", "robot"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-05-02T00:03:29Z"
lastCommitAt: "2026-09-16T08:28:39Z"
lastReleaseAt: "2025-07-22T06:18:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 33
maintainers: ["ochiai-pfr"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e05727537606af5b1780c639b3997a7669a7e965bbfe16eb0cad04ba33fc18a/pf-robotics/kachaka-button-hub"
---

# Kachaka Button Hub

The "Kachaka Button Hub" is software for IoT devices that converts [BLE beacon](https://www.braveridge.com/product/archives/22) events into commands for [Kachaka](https://kachaka.life/). It operates on the [M5Stack v2.7](https://docs.m5stack.com/en/core/basic_v2.7) platform and the software is completely open-source. The system comprises two main components: one that translates BLE iBeacon signals into commands for the [Kachaka API](https://github.com/pf-robotics/kachaka-api) via gRPC, and another that allows for configuration through a Web UI.

## Build Instructions

### Prerequisites

These instructions are designed for Ubuntu or Ubuntu-based distributions. They focus on using the `apt-get` command for installing necessary tools.

Ensure you have the following tools and libraries installed:

- GNU Make
    - Install with the command: `sudo apt-get install make`
- Protocol Buffers Compiler (protoc)
    - Install with the command: `sudo apt-get install protobuf-compiler`
- Python Virtual Environment and pyserial
    - Install with the command: `sudo apt-get install python3-serial python3-venv`
- npm (Node.js)
    - Download and install from the [Node.js…
