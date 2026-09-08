---
repo: "pvvx/TlsrSmartSwitch"
name: "TlsrSmartSwitch"
description: "Alternative firmwares for Smart Switch on the TLSR825x chipset."
readmeQualityOk: true
url: "https://github.com/pvvx/TlsrSmartSwitch"
language: "C"
languages: ["C"]
languagePcts: [73]
stars: 13
forks: 7
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-13T10:19:09Z"
lastCommitAt: "2026-09-08T08:17:10Z"
lastReleaseAt: "2026-03-07T06:55:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 56
undervaluedScore: 31
maintainers: ["pvvx"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5ed8ad4445ef7254cda3efb29705b5ceb62242d131f3ef9a2086a797034f47b/pvvx/TlsrSmartSwitch"
discussionCount: 0
---

# TlsrSmartSwitch
Alternative firmwares for Smart Switch on the TLSR825x/TLSR8656 chipset.

## Supported device models:

  

Default:
* [Tuya ZigBee "Zigbee Smart Switch"](https://pvvx.github.io/Zbeacon-TS0001/) (Sensor: **None**), FW name: **EM0SW1**
* [Tuya ZigBee "Mini Zigbee Switch"](https://pvvx.github.io/TS0001_TZ3000_kqvb5akv/) (Sensor: **BL0942**), FW name: ***EM1SW**<**1**/**2**>[**T**/**TS**]*
* [Tuya ZigBee "Mini Smart Switch"](https://pvvx.github.io/TS000F_TZ3000_xkap8wtb/) (Sensor: **BL0937**), FW name: ***EM8SW**<**1/2**>[**T**/**TS**]*

And others Smart Switch - GPIOs are assigned by a separate [utility](https://pvvx.github.io/TlsrSmartSwitch/zigbeeswconfig.html), the all coefficients are set online.

---

## *Story:*

The original FW structure for "Zigbee Smart Switch" was designed by [slacky1965-tuya_mini_relay_zrd](https://github.com/slacky1965/tuya_mini_relay_zrd).

Optimizations have been made:

* Compatibility with ZHA and Zigbee 3.0 standards has been added.
* Firmware size for compatibility with chips with 512K flash memory.
* Chip hardware usage.
* Firmware loader for compatibility with OTA BLE and Zigbee variants.
* Added a version with BL0937 sensor and…
