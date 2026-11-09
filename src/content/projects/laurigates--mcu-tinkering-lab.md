---
repo: "laurigates/mcu-tinkering-lab"
name: "mcu-tinkering-lab"
description: "This repository contains projects for various embedded platforms (ESP32, Arduino, STM32)."
readmeQualityOk: true
url: "https://github.com/laurigates/mcu-tinkering-lab"
language: "C"
languages: ["C", "Python"]
languagePcts: [56, 37]
topics: ["arduino", "esp32", "stm32", "embedded", "managed-by-opentofu"]
stars: 7
forks: 0
openIssues: 105
closedIssues: 239
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-18T11:54:29Z"
lastCommitAt: "2026-11-09T11:59:57Z"
lastReleaseAt: "2026-07-02T18:06:38Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 71
maintainers: ["laurigates", "claude", "laurigates-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e03c3067961e92f17af59a45f9a791c4b078e2c2505fd4b751334c080a027bbe/laurigates/mcu-tinkering-lab"
---

# MCU Tinkering Lab

A monorepo of microcontroller projects, mostly ESP32. The largest is a robot car
that drives on camera input and an LLM's plan. Others cover audio toys, game
controller bridges, an ESP-NOW mesh of companion boxes, and a self-balancing
robot on the RP2350.

## Flash from the browser

Released firmware can be flashed with the
[web flasher](https://laurigates.github.io/mcu-tinkering-lab/) in Chrome or
Edge, with no toolchain installed. Board-specific boot-mode notes are on the
page itself ([source](https://github.com/laurigates/mcu-tinkering-lab/blob/HEAD/docs/flasher/index.html)).

The [robocar board story](https://laurigates.github.io/mcu-tinkering-lab/robocar/)
follows the robot car from a 2018 kit to a generated, factory-made carrier
board ([source](https://github.com/laurigates/mcu-tinkering-lab/blob/HEAD/docs/site/robocar/index.html)).

## Build from source

ESP-IDF builds run in a container, so Docker and
[just](https://github.com/casey/just) are the only requirements.

```bash
git clone https://github.com/laurigates/mcu-tinkering-lab.git
cd mcu-tinkering-lab
just setup-all                   # Docker images, dev tools, pre-commit hooks
just list-projects…
