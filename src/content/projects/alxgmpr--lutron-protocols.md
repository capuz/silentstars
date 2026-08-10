---
repo: "alxgmpr/lutron-protocols"
name: "lutron-protocols"
description: "Mixing Lutron ecosystems, decoding CCA and CCX, and other hacks"
readmeQualityOk: true
url: "https://github.com/alxgmpr/lutron-protocols"
language: "TypeScript"
languages: ["TypeScript", "C++"]
languagePcts: [54, 25]
topics: ["433mhz", "lutron", "reverse-engineering", "thread"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-06T19:48:36Z"
lastCommitAt: "2026-08-10T05:07:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 41
maintainers: ["alxgmpr"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f0f6310cb4d6583b693d910416dce9de0e185bcc43e7316a4b4dd0aa4fcbbb1/alxgmpr/lutron-protocols"
---

# Lutron Protocols

Protocol research and firmware tools for Lutron lighting control systems, covering CCA (433 MHz RF), CCX (Thread/802.15.4), LEAP (processor API), and IPL (Designer integration protocol). Built on an STM32H723 + CC1101 + nRF52840 platform with TypeScript host tooling.

Supports Phoenix, Caseta, and Vive product families.

## Background

This project started with Caseta CCA radios and expanded into reverse engineering Lutron Designer binaries and firmware images (from publicly accessible files and hardware purchased from eBay). Over time, this work produced a detailed understanding of Lutron's control systems and enabled the following capabilities:

- Pairing to devices as a transmitter, aka imitating a Pico (direct control, no bridge required)
- Imitating a bridge, pairing devices to our own radios and fake CCA subnet.
- Adding virtual devices to a project, allowing for low-latency bridging to other devices (I used this to turn my RGB+CCT WiZ WiFi bulbs into fake Ketra bulbs)
- Mixing device families (RA3 <-> HomeWorks QSX), "teaching" devices to pair with other families
- Spoofing devices during pairing to allow more x-family pairing
- On-the-fly configuration…
