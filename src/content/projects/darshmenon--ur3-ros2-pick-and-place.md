---
repo: "darshmenon/UR3_ROS2_PICK_AND_PLACE"
name: "UR3_ROS2_PICK_AND_PLACE"
description: "UR Robotic Arm with Robotiq 2-Finger Gripper for ROS2"
readmeQualityOk: true
url: "https://github.com/darshmenon/UR3_ROS2_PICK_AND_PLACE"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [68, 28]
topics: ["gripper-control", "moveit2", "robotiq-2f-85-gripper", "ros2-jazzy", "universal-robots", "ur3-robot-arm", "ur5", "ros2-control", "mtc", "object-detection"]
stars: 61
forks: 6
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2025-03-24T20:40:38Z"
lastCommitAt: "2026-09-19T08:10:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 49
maintainers: ["darshmenon"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7d53da30b3ff6a161b3d2e489f7f095ec7a1c14308c73f2c9bbfe688bbc73b2/darshmenon/UR3_ROS2_PICK_AND_PLACE"
---

# UR Robotic Arm with Robotiq 2-Finger Gripper for ROS 2

Blog post (dev journey, engineering details): [How I'm Building an Autonomous Pick-and-Place System with ROS 2 Jazzy and Gazebo Harmonic](https://medium.com/@darshmenon02/how-i-am-building-an-autonomous-pick-and-place-system-with-ros-2-jazzy-and-gazebo-harmonic-6474cbcc8dc7)

UR3 + Robotiq 2-Finger Gripper on **ROS 2 Humble** + **Gazebo Harmonic**: URDF/ros2_control, MoveIt Task Constructor pick-and-place, vision-based detection, LLM task planning (Ollama), RL (SAC), and demo recording for behavior cloning.

**New here? Start with [Full MTC Pick-and-Place Demo](#full-mtc-pick-and-place-demo)** — one command to run.

<details>
<summary><strong>Table of Contents</strong></summary>

- [Installation](#installation)
- [MoveIt Task Constructor Setup](#moveit-task-constructor-setup)
- [Launch Instructions](#launch-instructions)
- [Supported Grippers](#supported-grippers)
- [Move the Arm from CLI](#move-the-arm-from-cli)
- [Full Autonomous Pipeline](#full-autonomous-pipeline)
- [Grasp Detection (ur_grasp)](#grasp-detection-ur_grasp)
- [UR3 Reinforcement Learning (SAC)](#ur3-reinforcement-learning-sac)
- [Robot Learning Datasets…
