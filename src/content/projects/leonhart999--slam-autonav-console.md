---
repo: "Leonhart999/slam-autonav-console"
name: "slam-autonav-console"
description: "SLAM and AutoNav Console: browser console for LiDAR SLAM mapping (FAST-LIO2 / GLIM), Nav2 navigation and evo evaluation in Gazebo, ROS 2 Humble"
readmeQualityOk: true
url: "https://github.com/Leonhart999/slam-autonav-console"
language: "Python"
languages: ["Python", "Vue"]
languagePcts: [50, 32]
topics: ["fast-lio", "gazebo", "lidar", "nav2", "robotics", "ros2", "slam", "vue"]
stars: 36
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-11-05T19:36:17Z"
lastCommitAt: "2026-11-16T11:39:25Z"
lastReleaseAt: "2026-11-16T11:55:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 20
maintainers: ["Leonhart999"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c55220a76c4ab4d67f870f2416bdbc4f48f44aa062c1a278fc64c91f9b4c8e5/Leonhart999/slam-autonav-console"
---

# SLAM and AutoNav Console

English | [中文](https://github.com/Leonhart999/slam-autonav-console/blob/HEAD/README.zh-CN.md)

A browser console for LiDAR SLAM mapping, map management, Nav2 autonomous navigation and trajectory
evaluation, running on ROS 2 Humble with a Gazebo Fortress simulation. One workspace takes you from an empty
world or a recorded rosbag2 to a saved map, a navigation run and an evo report.

It was built for the bachelor thesis *LiDAR-Based SLAM Mapping and Autonomous Navigation for Mobile
Robots* (Harbin Engineering University). The interface supports Chinese and English, as well as light and
dark themes.

*Video tour (2:19, [watch on Bilibili](https://www.bilibili.com/video/BV1wm4v6GEQq) or [download the MP4](https://github.com/Leonhart999/slam-autonav-console/releases/download/v0.1.0/slam-autonav-console_tour.mp4), 49 MB): mapping the office world with FAST-LIO2, saving the map, a three-waypoint Nav2
mission in the warehouse, the monitor and evaluation pages. Captions in Chinese and English.*

## Features

| Page | What it does |
|---|---|
| **Mapping** | Start a world (office, warehouse, or your own uploaded SDF / ZIP), run FAST-LIO2 (with optional LiDAR-only…
