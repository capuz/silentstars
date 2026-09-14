---
repo: "78/micropixel"
name: "micropixel"
description: "A game framework for small chips like ESP32"
readmeQualityOk: true
url: "https://github.com/78/micropixel"
homepage: "https://micropixel.ai"
language: "C++"
languages: ["C++"]
languagePcts: [76]
stars: 23
forks: 6
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-08-22T10:58:59Z"
lastCommitAt: "2026-09-14T09:12:27Z"
lastReleaseAt: "2026-09-12T02:58:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 42
maintainers: ["78", "dairoot"]
openGraphImageUrl: "https://opengraph.githubassets.com/248085d4bad49fe7fd0071c80dfa835d6493923d69e6dffa880ca21a6ae243b7/78/micropixel"
---

# MicroPixel

[English](https://github.com/78/micropixel/blob/HEAD/README.md) | [简体中文](https://github.com/78/micropixel/blob/HEAD/README.zh-CN.md)

[MicroPixel](https://micropixel.ai) runs WebAssembly apps on Espressif microcontrollers.
Apps use a C++23 SDK for graphics, input, audio, storage, and sensors, without depending on a board-specific SDK.
The firmware manages hardware, app isolation, and the system UI.

## Hardware

| Chip | Board |
|---|---|
| ESP32-P4 | [Metalio-Claw4](https://github.com/CloudZao/MetalioClaw4) |
| ESP32-S31 | [ESP-Mosaico](https://github.com/esp-mosaico/esp-mosaico-bsp) |
| ESP32-S3 | [ESP32-S3-BOX-3](https://github.com/espressif/esp-box) |
| ESP32-S3 | [LCKFB SZPI](https://wiki.lckfb.com/zh-hans/szpi-esp32s3/beginner/introduction.html) |
| ESP32-S3 | [M5Stack CoreS3](https://docs.m5stack.com/en/core/CoreS3) |

The Host uses ESP-IDF 6.1 and a pinned [WAMR fork](https://github.com/78/wasm-micro-runtime).
Apps are compiled to architecture-specific AOT v6 bundles. The ABI is still evolving.

## Build an app

Install the [SDK](https://micropixel.ai/docs/environment/) and connect a device running MicroPixel firmware.
App development does not require…
