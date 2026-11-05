---
repo: "OpenIPC/builder"
name: "builder"
description: "Experimental system for building OpenIPC firmware for known devices"
readmeQualityOk: true
url: "https://github.com/OpenIPC/builder"
homepage: "https://openipc.org"
language: "Shell"
languages: ["Shell"]
languagePcts: [88]
topics: ["openipc", "builder", "firmware"]
stars: 101
forks: 153
openIssues: 15
closedIssues: 14
watchers: 6
contributors: 44
recentReleases: 0
createdAt: "2023-11-29T21:08:31Z"
lastCommitAt: "2026-11-05T14:05:25Z"
lastReleaseAt: "2026-07-26T05:59:46Z"
status: "thriving"
tags: ["funded", "fork_magnet"]
healthScore: 86
undervaluedScore: 53
maintainers: ["widgetii", "openipc-ai", "flyrouter"]
openGraphImageUrl: "https://opengraph.githubassets.com/469c1c7a6b9b7d4c0828f8e72d2d5774faf836ebc0f8806c4bdcb18a8102cffa/OpenIPC/builder"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/openipc"]
---

## OpenIPC Builder
_(based on Buildroot)_

### Specialized features

- Tweaker for automatically configuring devices according to profile (gpio, wifi, etc).
- Specialized _[storage location](https://github.com/OpenIPC/builder/releases/tag/latest)_ for customized firmware for well-known devices.
- QR code recognition to automatically _[connect to WiFi](https://openipc.org/tools/qr-code-generator)_ on your home network.

### List of known and supported devices

```
Anxinshi ASRIH698T       HI3516DV100  IMX291    -                NOR_8M    video-ok, pan/tilt-ok (pelco-d UART1), zoom/focus-no
Aoni EP01J05             T31L         ?         RTL8188FU_USB    NOR_16M   new
Azarton C1               T20X         JXF23     RTL8189FS_SDIO   NOR_16M   done
Azarton C1               T31X         GC2053    RTL8189FS_SDIO   NOR_16M   done
Babysense See HD IP206   SSC333       GC2053    RTL8188FU_USB    NOR_16M   done
Baolian 11R6W25-HX20Y    HI3518EV200  JXH65     MT7601U_USB      NOR_8M    testing, zoom/focus lens (OpenIPC/firmware#2675)
Botslab C213             T23N         SC3332    ATBM6012B_USB    NOR_8M    **INIT** - frozen
CCDCAM IM50Q01           SSC377QE     IMX335    -…
