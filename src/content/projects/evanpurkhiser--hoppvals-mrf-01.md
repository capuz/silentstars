---
repo: "evanpurkhiser/HOPPVALS-MRF-01"
name: "HOPPVALS-MRF-01"
description: "Motorized Zigbee retrofit for IKEA HOPPVALS cellular blinds -- firmware, electronics, and mechanical design (ESP32-C6)"
readmeQualityOk: true
url: "https://github.com/evanpurkhiser/HOPPVALS-MRF-01"
language: "C++"
languages: ["C++"]
languagePcts: [70]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-24T20:56:08Z"
lastCommitAt: "2026-07-05T18:10:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 31
maintainers: ["evanpurkhiser"]
openGraphImageUrl: "https://opengraph.githubassets.com/bea4f3d6026cb9d7ff286c54bff19799fdec555962f133afd3b1c2330d7ca5d3/evanpurkhiser/HOPPVALS-MRF-01"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/images/carriage-hero-dark.png">
  </picture>
</p>

# HOPPVALS-MRF-01

**IKEA HOPPVALS Motorized Retrofit, version 01** (short: **HV-MRF-01**).

An open hardware + firmware project that motorizes an
[IKEA HOPPVALS][hoppvals] cellular (honeycomb) blind and exposes it to your
smart home as a standard **Zigbee 3.0 Window Covering** — so any compliant hub
(Home Assistant / ZHA, Zigbee2MQTT, deCONZ, SmartThings) can drive it with no
custom converters.

Two synchronized DC gearmotors wind the blind's lift cords onto grooved drums
to raise and lower the shade. A custom ESP32-C6 controller board fits inside
the head rail and runs the firmware in this repo.

> Status: work in progress — hardware and firmware are still under active
> development.

## Repository layout

| Path           | Contents                                                       |
| -------------- | -------------------------------------------------------------- |
| `firmware/`    | ESP32-C6 firmware (ESP-IDF, C++) — the Zigbee controller       |
| `electronics/` | KiCad schematic + PCB for the controller board                 |
| `mechanical/`  |…
