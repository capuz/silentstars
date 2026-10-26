---
repo: "ananswer/webusbtmc"
name: "webusbtmc"
description: "Control test and measurement instruments on your browser"
readmeQualityOk: true
url: "https://github.com/ananswer/webusbtmc"
homepage: "https://webusbtmc.net/"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [68, 32]
topics: ["usbtmc", "visa", "scpi", "ieee488", "webusb", "blockly"]
stars: 30
forks: 8
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-06-19T11:18:53Z"
lastCommitAt: "2026-10-26T20:59:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 65
undervaluedScore: 34
maintainers: ["NaoNaoMe"]
openGraphImageUrl: "https://opengraph.githubassets.com/58f1de9972c4acf4e6dd5ca232796979b39aad4c64b85e4ef2c78313bfd3fb7b/ananswer/webusbtmc"
---

# webusbtmc
WebUSBTMC is a USBTMC driver utilizing the WebUSB API.

## What is USBTMC?
USBTMC is a device class specification for remotely controlling test and measurement instruments.  
It is also used in VISA (Virtual Instrument Software Architecture) to communicate with instruments over USB.

## Code example and practical examples
See [v1/README.md](https://github.com/ananswer/webusbtmc/blob/HEAD/v1/README.md).

## Setup
### Windows
You need to install the WinUSB driver for your instrument using Zadig.  
If you have already installed NI-VISA, Keysight IO Libraries Suite, or similar tools, replace the USBTMC driver with the WinUSB driver using Zadig.  
You can [uninstall the WinUSB driver](https://github.com/pbatard/libwdi/wiki/FAQ#Help_Zadig_replaced_the_driver_for_the_wrong_device_How_do_I_restore_it) if you want to restore the original USBTMC driver.  
Don't forget to tick the "Delete the driver software for this device" checkbox.  
**Do not uninstall "USB Test and Measurement Devices".**

### Linux and Raspberry Pi
You may need to create a udev rule to grant access permission to the instrument.  
There are many tutorials about udev rules for USB devices; please follow those…
