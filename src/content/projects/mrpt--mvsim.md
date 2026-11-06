---
repo: "MRPT/mvsim"
name: "mvsim"
description: "Vehicle and mobile robotics simulator. C++ & Python API. Use it as a standalone application or via ROS 1 or ROS 2"
readmeQualityOk: true
url: "https://github.com/MRPT/mvsim"
homepage: "https://mvsimulator.readthedocs.io/"
language: "C++"
languages: ["C++"]
languagePcts: [86]
topics: ["vehicle-dynamics", "sensors", "ros-node", "ros", "robots", "ros2", "gazebo", "mrpt", "robotics", "simulation"]
stars: 421
forks: 64
openIssues: 3
closedIssues: 34
watchers: 8
contributors: 12
recentReleases: 1
createdAt: "2014-08-10T00:24:05Z"
lastCommitAt: "2026-11-06T13:19:59Z"
lastReleaseAt: "2026-11-01T16:00:26Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 97
undervaluedScore: 40
maintainers: ["jlblancoc"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/22798093/4924327f-80c1-4542-81eb-514f51befc37"
discussionCount: 0
---

# MultiVehicle Simulator (MVSim)

**Lightweight, realistic 2.5D dynamics simulator for mobile robots and multi-agent research**

[**Documentation**](https://mvsimulator.readthedocs.io) · [**Installation**](https://mvsimulator.readthedocs.io/en/latest/install.html) · [**Demo worlds**](https://mvsimulator.readthedocs.io/en/latest/demo_worlds.html) · [**Cite**](#citation)

---

## Overview

MVSim simulates wheeled robots and vehicles with realistic physics, sensors, and multi-agent support. It is designed to be **fast enough for large-scale experiments** while remaining **accurate enough for dynamics and sensor research**.

Key properties:
- Fully configured via **XML world files** — no code changes needed for most experiments.
- Works **standalone**, as a **ROS 2 node**, or embedded in a **C++ / Python** application.
- **Headless mode** for CI pipelines and Docker containers.
- Multi-vehicle worlds with mutual sensing (robots see each other in LiDAR).

https://github.com/user-attachments/assets/766db164-2d16-44f4-acbf-2f15b73c1ab3

https://github.com/user-attachments/assets/93c95aeb-71e9-4c35-b1dc-ba895c79daf7

---

## Features

### Vehicle dynamics
| Model | Description |
|---|---|…
