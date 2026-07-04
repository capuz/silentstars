---
repo: "chickendrop89/device_xiaomi_spring-recovery"
name: "device_xiaomi_spring-recovery"
description: "Redmi 15 5G / 15R 5G / POCO M7+ 5G (spring) - OFRP device-tree"
readmeQualityOk: true
url: "https://github.com/chickendrop89/device_xiaomi_spring-recovery"
language: "Makefile"
languages: ["Makefile", "Shell"]
languagePcts: [65, 35]
topics: ["blair", "ofrp", "orangefox-recovery", "poco", "recovery", "redmi", "sm6375", "spring", "twrp", "xiaomi"]
stars: 10
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-30T22:29:23Z"
lastCommitAt: "2026-07-04T22:13:20Z"
lastReleaseAt: "2026-03-09T19:03:48Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 83
undervaluedScore: 42
maintainers: ["chickendrop89"]
openGraphImageUrl: "https://opengraph.githubassets.com/e56d6e995e571de950d64f4b26f61d5094af21dd8706bd0e2b7406ce138476eb/chickendrop89/device_xiaomi_spring-recovery"
fundingLinks: ["KO_FI:https://ko-fi.com/chickendrop89"]
---

# device_xiaomi_spring-recovery

Recovery tree for this Xiaomi device
- Xiaomi Redmi _15_ 5G / _15R_ 5G / _POCO M7+_ 5G (codename: `spring`) (August 2025)

## Device specifications

Device                  | Redmi 15 5G / 15R 5G / POCO M7+ 5G
:-----------------------|:-------------------------------------
SoC                     | Qualcomm Snapdragon® 6s Gen 3 (SM6375-AC)
Board                   | `blair`
CPU                     | Octa-core (2x2.3 GHz Cortex-A78 & 6x2.0 GHz Cortex-A55)
GPU                     | Adreno 619
Memory                  | 4/6/8/12 GB RAM
Shipped Android Version | 15.0 (HyperOS 2)
Storage                 | 128/256/512 GB (UFS 2.2)
MicroSD                 | Yes (Hybrid Slot)
Battery                 | Non-removable Li-Po 7000 mAh
Dimensions              | 169.5 x 80.5 x 8.4 mm
Display                 | 6.9" FHD+ IPS LCD, 144Hz, 1080x2460

## Checklist
- [x] ADB
- [x] Decryption
- [x] Touchscreen
- [x] FastbootD
- [x] Flashing
- [x] MTP
- [x] Sideload
- [x] Backups
- [x] Filesystems/Mounts
- [x] Slot switch
- [x] Haptics
- [x] Flashlight
- [x] Custom splash

## Notes
This device does not have a eSIM, meaning that instead of using Secure Element/StrongBox for…
