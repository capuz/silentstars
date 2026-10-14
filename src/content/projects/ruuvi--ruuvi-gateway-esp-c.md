---
repo: "ruuvi/ruuvi.gateway_esp.c"
name: "ruuvi.gateway_esp.c"
description: "Ruuvi Gateway ESP32 code"
readmeQualityOk: true
url: "https://github.com/ruuvi/ruuvi.gateway_esp.c"
language: "C"
languages: ["C"]
languagePcts: [69]
stars: 29
forks: 14
openIssues: 116
closedIssues: 743
watchers: 6
contributors: 10
recentReleases: 0
createdAt: "2019-10-02T07:47:41Z"
lastCommitAt: "2026-10-14T08:58:26Z"
lastReleaseAt: "2021-06-08T20:01:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 62
maintainers: ["TheSomeMan"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba69f54fa7fd505e6f2cf5a69000b47f418b3ba0e2c589fd0de89341c9eb7050/ruuvi/ruuvi.gateway_esp.c"
---

# Ruuvi Gateway ESP32 firmware

Developed with:
* Hardware: Ruuvi Gateway Rev A2.
* ESP-IDF version [v4.2.5](https://github.com/espressif/esp-idf/releases/tag/v4.2.5)

Latest documentation and roadmap is at https://docs.ruuvi.com/gw-esp32-firmware. 

## Installing Prerequisites

### Driver installation for the USB-to-Serial converter **CH340**

The Ruuvi Gateway contains a USB-to-Serial converter **CH340**, so to communicate with it, you
need drivers for this chip.

All modern operating systems already have support for the USB-to-Serial converter **CH340**.
However, if you have any problems, you can try to [reinstall the driver yourself](#ch340-drivers-installation).

### ESP-IDF framework and toolchain installation

If you want to build firmware from source, you will need to install the ESP-IDF framework and 
the toolchain to compile code for ESP32. See the
[Getting Started Guide](https://docs.espressif.com/projects/esp-idf/en/v4.2.5/esp32/get-started/index.html)
for detailed instructions on how to install all the necessary components for the various platforms. 

**Please note that you need to install ESP-IDF version v4.2.5**:
```shell
git clone -b v4.2.5 --recursive…
