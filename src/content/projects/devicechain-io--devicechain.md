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
lastCommitAt: "2026-10-31T16:00:37Z"
lastReleaseAt: "2026-07-20T09:30:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 56
maintainers: ["derekadams", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1279260938/e428dd9d-4381-45d6-b4a3-1e453a4cd1d3"
discussionCount: 1
---

**DeviceChain is an Apache 2.0 IoT platform you run on Kubernetes.** Devices connect over MQTT, HTTP, Sparkplug B or LwM2M, or through a LoRaWAN network server. Rules raise alarms and send commands back, and dashboards, over-the-air updates and multi-tenant access are built in. There is no device cap and no enterprise edition.

- **Closes the loop.** A rule can raise an alarm and command the device, and a command is tracked until the device reports the result or its time-to-live runs out ([commands](https://docs.devicechain.io/concepts/commands), [event processing](https://docs.devicechain.io/concepts/event-processing)).
- **Measured, with the results published.** Throughput was measured on Google Kubernetes Engine and every stored event was checked, with the setup and the limits of each run stated ([measured throughput](https://docs.devicechain.io/deployment/bootstrap#measured-throughput)). Container images and the Helm chart are signed ([verifying releases](https://docs.devicechain.io/deployment/verifying-releases)).
- **Open, with tenants built in.** One installation serves many tenants, each isolated from the others, and a membership can be limited to one customer's data…
