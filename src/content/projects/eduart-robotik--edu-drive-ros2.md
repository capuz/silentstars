---
repo: "EduArt-Robotik/edu_drive_ros2"
name: "edu_drive_ros2"
description: "edu_drive package for ROS2"
readmeQualityOk: true
url: "https://github.com/EduArt-Robotik/edu_drive_ros2"
language: "C++"
languages: ["C++"]
languagePcts: [93]
stars: 8
forks: 7
openIssues: 1
closedIssues: 2
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2024-02-02T12:30:41Z"
lastCommitAt: "2026-07-06T07:04:23Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 70
undervaluedScore: 51
maintainers: ["hannesduske", "stefanmay", "Thomas-Gelf"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb6975e199f0a3ac2d773bbfa2aad8c06b4d376492033dc75db63a3874070406/EduArt-Robotik/edu_drive_ros2"
---

# edu_drive_ros2
This package comprises a ROS2 interface for EduArt's generic drive concept.
It covers several kinematic concepts: Differential drive, Mecanum steering and Skid steering.
All three can be used in dependency of the mounted wheels and the configuration of YAML parameters.

  <br><em>Fig.: Robot prototype using the Free Kinematic Kit.</em>
</p>

## Table of Contents
- [Launching the Robot](#launching-the-robot)
- [YAML file parameters](#yaml-file-parameters)
- [Calculation of the kinematic parameters](#calculation-of-the-kinematic-parameters)
- [Setting up a Raspberry PI from scratch](#setting-up-a-raspberry-pi-from-scratch)
- [Free Kinematics Kit](#free-kinematics-kit)
  - [Electrical Interface](#electrical-interface)
  - [Software Interface](#software-interface)
  - [What do I need to build my own EduArt robot?](#what-do-i-need-to-build-my-own-eduart-robot)
- [Troubleshooting](#troubleshooting)
  - [🚫 The robot does not drive](#-the-robot-does-not-drive)
  - [🚫 Wheels rotate at full speed and don't respond to velocity commands](#-wheels-rotate-at-full-speed-and-dont-respond-to-velocity-commands)
  - [🚫 Wheels rotate in the wrong…
