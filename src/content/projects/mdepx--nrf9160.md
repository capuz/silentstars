---
repo: "mdepx/nrf9160"
name: "nrf9160"
description: "LTE-M, NB-IoT and GPS on nRF9160-DK, nRF9161-DK (ARM Cortex-M33)"
readmeQualityOk: true
url: "https://github.com/mdepx/nrf9160"
language: "C"
languages: ["C"]
languagePcts: [93]
topics: ["lte", "4g", "nrf9160", "cat-m1", "nb-iot", "gps", "nrf9161"]
stars: 33
forks: 6
openIssues: 0
closedIssues: 1
watchers: 7
contributors: 1
recentReleases: 0
createdAt: "2019-02-14T08:42:08Z"
lastCommitAt: "2026-07-11T05:55:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 65
undervaluedScore: 33
maintainers: ["bukinr"]
openGraphImageUrl: "https://opengraph.githubassets.com/34f7fec06ae2cf7ef5f78d3130df367f7f3705c215b69cf48726e84d7ec1e4b2/mdepx/nrf9160"
---

# nRF9160

Nordicsemi nRF9160 is an ARM Cortex-M33 SiP (system in package) with support for LTE-M, NB-IoT and GPS.

This demo app establishes a connection to an HTTP server using Nordic BSD sockets.

This app does not require zephyr, instead it uses [MDEPX RTOS](https://github.com/machdep/mdepx).

Note: The latest modem firmware (version 1.3.3) is required.

Note: This was tested on nRF9160-DK v1.1.0 and nRF9161-DK v1.0.0.

For nRF9160-DK connect micro usb cable to J4 usb socket.

For nRF9161-DK use USB-C connector.

This app depends on the [secure bootloader for nRF9160](https://github.com/machdep/nrf9160-boot).

### Set up DT tools
    $ sudo apt install device-tree-compiler python3-intelhex

### Set up compiler
    $ sudo apt install gcc-arm-none-eabi
    $ export CROSS_COMPILE=arm-none-eabi-

### Get sources and build the project
    $ git clone --recursive https://github.com/machdep/nrf9160
    $ cd nrf9160
    $ make clean all

## Install nrfjprog

Download from nordicsemi.com, then (ubuntu example):

    $ sudo dpkg -i ./nrf-command-line-tools_10.24.2_amd64.deb

## Program the chip using nrfjprog
    $ make dtb
    $ make flash

See the…
