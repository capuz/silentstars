---
repo: "jsimonetti/mimirheim"
name: "mimirheim"
description: "MILP based home energy strategist"
readmeQualityOk: true
url: "https://github.com/jsimonetti/mimirheim"
language: "Mathematical Programming System"
languages: ["Mathematical Programming System", "Python"]
languagePcts: [53, 46]
topics: ["ahead", "day", "energy", "hassio", "homeassistant", "milp"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-07T08:09:51Z"
lastCommitAt: "2026-10-09T10:50:03Z"
lastReleaseAt: "2026-06-28T14:19:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["github-actions[bot]", "dependabot[bot]", "jsimonetti"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebcbe6c869e0bb79c694b11b289e1471a54f5c940ff1f37df57702efb88d577c/jsimonetti/mimirheim"
discussionCount: 0
---

# Mimirheim — Home Energy Optimiser

**mimirheim** is an open-source Python service that computes an optimal energy dispatch schedule for a residential home. Given forecasts of electricity prices, PV generation, and household load, it determines the best schedule for every controllable device — battery, EV, deferrable loads — over a rolling 24-hour planning horizon.

mimirheim is a **pure strategist**. It never controls hardware. It reads all inputs from MQTT and publishes its schedule back to MQTT. Home Assistant, Node-RED, or any other automation platform is responsible for executing that schedule on actual devices.

**New here?** See the [Quick Start guide](https://github.com/jsimonetti/mimirheim/wiki/Quick-Start) for a step-by-step setup walkthrough.

---

## Contents

1. [Core Principle](#1-core-principle)
2. [Mathematical Model](#2-mathematical-model)
3. [Devices](#3-devices)
4. [Objectives and Strategy](#4-objectives-and-strategy)
5. [Confidence Model](#5-confidence-model)
6. [Input Schema](#6-input-schema)
7. [Output Schema](#7-output-schema)
8. [Running mimirheim](#8-running-mimirheim)
9. [Configuration](#9-configuration)
10. [Readiness and…
