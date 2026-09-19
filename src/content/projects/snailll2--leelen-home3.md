---
repo: "snailll2/leelen_home3"
name: "leelen_home3"
description: "leelen 3.0 Gateway"
readmeQualityOk: true
url: "https://github.com/snailll2/leelen_home3"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 14
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-05-21T03:45:59Z"
lastCommitAt: "2026-09-19T01:37:33Z"
lastReleaseAt: "2026-09-19T01:35:03Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 48
maintainers: ["snailll2", "nishuzumi", "PeratX"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5704a1468c504981033e7bbc8e5a0f0b5281be3cc847b2779a1e63e5995df1e/snailll2/leelen_home3"
---

# Leelen Home3

**English** | [简体中文](https://github.com/snailll2/leelen_home3/blob/HEAD/README.zh-CN.md)

Home Assistant integration for Leelen (立林) 3.0 smart home devices, driven by
the same cloud service (`iot.leelen.com`) used by the official Leelen app.

Integration domain: `leelen3` · iot_class: `cloud_push`

## Features

### Climate — central air conditioner (service type 8259)

- HVAC modes: off / heat / cool / fan only / dry
- Target temperature 5–35 °C with 1 °C step, fan speed low / medium / high
- Current temperature and humidity, automatically matched from the thermostat
  panel sensor of the same room
- Raw wind-speed gear exposed as the `leelen_wind_speed` state attribute

### Climate — floor heating (service type 8268)

- Modes: heat / off, target temperature 5–35 °C
- Current temperature from the matched thermostat panel sensor

### Fan — fresh-air system (service types 8261 / 8267)

- On/off with three speed gears, mapped to 33 % / 66 % / 100 % percentage steps
- Preset modes: low / medium / high

### Light (service types 8212 / 8291 / 8292 / 8293 / 8305 / 8306 / 8314 / 8330 / 8456 / 8459)

- On/off for every light type
- Brightness (0–100 % level) for dimmable…
