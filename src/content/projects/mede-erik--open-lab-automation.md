---
repo: "mede-erik/Open-Lab-Automation"
name: "Open-Lab-Automation"
description: "Open Lab Automation is an open-source suite for automated electrical measurements, designed for hobbyists, makers, and lab enthusiasts."
readmeQualityOk: true
url: "https://github.com/mede-erik/Open-Lab-Automation"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["automated-testing", "automation", "lab", "lxi", "pyvisa", "scpi", "scpi-instruments"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-29T14:58:23Z"
lastCommitAt: "2026-11-07T09:30:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 72
maintainers: ["claude", "mede-erik"]
openGraphImageUrl: "https://opengraph.githubassets.com/c156d13f6402d1f72dff298cc78c722ae4f8c8053769a57d634f200882ca8509/mede-erik/Open-Lab-Automation"
---

# Open Lab Automation

Open Lab Automation is an open-source suite for automated electrical measurements, designed for hobbyists, makers, and lab enthusiasts. The frontend is a modern Python (PyQt6) graphical interface for instrument configuration and control, while the C backend ensures fast, direct communication with instruments via USB, LAN, GPIB, or serial.

> [!IMPORTANT]  
> This software is under active development. Features and stability may change, and some parts may be incomplete or experimental.

## Main Features

- **Instrument Management**
  - Add, configure, and manage instruments using a flexible JSON library (`Instruments_LIB/instruments_lib.json`).
  - Three-level selection: type → series → model, with dynamic options.
  - Support for power supplies, dataloggers, oscilloscopes, and electronic loads.
  - **Advanced Datalogger Configuration**: 
    - Slot-based module system for modular instruments (e.g., Keysight 34972A).
    - Visual slot configuration with compatible module selection.
    - Per-channel configuration with attenuation, measurement type, and enable/disable.
    - Real-time validation with detailed error codes (DL-XXX series).
  -…
