---
repo: "PurdueRM/auto-aiming"
name: "auto-aiming"
description: "Revitalized auto-aiming suite for 2024-2025"
readmeQualityOk: true
url: "https://github.com/PurdueRM/auto-aiming"
language: "C++"
languages: ["C++", "C"]
languagePcts: [50, 23]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2024-12-16T17:41:43Z"
lastCommitAt: "2024-12-16T17:41:43Z"
status: "archived"
tags: []
healthScore: 46
undervaluedScore: 35
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b18f1d2962393241acc734a3adf43af824b5f0344f6de16e891b8fa485f33b6c/PurdueRM/auto-aiming"
---

# auto-aiming
Revitalized auto-aiming suite for Purdue RoboMaster Club 2024-2025.

## Install/Setup Instructions
This repository is designed to run on an NVIDIA Jetson Orin platform

Install ros2

Make sure you source your ros2 environment
```
source /opt/ros/humble/setup.bash
```
Install the `camera_info_manager` package
```
sudo apt install ros-humble-camera-info-manager
```
Install the Mindvision Hikrobot SDK
```
cd ./autoaiming/src/prm_camera/mv_publisher/sdk
sudo ./install.sh
```

## Usage  
Clone this repository into your `ros2-ws` directory. We provide a `run` script that can be used to build, run, test, and clean the workspace with no hassle. The script supports the following functionalities:

- **Building**
  - `./auto-aiming/run build`
- **Run ROS2 code**
  - `./auto-aiming/run run <launch_file>`
    - "launch files" are how you start up the pipeline. For example you may use `video2detector.py` to run the auto-aiming pipeline with a video file, or `mv2control.py` to run using a real camera and send results to the STM32 control board.
- **Run automated tests (GTest)**
  - `./auto-aiming/run test`
- **Clean the workspace (remove build and install folders)**
  -…
