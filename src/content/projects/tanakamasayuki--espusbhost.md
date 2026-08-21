---
repo: "tanakamasayuki/EspUsbHost"
name: "EspUsbHost"
description: "Library for using USB Host with ESP32"
readmeQualityOk: true
url: "https://github.com/tanakamasayuki/EspUsbHost"
language: "C++"
languages: ["C++"]
languagePcts: [72]
stars: 187
forks: 42
openIssues: 3
closedIssues: 36
watchers: 7
contributors: 2
recentReleases: 8
createdAt: "2022-12-31T10:35:35Z"
lastCommitAt: "2026-08-21T04:12:08Z"
lastReleaseAt: "2026-07-15T03:39:42Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 47
maintainers: ["tanakamasayuki", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b682be9ff46039a3a4919c30eb52380f77709bd3226ffebb6ade0430f0c96721/tanakamasayuki/EspUsbHost"
---

# EspUsbHost

> 日本語版: [README.ja.md](https://github.com/tanakamasayuki/EspUsbHost/blob/HEAD/README.ja.md)

Arduino library for using USB Host on ESP32-S3, ESP32-S2 and ESP32-P4.

USB events are processed in a background FreeRTOS task, so `loop()` does not need to call any USB polling function. Register callbacks in `setup()`, call `begin()`, and the library handles the rest.

New to USB Host, or stuck with a device that will not work? Start with the **[USB Host Development Guide](https://github.com/tanakamasayuki/EspUsbHost/blob/HEAD/docs/usb-host-guide.md)**: USB fundamentals, the ESP32-specific limits (power, speeds, hubs, channels), and the route from checking a board through identifying an unknown device to working out an undocumented protocol. The [advanced guide](https://github.com/tanakamasayuki/EspUsbHost/blob/HEAD/docs/usb-host-advanced.md) continues into descriptor byte layouts, host channels and the FIFO split, error recovery, throughput design, callback context, and writing your own class wrapper. Devices and boards that have been verified on real hardware are listed in [Tested Devices and…
