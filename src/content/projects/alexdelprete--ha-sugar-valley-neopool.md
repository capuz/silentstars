---
repo: "alexdelprete/ha-sugar-valley-neopool"
name: "ha-sugar-valley-neopool"
description: "Home Assistant custom integration for Sugar Valley NeoPool pool controllers via Tasmota MQTT"
url: "https://github.com/alexdelprete/ha-sugar-valley-neopool"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs", "home-assistant", "home-assistant-component", "home-assistant-custom", "home-assistant-integration", "homeassistant", "mqtt", "neopool", "pool-controller", "tasmota"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-12-13T12:02:13Z"
lastCommitAt: "2026-06-27T00:45:22Z"
lastReleaseAt: "2026-01-07T05:08:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 54
maintainers: ["alexdelprete", "curzon01", "netbasebe"]
openGraphImageUrl: "https://opengraph.githubassets.com/af39a0f2827943170eabbe09fb5278460f997db519ba83c164ce5ba619b29ef9/alexdelprete/ha-sugar-valley-neopool"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/alexdelprete"]
discussionCount: 7
---

# Sugar Valley NeoPool - Home Assistant Integration

## Introduction

Home Assistant custom integration for **Sugar Valley NeoPool** controllers
connected via **Tasmota MQTT**. Provides comprehensive monitoring and control
of your pool system through Home Assistant.

> 💬 **Community support & discussion:** join the official
> [Sugar Valley NeoPool topic on the Home Assistant Community forum][forum].

## Features

### Sensors

- **Water Temperature** - Current pool water temperature
- **pH** - pH level, state, and pump status
- **Redox (ORP)** - Oxidation-reduction potential
- **Hydrolysis** - Chlorine production level, state, runtime statistics, setpoint
  (g/h), max capacity, and unit
- **Chlorine** - Chlorine level (for controllers with chlorine module)
- **Conductivity** - Conductivity level (for controllers with conductivity module)
- **Ionization** - Current ionization level (for controllers with ionization module)
- **Controller Time** - NeoPool controller internal clock (diagnostic,
  throttled to 5-min updates)
- **Filtration** - Mode and speed
- **Powerunit** - Voltage diagnostics (5V, 12V, 24-30V, 4-20mA)
- **Connection** - Modbus communication statistics (lifetime…
