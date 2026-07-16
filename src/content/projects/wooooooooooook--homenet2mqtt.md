---
repo: "wooooooooooook/homenet2mqtt"
name: "homenet2mqtt"
description: "RS485 home network to MQTT"
originalDescription: "rs485 home network to mqtt"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/wooooooooooook/homenet2mqtt"
homepage: "https://homenet2mqtt-docs.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [63, 33]
stars: 16
forks: 4
openIssues: 0
closedIssues: 35
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-11-07T05:46:00Z"
lastCommitAt: "2026-07-16T05:59:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 59
maintainers: ["wooooooooooook", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e910b46da408ee173cd3f109b8e2d6e2f5c55a0d21096d27b8f20ee3396f7113/wooooooooooook/homenet2mqtt"
discussionCount: 13
---

# h2m (RS485 HomeNet to MQTT/Matter Bridge)

This is an integrated bridge solution that converts RS485-based wall pad (HomeNet) signals to MQTT (Homenet2MQTT / h2m-mqtt) or Matter (Homenet2Matter / h2m-matter) standards, allowing for unified control and monitoring across various smart home platforms such as Home Assistant, Apple Home, Samsung SmartThings, and Google Home.

## Documentation Link

https://homenet2mqtt-docs.vercel.app

## Key Features and Supported Modes

- **MQTT Integration Mode (Homenet2MQTT)**: Converts device status to MQTT topics and uses Home Assistant's MQTT Discovery specification for easy automatic registration.
- **Matter Integration Mode (Homenet2Matter)**: Exposes devices as a Matter bridge based on local mDNS communication, allowing for immediate integration and operation in Apple Home/SmartThings/Google Home apps without additional brokers or integration modules (QR code).
- **Real-time Packet Monitoring**: Monitors and analyzes RS485 communication status through a built-in web UI.

## Quick Summary

- **Recommended Installation Method**: Home Assistant Add-on (`homenet2mqtt` or `homenet2matter`)
- **NAS/Server Users**: Docker Compose (`network_mode:…
