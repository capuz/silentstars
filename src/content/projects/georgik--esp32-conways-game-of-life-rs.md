---
repo: "georgik/esp32-conways-game-of-life-rs"
name: "esp32-conways-game-of-life-rs"
description: "Rust Bare Metal implementation of Conway's Game of Life for multiple ESP32 based boards"
readmeQualityOk: true
url: "https://github.com/georgik/esp32-conways-game-of-life-rs"
homepage: "https://developer.espressif.com/blog/2025/04/bevy-ecs-on-esp32-with-rust-no-std/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["bevy-ecs", "conways-game-of-life", "embedded-systems", "esp32c6", "esp32s3", "nostd", "rust", "esp32", "esp32c3", "m5stack-cores3"]
stars: 45
forks: 6
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-11-03T08:39:45Z"
lastCommitAt: "2026-10-06T10:41:30Z"
lastReleaseAt: "2025-03-19T08:29:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 49
maintainers: ["georgik", "MatheyDeo"]
openGraphImageUrl: "https://opengraph.githubassets.com/2af3b6db811ca978feadece4176fe420f7affc3a5c3eea4b5f56b3762239bf4f/georgik/esp32-conways-game-of-life-rs"
---

# ESP32 Conway's Game of Life in Rust

Implementation of Conway's Game of Life Rust Bare Metal.

Note: For more complex Rust no_std example, check [Spooky Maze Game](https://github.com/georgik/esp32-spooky-maze-game/)

## Recommended Tools

- [CLion with Rust and Wokwi plugins](https://plugins.jetbrains.com/plugin/23826-wokwi-simulator)
- [VS Code with Rust and Wokwi plugin](https://docs.wokwi.com/vscode/getting-started)

## Dependencies and Requirements

This project uses ESP-HAL for Rust bare-metal development on ESP32 microcontrollers. The examples support various ESP32 boards with different configurations including PSRAM, DMA, Embassy, and display interfaces.

### Toolchain Requirements

Most examples require the ESP Rust toolchain. For ESP32-S3 boards, use toolchain version 1.85.0.0 or later (for Edition 2024 support). For original ESP32 (Xtensa), use the stable toolchain.

Install the toolchain:
```bash
cargo install espup
espup install
source ~/export-esp.sh
```

### Software Versions

- **Bevy ECS**: 0.18.1 (official release, used across all projects)
- **esp-hal**: 1.1.0
- **Rust Edition**: 2024
- **Targets**: xtensa-esp32s3-none-elf, xtensa-esp32-none-elf,…
