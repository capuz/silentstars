---
repo: "CANnectivity/cannectivity"
name: "cannectivity"
description: "Hardware-agnostic USB to CAN adapter firmware"
readmeQualityOk: true
url: "https://github.com/CANnectivity/cannectivity"
homepage: "https://cannectivity.org/"
language: "C"
languages: ["C"]
languagePcts: [81]
topics: ["can", "canbus", "usb", "usb-device", "zephyr", "zephyr-rtos", "zephyrproject-rtos", "gs-usb", "usb-to-can", "cannectivity"]
stars: 186
forks: 33
openIssues: 2
closedIssues: 9
watchers: 2
contributors: 9
recentReleases: 1
createdAt: "2024-07-11T15:54:33Z"
lastCommitAt: "2026-07-21T06:11:47Z"
lastReleaseAt: "2026-04-24T20:10:54Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 45
maintainers: ["henrikbrixandersen", "dependabot[bot]", "digiexchris"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/827413109/7759d7a0-4073-44f2-a9f7-422e68ed997e"
discussionCount: 12
---

# CANnectivity

## Overview

CANnectivity is an open source firmware for Universal Serial Bus (USB) to Controller Area Network
(CAN) adapters.

The firmware implements the Geschwister Schneider USB/CAN device protocol (often referred to as
"gs_usb").  This protocol is supported by the Linux kernel SocketCAN [gs_usb
driver](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/drivers/net/can/usb/gs_usb.c),
by [python-can](https://python-can.readthedocs.io/en/stable/interfaces/gs_usb.html), and by many
other software packages.

The firmware, which is based on the [Zephyr RTOS](https://www.zephyrproject.org), allows turning
your favorite microcontroller development board into a full-fledged USB to CAN adapter.

CANnectivity is licensed under the [Apache-2.0 license](https://github.com/CANnectivity/cannectivity/blob/HEAD/LICENSE). The CANnectivity documentation is
licensed under the [CC BY 4.0 license](https://github.com/CANnectivity/cannectivity/blob/HEAD/doc/LICENSE).

## Firmware Features

The CANnectivity firmware supports the following features, some of which depend on hardware support:

- CAN classic
- CAN FD (flexible data rate)
- Fast-speed and Hi-speed USB…
