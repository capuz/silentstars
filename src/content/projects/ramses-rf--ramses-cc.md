---
repo: "ramses-rf/ramses_cc"
name: "ramses_cc"
description: "HA integration for CH/DHW and HVAC systems that use the RAMSES-II RF protocol"
readmeQualityOk: true
url: "https://github.com/ramses-rf/ramses_cc"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["homeassistant", "evohome", "sundial", "hometronics", "ramses", "rf", "chronotherm", "itho", "orcon", "resideo"]
stars: 123
forks: 33
openIssues: 15
closedIssues: 458
watchers: 5
contributors: 18
recentReleases: 0
createdAt: "2019-11-29T18:10:38Z"
lastCommitAt: "2026-09-28T10:05:57Z"
lastReleaseAt: "2022-11-03T11:44:43Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 47
maintainers: ["silverailscolo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a6847c6c9272930a3dfc977e1119d7182337ead22419e28325d9a8bb73a3150/ramses-rf/ramses_cc"
---

* Requires HA Core 2026.8.0 or later

## Overview
**ramses_cc** is a Home Assistant custom integration that works with RAMSES II-based RF 868 Mhz systems for (heating) **CH/DHW** (e.g. Honeywell Evohome) and (ventilation) **HVAC** (e.g. Itho Spider, Orcon).

> [!NOTE]
> Ramses RF can **not** interpret the new Honeywell Ramses-III (R3) messages used after a firmware upgrade since 2025 and (some) new devices.

This includes CH/DHW systems such as **evohome**, **Sundial**, **Hometronic**, **Chronotherm** and others.

The simplest way to know if it will work with your CH/DHW system is to identify the box connected to your boiler (or other heat source) to one of (there will be other systems that also work):
 - **R8810A** or **R8820A**: OpenTherm Bridge
 - **BDR91A** or **BDR91T**: Wireless Relay
 - **HC60NG**: Wireless Relay (older hardware version)

**ramses_cc** also works with HVAC (ventilation) systems using the Ramses-II protocol, such as from **Itho**, **Orcon**, **Nuaire**, **Ventiline**, **Vasco**, etc.

It uses the [ramses_rf](https://github.com/ramses-rf/ramses_rf) client library to decode the RAMSES-II protocol used by these devices. Note that other systems may also use this…
