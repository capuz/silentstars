---
repo: "solectrus/ha-integration"
name: "ha-integration"
description: "Write data from Home Assistant to SOLECTRUS"
readmeQualityOk: true
url: "https://github.com/solectrus/ha-integration"
homepage: "https://solectrus.de"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["home-assistant", "influxdb"]
stars: 5
forks: 1
openIssues: 2
closedIssues: 7
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-10T16:19:14Z"
lastCommitAt: "2026-10-29T14:06:53Z"
lastReleaseAt: "2026-02-25T10:57:20Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 93
undervaluedScore: 74
maintainers: ["dependabot[bot]", "ledermann", "patricknitsch"]
openGraphImageUrl: "https://opengraph.githubassets.com/2306b6218016f2541947ac6df28f93578fc73fe2d5fc105871e43471ac66b903/solectrus/ha-integration"
fundingLinks: ["GITHUB:https://github.com/solectrus", "KO_FI:https://ko-fi.com/ledermann"]
---

# SOLECTRUS Home Assistant Integration

**Note:** This integration is in an early stage of development. Please report any issues you encounter.

This custom integration forwards Home Assistant entity values into an InfluxDB bucket used by your SOLECTRUS instance. It is tailored for the SOLECTRUS sensor keys so you can map each one to a Home Assistant entity, optionally overriding measurement and field names.

## Features

- Configure InfluxDB URL, token, organisation, and bucket directly in the config flow.
- Map every SOLECTRUS sensor to a Home Assistant entity via the options flow; measurement/field defaults are pre-filled but can be overridden.
- Writes are batched and sent every 5 seconds; points are deduplicated by `(sensor, timestamp)` (value may repeat).
- Every 5 minutes a heartbeat re-writes the current value of each mapped entity, even if it never changed. This keeps a continuous series in InfluxDB for sensors that sit at the same value (e.g. a constant `0`). Forecast and [car sensors](#electric-cars) are excluded.
- Values outside a sensor's plausible range are discarded rather than written - see [Value range checks](#value-range-checks).
- When a sensor stayed at `0`…
