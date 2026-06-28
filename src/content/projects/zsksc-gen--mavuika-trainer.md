---
repo: "zsksc-gen/mavuika-trainer"
name: "mavuika-trainer"
description: "Mavuika combo trainer for the funny anime game. "
url: "https://github.com/zsksc-gen/mavuika-trainer"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 13
forks: 3
openIssues: 6
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-01T09:00:59Z"
lastCommitAt: "2026-06-28T06:56:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 31
maintainers: ["zsksc-gen"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1255882844/e1c92670-b23a-4834-bb2b-96f1e8e7bfd3"
---

# Mavuika Combo Trainer

An interactive timing drill trainer for practicing Mavuika's gameplay combo (Flamestrider Drill). Built with React and Vite.

## Verifying & Contributing Timings

If you want to contribute or verify timing values, the core data models are located here:

* **Timing Configs**: [src/core/config.js](file:///j:/vulcancombo/src/core/config.js)
  * Defines expected ms offsets for key presses (`atk-down`, `dash-down`, `dash-up`, `atk-up`).
  * Configures timing windows/tolerances (`perfect` and `good` margins) and speedometer decay values.
* **Trainer Game Loop**: [src/App.jsx](file:///j:/vulcancombo/src/App.jsx)
  * Implements keyboard/mouse event listener triggers and timing evaluation.
  * Handles audio synthesized ticks on hit evaluation.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start development server**:
   ```bash
   npm run dev
   ```
3. **Compile production static bundle**:
   ```bash
   npm run build
   ```
   *Static output bundles into the `dist/` directory, ready to serve.*
