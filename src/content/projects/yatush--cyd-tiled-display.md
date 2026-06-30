---
repo: "yatush/cyd-tiled-display"
name: "cyd-tiled-display"
description: "An implementation of HomeAssistant wall controller, using CYD"
url: "https://github.com/yatush/cyd-tiled-display"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [45, 43]
stars: 55
forks: 3
openIssues: 1
closedIssues: 12
watchers: 2
contributors: 2
recentReleases: 7
createdAt: "2024-12-18T07:02:57Z"
lastCommitAt: "2026-06-30T06:49:46Z"
lastReleaseAt: "2026-04-28T05:34:52Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 95
undervaluedScore: 57
maintainers: ["yatush", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/fadea72e8ac98d85c9a8e80ea346cafafbd5b5b10f40c5e4a9447e387fcdb33c/yatush/cyd-tiled-display"
discussionCount: 2
---

cyd-tiled-display
=================
**An ESPHome based implementation of HomeAssistant wall controller, using CYD. The controller wakes up on movement, and is fully customizable.**

# Background
This project aims to create a cheap, versatile, customizable, reliable controller for HA. It should be easy to use. I've created a couple of controllers in my house, and has been using them reliably for multiple months.

The Hardware is bought from AliExpress (I'll provide sample links, no attributions). The casing is 3D printed.

The project is based on the awesome [ESPHome](https://esphome.io/) project.

  </br>  
</p>

# How it Works

The project transforms a visual design into a working device through three stages:

1.  **Visual Design (The Configurator)**:
    You use the web-based Configurator to design your screen layout. You can create multiple pages, drag-and-drop tiles, and link them to Home Assistant entities (lights, switches, sensors, etc.).
    
2.  **YAML Configuration**:
    The Configurator saves your design as a structured YAML file (e.g., `tiles.yaml`). It then "Generates" the specific ESPHome YAML code required to render this design. This includes all the scripts,…
