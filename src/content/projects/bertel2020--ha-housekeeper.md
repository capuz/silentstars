---
repo: "bertel2020/HA-Housekeeper"
name: "HA-Housekeeper"
description: "Home Assistant housekeeping: find broken references, orphaned entities and failing automations – fix only after confirmation, with backup and undo."
readmeQualityOk: true
url: "https://github.com/bertel2020/HA-Housekeeper"
homepage: "https://github.com/bertel2020/HA-Housekeeper/blob/main/docs/USER-GUIDE.md"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [51, 49]
topics: ["custom-integration", "hacs", "home-assistant", "cleanup", "entity-registry", "maintenance", "orphaned-entities", "dependency-analysis", "device-registry", "recorder"]
stars: 193
forks: 14
openIssues: 0
closedIssues: 42
watchers: 4
contributors: 7
recentReleases: 10
createdAt: "2026-10-07T17:56:43Z"
lastCommitAt: "2026-11-27T12:54:23Z"
lastReleaseAt: "2026-10-11T15:07:28Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 35
maintainers: ["bertel2020"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1409179094/2281e82f-7c3f-4ca2-a8d6-103d42aef468"
discussionCount: 5
---

Housekeeping for Home Assistant: find broken references, orphaned entities and failing automations, see what depends on them, and fix or clean up – only after confirmation, with backup and undo.

HA Housekeeper is a maintenance and analysis integration for Home Assistant. It creates a clear inventory of your installation, explains suspicious or orphaned objects, and shows how entities, devices, integrations, areas, and automations depend on each other.

Typical problems it helps with: unavailable or unknown entities, orphaned entities and devices, entity registry cleanup, broken references in automations, scripts and dashboards, unused automations, replaced or renamed entities, low batteries, a growing recorder database, and failing integrations after an update.

The goal is not aggressive automatic cleanup. Housekeeper helps you understand what exists, why something is considered problematic, and what a cleanup or repair would affect before you confirm it.
