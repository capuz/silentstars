---
repo: "daqifi/daqifi-nyquist-firmware"
name: "daqifi-nyquist-firmware"
description: "Firmware that runs on DAQiFi Devices"
readmeQualityOk: true
url: "https://github.com/daqifi/daqifi-nyquist-firmware"
homepage: "https://daqifi.com/"
language: "C"
languages: ["C"]
languagePcts: [96]
stars: 5
forks: 2
openIssues: 51
closedIssues: 387
watchers: 4
contributors: 7
recentReleases: 1
createdAt: "2023-05-08T16:47:52Z"
lastCommitAt: "2026-08-24T04:22:46Z"
lastReleaseAt: "2026-06-08T20:22:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 85
maintainers: ["cptkoolbeenz"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbb9149bf832ec94bd55cbce99fd59ab4fc3c0d07e51c047f2b64fb2cebc63db/daqifi/daqifi-nyquist-firmware"
---

# DAQiFi Nyquist Firmware

Multi-channel data acquisition firmware for the DAQiFi Nyquist device family, built on PIC32MZ2048EFM144 with FreeRTOS.

## Features

- **16 analog input channels** (12-bit MC12bADC, optional 18-bit AD7609)
- **8 analog output channels** (12-bit DAC7718, NQ3 variant)
- **16 digital I/O channels** with interrupt-driven capture
- **USB CDC** streaming up to 1 MB/s
- **WiFi** streaming via WINC1500 (TCP, 2.4 GHz)
- **SD card** logging with FAT32, automatic file splitting
- **Protocol Buffers**, CSV, and JSON encoding formats
- **SCPI** command interface (IEEE 488.2 compliant)
- Auto-balanced DMA buffers across active interfaces
- Runtime-configurable streaming, logging, and memory

## Board Variants

| Variant | ADC | DAC | Description |
|---------|-----|-----|-------------|
| NQ1 | MC12bADC (12-bit) | — | Basic |
| NQ2 | AD7173 (24-bit) | — | Enhanced |
| NQ3 | AD7609 (18-bit) | DAC7718 (12-bit) | Full-featured |

## Prerequisites

- [MPLAB X IDE](https://www.microchip.com/mplab/mplab-x-ide) v6.25+
- [XC32 Compiler](https://www.microchip.com/xc32) v4.60
- [Harmony Configurator](https://www.microchip.com/mplab/mplab-harmony) (MHC) for code generation
-…
