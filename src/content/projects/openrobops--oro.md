---
repo: "OpenRobOps/oro"
name: "oro"
description: "OpenRobOps is an open-source robot fleet management and operations platform."
readmeQualityOk: true
url: "https://github.com/OpenRobOps/oro"
homepage: "https://openrobops.org"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["fleet-management", "orchestration", "robops", "robotics"]
stars: 36
forks: 2
openIssues: 3
closedIssues: 14
watchers: 2
contributors: 10
recentReleases: 2
createdAt: "2026-02-10T16:36:08Z"
lastCommitAt: "2026-10-21T17:31:51Z"
lastReleaseAt: "2026-09-15T12:43:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 50
maintainers: ["herchu", "clarisandev", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/28f5c9087cf11e5922764f11735f06b9d9d8f67dfd45c865a440b918db54cd89/OpenRobOps/oro"
discussionCount: 3
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
