---
repo: "lnagel/hass-ufh-controller"
name: "hass-ufh-controller"
description: "Home Assistant Underfloor Heating Controller"
readmeQualityOk: true
url: "https://github.com/lnagel/hass-ufh-controller"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs", "hacs-integration", "heating-control", "home-assistant", "home-automation", "hvac", "pid-controller", "python", "smart-home", "underfloor-heating"]
stars: 21
forks: 3
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-01-05T12:50:19Z"
lastCommitAt: "2026-09-18T08:26:27Z"
lastReleaseAt: "2026-02-06T09:30:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 46
maintainers: ["lnagel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbe0e586e7ae7ac6e70e6ab0eee9cead00063ea294000c8d34a839f3d2027051/lnagel/hass-ufh-controller"
discussionCount: 20
---

# Underfloor Heating Controller

**A Home Assistant integration purpose-built for hydronic underfloor heating systems. Fully open source, no gated features.**

While generic thermostats adapt radiator or TRV logic to UFH, this integration is purpose-built for UFH's unique characteristics: high thermal mass, slow response times, and the need to coordinate multiple zones sharing a single heat source.

## How It Compares

| | Generic Thermostats | This Integration |
|---|---|---|
| **Zone coordination** | Each zone fires the heat source independently | Zones aggregate demand into a single heat request with valve pre-opening |
| **Hot water priority** | Unaware of DHW or fights for priority | Parallel, partial or absolute priority; captures residual heat after |
| **Quota fairness** | Time-based or none | Supply-temperature-weighted — zones aren't penalized for cold-start periods |
| **UFH tuning** | Adapted from radiator/TRV logic | PID defaults, observation periods, and minimum run times designed for screed thermal mass |

## Is This For You?

This integration is designed for **hydronic underfloor heating** systems with any heat source — boilers, heat pumps, or district heating. It…
