---
repo: "kwolf1909/DCF77-clock"
name: "DCF77-clock"
description: "DCF77-clock with RTC backup and 8-digit alphanumeric LED-display on ATtiny 412/1614 or ATmega 4809"
readmeQualityOk: true
url: "https://github.com/kwolf1909/DCF77-clock"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["alphanumeric-display", "clock", "dcf77", "rtc", "megatinycore", "attiny", "ht16k33", "atmega4809", "attiny1614", "attiny412"]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-10T09:18:15Z"
lastCommitAt: "2026-11-01T10:43:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 39
maintainers: ["kwolf1909"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4f9f5f0c7ad2b44dd7e91a03f0cbb01e242a22fa9e72fbd16bc87bea05dac6f/kwolf1909/DCF77-clock"
---

This application receives the european DCF77 time signal and syncs it with the external RTC-clock. It is displayed on a 8-digit 14- or 7-segment display with display-controller HT16K33.<br>
The MCU used is an ATtiny1614 or an ATmega4809 (Arduino Nano Every). Without external RTC, serial debugging and OneWire, an ATtiny412 can be
used (98 % of flash space used). With some small modifications, the newer AVR Dx-series could be used as well.<br>
The circuit can be powered by a Li-Ion cell. If the voltage drops below 3.0 V, the voltage is displayed as a low voltage indicator.
A sync to DCF-time is performed in the background every 30 minutes, and immediately after power-up.<br>
The software uses a layer-based approach. Low-level: DCF-object with interrupt handler, mid-level: receiving data state machine, upper level: display handling and user interface. No blocking code, using several finite state machines (FSM).<br>

Push-button based interface<br>
Select display modes: time with date | time with seconds | time with temperature | time with battery voltage.<br>

MCU-clock: 8 MHz<br>
Timers used: TCB0 (DCF pulse width measurement), RTC (2 Hz clock ticks)
             
Pins used…
