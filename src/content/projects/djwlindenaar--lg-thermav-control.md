---
repo: "djwlindenaar/LG-thermaV-control"
name: "LG-thermaV-control"
description: "My controller for the LG ThermaV monoblock with ESP32 ESPHome"
readmeQualityOk: true
url: "https://github.com/djwlindenaar/LG-thermaV-control"
language: "C"
languages: ["C"]
languagePcts: [98]
stars: 10
forks: 4
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2022-11-13T12:07:40Z"
lastCommitAt: "2026-11-02T13:38:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 42
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/6e03390dda1e5b6874a742af86a59d4ea979b0e83b2c2dae606f9ece67e8a644/djwlindenaar/LG-thermaV-control"
---

# LG-thermaV-control

ESPHome firmware for monitoring and controlling an LG Therma V heat pump from
an ESP32. It reads the heat pump and an optional power meter over separate
Modbus/RTU links, exposes controls and measurements to Home Assistant, and
implements a configurable heating controller.

The firmware can change heat-pump operating targets and enable/disable heating.
Check the selected profile, wiring, Modbus register mappings, and configured
limits against your installation before connecting it to live equipment.

## Device configurations

Choose the YAML configuration that matches your hardware and Home Assistant
entities:

| Configuration | Device name | Profile notes |
| --- | --- | --- |
| `LGtherma_daniel.yaml` | `lgtherma` | Daniel wiring, Home Assistant room sensors and power target, plus two 1-Wire temperature probes. |
| `LGtherma_daniel_newpcb.yaml` | `lgtherma_test` | New PCB pin assignments and 1-Wire probes. |
| `LGtherma_marco.yaml` | `esp-lgthermav` | Marco custom settings; maps room temperature and heat-pump water temperatures differently. |

These configurations include the shared files in `packages/`. Per-profile
substitutions select GPIO pins, device…
