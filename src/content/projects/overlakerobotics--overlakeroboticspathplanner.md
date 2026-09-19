---
repo: "OverlakeRobotics/OverlakeRoboticsPathPlanner"
name: "OverlakeRoboticsPathPlanner"
description: "A web app that lets you plan out autonomous paths by drawing them on a field."
readmeQualityOk: true
url: "https://github.com/OverlakeRobotics/OverlakeRoboticsPathPlanner"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [90]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2025-09-23T22:15:58Z"
lastCommitAt: "2026-09-19T02:46:56Z"
lastReleaseAt: "2025-12-24T23:31:59Z"
status: "thriving"
tags: []
healthScore: 65
undervaluedScore: 29
maintainers: ["saajbhatia", "gaminghusky1"]
openGraphImageUrl: "https://opengraph.githubassets.com/bac7ce88ac092a9e384dccc1e8eec74914c628cb1a7075233ed82b1aed0fe4de/OverlakeRobotics/OverlakeRoboticsPathPlanner"
---

# Overlake Path Planner

Overlake Path Planner is a browser-based tool for creating autonomous paths for FTC robots.
It runs fully offline from a release zip and can be opened by double-clicking `index.html`.

This tool is just the frontend webapp you can use to draw autonomous paths with actions. For the recommended code to run on your robot that will interface with this webapp, see https://github.com/OverlakeRobotics/OverlakeRoboticsLibrary. 

## Quick Start

1. Download the latest release zip from the GitHub releases on the right
2. Extract it
3. Open `index.html` in your browser

Optional: Edit `config.js` (next to `index.html`) to customize defaults and tag templates.

## Features

### Path building
- Place points by clicking on the field
- Choose segment types: Line, Bezier, Arc, or Free draw
- Switch alliance (Red/Blue) or mirror the path with one click

### Fast upload
- Connect to your robot's wifi and upload paths instantly
- Real time pose updating to see the robot position on screen
- Requires code from https://github.com/OverlakeRobotics/OverlakeRoboticsLibrary to be on the robot for direct upload and pose updating

### Edit mode
- Select and drag points directly on…
