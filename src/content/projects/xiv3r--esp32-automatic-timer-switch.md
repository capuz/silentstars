---
repo: "xiv3r/esp32-automatic-timer-switch"
name: "esp32-automatic-timer-switch"
description: "esp32 | esp32-s3 1 - 16 channel relay automatic and manual time controlled switch with ntp/rtc time precision."
readmeQualityOk: true
url: "https://github.com/xiv3r/esp32-automatic-timer-switch"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["esp32", "home-automation", "esp32s3", "timer-switch", "automation", "smart-switch", "intelligent-switch", "diy", "esp32-timer-switch", "esp32s3-timer-switch"]
stars: 25
forks: 15
openIssues: 2
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 5
createdAt: "2026-04-14T00:01:30Z"
lastCommitAt: "2026-07-11T05:58:16Z"
lastReleaseAt: "2026-07-10T05:12:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 70
undervaluedScore: 42
maintainers: ["xiv3r"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a601418b43f1894bbabdebaddf2e94cf0a1a5d1136ba0ba1b35cf47fd645b99/xiv3r/esp32-automatic-timer-switch"
---

## Requirements
- ESP32 30/38P Pins
- DS3231 RTC Module (offline recommend)
- 5v 1-16 Channel Relay
- Female to Female Dupont Wire
- 5v 2-5a Power supply

`Optional`
- 5v UPS (Maintain RTC Time without DS3231 or NTP)
- Solid State Relay (SSR DC-AC) (High Load Setup)
- ESP32 Expansion Board
- Stable Wifi Connection for NTP/RTC sync (online if no ds3231)

## Arduino Libraries
- ArduinoJson
- PubSubClient 
- RTClib v1.14.1

## Installation
> Download and install 
### ESP32 Win/Linux Drivers
- CH340G: https://sparks.gogo.co.nz/ch340.html
- CP2102: https://www.silabs.com/software-and-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads
- FT232: https://ftdichip.com/wp-content/uploads/2025/03/CDM-v2.12.36.20-Universal-Driver-for-x64-WHQL-Certified.zip
## Flasher
### Android (otg)
- https://play.google.com/store/apps/details?id=io.serialflow.espflash
### Windows
- https://dl.espressif.com/public/flash_download_tool.zip
### Linux
```sh
esptool --port <PORT> write_flash 0x0 esp32-dump-0x0.bin
```
### Win/Linux Browser
- https://g3gg0.github.io/esp32_flasher/flasher.html
### Flash firmware 
- Download the Firmware and Flash
-…
