---
repo: "haoxiliangluo/pnc_nav2"
name: "pnc_nav2"
description: "3D Planning and Navigation Control"
originalDescription: "3d规划导航控制"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/haoxiliangluo/pnc_nav2"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [60, 31]
stars: 5
forks: 0
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-05-30T02:19:56Z"
lastCommitAt: "2026-11-11T03:49:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 62
undervaluedScore: 28
maintainers: ["haoxiliangluo"]
openGraphImageUrl: "https://opengraph.githubassets.com/b791bbc3c27475fa31e6af94409c0b9793b3c94ae9a0c9d5ca4b8994a5a685e6/haoxiliangluo/pnc_nav2"
---

# PNC Nav2 — 3D Navigation Planning and Control System

A 3D navigation system for wheel-legged robots, focused on **Planning & Control**, with hot-swappable plugin-based algorithms.

This repository is a personal learning and practice project maintained independently, and it may be open-sourced later. It depends only on the official ROS 2 Jazzy, Gazebo Harmonic (`ros_gz`), and basic Nav2 packages (`map_server` / lifecycle_manager). It does not depend on any third-party robot product SDK, deb packages, or private environment scripts.

## ✨ Features

- **Plugin architecture**: global planning, local planning, and path tracking can all be hot-swapped via pluginlib
- **Implemented algorithms**: A* 2D, RRT*, Pure Pursuit, Stanley, DWA (still being refined)
- **Real map integration**: supports the OccupancyGrid published by `map_server` (includes `maps/111`)
- **Incremental development**: 2D differential-drive vehicle validation → 3D quadruped robot dog → real-robot deployment
- **Simulation stack**: Gazebo Sim Harmonic (playground + simple differential-drive vehicle) + Unitree Go2 (3D, planned)

## 🏗️ System Architecture

```
Navigation layer (NavServer)
  ├─ Global Planner (plugin)…
