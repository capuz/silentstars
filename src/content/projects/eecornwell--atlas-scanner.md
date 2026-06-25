---
repo: "Eecornwell/atlas-scanner"
name: "atlas-scanner"
description: "A low cost, open source hardware and software system for capturing 3D environments using sensor fusion and a variety of capture methods including terrestrial and SLAM."
url: "https://github.com/Eecornwell/atlas-scanner"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 45
forks: 3
openIssues: 2
closedIssues: 6
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-09-30T03:33:45Z"
lastCommitAt: "2026-06-25T01:36:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 32
maintainers: ["Eecornwell"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7ddcb4c9f69d0d54033f75826070c01c3d8a131c3c3f4227f012120c0df926c/Eecornwell/atlas-scanner"
---

# Automated Terrestrial LiDAR Acquisition System (ATLAS)
*A low cost, open source hardware and software system for capturing physical environments using sensor fusion and a variety of 3D capture methods including terrestrial and SLAM.*

## Motivation
- In order to fully unlock the possibilities of 3D, a method for creating 3D content from physical spaces is needed to both test new capabilities and ingest as a new digital twin asset. Unfortunately for current 3D scanning systems, there is both a steep learning curve and a steep price (most scanners range from $1k-30k depending on hardware specifications and software licensing).

- This repository aims to provide a low-cost solution (~$1100 for new sensor setup) for building, deploying, and operating a 3D scanner (built from commercial-off-the-shelf components) for scanning physical environments and outputting dense colored point clouds. This solution includes both hardware and software components, as well as a setup guide to calibrate and test the system.
  > *Note: See `Hardware Build` section below for component estimates at the time of writing this.*

## Technical Approach

### Hardware
- LiDAR w/ IMU
    - [Livox…
