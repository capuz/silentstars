---
repo: "He-no3opbc9l/g106-open"
name: "g106-open"
description: "Open-source firmware for the G106 HF QRP transceiver (STM32F4, runs behind the stock bootloader)"
readmeQualityOk: true
url: "https://github.com/He-no3opbc9l/g106-open"
language: "C"
languages: ["C"]
languagePcts: [87]
topics: ["firmware", "g106", "ham-radio", "sdr", "stm32", "transceiver"]
stars: 13
forks: 2
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2026-11-09T06:49:53Z"
lastCommitAt: "2026-11-16T11:52:06Z"
lastReleaseAt: "2026-11-15T10:46:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 29
maintainers: ["He-no3opbc9l"]
openGraphImageUrl: "https://opengraph.githubassets.com/07164ff8c56b1a1f6d9f9b6939eb53f0f4a5917379615468f8c4157125dc4596/He-no3opbc9l/g106-open"
---

# G106 open firmware

**English** | [Русский](https://github.com/He-no3opbc9l/g106-open/blob/HEAD/README.ru.md)

💬 [Telegram chat](https://t.me/xg_open) · ⚡ [Install the firmware in the browser](https://he-no3opbc9l.github.io/xg-flasher)

Open-source firmware for the **G106** HF QRP transceiver, written from scratch in bare-metal C
(no HAL, no RTOS). It replaces the stock application (V1.4b01) and runs behind the **untouched stock
XG bootloader**, so it is flashed the same way as an official update and the stock firmware can be
put back at any time.

The first goal is faithful stock behaviour: same screen, keys, soft-key pages, setting editor,
memories and EEPROM format (byte-compatible with stock, including CRCs, so settings survive switching
between stock and this firmware). On top of that come improvements to the DSP and the UI.

> **Warning.** This is experimental firmware for a radio transmitter. Do TX tests into a dummy load.
> There are **no TX band limits**: you are responsible for transmitting only where your licence
> allows. Back up your radio (EEPROM calibration, ideally the whole flash) before flashing.
> No warranty of any kind. Not affiliated with or endorsed by…
