---
repo: "devicechain-io/devicechain"
name: "devicechain"
description: "Open-source, self-hosted IoT platform on Kubernetes: device telemetry over MQTT, Sparkplug B and LwM2M, real-time rules and alarms, and commands back to devices. Multi-tenant, Apache-2.0, no paid edition."
readmeQualityOk: true
url: "https://github.com/devicechain-io/devicechain"
homepage: "https://devicechain.io"
language: "Go"
languages: ["Go"]
languagePcts: [74]
topics: ["iot-platform", "device-management", "golang", "graphql", "iot", "kubernetes", "lwm2m", "mqtt", "self-hosted", "sparkplug"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 78
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-24T14:17:29Z"
lastCommitAt: "2026-10-25T22:10:47Z"
lastReleaseAt: "2026-07-20T09:30:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 56
maintainers: ["derekadams", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1279260938/e428dd9d-4381-45d6-b4a3-1e453a4cd1d3"
discussionCount: 1
---

**An open-source, self-hosted IoT platform for collecting device telemetry, detecting conditions in it and sending commands back, on Kubernetes.**

DeviceChain has not reached 1.0. A release can change APIs and schemas, and each one lists its
breaking changes first ([Status](#status)).

DeviceChain™ takes in telemetry from device fleets, keeps a record of each device and the assets,
areas and customers it belongs to, detects conditions in the data as it arrives, and sends
commands back. One installation serves many tenants. It is meant for teams that build an IoT
product or run a fleet and want to run the platform in a Kubernetes cluster they control, with
their data kept there. All of it is Apache 2.0 and in this repository, including high
availability, multi-tenancy and command delivery; there is no paid edition.

## What it does

### Ingest

Devices send data over these transports:

- MQTT, through the broker built into NATS (port 1883)
- HTTP, as a `POST` of a JSON event (the same body a device publishes over MQTT)
- [Eclipse Sparkplug B](https://docs.devicechain.io/concepts/sparkplug), with DeviceChain joining
  your existing Sparkplug broker as a Host Application
- [OMA…
