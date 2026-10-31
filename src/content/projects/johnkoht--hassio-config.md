---
repo: "johnkoht/hassio-config"
name: "hassio-config"
description: "My Home Assistant Custom Configuration"
readmeQualityOk: true
url: "https://github.com/johnkoht/hassio-config"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [57, 42]
topics: ["home-assistant", "home-automation"]
stars: 181
forks: 13
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2022-12-03T02:34:16Z"
lastCommitAt: "2026-10-31T15:58:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 42
maintainers: ["johnkoht"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2d9bf68b5f7d3b6367030e52168f35679553f6621c83fb38ce2dec4d4068674/johnkoht/hassio-config"
---

# Home Assistant Configuration

[Home Assistant](https://home-assistant.io/) is the core of my smart home system. This repo includes all the custom packages, sensors, and automations that power my house. It's a work in progress and is constantly evolving. 

## Deployment

Home Assistant OS is deployed on a [Home Assistant Yellow](https://www.home-assistant.io/yellow/) (this is temporary while I migrate infrastructure). I also use [Nabu Casa](https://www.nabucasa.com/) for remote access and to support the project.

## Key Software

- [Home Assistant](https://home-assistant.io/)
- [Z-Wave JS UI](https://zwave-js.github.io/zwave-js-ui/) for Z-Wave device management
- [Zigbee Home Automation (ZHA)](https://www.home-assistant.io/integrations/zha/) for Zigbee devices
- [ESPHome](https://esphome.io/) for custom sensors and devices
- [Mosquitto](https://mosquitto.org/) for the MQTT broker. Each client has its own login, and the broker enforces topic ACLs, so a new MQTT device is silently denied until the broker gets an ACL entry for it.

---

## Documentation

| Document | Description |
|----------|-------------|
| [Rooms](https://github.com/johnkoht/hassio-config/blob/HEAD/docs/ROOMS.md)…
