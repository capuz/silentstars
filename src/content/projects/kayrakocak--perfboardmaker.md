---
repo: "KayraKocak/PerfboardMaker"
name: "PerfboardMaker"
description: "A windows app made spesifically for making perfboard layouts. It is better to have a plan before you start soldering."
readmeQualityOk: true
url: "https://github.com/KayraKocak/PerfboardMaker"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 16
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-11-11T19:03:23Z"
lastCommitAt: "2026-11-12T11:41:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 36
maintainers: ["KayraKocak"]
openGraphImageUrl: "https://opengraph.githubassets.com/91f47c163a4a304dae58f4de7b8866113fa1d4e1273cf50740fde195c3d61712/KayraKocak/PerfboardMaker"
---

# Very Important Bug Fix
it seems like every version before v0.22 has a bug on the updater logic, so anyone using 0.21 or below will not be able to get the new updates just by clicking the glowing update button, they will have to re-download the project from github. I am sorry for the inconvenience.

# PerfBoardMaker ⚡

A desktop 2D orthogonal electronic CAD application for designing, routing, and prototyping perfboard circuits. Built with Python & PyQt6, featuring an accelerated native C++ multi-net AutoConnect router.

---

## Key Features

### 1. Viewport Toolbar & Editing Modes
- **Select Mode (`1`)**:
  - Select, move, and rotate (`R` / `Shift+R`) components or drag jumper endpoints and bend handles.
  - **Solder Net Highlighting & Selectable Solder Paths**: Hovering over a solder pad, trace, or jumper on the Back View (or Front View with **Transparent PCB** enabled) highlights the entire conductive net in gold. Clicking a solder path selects it and displays every connected component pin (both direct and bridged via jumpers) in a resizeable **Connected Pins** table in the Inspector.
- **Solder Mode (`2`)**:
  - Draw realistic tinned solder bridges on the back side of the…
