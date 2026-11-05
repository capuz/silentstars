---
repo: "engelsofta/ha-bepacom-bacnet"
name: "ha-bepacom-bacnet"
description: "Home Assistant integration for the Engelsoft BACstac"
readmeQualityOk: true
url: "https://github.com/engelsofta/ha-bepacom-bacnet"
language: "JavaScript"
languages: ["JavaScript", "TypeScript", "Python"]
languagePcts: [36, 32, 32]
topics: ["bacnet", "bacnet-ip", "bepacom", "hacs", "home-assistant", "iot", "neuberger", "homeassistant", "homeassistant-custom-component", "homeassistant-integration"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-07-03T07:55:46Z"
lastCommitAt: "2026-11-05T08:05:41Z"
lastReleaseAt: "2026-07-31T15:06:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 42
maintainers: ["engelsofta"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebec5faae3556129cf51b3bf4b3c9deaa3b487cd69193b17dc772473b14762b5/engelsofta/ha-bepacom-bacnet"
discussionCount: 2
---

# Engelsoft Beacon BACnet/IP for Home Assistant

The Engelsoft Beacon BACnet/IP integration connects BACnet/IP data points from **Engelsoft BACstac** to Home Assistant. It automatically discovers supported BACnet objects, creates suitable Home Assistant entities, and updates them primarily through managed WebSocket/COV notifications. The integrated **BACnet Explorer** provides a central interface for managing, customizing, and diagnosing BACnet points.

> [!IMPORTANT]
> This integration requires the **[Engelsoft BACstac Home Assistant Add-on](https://github.com/engelsofta/engelsoft-bacstac-ha-addon)**. BACstac provides BACnet discovery, managed COV subscriptions, polling, write access, and the local API used by the integration. The integration will not work unless BACstac is installed, running, and reachable from Home Assistant.

## Features

- automatic discovery of BACnet devices and objects exposed by Engelsoft BACstac
- configuration through the Home Assistant user interface
- stable entity IDs using the format `bepacom_<device>_<object-type>_<object-id>`
- automatic mapping to `sensor`, `binary_sensor`, `number`, and `switch` entities, with optional `light` representation for…
