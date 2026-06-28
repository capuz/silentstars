---
repo: "woopstar/hsem"
name: "hsem"
description: "Maximize the potential of your Huawei solar battery system with this powerful Home Assistant custom integration."
url: "https://github.com/woopstar/hsem"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["battery", "homeassistant", "homeassistant-custom-component", "homeassistant-integration", "huawei", "solar"]
stars: 30
forks: 6
openIssues: 3
closedIssues: 200
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-10-15T12:18:38Z"
lastCommitAt: "2026-06-28T06:56:49Z"
lastReleaseAt: "2024-10-17T12:26:50Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 61
maintainers: ["woopstar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c1103e5d105ac97c2d7a458738ed2c133502afb239b638fec30a92ed3766ae6/woopstar/hsem"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/woopstar"]
---

# Huawei Solar Energy Management (HSEM) for Home Assistant

## Introduction

**Huawei Solar Energy Management (HSEM)** is a modular, secure, and highly configurable Home Assistant integration for optimizing Huawei solar batteries, inverters, and related energy devices. HSEM automates battery charging/discharging, grid export/import, and adapts to dynamic energy prices, solar forecasts, and EV charging events.

---

## Features

### Core Optimization
- **MILP-based planner** — global optimal charge/discharge scheduling via linear programming (HiGHS solver)
- **8-term cost function** — rigorous mathematical formulation with formal invariants
- **Multiple candidate strategies** — baseline, passive, aggressive, partial-SoC, and MILP-optimal plans
- **Time-discounted candidate selection** — prefers near-term savings over far-future gains

### Battery Intelligence
- **Dynamic self-learning discharge floor** — reserves enough energy to bridge the house to the next solar surplus or cheap grid window, with self-correcting safety margin
- **Temperature-adaptive charge rate learning** — 7 temperature buckets track actual charge power at p90, adapting to cold-weather limitations
- **Battery…
