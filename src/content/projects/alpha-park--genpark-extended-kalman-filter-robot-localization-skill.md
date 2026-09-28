---
repo: "Alpha-Park/genpark-extended-kalman-filter-robot-localization-skill"
name: "genpark-extended-kalman-filter-robot-localization-skill"
description: "Extended Kalman Filter (EKF) for non-linear mobile robot pose estimation and landmark sensor fusion"
readmeQualityOk: true
url: "https://github.com/Alpha-Park/genpark-extended-kalman-filter-robot-localization-skill"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-skills", "ekf", "kalman-filter", "mcp", "non-linear-filtering", "odometry-fusion", "python-standard-library", "robot-localization", "sensor-fusion", "slam-primitives"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-28T10:05:19Z"
lastCommitAt: "2026-09-28T10:05:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 15
maintainers: ["alphaparkinc"]
openGraphImageUrl: "https://opengraph.githubassets.com/b96af98e7d2db6f533acd966427e5d660487934cf02c8ef5ff36e83c8e51f51c/Alpha-Park/genpark-extended-kalman-filter-robot-localization-skill"
---

# Extended Kalman Filter (EKF) Localization Skill

Nonlinear Extended Kalman Filter for autonomous ground robot state estimation, dead reckoning odometry fusion, and range-bearing landmark localization.

```mermaid
flowchart TD
    Odometry["Control / Odometry (v, ω)"] --> Predict["Prediction Step (x_k|k-1, P_k|k-1)"]
    Landmark["Landmark Observation (r, φ)"] --> Update["Measurement Update Step"]
    Predict --> Update
    Update --> Gain["Compute Kalman Gain K"]
    Gain --> Correct["State Correction x_k|k & Covariance P_k|k"]
```

## Features
- **100% Python Standard Library**: Pure matrix algebra and trigonometric projections.
- **Unicycle Kinematics**: First-order Taylor linearization of differential drive models.
- **Multi-Sensor Fusion**: Combines wheel speed and range-bearing beacon updates.
