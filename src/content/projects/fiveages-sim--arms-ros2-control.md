---
repo: "fiveages-sim/arms_ros2_control"
name: "arms_ros2_control"
description: "ROS2-Control implementations for Arms (single arm, dual arm and wheel-based-humanoid)"
readmeQualityOk: true
url: "https://github.com/fiveages-sim/arms_ros2_control"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["gazebo", "ros2", "ros2-control", "ocs2", "mpc", "wbc"]
stars: 73
forks: 13
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 12
recentReleases: 3
createdAt: "2025-05-29T08:27:46Z"
lastCommitAt: "2026-07-14T05:52:50Z"
lastReleaseAt: "2026-07-13T13:05:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 56
maintainers: ["legubiao", "Zachary359", "2486401522"]
openGraphImageUrl: "https://opengraph.githubassets.com/82d38ec56d5ee25b0560f596c6153429955a464479b831727d682bedd57ac15e/fiveages-sim/arms_ros2_control"
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
│   └── adaptive_gripper_controller/ # Adaptive gripper controller
├── hardwares/                    # Hardware interface implementations
│   ├── topic_based_ros2_control/ # Topic-based hardware interface
│   └── unitree_ros2_control/    # Unitree robot hardware interface
├── command/                      # Command input implementations
│   ├── arms_ros2_control_msgs/  # Control input message definitions
│   ├──…
