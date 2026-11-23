---
repo: "YeatsWang/xmobot"
name: "xmobot"
description: "Xmobot is a flexible and modular mobile robot platform designed for SLAM, path planning, and end-to-end navigation benchmarking across diverse drive types, including differential, Ackermann, Mecanum (omnidirectional drives), and four-wheel independent steering with independent driving."
readmeQualityOk: true
url: "https://github.com/YeatsWang/xmobot"
language: "CMake"
languages: ["CMake"]
languagePcts: [100]
stars: 14
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-26T07:06:08Z"
lastCommitAt: "2026-11-23T12:21:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["YeatsWang"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/973061434/a4c3728f-a312-4b3e-b865-991731750e73"
---

# Xmobot
Xmobot is a flexible, modular mobile robot platform for SLAM, path planning, and navigation research benchmarking across diverse drive types, including differential, Ackermann, Mecanum (omnidirectional drives), and four-wheel independent steering with driving (4WISD).

## Interactive demo and URDF export

[Open xmobot_viz](https://yeatswang.github.io/xmobot_viz/) to change chassis dimensions, wheel size and arm placement, then download the configured URDF directly from your browser.

Compare the same motion side by side: [differential pivot](https://yeatswang.github.io/xmobot_viz/#pivot), [Mecanum slide](https://yeatswang.github.io/xmobot_viz/#lateral), or [Ackermann turn](https://yeatswang.github.io/xmobot_viz/#ackermann).

[Watch the narrated film](https://yeatswang.github.io/xmobot_viz/#film) · [Download MP4](https://yeatswang.github.io/xmobot_viz/Xmobot.mp4) · [Visualizer source](https://github.com/YeatsWang/xmobot_viz)

---

## Features
- Support for ROS1 Noetic
- Modular robot design (X-Shape 4-wheel configuration)
- Parameterized robot size and drive mode
- Equipped with Laser Lidar and Front Camera
- Gazebo simulation ready
- Easy to extend to other mobile bases
