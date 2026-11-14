---
repo: "bitscrafts/EFR32MG2X-RS"
name: "EFR32MG2X-RS"
description: "Rust crates for silicon Labs EFR32MG24 (pac+hal+examples)"
readmeQualityOk: true
url: "https://github.com/bitscrafts/EFR32MG2X-RS"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [52, 46]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-04T03:13:43Z"
lastCommitAt: "2026-11-14T21:59:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 64
maintainers: ["mvcorrea"]
openGraphImageUrl: "https://opengraph.githubassets.com/40afc99df9cf1adfb043808ec39ff77117181f5ee3ca507db05e1ccbb8d76e0b/bitscrafts/EFR32MG2X-RS"
---

# EFR32MG24 Rust Support

*XIAO MG24 Sense in the XIAO Expansion Base running `base_env_display`: the panel carries the BME680's compensated
readings (temperature, pressure, humidity), with the sensor and a microphone breakout beside it.*

Rust Peripheral Access Crate (PAC) and Hardware Abstraction Layer (HAL) for Silicon Labs EFR32MG24 wireless SoCs.

```
--------> This project is under deep implementation process!! use with caution!

- Managed to make pac, hal and bsp examples to work plus initial ble (working with CI).
- Begin writing the book on supporting new hardware in rust, check it!
- From our last iteraction (about an year) SILABS was bought! Now TI!
- Returned to work, bought a new board (i managed to break the swd pads on the old one) and expansion board
- Managed to unbrick the board, proceed with testing.
- Almost finished the bluetooth support (easier than i thought) now, comparing other vendors implementation.
- Silabs forum's topic on the bricked device: https://community.silabs.com/s/question/0D7Vm00000DHJRlKAP
- Actually, I do have a bricked board, Seeed support is useless (you can't post on the forums, email is inexistent!)
- That’s my first attempt at…
