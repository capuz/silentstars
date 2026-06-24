---
repo: "f-fraysse/Go2Kin"
name: "Go2Kin"
description: "Markerless motion capture with GoPro"
url: "https://github.com/f-fraysse/Go2Kin"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["biomechanics", "gopro", "markerless", "mocap", "opensim", "pose2sim", "rtmdet", "rtmpose", "caliscope", "rtmlib"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-11-12T03:15:06Z"
lastCommitAt: "2026-06-24T06:39:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 37
maintainers: ["f-fraysse"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e13e50006d75769127015a9e47ab97bf8ac22eb2bf9cabff8d51b05f8f5ffcf/f-fraysse/Go2Kin"
---

# Go2Kin

📖 **[User Manual & Documentation (AI generated)](https://f-fraysse.github.io/Go2Kin/)**

**WORK IN PROGRESS**

Integrated markerless motion capture pipeline from 2-4 USB-connected GoPro cameras. Single GUI for the full workflow - from camera setup to OpenSim output.

**Pipeline**: Camera connection & control (OpenGoPro HTTP API) → multi-camera calibration (Caliscope) → recording → audio-based synchronisation → pose estimation, triangulation, filtering, interpolation (Pose2Sim, RTMlib) → kinematics (openSim)

Designed mainly for indoor motion capture labs, to replicate a traditional marker-based workflow (e.g. Vicon Nexus). Opinionated choices like USB-connected cameras and audio sync via hand claps keep things simple and reliable in a lab setting.

**Hardware**: Up to 4 GoPro cameras connected via USB to a single PC. developed and tested with Hero 12. Should work with any GoPro supporting the HTTP API (9+).

**Built on**:
- [Pose2Sim](https://github.com/perfanalytics/pose2sim) - pose estimation, triangulation, filtering, and kinematics (included as a submodule, run directly from the GUI)
- [Caliscope](https://github.com/mprib/caliscope) - multi-camera calibration…
