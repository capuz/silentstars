---
repo: "FelixKunzJr/ESPPinoutWebsite"
name: "ESPPinoutWebsite"
description: "Free interactive ESP32 pinout reference - pin constraints, mapping builder, export"
readmeQualityOk: true
url: "https://github.com/FelixKunzJr/ESPPinoutWebsite"
homepage: "https://esp32pin.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["arduino", "embedded", "esp32", "esp32-arduino", "esp32-c3", "esp32-c6", "esp32-s3", "gpio", "maker", "microcontroller"]
stars: 56
forks: 6
openIssues: 0
closedIssues: 7
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-05-28T15:00:34Z"
lastCommitAt: "2026-09-17T08:51:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 39
maintainers: ["FelixKunzJr", "dmatking", "magealexstra"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec02f5aac65f1ebbccbd7a7515d1726a04b5ce6ba8aad824661fd908f9b66fb6/FelixKunzJr/ESPPinoutWebsite"
---

</p>

# ESP32 Pinout Studio

**Live at [esp32pin.com](https://esp32pin.com)** - a free, interactive pinout reference for the whole ESP32 family, built for the maker community.

Pick the wrong pin on an ESP32 and your project boots into download mode, crashes when Wi-Fi starts, or bricks the flash bus. This site exists so that doesn't happen: every pin carries its constraints (strapping pins, ADC2/Wi-Fi conflicts, flash-reserved GPIOs, input-only pins, USB/JTAG lines) right on the diagram.

## Features

- **Schematic view**: the official Espressif KiCad symbol for each module, rendered as an EDA-style sheet with verbatim pin names and high-visibility warnings.
- **Module view**: a realistic top-down rendering of the physical module with its castellated pads.
- **23 modules and dev boards** across ESP32, S2, S3, C3, C5, C6, and H2, each with its real physical pad layout.
- **Pin mapping builder** with live conflict detection, Arduino `#define` export, shareable URLs, and PNG export.
- **Filters** for Wi-Fi-safe ADC, safe outputs, touch, strapping, and unconstrained pins.

## Data provenance

Pin names, physical pad layouts, and schematic symbols are generated from [Espressif's…
