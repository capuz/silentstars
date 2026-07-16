---
repo: "zhan994/uav_sim_planner_px4"
name: "uav_sim_planner_px4"
description: "A repo. which used to check PnC algorithms using PX4-Gazebo simulation tools."
readmeQualityOk: true
url: "https://github.com/zhan994/uav_sim_planner_px4"
language: "C++"
languages: ["C++", "C"]
languagePcts: [59, 20]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-26T11:54:43Z"
lastCommitAt: "2026-07-16T05:59:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 30
maintainers: ["zhan994"]
openGraphImageUrl: "https://opengraph.githubassets.com/b55b8844c1bb500c764df98126487a881432cd3e168d96996472343983b166d8/zhan994/uav_sim_planner_px4"
---

# uav_sim_planner_px4

**A repo. which used to check PnC algorithms using PX4-Gazebo simulation tools.**

**Supported Platform**

- ROS-Noetic

**PnC algorithms**

- Fast-Planner
- EGO-Planner-V2

## Third-party

- [px4_firmware](https://docs.px4.io/main/en/ros/mavros_installation.html)
- QGC
- nlopt

## Build

[BaiduNetDisk](https://pan.baidu.com/s/16_ZIItK_E36Lj_5PIMS4zg?pwd=tz48) for specific `px4_firmware` and `XTDrone`. You can add sth. from [`XTDrone`](https://gitee.com/robin_shaun/XTDrone.git) into `px4_firmware`.

```bash
git clone https://gitee.com/robin_shaun/XTDrone.git # Or using XTDrone from BaiduNetDisk
cd XTDrone
git checkout 1_13_2
git submodule update --init --recursive

# 修改启动脚本文件
cp sitl_config/init.d-posix/* <path-to-px4_firmware>/ROMFS/px4fmu_common/init.d-posix/

# 添加launch文件
cp -r sitl_config/launch/* <path-to-px4_firmware>/launch/

# 添加世界文件
cp sitl_config/worlds/* <path-to-px4_firmware>/Tools/sitl_gazebo/worlds/

# 修改部分插件
cp sitl_config/gazebo_plugin/gimbal_controller/gazebo_gimbal_controller_plugin.cpp <path-to-px4_firmware>/Tools/sitl_gazebo/src
cp sitl_config/gazebo_plugin/gimbal_controller/gazebo_gimbal_controller_plugin.hh…
