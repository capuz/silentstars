---
repo: "limxdynamics/tron1-ss"
name: "tron1-ss"
description: "LiDAR SLAM & navigation for TRON1 — FAST-LIO-SAM mapping, localization & path planning"
readmeQualityOk: true
url: "https://github.com/limxdynamics/tron1-ss"
homepage: "https://www.limxdynamics.com"
language: "C++"
languages: ["C++"]
languagePcts: [81]
topics: ["lidar", "navigation", "robotics", "ros", "slam", "tron1", "limx"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-18T12:51:06Z"
lastCommitAt: "2026-09-01T08:47:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 46
maintainers: ["limxdynamics"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd5e4e0b135c0b95770757d0a01012e6ac478b1034eb4aed1026f62a21adb917/limxdynamics/tron1-ss"
---

# English | [中文](https://github.com/limxdynamics/tron1-ss/blob/HEAD/README_cn.md)
# Tron1 SS

## 1. Deployment Environment Setup

**Install ROS Noetic:**  
We recommend building an algorithm development environment based on ROS Noetic on Ubuntu 20.04. ROS provides a suite of tools and libraries—such as core libraries, communication frameworks, and simulation tools (e.g., Gazebo)—which greatly facilitate the development, testing, and deployment of robotic algorithms. These resources offer users a rich and complete development environment.

To install ROS Noetic, please refer to the official documentation:  
👉 [ROS Noetic Installation on Ubuntu](https://wiki.ros.org/noetic/Installation/Ubuntu)  
Make sure to choose the **`ros-noetic-desktop-full`** version.

After installing ROS Noetic, run the following shell commands in a Bash terminal to install the required dependencies:

```bash
sudo apt-get update
sudo apt install ros-noetic-map-server \
                 ros-noetic-octomap-ros \
                 ros-noetic-octomap-msgs \
                 ros-noetic-octomap-server \
                 ros-noetic-dwa-local-planner \
                 ros-noetic-octomap-rviz-plugins\…
