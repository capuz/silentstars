---
repo: "rubin-khadka/STM32_OTA_Bootloader_W5500"
name: "STM32_OTA_Bootloader_W5500"
description: "Over-The-Air (OTA) firmware update system for STM32F103 using W5500 Ethernet. Bootloader with CRC32 verification, external W25Q64 flash for staging, and Python PC server."
readmeQualityOk: true
url: "https://github.com/rubin-khadka/STM32_OTA_Bootloader_W5500"
homepage: "https://maker.wiznet.io/matthew/projects/stm32%2Dota%2Dbootloader%2Dw5500/"
language: "C"
languages: ["C"]
languagePcts: [97]
topics: ["bootloader", "crc32", "embedded-c", "embedded-systems", "ethernet", "firmware-update", "ota-update", "stm32", "stm32f103c8t6", "tcp"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-17T15:47:39Z"
lastCommitAt: "2026-10-24T08:07:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 41
maintainers: ["rubin-khadka"]
openGraphImageUrl: "https://opengraph.githubassets.com/ffab676f56a57e0dc75de12ca83907a84f0c81949443dc200862c392e02364b7/rubin-khadka/STM32_OTA_Bootloader_W5500"
---

# STM32 OTA Bootloader with W5500 Ethernet

## Project Overview

This project implements an Over-The-Air (OTA) firmware update system for STM32F103C8T6 microcontrollers. The system allows firmware updates to be sent from a PC server to the embedded device over Ethernet using the W5500 controller.

**Bootloader** – Runs on every power-up:
- Checks if an OTA update is pending (reads a flag from flash)
- If no update pending: calculates CRC of existing application, verifies magic number and CRC, and jumps to it
- If update pending: reads new firmware from external W25Q64 flash, verifies its CRC and magic number, writes it to internal flash, clears OTA flag, then jumps to the new application

**Main Application** – Normal device operation:
- Runs sensors and LCD display
- When button is pressed: connects to PC server via Ethernet, downloads firmware, stores it in W25Q64 external flash, sets OTA flag, and resets

**PC Server** – Python script that:
- Listens on port 5678
- Sends complete firmware image (16-byte header + binary) when requested

The application is a simplified version of the [Multi Sensor Cloud Logger Project](https://github.com/rubin-khadka/STM32_MicroSD_Cloud_Logger).…
