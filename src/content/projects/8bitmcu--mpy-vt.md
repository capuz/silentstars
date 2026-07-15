---
repo: "8bitmcu/mpy_vt"
name: "mpy_vt"
description: "Desktop-class terminal emulation for ESP32. Attribute-aware, color-accurate, and optimized for SPI displays."
readmeQualityOk: true
url: "https://github.com/8bitmcu/mpy_vt"
language: "C"
languages: ["C"]
languagePcts: [82]
topics: ["ansi-terminal", "esp32", "micropython", "st7789", "lilygo-tdeck", "tdeck"]
stars: 9
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-02-08T09:14:03Z"
lastCommitAt: "2026-07-15T05:53:42Z"
lastReleaseAt: "2026-07-12T05:43:27Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 68
undervaluedScore: 38
maintainers: ["8bitmcu"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf087508894f3a9e963c7a3229758f19ff7c8bafff4ad348c2b0c6f0c72519df/8bitmcu/mpy_vt"
---

# mpy_vt: Optimized ANSI Terminal Engine for MicroPython

This project implements a high-performance, attribute-aware terminal emulator for MicroPython. By wrapping the [st](https://st.suckless.org/) (suckless terminal) engine in a custom C module, it achieves desktop-class terminal features on embedded hardware, including a **zero-allocation status bar** for real-time telemetry without heap fragmentation. Unlike basic serial monitors, it handles complex escape sequences, colors, and text attributes with the efficiency and speed characteristic of suckless software.

This project features first-class support for the [LILYGO T-Deck](https://s.click.aliexpress.com/e/_c4agv9Wd), transforming it into a standalone portable terminal. The integration leverages the T-Deck’s hardware keyboard, trackball and 320x240 display, utilizing the ESP32-S3's PSRAM to manage the terminal's backbuffer and state.

As a showcase of the engine's capabilities, this project includes a fully functional, VFS-aware C port of the [vi](https://en.wikipedia.org/wiki/Vi_(text_editor)) **text editor** and [frotz](https://davidgriffith.gitlab.io/frotz/) **ZMachine interpreter** that supports playing classic text…
