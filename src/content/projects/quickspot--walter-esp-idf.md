---
repo: "QuickSpot/walter-esp-idf"
name: "walter-esp-idf"
description: " This repository contains all libraries and software to use Walter in the ESP-IDF framework "
readmeQualityOk: true
url: "https://github.com/QuickSpot/walter-esp-idf"
language: "C++"
languages: ["C++"]
languagePcts: [87]
stars: 34
forks: 32
openIssues: 19
closedIssues: 43
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2023-11-28T14:11:05Z"
lastCommitAt: "2026-11-17T14:39:32Z"
lastReleaseAt: "2025-07-22T09:38:15Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 55
maintainers: ["devArnoud", "dasyad00", "vThibo"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4d71b34086be4623bcb4fec5f3036771415e00e6764fc3a4270266defd88faf/QuickSpot/walter-esp-idf"
---

# Walter Modem Driver for ESP-IDF

## Overview

This component contains the WalterModem library which is used to use the 
Sequans GM02SP modem which is found on the Walter module. The Walter module 
is a fully certified modem module (CE, UKCA, FCC, IC, RCM) which is designed to 
be integrated in a cellular IoT product. Walter combines LTE-M, NB-IoT, WiFi,
BLE and GNSS in a single module and runs on  the ESP32-S3 MCU with 2MB of PSRAM
and 16MB of flash memory.

## How to use
The component needs ESP-IDF 5.3 or newer. This is the easiest way to use Walter Modem component.

```bash
idf.py add-dependency "dptechnics/walter-modem^1.6.1" 
```

To use this component inside your project you must add `dptechnics/walter-modem` to the `idf_components.yml`
file inside the `main` folder of your project, or copy and modify `idf_component.yml` from one of the examples.

```yml
dependencies:
  dptechnics/walter-modem:
    version: "1.6.1"
```

## Contributing

We welcome all contributions to the software via github pull requests on the 
[walter-esp-idf repository](https://github.com/QuickSpot/walter-esp-idf). Please
take the design strategies in mind when contributing. 

## Licence

The library is…
