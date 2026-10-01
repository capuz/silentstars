---
repo: "asantaga/wiserheatingapi"
name: "wiserheatingapi"
description: "This is a simple python API for interacting with the wiser heating system"
readmeQualityOk: true
url: "https://github.com/asantaga/wiserheatingapi"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["drayton", "wiser", "heating", "restapi"]
stars: 29
forks: 15
openIssues: 4
closedIssues: 12
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2019-04-29T21:07:08Z"
lastCommitAt: "2026-10-01T10:24:17Z"
lastReleaseAt: "2020-02-05T23:43:04Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 34
maintainers: ["asantaga"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe678685d8667b16a70fd5cabf9ebbad8cc41db18b30ef2a2d9414d1b29640ca/asantaga/wiserheatingapi"
---

# Drayton Wiser Hub API v 1.0.10

# Notice
# ___________________________________________________
# This repository is now deprecated you should be using https://github.com/msp1974/aioWiserHeatAPI instead
# .
# .

This repository contains a simple API which queries the Drayton Wiser Heating sysystem used in the UK.

The API functionality provides the following functionality
- Ability to query all rooms
- Ability to query all thermostats and room stats
- Ability to set temperature of room and TRV thermostats
- Ability to query various data about the system (like heating status)
- Ability to query and set and copy schedules
- Ability to query and set smartplugs (modes and states)

The project is closely associated with the Wiser HomeAssitant component availabe here https://github.com/asantaga/wiserHomeAssistantPlatform

## Installation

## 1. Find your HeatHub Secret key
Reference https://it.knightnet.org.uk/kb/nr-qa/drayton-wiser-heating-control/#controlling-the-system
1. Press the setup button on your HeatHub, the light will start flashing
Look for the Wi-Fi network (SSID) called **‘WiserHeatXXX’** where XXX is random
2. Connect to the network from a Windows/Linux/Mac machine
3.…
