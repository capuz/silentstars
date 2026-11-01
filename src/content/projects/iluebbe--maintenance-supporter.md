---
repo: "iluebbe/maintenance_supporter"
name: "maintenance_supporter"
description: "Home Assistant custom integration for tracking and managing maintenance tasks with adaptive scheduling, sensor-based triggers, and notifications"
readmeQualityOk: true
url: "https://github.com/iluebbe/maintenance_supporter"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [70, 22]
topics: ["custom-component", "hacs-integration", "home-assistant", "maintenance", "adaptive-scheduling", "notifications", "qr-codes", "vacation-mode"]
stars: 135
forks: 8
openIssues: 0
closedIssues: 150
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-05-15T18:52:19Z"
lastCommitAt: "2026-11-01T10:45:10Z"
lastReleaseAt: "2026-03-02T14:17:04Z"
status: "thriving"
tags: ["solo_builder", "community_hub"]
healthScore: 98
undervaluedScore: 44
maintainers: ["iluebbe", "dependabot[bot]", "frenck"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1f9b55040a70217086c12d543ebbeba0c6df20252a151acb7d19390730c452b/iluebbe/maintenance_supporter"
discussionCount: 30
---

# Maintenance Supporter

Everything in your home that needs regular upkeep — filters, pumps, cars,
appliances, smoke detectors — tracked in one place inside Home Assistant.
Schedule by time or by real sensor data, get reminded, check things off from
your phone, and keep the full history of what was done and what it cost.

> **Not the same as HA's built-in *Maintenance Dashboard* (2026.5+).** That
> dashboard auto-discovers low-battery devices — narrow scope, zero config.
> *Maintenance Supporter* tracks user-defined maintenance with schedules,
> sensor triggers, history, costs, and notifications. They pair well: HA's
> built-in handles batteries, this integration handles everything else.

| Dashboard | Task Detail | Mobile |
|:-:|:-:|:-:|
|  |  |  |

### See it in action

clips (completing a task, filtering the calendar) in
[FEATURES.md → In action](https://github.com/iluebbe/maintenance_supporter/blob/HEAD/docs/FEATURES.md#in-action).</sub>

## What can it do for you?

**"The HVAC filter is due every 3 months."**
Create the object once (or pick it from 97 ready-made templates), give it a
task with an interval — days, weeks, months, or specific patterns like *first
Saturday* or…
