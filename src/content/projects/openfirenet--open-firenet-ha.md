---
repo: "openfirenet/open-firenet-ha"
name: "open-firenet-ha"
description: "Open Firenet — Home Assistant integration for Rika pellet stoves via the open-firenet WiFi bridge"
readmeQualityOk: true
url: "https://github.com/openfirenet/open-firenet-ha"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["custom-component", "firenet", "hacs", "home-assistant", "pellet-stove", "rika", "home-assistant-integration", "homeassistant-addons", "homeassistant-integration"]
stars: 9
forks: 4
openIssues: 2
closedIssues: 16
watchers: 2
contributors: 4
recentReleases: 9
createdAt: "2026-06-15T20:34:44Z"
lastCommitAt: "2026-10-29T21:23:53Z"
lastReleaseAt: "2026-10-06T22:28:24Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 62
maintainers: ["pslestang", "openfirenet", "lupin28"]
openGraphImageUrl: "https://opengraph.githubassets.com/228cba010916b051844b8fab891c4ba47f2ea6e7ef619151fc77ca81789fa33d/openfirenet/open-firenet-ha"
discussionCount: 5
---

# Open Firenet — Home Assistant Integration

Custom Home Assistant integration for RIKA pellet stoves controlled via the [open-firenet](https://github.com/openfirenet/open-firenet) WiFi bridge.

## Features

- **Thermostat Control**: Power on/off, target room temperature, operating mode presets (*Manual*, *Auto*, *Comfort*), and heating power (30%–100%).
- **MultiAir 1 & 2 Fan Controls**: Dedicated fan entities for MultiAir convection fans with on/off, Auto regulation, and manual speeds 1 to 5 (created for the models sold with MultiAir, or on your choice in the options).
- **MultiAir Convection Trim**: Number sliders for -30% to +30% fine tuning of convection output.
- **Weekly Heating Schedule**: Enable or disable the stove's internal weekly heating schedule via a switch, and adjust the setback temperature (10°C–25°C).
- **Heating Schedule From Home Assistant**: Draw the week as a Home Assistant schedule and copy it to the stove with one button; time entities per slot are available for automations.
- **Hopper Lid Sensor**: Real-time detection when the pellet hopper lid is opened.
- **Full Sensor Telemetry**: Room temperature, combustion chamber temperature, mainboard temperature,…
