---
repo: "d0ugal/zigbee2mqtt-exporter"
name: "zigbee2mqtt-exporter"
description: "Prometheus metrics exporter for Zigbee2MQTT with device type classification and real-time metrics via WebSocket API."
readmeQualityOk: true
url: "https://github.com/d0ugal/zigbee2mqtt-exporter"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 9
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-13T06:22:07Z"
lastCommitAt: "2026-11-11T19:47:43Z"
lastReleaseAt: "2025-08-17T11:26:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 71
maintainers: ["renovate[bot]", "d0ugal"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4123bcdc6e08b58c930297275e75efa444132f62ce74c16896f6527e27fcb25/d0ugal/zigbee2mqtt-exporter"
---

# Zigbee2MQTT Exporter

A Prometheus exporter for Zigbee2MQTT that connects to the WebSocket API and exports device metrics with device type classification.

**Image**: `ghcr.io/d0ugal/zigbee2mqtt-exporter:v3.6.0`

## Metrics

### Device Metrics
- `zigbee2mqtt_device_last_seen_timestamp{device}` - Timestamp when device was last seen
- `zigbee2mqtt_device_seen_total{device}` - Number of times device has been seen
- `zigbee2mqtt_device_link_quality{device}` - Device link quality (0-255)
- `zigbee2mqtt_device_power_state{device}` - Device power state (1=ON, 0=OFF)
- `zigbee2mqtt_device_up{device}` - Device availability status (1=online, 0=offline)

### Device Info Metric
- `zigbee2mqtt_device_info{device,type,power_source,manufacturer,model_id,supported,disabled,interview_state,software_build_id,date_code}` - Device information (always 1, used for joining)

### OTA Update Metrics
- `zigbee2mqtt_device_ota{device,state}` - Device OTA update state (state=idle|available|scheduled|updating, value is 1 when device is in that state)
- `zigbee2mqtt_device_current_firmware_version{device,firmware_version}` - Installed OTA file version, from the device's `update.installed_version` (always 1,…
