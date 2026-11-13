---
repo: "thnow/MAX-via-Cul"
name: "MAX-via-Cul"
description: "Home Assistant integration for eQ-3 MAX! heating thermostats, wall thermostats and window contacts via a CUL/CUNO (or a MAX! Cube flashed with a-culfw) – fully local, replaces the discontinued eQ-3 software."
readmeQualityOk: true
url: "https://github.com/thnow/MAX-via-Cul"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["cul", "culfw", "eq3", "eq3-max", "hacs", "hacs-integration", "heating", "home-assistant", "homeassistant-custom-component", "max-cube"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-04-07T11:30:52Z"
lastCommitAt: "2026-11-13T18:36:10Z"
lastReleaseAt: "2026-11-12T09:16:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 71
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/9047e8836d3388438797da4400a94d2c66ae85739bf2bd5d33cc18f4709be300/thnow/MAX-via-Cul"
---

# MAX! via CUL

Home Assistant custom integration for eQ-3 MAX! devices connected through a
CUL or CUNO running CULFW.

This integration is for people who still have working MAX! heating hardware.
eQ-3 has discontinued the MAX! system: the MAX! Cube with its software and app
still works, but gets no updates any more. This integration takes over the
Cube's job in Home Assistant: it talks directly to a CUL/CUNO (or a MAX! Cube
flashed with a-culfw) over TCP or USB and implements the MAX!/MORITZ protocol
itself, fully local.

> [!IMPORTANT]
> **You need a CUL/CUNO radio or a MAX! Cube flashed with [a-culfw](https://github.com/heliflieger/a-culfw).**
> A MAX! Cube with its original eQ-3 firmware does **not** work with this
> integration – it talks the MAX! radio protocol itself, through CULFW.
> Flashing replaces the Cube's firmware; the eQ-3 software and app no longer
> work with it afterwards.

## What You Get

- UI setup through Home Assistant config flow
- Pairing for MAX! heating thermostats, wall thermostats and shutter contacts
- `climate` entities for heating and wall thermostats
- Week profile editing with draft, save and discard workflow
- Comfort, eco, window-open and…
