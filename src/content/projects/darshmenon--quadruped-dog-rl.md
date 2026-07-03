---
repo: "darshmenon/quadruped-dog-rl"
name: "quadruped-dog-rl"
description: "Unitree Go2 quadruped robot dog — RL locomotion training (MuJoCo + Gazebo Harmonic), ROS2 CHAMP walking controller, PPO policy, keyboard teleop, and multi-terrain simulation"
url: "https://github.com/darshmenon/quadruped-dog-rl"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [58, 36]
topics: ["champ", "ppo", "quadruped-robots", "quadruped-simulation", "reinforcement-learning", "ros2", "unitree-go2", "legged-robots", "deep-reinforcement-learning", "gazebo"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-22T08:10:29Z"
lastCommitAt: "2026-07-03T12:22:54Z"
status: "thriving"
tags: []
healthScore: 73
undervaluedScore: 35
maintainers: ["darshmenon", "Darshmenon08"]
openGraphImageUrl: "https://opengraph.githubassets.com/78f15c461f8fe75a2648d1de28668a338272467fd54d84dc4eff1d244f5e00c1/darshmenon/quadruped-dog-rl"
---

# quadruped-dog-rl

Quadruped robot dog simulation, walking control, and reinforcement learning policy training workspace.

Supports: Unitree Go2, Boston Dynamics Spot, MIT Mini Cheetah, ANYmal B/C, Mini Pupper.

---

## Table of Contents
- [Repository Structure](#repository-structure)
- [System Requirements](#system-requirements)
- [Build ROS2 Packages](#build-ros2-packages)
- [Quick Start](#quick-start)
- [RL Policy Training](#rl-policy-training)
- [Intelligence Modules](#intelligence-modules)

---

## Repository Structure

```
quadruped-dog-rl/
├── urdf/                    # Robot URDF and mesh files
│   ├── go1_config/          # Unitree Go1
│   ├── go2_unitree/         # Unitree Go2 (with DAE meshes)
│   ├── spot_config/         # Boston Dynamics Spot
│   ├── mini_cheetah_config/ # MIT Mini Cheetah
│   ├── mini_pupper_config/  # Mini Pupper
│   ├── anymal_b_config/     # ANYmal B (ETH Zurich)
│   └── anymal_c_config/     # ANYmal C (ETH Zurich)
├── ros2/                    # ROS2 packages (CHAMP framework, ros2 branch)
│   ├── champ/               # Core locomotion controller
│   ├── champ_base/          # Hardware abstraction layer
│   ├── champ_bringup/       # Launch files…
