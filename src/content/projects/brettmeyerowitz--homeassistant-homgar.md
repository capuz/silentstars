---
repo: "brettmeyerowitz/homeassistant-homgar"
name: "homeassistant-homgar"
description: "Home Assistant custom integration for RainPoint and HomGar irrigation devices."
readmeQualityOk: true
url: "https://github.com/brettmeyerowitz/homeassistant-homgar"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["hacs", "home-assistant", "home-assistant-custom-component", "homeassistant-integration", "homgar", "rainpoint"]
stars: 18
forks: 7
openIssues: 1
closedIssues: 43
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-11-16T09:26:04Z"
lastCommitAt: "2026-07-04T22:21:43Z"
lastReleaseAt: "2026-03-16T18:16:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 54
maintainers: ["brettmeyerowitz", "cjam28"]
openGraphImageUrl: "https://opengraph.githubassets.com/951ad145504c5e8dba84510bc6ac9b6074b7b84cc054fe2e15c7ed9b5ae3c46e/brettmeyerowitz/homeassistant-homgar"
discussionCount: 5
---

# HomGar / RainPoint Cloud Integration for Home Assistant

Unofficial Home Assistant integration for RainPoint Smart+ devices via the HomGar/RainPoint cloud API.

---

## What you get

Control and monitor your RainPoint / HomGar irrigation devices directly from Home Assistant.

### Example entities

### Valve control

### Sensor examples

---

## Why use this?

This integration turns RainPoint hardware into a flexible, programmable irrigation system using Home Assistant.

- Build automations based on real sensor data
- Combine RainPoint devices with other brands (Sonoff, Shelly, etc.)
- Create smarter irrigation using weather, temperature, and moisture
- Monitor water usage and detect leaks

Unlike the mobile app, you are not limited to predefined schedules — you can automate anything.

---

## Example use cases & automations

### Cross‑vendor control (powerful)
Use RainPoint sensors to control *any* device in Home Assistant.

**Example:**
- If soil moisture < 25%
- And no rain in the last 24h
→ Turn on a Sonoff relay controlling a dumb solenoid for 10 minutes

This lets you mix RainPoint sensors with other brands (e.g. Sonoff, Shelly) to build a fully custom irrigation system.…
