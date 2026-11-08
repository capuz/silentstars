---
repo: "a5021/stm32-async-1wire"
name: "stm32-async-1wire"
description: "Non-blocking 1-Wire master for STM32 with DS18B20 and DS2431 drivers — register-level, TIM+DMA driven, interrupt-free."
readmeQualityOk: true
url: "https://github.com/a5021/stm32-async-1wire"
language: "C"
languages: ["C", "Python"]
languagePcts: [58, 21]
topics: ["1-wire", "arm", "bare-metal", "ds18b20", "embedded", "input-capture", "register-level", "stm32", "dma-driven", "hardware-timed"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 9
createdAt: "2025-08-21T09:25:18Z"
lastCommitAt: "2026-11-08T10:40:38Z"
lastReleaseAt: "2026-08-28T20:46:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 72
maintainers: ["a5021"]
openGraphImageUrl: "https://opengraph.githubassets.com/23d766a0b329411ca364197766ea86166e9ef6f28bd3f10241e7d1bd9fad7f63/a5021/stm32-async-1wire"
---

# stm32-async-1wire

Non-blocking 1-Wire master for STM32, with a DS18B20 temperature driver and a
DS2431 EEPROM driver built on top. A generic bus layer (`src/onewire.c`) owns
the 1-Wire timing — a hybrid of a hardware timer (TIM1) and DMA automates every
slot, so the CPU never performs timing-critical busy-waits inside a transaction
and never enters an interrupt; operations advance by polling hardware
completion flags. The first driver on that layer is `src/ds18b20.c`, the DS2431
EEPROM driver rides it as `src/ds2431.c`, and other 1-Wire slaves (DS2413, ...)
can ride it as-is.

The core (`src/onewire.c` + `src/ds18b20.c`) is MCU-independent. Its public
surface is the headers under `inc/`: `onewire.h` (the bus API), `ow_board.h`
(the family selection token, `ow_pulse_t` and the board clock defaults),
`ow_config.h` (the compile-time tunables), `ow_stats.h` (the optional statistics
module) and the per-driver headers. The TIM1+DMA engine (`src/ow_port.h`) and
the register-level per-family facts (`src/ow_mcu.h`) are library-internal: a
consumer needs only `-Iinc` and never sees the port.

Nine families ship today; the verified board, wiring and clock details are in…
