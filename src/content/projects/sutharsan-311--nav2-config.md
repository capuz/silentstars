---
repo: "sutharsan-311/nav2_config"
name: "nav2_config"
description: "Real time Nav2 parameter tuning GUI for ROS2, no kill or relaunch needed"
readmeQualityOk: true
url: "https://github.com/sutharsan-311/nav2_config"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["autonomous-mobile-robot", "nav2", "parameter-tuning", "pyqt6", "robot-navigation", "robotics", "ros2", "ros2-humble"]
stars: 58
forks: 10
openIssues: 3
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2026-03-29T17:42:52Z"
lastCommitAt: "2026-07-14T05:53:43Z"
lastReleaseAt: "2026-06-13T18:34:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 25
maintainers: ["sutharsan-311"]
openGraphImageUrl: "https://opengraph.githubassets.com/e14372e1ccc0b5ab71284abf39f687149fff074eab634a3526be0c90de181bfc/sutharsan-311/nav2_config"
---

# nav2_config

> Real-time Nav2 tuning — no restart needed

Tune your robot's navigation parameters **while it's running** — without killing and relaunching nodes. nav2_config connects to your live Nav2 stack and gives you a visual editor for every navigation parameter. Change `max_vel_x` and watch your robot speed up. Adjust `inflation_radius` and see the costmap respond. No more edit–kill–relaunch–wait–test cycles.

## Why this matters

Nav2 tuning without this tool looks like:
- Edit YAML
- Kill the stack
- Wait for bringup
- Test
- Repeat

nav2_config cuts that loop. Change a param, see the effect, adjust again — all on a running robot.

## Screenshot

## Demo

> Click to watch — real-time parameter tuning on a running Nav2 stack

## Features

**Core**
- **Real-time parameter tuning** — change a parameter via `ros2 param set`, the effect is immediate on the running robot
- **Auto-discovery** — continuously polls for running Nav2 nodes via ROS2 node graph
- **Works with ANY Nav2 plugin** — reads live parameters directly, not just hardcoded schema entries
- **560 parameters** across 18 Nav2 nodes — every one with a description and tuning advice; 325 also carry numeric ranges
-…
