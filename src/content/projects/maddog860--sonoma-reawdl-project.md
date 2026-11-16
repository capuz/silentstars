---
repo: "maddog860/Sonoma-ReAWDL-Project"
name: "Sonoma-ReAWDL-Project"
description: "Experimental AWDL/Continuity research for AirportItlwm on Intel Wi-Fi hardware"
readmeQualityOk: true
url: "https://github.com/maddog860/Sonoma-ReAWDL-Project"
language: "C"
languages: ["C", "C++"]
languagePcts: [53, 47]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 10
recentReleases: 4
createdAt: "2026-09-25T00:18:16Z"
lastCommitAt: "2026-11-16T04:26:29Z"
lastReleaseAt: "2026-10-16T22:49:48Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 28
maintainers: ["maddog860"]
openGraphImageUrl: "https://opengraph.githubassets.com/267d8299fa2456836c1d8a489c5666c52a28ec8f79b800ff4d0d1f08ba833a04/maddog860/Sonoma-ReAWDL-Project"
---

# Sonoma ReAWDL Project

### Experimental Intel Wi-Fi Support for Apple Wireless Direct Link (AWDL)

## Project Overview

The **Sonoma ReAWDL Project** is an experimental modification of the OpenIntelWireless AirportItlwm driver, primarily developed for the **Intel AX210 Wi-Fi 6E chipset** under macOS Sonoma.

The original goal was to enable native Apple Wireless Direct Link (AWDL) functionality on Intel Wi-Fi hardware, allowing direct communication with Apple devices without requiring a conventional Wi-Fi network.

The ultimate objectives were **functional AirDrop, peer-to-peer AirPlay, native device discovery, and reliable bidirectional wireless communication**, without compromising ordinary Wi-Fi connectivity.

Although complete compatibility was not achieved, the project made substantial progress in driver functionality, packet handling, firmware integration, and stability.

---

## What the Project Achieved

### Native AWDL Integration

The project successfully established a native `awdl0` interface through Apple's IO80211 and Skywalk networking frameworks.

Implemented functionality included interface registration, state management, IPv6 link-local networking, and native…
