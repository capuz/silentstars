---
repo: "ramses-rf/ramses_rf"
name: "ramses_rf"
description: "An interface for the RAMSES-II RF protocol, as used by Honeywell-compatible HVAC & CH/DHW systems."
readmeQualityOk: true
url: "https://github.com/ramses-rf/ramses_rf"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["evohome", "hgi80", "evohome-rf", "chronotherm", "sundial", "hometronics", "ramses", "ramses-rf", "itho", "resideo"]
stars: 83
forks: 33
openIssues: 7
closedIssues: 248
watchers: 6
contributors: 15
recentReleases: 0
createdAt: "2019-11-25T09:42:01Z"
lastCommitAt: "2026-10-17T07:58:44Z"
lastReleaseAt: "2025-10-12T19:23:21Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 51
maintainers: ["silverailscolo", "wimpie70", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bcc3fbd2fbbe39f55ee8511ed583f1fd8f97bfa718d5099cc83ce1b23d382e8/ramses-rf/ramses_rf"
discussionCount: 2
---

## Overview

**ramses_rf** is a Python 3.13-3.14 client library/CLI utility used to interface with some Honeywell-compatible HVAC & CH/DHW systems that use 868MHz RF, such as:
 - (Heat) **evohome**, **Sundial**, **Hometronic**, **Chronotherm**
 - (HVAC) **Itho**, **Orcon**, **Nuaire**, **Vasco**, **ClimaRad**

> [!NOTE]
> Ramses RF can **not** interpret the new Honeywell Ramses-III (R3) messages used after a firmware upgrade since 2025 and (some) new devices.

It requires a USB-to-RF device, either a Honeywell HGI80 (somewhat rare, expensive), a USB/MQTT dongle running the [ramses_esp](https://github.com/IndaloTech/ramses_esp), [evofw3](https://github.com/ghoti57/evofw3) firmware, such as the one from [here](https://indalo-tech.onlineweb.shop/), your own ESP32-S3-WROOM-1 N16R8 with a CC1100 transponder or _a combination of dongles_ for better RF coverage.

It does four things:
 - decodes RAMSES II-compatible packets and converts them into useful JSON
 - builds a picture (schema, config & state) of evohome-compatible CH/DHW systems - either passively (by eavesdropping), or actively (probing)
 - allows you to send commands to CH/DHW and HVAC systems, or monitor them for state…
