---
repo: "tinygo-org/espflasher"
name: "espflasher"
description: "Go CLI and library for flashing firmware to Espressif ESP8266 and ESP32-family microcontrollers"
readmeQualityOk: true
url: "https://github.com/tinygo-org/espflasher"
homepage: "https://tinygo.org"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["esp32", "esp32-c3", "esp32-s3", "esptool", "flash", "esp8266"]
stars: 113
forks: 12
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 22
recentReleases: 0
createdAt: "2026-02-27T10:02:12Z"
lastCommitAt: "2026-11-23T10:20:33Z"
lastReleaseAt: "2026-07-18T13:19:59Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 32
maintainers: ["deadprogram", "jgangemi", "davecheney"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1168369650/6895c728-b26d-470c-a8e9-0d253aa594df"
---

# espflasher

A Go command-line tool and library for flashing firmware to Espressif ESP8266 and ESP32-family microcontrollers over serial (UART) or USB-JTAG/Serial connections.

## Supported Chips

- ESP8266
- ESP32
- ESP32-S2
- ESP32-S3
- ESP32-C2 (ESP8684)
- ESP32-C3
- ESP32-C5
- ESP32-C6
- ESP32-H2
- ESP32-P4 (rev 3.x)

> The ESP32-P4 defaults to rev 3.x (ECO6). The legacy ECO2 silicon (rev 1.x, no longer sold)
> is selectable with `-chip esp32p4-rev1`. P4 flashes in ROM mode — the RAM stub loads but does
> not answer flash commands — so the stub is skipped automatically and a final
> `FLASH_END` is sent after the last image part.

## CLI Tool

### Installation

You can download and install one of the prebuilt binaries for your operating system under "Releases" or install from source:

```bash
go install tinygo.org/x/espflasher@latest
```

### CLI Usage

```
espflasher <command> [options] [args]
```
