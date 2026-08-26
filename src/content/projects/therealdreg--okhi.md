---
repo: "therealdreg/okhi"
name: "okhi"
description: "Open Keylogger Hardware Implant - USB & PS2 Keyboards"
readmeQualityOk: true
url: "https://github.com/therealdreg/okhi"
homepage: "https://rootkit.es/"
language: "C"
languages: ["C"]
languagePcts: [64]
topics: ["esp", "hardware-hacking", "implant", "keylogger", "pentesting", "pi-pico", "pico", "rp2040", "ps2", "ps2-keyboard"]
stars: 105
forks: 13
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 1
recentReleases: 1
createdAt: "2024-08-05T14:26:48Z"
lastCommitAt: "2026-08-26T04:16:36Z"
lastReleaseAt: "2025-05-10T09:23:44Z"
status: "thriving"
tags: ["funded"]
healthScore: 83
undervaluedScore: 31
maintainers: ["therealdreg"]
openGraphImageUrl: "https://opengraph.githubassets.com/c98c5341f581393dd39faa55b93b352a6d7dcc9aaae70adb7b85cfe4e23a439c/therealdreg/okhi"
fundingLinks: ["GITHUB:https://github.com/therealdreg", "PATREON:https://patreon.com/dreg", "CUSTOM:https://www.paypal.me/therealdreg", "CUSTOM:https://www.paypal.me/therealdreg"]
---

# okhi: Open Keylogger Hardware Implant

okhi is an implant that can be utilized to log keystrokes from a USB/PS2 keyboard. The implant is designed to be  easily concealable within a keyboard, laptop, or tower case. It is powered by the keyboard cable itself. The implant can be accessed via WiFi and enables real-time viewing of keystrokes.

## You can now buy it at [https://www.rootkit.es ](https://www.rootkit.es/)

If you register on Elecrow using this link before buying the product, you’ll help me support and maintain this project even more:

https://www.elecrow.com/referral-program/OTI1MDhqMnQ/

------

It is based on the RP2040 + ESP chip. The RP2040 is responsible for sniffing & parsing the keyboard data, while the ESP chip is used to transmit the data over WiFi.

The **RP2040** features a dual-core Arm Cortex-M0+ processor, making it highly efficient for handling multiple tasks simultaneously (PIO rlz!).

okhi leverages the **ESP32-C2**, a new chip from Espressif, specifically the **ESP8684**. This chip includes a RISC-V single-core CPU, which is known for its small size. It is important to note that the ESP8266, ESP8285, and ESP8654 are different chips and should not be…
