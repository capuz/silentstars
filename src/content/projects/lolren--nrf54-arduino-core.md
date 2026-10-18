---
repo: "lolren/nrf54-arduino-core"
name: "nrf54-arduino-core"
description: "nRF54 Arduino core for XIAO nRF54L15 and other nRF54 boards using a register-level runtime"
readmeQualityOk: true
url: "https://github.com/lolren/nrf54-arduino-core"
language: "C"
languages: ["C", "C++"]
languagePcts: [51, 41]
topics: ["arduino", "clean-room", "nrf54l15", "xiao", "no-zephyr"]
stars: 45
forks: 9
openIssues: 1
closedIssues: 101
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-22T09:11:45Z"
lastCommitAt: "2026-10-18T08:05:42Z"
lastReleaseAt: "2026-03-03T14:55:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 31
maintainers: ["lolren", "hannesb"]
openGraphImageUrl: "https://opengraph.githubassets.com/aad826185879b7deba94e33e3a5ca6ea2c5b95e9a656027688d273978a42c1c7/lolren/nrf54-arduino-core"
discussionCount: 13
---

# <picture><source media="(prefers-color-scheme: dark)"><img align="right" width="80" src="https://raw.githubusercontent.com/lolren/nrf54-arduino-core/main/docs/xiao_nrf54l15_default_pin_routes.png"></picture> nRF54L Arduino Core

**Bare-metal Cortex-M33 + RISC-V development with the Arduino API. No Zephyr
runtime or external nRF Connect SDK installation.**

*A register-level Arduino core for Nordic's nRF54L family, with a mature
peripheral surface, a practical Bluetooth LE stack, low-power board support,
and direct access to the VPR RISC-V coprocessor.*

---

## Native PlatformIO Support

**Build, upload, monitor and debug all six board targets directly from PlatformIO.**

Use the same Arduino API, bundled BLE libraries and board options in VS Code or
from the command line. Native support includes GDB debugging, Unity tests and
ELF/HEX/BIN/UF2 output, without requiring Arduino IDE or Arduino CLI.

**[Start with the PlatformIO tutorial below](#platformio-quick-start)** ·
[Complete PlatformIO guide](https://github.com/lolren/nrf54-arduino-core/blob/HEAD/docs/PLATFORMIO.md) ·
[Blink example](https://github.com/lolren/nrf54-arduino-core/blob/HEAD/examples/platformio/blink) ·
[BLE…
