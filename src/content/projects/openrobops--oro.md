---
repo: "OpenRobOps/oro"
name: "oro"
description: "OpenRobOps: open-source robot fleet management and operations platform. Real-time   observability and control for AMRs, self-hosted, ROS 2, Open RMF and ISO 21423 native."
readmeQualityOk: true
url: "https://github.com/OpenRobOps/oro"
homepage: "https://openrobops.org"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["fleet-management", "robops", "robotics", "amr", "fleet-management-system", "mqtt", "openrobops", "ros2", "iso21423"]
stars: 36
forks: 2
openIssues: 3
closedIssues: 14
watchers: 2
contributors: 10
recentReleases: 2
createdAt: "2026-02-10T16:36:08Z"
lastCommitAt: "2026-10-21T21:15:17Z"
lastReleaseAt: "2026-09-15T12:43:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 50
maintainers: ["herchu", "clarisandev", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a9cf1679e24b07a6d0e1c05bcd6905188a1af9778ad6b1b9767652f78595b0f/OpenRobOps/oro"
discussionCount: 4
---

# OpenRobOps (ORO)

OpenRobOps is an open-source robot fleet management and operations platform.
It provides real-time observability, monitoring, and control for autonomous
mobile robots (AMRs) across vendors — fully self-hostable, with native support
for ROS and Open RMF.

Started by [InOrbit.AI](https://www.inorbit.ai), OpenRobOps brings the same
production-proven technology used to manage thousands of robots into an open,
transparent foundation that teams can own and extend.

## Architecture

```
Robot Agent (on-device)
    │ MQTT (protobuf)
    ▼
┌──────────────────┐      ┌──────────────────┐
│  Mosquitto MQTT  │◄────►│  Ingest Service  │
│  (broker)        │      │  (telemetry proc)│
└──────┬───────────┘      └────────┬─────────┘
       │                           │
       ▼                           ▼
┌──────────────────────────────────────────┐
│              MongoDB                      │
└──────────────────┬───────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────┐
│         Meteor App Server                 │
│  (REST API, Pub/Sub, WebSocket)           │
└──────────────────┬───────────────────────┘
                   │…
