---
repo: "fschubi/shutter_pilot"
name: "shutter_pilot"
description: "Automatic shutter and blind control for Home Assistant – time, brightness or sun position, with window sensors, lock protection and sun shading. Configured entirely from a sidebar panel, no YAML."
readmeQualityOk: true
url: "https://github.com/fschubi/shutter_pilot"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [76, 24]
topics: ["blinds", "cover", "custom-component", "hacs", "home-assistant", "home-automation", "homeassistant", "rollladen", "shutter", "smart-home"]
stars: 25
forks: 1
openIssues: 13
closedIssues: 12
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-03-02T08:33:59Z"
lastCommitAt: "2026-11-26T13:56:37Z"
lastReleaseAt: "2026-03-04T18:56:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "under_pressure"]
healthScore: 87
undervaluedScore: 37
maintainers: ["fschubi"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdb2eda8c299b2702cb94379a65fe89964a43729873775aae2961ac36a271481/fschubi/shutter_pilot"
fundingLinks: ["CUSTOM:https://paypal.me/fschubi"]
discussionCount: 7
---

# Shutter Pilot

> **Automatic shutter/blind control for Home Assistant**

[Deutsche Version / German version](https://github.com/fschubi/shutter_pilot/blob/HEAD/README.de.md)

---

Shutter Pilot is a Home Assistant custom integration that automates your shutters, blinds, and roller shutters based on **time schedules**, **brightness sensors**, or **sun position**. It adds a dedicated **sidebar panel** for easy management directly within Home Assistant.

## Features

- **Four control modes** per area: time-based, brightness-based (lux sensor), sun position (sunrise/sunset) – or no schedule at all, for shading only
- **Sidebar panel** with Dashboard, Areas, Shutters, Awnings and Roof windows tabs for full management
- **Window/door sensors** – automatically opens shutters when windows are opened
- **Lock protection** – prevents full closing when a door is open
- **Sun protection with compass direction** – shades only when the sun is within the elevation range **and** actually facing the windows
- **Drive-after-close** – catches up scheduled movements when a window was still open
- **Per-shutter positions** – configurable open, closed, and sun-protection positions
- **Slat control**…
