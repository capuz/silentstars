---
repo: "FossPrime/Steam-Controller-Auto-Charge"
name: "Steam-Controller-Auto-Charge"
description: "Slam the controller into the magnetic puck until it charges"
url: "https://github.com/FossPrime/Steam-Controller-Auto-Charge"
homepage: "https://fossprime.github.io/Steam-Controller-Auto-Charge/"
language: "TypeScript"
languages: ["TypeScript", "Rust", "Vue"]
languagePcts: [42, 27, 25]
stars: 208
forks: 9
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 1
createdAt: "2026-06-26T03:26:03Z"
lastCommitAt: "2026-06-28T03:07:44Z"
lastReleaseAt: "2026-06-27T23:10:54Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 13
maintainers: ["FossPrime"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d5e9f91f9bac14414f08d7f75b4185004fbb20ffd72f43dcc34d6df48cc2c41/FossPrime/Steam-Controller-Auto-Charge"
---

# Triton Auto-Charge Vision Tracker

Triton Auto-Charge Vision Tracker is an open-source web application designed to automatically pilot a Triton (2026 Steam Controller) into its magnetic charging puck using optical flow computer vision and WebHID telemetry.

## Features

- **Optical Flow Tracking:** Utilizes OpenCV.js to track user-selected points on the controller and the charging puck via an overhead camera.
- **WebHID Telemetry & Haptic Navigation:** Connects to the Triton Controller natively via WebHID, streaming input and telemetry (Report 67). Navigates the controller towards the puck by firing 70Hz asymmetric haptic pulses through the internal dual Linear Resonant Actuators (LRAs).
- **Proximity Creep Mode:** Automatically cuts haptic pulse frequency by 50% when the controller is within 150 pixels of the puck to ensure a gentle magnetic dock.
- **Battery Status Polling:** Intercepts Report ID `121` (`0x79`) to confirm successful magnetic charging, and parses Report ID `67` (`0x43`) to display live battery percentage and battery cell voltage (mV).
- **Auto-Memory:** Leverages `localStorage` to remember the precise pixel points on your desk for immediate tracking on…
