---
repo: "PXLogic/PXView"
name: "PXView"
description: "PXView is a GUI program for supporting various instruments from PXLogic, including logic analyzers, oscilloscopes, etc. PXView is based on the sigrok project."
readmeQualityOk: true
url: "https://github.com/PXLogic/PXView"
language: "C++"
languages: ["C++"]
languagePcts: [81]
stars: 129
forks: 41
openIssues: 0
closedIssues: 7
watchers: 4
contributors: 3
recentReleases: 9
createdAt: "2024-08-15T03:02:59Z"
lastCommitAt: "2026-09-14T09:11:17Z"
lastReleaseAt: "2026-09-04T15:43:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 52
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/3aab9d93dd3fe20b93e0af9dc522cf3296594eb01419c84fe3e1b27b67e32f17/PXLogic/PXView"
---

# PXView


PXView is a Qt-based signal analysis software for [PXLogic](https://marrychip.com) logic analyzers and a wide range of third-party instruments. It is built upon the [sigrok](https://sigrok.org) project and [DSView](https://www.dreamsourcelab.com), providing a comprehensive GUI for signal capture, protocol decoding, and automated testing.

[<img src="PXView/icons/logo.png" alt="PXLogic" width="120">](https://marrychip.com)

## Key Features

- **Multi-mode signal acquisition** — Logic analyzer, oscilloscope (DSO), and mixed-signal oscilloscope (MSO) modes with simultaneous digital and analog channel display
- **220+ protocol decoders** — I²C, SPI, UART, CAN, PWM, USB, JTAG, I²S, Modbus, IR (NEC/RC5/RC6/SIRC), 1-Wire, SD card, and many more, with both Python and high-performance C implementations
- **187+ hardware drivers** — Native support for PXLogic devices plus broad compatibility with Saleae Logic, ChronoVu LA, ASIX Sigma, FTDI-based analyzers, Hantek DSO, Rigol DS, and many other instruments via libsigrok
- **MCP (Model Context Protocol) server** — Built-in HTTP API server (port 10110) enabling AI tools like Claude Code, Codex, and OpenCode to control…
