---
repo: "decwest/dwpp"
name: "dwpp"
description: "DWPP: Dynamic Window Pure Pursuit"
readmeQualityOk: true
url: "https://github.com/decwest/dwpp"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-11-06T09:50:36Z"
lastCommitAt: "2026-11-13T11:25:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 39
maintainers: ["decwest"]
openGraphImageUrl: "https://opengraph.githubassets.com/a79994629a4ea23bb98bf169732d78185d605164ad7170b80a5ef15d7efe9e15/decwest/dwpp"
---

# DWPP: Dynamic Window Pure Pursuit Considering Velocity and Acceleration Constraints

DWPP is a pure pursuit variant that computes velocity commands in the velocity space (the v–ω plane) and selects the command within the dynamic window closest to the path-tracking condition ω = κv, so that the commands always respect the velocity and acceleration constraints.

This repository accompanies the article

> Fumiya Ohnishi, Masaki Takahashi, "DWPP: Dynamic window pure pursuit considering velocity and acceleration constraints," *Robotics and Autonomous Systems*, vol. 208, 105839, 2027. https://doi.org/10.1016/j.robot.2026.105839

## 🟢 Nav2 implementations

- **Official Nav2 (ROS 2 Lyrical and later):** DWPP is integrated into the official Nav2 repository.
  👉 https://github.com/ros-navigation/navigation2
- **ROS 2 Humble / Jazzy:** a standalone Nav2 plugin is available.
  👉 https://github.com/Decwest/nav2_dynamic_window_pure_pursuit_controller

## Contents

- [`simulator/`](https://github.com/decwest/dwpp/blob/HEAD/simulator/): kinematic simulator and the simulation studies of the article (Section 5). Outputs are under `simulator/results/`.
-…
