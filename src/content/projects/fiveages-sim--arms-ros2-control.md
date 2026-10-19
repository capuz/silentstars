---
repo: "fiveages-sim/arms_ros2_control"
name: "arms_ros2_control"
description: "ROS2-Control implementations for Arms (single arm, dual arm and wheel-based-humanoid)"
readmeQualityOk: true
url: "https://github.com/fiveages-sim/arms_ros2_control"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["gazebo", "ros2", "ros2-control", "ocs2", "mpc", "wbc", "isaacsim"]
stars: 84
forks: 14
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 16
recentReleases: 4
createdAt: "2025-05-29T08:27:46Z"
lastCommitAt: "2026-10-19T09:14:05Z"
lastReleaseAt: "2026-10-14T13:14:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 55
maintainers: ["legubiao", "Zachary359", "ldh9299"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e26092366d70720dd465b00d5c0d4cabee24128f8a510fa03982b7d3be9890f/fiveages-sim/arms_ros2_control"
---

# Arms ROS2 Control

This repository contains the ros2-control files for manipulators and robotic arms. It provides controllers and hardware
interfaces for various robotic manipulators in ROS2 environment.

## Table of Contents

- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Supported Robots](#supported-robots)
- [Tested Environments](#tested-environments)
- [Quick Start](#quick-start)
- [Components](#components)
- [Configuration](#configuration)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Project Structure

The project is organized as follows:

```
arms_ros2_control/
├── controller/                    # Controller implementations
│   ├── ocs2_arm_controller/      # OCS2-based arm controller
│   ├── ocs2_wbc_controller/      # OCS2 wheel-humanoid whole-body controller
│   └── adaptive_gripper_controller/ # Adaptive gripper controller
├── libraries/
│   └── ocs2_humanoid/            # ocs2_wheel_humanoid (+ ROS wrappers)
├── hardwares/                    # Hardware interface implementations
│   ├── topic_based_ros2_control/ # Topic-based hardware interface
│   └── unitree_ros2_control/    # Unitree…
