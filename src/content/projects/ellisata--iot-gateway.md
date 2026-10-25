---
repo: "Ellisata/iot-gateway"
name: "iot-gateway"
description: "Open-source industrial IoT data acquisition gateway: polls PLCs via Modbus, Siemens S7, Mitsubishi MC, Omron FINS/CIP and OPC UA, pushes to MQTT / TDEngine / InfluxDB with offline outbox buffering, and ships a built-in web console. Single binary, no external database."
originalDescription: "Open-source industrial IoT data acquisition gateway: polls PLCs via Modbus, Siemens S7, Mitsubishi MC, Omron FINS/CIP and OPC UA, pushes to MQTT / TDEngine / InfluxDB with offline outbox buffering, and ships a built-in web console. Single binary, no external database."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Ellisata/iot-gateway"
language: "Go"
languages: ["Go"]
languagePcts: [84]
topics: ["ethernet-ip", "industrial-automation", "industrial-iot", "influxdb3", "iot", "mitsubishi-mc", "modbus", "mqtt", "omron-fins", "opcua"]
stars: 19
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-09-04T03:15:39Z"
lastCommitAt: "2026-10-25T02:46:15Z"
lastReleaseAt: "2026-10-24T15:17:18Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 38
maintainers: ["Ellisata"]
openGraphImageUrl: "https://opengraph.githubassets.com/58474de7a1084d28ee8dca63bc13e8e346a9e5d1893ecb706ba6a06b1ffa0ad5/Ellisata/iot-gateway"
---

# iot-gateway · Industrial IoT Data Gateway

[English](https://github.com/Ellisata/iot-gateway/blob/HEAD/README.en.md) | Simplified Chinese

**A single exe plus a `plugins/` directory is enough to collect PLC data on an industrial PC and push it to MQTT / TDengine / InfluxDB. No database to install, no runtime to install.**

Polls PLCs and industrial devices on a schedule, with a built-in web admin console. Supports deployment as a Windows service, on Linux systemd, or in Docker.

## Why this one

- **Single binary, zero external dependencies**: the frontend is embedded via `go:embed`, and SQLite is implemented in pure Go (no CGO). The main program plus `plugins/` is the complete system. Copy it to an industrial PC and it runs.
- **Protocol-driven process isolation**: all 15 protocols are separate processes under `plugins/`. A crashed driver is restarted automatically with backoff, a hung driver is reclaimed automatically, and replacing a binary hot-upgrades it without affecting the main program.
- **Designed for the field**: data collected during network outages is stored in a local outbox and resent automatically. Data is pushed only when it changes. Configuration hot-reloads…
