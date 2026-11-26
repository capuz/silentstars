---
repo: "podomy/weld"
name: "weld"
description: "Modern robotics and industrial middleware compatible with ROS2"
readmeQualityOk: true
url: "https://github.com/podomy/weld"
homepage: "https://podomy.com"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["cyclonedds", "dds", "middleware", "robotics", "ros2"]
stars: 101
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-11-20T16:57:50Z"
lastCommitAt: "2026-11-26T15:22:23Z"
lastReleaseAt: "2026-11-20T20:04:56Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 31
maintainers: ["neiltalap"]
openGraphImageUrl: "https://opengraph.githubassets.com/22311169062eb2e9649cfc3b024717c8803cc765cbb7e1d339bce3277a20d5ee/podomy/weld"
---

Up to 68% lower latency than ROS 2 on the same host, with zero loss where ROS drops.

Weld is Go robotics middleware, wire-compatible with ROS 2, for fleets that must coordinate where links die. One leaderless data plane carries topics, services, actions, and parameters; version one ships the CycloneDDS backend.

Proven by a 110-row benchmark matrix, green end to end: lower p50 latency at every payload size, zero loss to 100 kHz where ROS first drops at 10 kHz.

Full docs live in [docs/](https://github.com/podomy/weld/blob/HEAD/docs).

## Protocol support

| Transport | Spec | Status |
|-----------|------|--------|
| DDS | DDSI-RTPS 2.5, DDS 1.4, DDS-XTypes 1.4, DDS-SECURITY 1.2 | Fully supported |
| MQTT | MQTT v5, MQTT v3.1.1 | Fully supported |

Weld can bridge topics and services across transports on request, so DDS data can go out as MQTT and back.

## Commercial Licensing

Commercial licenses are available. See [podomy.com/projects](https://podomy.com/projects/) for pricing, or contact [contact@podomy.com](mailto:contact@podomy.com).
