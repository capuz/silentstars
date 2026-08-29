---
repo: "drewpo28/pico-speccy"
name: "pico-speccy"
description: "ZX Spectrum emulator for Raspberry Pi Pico 2 / RP2350 (ESPectrum port)"
readmeQualityOk: true
url: "https://github.com/drewpo28/pico-speccy"
language: "C"
languages: ["C", "C++"]
languagePcts: [67, 30]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-07-25T18:47:35Z"
lastCommitAt: "2026-08-29T10:06:08Z"
lastReleaseAt: "2026-08-14T14:28:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["drewpo28", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b5a161acd413a50eedf5cc43a797b5eebc1630ce6d3da01b42183a243f551fe/drewpo28/pico-speccy"
---

# pico-speccy

This is an emulator of the Sinclair ZX Spectrum compatible computers running on RP2350 SoC powered boards.

Pico-Speccy is based on:
 - [ESPectrum](https://github.com/EremusOne/ESPectrum)
 - [DnCraptor/pico-spec](https://github.com/DnCraptor/pico-spec)
 - [drewpo28/pico-spec](https://github.com/drewpo28/pico-spec)

Board supported:
 - "Murmulator 1.x" + Raspberry "Pi Pico 2" or compatible;
 - "Murmulator 2.0" + Raspberry "Pi Pico 2" or compatible;
 - Waveshare "RP2350-PiZero" + use PCM5122 for best sound;
 - Pimoroni "Pico DV Demo Base" + Raspberry "Pi Pico 2" or compatible;
 - Olimex "RP2040-PICO-PC" carrier board + Raspberry "Pi Pico 2" or compatible.

Best performance for case Pimoroni "Pico Plus 2" is used.

## Features

- ZX Spectrum 48K, 128K, Pentagon 128k/512k/1024k, Profi 1024K, Byte and ALF TV Game. 100% cycle accurate emulation.
- State of the art Z80 emulation (Authored by [José Luis Sánchez](https://github.com/jsanchezv/z80cpp))
- Selectable Sinclair 48K, Sinclair 128K and Amstrad +2 english and spanish ROMs. Byte and ALF TV Game - russian ROMs, + Pentagons with Gluck services ROMs & selectable TR-DOS ROM (5.03 / 5.04TM / 5.05D / custom). Profi 1024K…
