---
repo: "iit-DLSLab/unitree-ros2-dls"
name: "unitree-ros2-dls"
description: "A wrapper over unitree_ros2 repository, that adds a new script for comunicating with DLS controllers"
readmeQualityOk: true
url: "https://github.com/iit-DLSLab/unitree-ros2-dls"
language: "C++"
languages: ["C++"]
languagePcts: [70]
topics: ["ros2", "sdk", "unitree"]
stars: 12
forks: 4
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 6
recentReleases: 1
createdAt: "2025-12-10T08:29:56Z"
lastCommitAt: "2026-10-11T10:15:15Z"
lastReleaseAt: "2026-09-01T08:53:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 47
maintainers: ["giulioturrisi"]
openGraphImageUrl: "https://opengraph.githubassets.com/4750b512354c89d85bddf66796e7bb0b508d98363b62fadd9eef8c7dd9063a7a/iit-DLSLab/unitree-ros2-dls"
---

## Overwiew
This repo connects to many unitree robots using ros2. It uses: 

- [unitree_ros2](https://github.com/unitreerobotics/unitree_ros2) for controlling **GO2**, **A2**, **B2**
- [unitree_legged_sdk](https://github.com/unitreerobotics/unitree_legged_sdk) for **Aliengo**
- [z1_sdk](https://github.com/iit-DLSLab/z1_sdk)/[z1_controller](https://github.com/unitreerobotics/z1_controller) for the **Z1** arm. 

We add on top of these some [messages](https://github.com/iit-DLSLab/unitree-ros2-dls/blob/HEAD/ros2_ws/src/dls2_interface/msg/) to be compatible with different **dls repositories**, like: 

- [basic-locomotion-isaaclab](https://github.com/iit-DLSLab/basic-locomotion-isaaclab) for RL locomotion
- [get-up-isaaclab](https://github.com/iit-DLSLab/get-up-isaaclab) for RL get-up task
- [sim2real-robot-identification](https://github.com/iit-DLSLab/sim2real-robot-identification) for IsaacLab and Mujoco identification
- [Quadruped-PyMPC](https://github.com/iit-DLSLab/Quadruped-PyMPC) for MPC
- [muse](https://github.com/iit-DLSLab/muse/tree/unitree_sdk) for State Estimation

and many others.. Check our github!

## Dependencies

**Note that if you are using one of our other repos with…
