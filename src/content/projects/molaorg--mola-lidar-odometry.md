---
repo: "MOLAorg/mola_lidar_odometry"
name: "mola_lidar_odometry"
description: "MOLA LiDAR Inertial Odometry (LIO) and localization"
readmeQualityOk: true
url: "https://github.com/MOLAorg/mola_lidar_odometry"
homepage: "https://docs.mola-slam.org"
language: "C++"
languages: ["C++"]
languagePcts: [73]
topics: ["cpp", "lidar", "lidar-point-cloud", "localization", "mapping", "mobile-robotics", "robotics", "ros", "ros2", "slam"]
stars: 121
forks: 26
openIssues: 2
closedIssues: 37
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2021-02-21T05:38:35Z"
lastCommitAt: "2026-08-23T04:08:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 49
maintainers: ["jlblancoc", "SamueleSandrini"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbd06f77d3b9297880dbd87e278b6d42dcf71ad382744817e26b647ea69058bb/MOLAorg/mola_lidar_odometry"
---

# mola_lidar_odometry
LIDAR odometry component based on the MOLA and MRPT frameworks,
compatible with ROS 2.

## Contents
This repository provides a C++ library `mola_lidar_odometry` implementing LIDAR
odometry. Sensor input is provided via MOLA components, and ROS 2 example launch files are
provided in [ros2-launchs](https://github.com/MOLAorg/mola_lidar_odometry/blob/HEAD/ros2-launchs/).

A CLI interface `mola-lidar-odometry-cli` is also provided for running on
offline datasets.

## Build and install
Refer to: https://docs.mola-slam.org/latest/#installing

Lidar Inertial Odometry (LIO) demo with Oxford Spires:

Lidar Odometry (LO) demo with KITTI:

## Documentation and tutorials
See: https://docs.mola-slam.org/

## ROS build farm status

| Distro | Develop branch | Releases | Stable release |
| ---    | ---            | ---      |  ---      |
| ROS2 Humble  (u22.04) |  [](https://build.ros2.org/job/Hdev__mola_lidar_odometry__ubuntu_jammy_amd64/) | amd64 [](https://build.ros2.org/job/Hbin_uJ64__mola_lidar_odometry__ubuntu_jammy_amd64__binary/) <br> arm64 [](https://build.ros2.org/job/Hbin_ujv8_uJv8__mola_lidar_odometry__ubuntu_jammy_arm64__binary/) |…
