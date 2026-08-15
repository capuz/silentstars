---
repo: "LemperorD/guganav"
name: "guganav"
description: ":penguin:北航Transistor战队27赛季哨兵工作空间"
readmeQualityOk: true
url: "https://github.com/LemperorD/guganav"
language: "C++"
languages: ["C++"]
languagePcts: [76]
topics: ["navigation", "robotics-programming", "slam", "robomaster"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-24T19:36:12Z"
lastCommitAt: "2026-08-15T04:02:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["TFHGN", "LemperorD", "YZJ-yiguanyi"]
openGraphImageUrl: "https://opengraph.githubassets.com/464a2494f4e024156dc8a0c54cb395f5ca0358b76ef83f5212a268f7c41d1f6b/LemperorD/guganav"
---

# 北航Transistor战队27赛季哨兵工作空间🐧
## 🐧GUGANAV🐧

北航 Transistor 战队 RoboMaster 27 赛季哨兵机器人导航工作空间。项目基于ROS 2 Humble实现。

致力于打造🐧咕咕嘎嘎🐧也能学会的导航代码仓库！

</p>

## 目录

- [北航Transistor战队27赛季哨兵工作空间🐧](#北航transistor战队27赛季哨兵工作空间)
  - [🐧GUGANAV🐧](#guganav)
  - [目录](#目录)
  - [项目特性](#项目特性)
  - [仓库结构](#仓库结构)
  - [环境要求](#环境要求)
  - [安装依赖](#安装依赖)
    - [海康 MVS SDK](#海康-mvs-sdk)
    - [公开依赖与工具](#公开依赖与工具)
    - [准备仿真 PCD 地图](#准备仿真-pcd-地图)
  - [构建](#构建)
  - [使用方法](#使用方法)
    - [仿真导航](#仿真导航)
    - [仿真建图](#仿真建图)
    - [实车导航](#实车导航)
    - [实车建图](#实车建图)
    - [导航与决策联调](#导航与决策联调)
    - [保存地图](#保存地图)
  - [测试与检查](#测试与检查)
  - [开发规范](#开发规范)
  - [常见问题](#常见问题)
  - [致谢](#致谢)
  - [贡献](#贡献)
  - [许可证](#许可证)

## 项目特性

- 基于 Navigation2 的实车和仿真导航启动体系。
- 支持 SLAM、地图加载、Point-LIO 里程计和 small_gicp 重定位。
- 包含 JPS 全局规划、B-spline 轨迹优化和 Nav2 自定义插件。
- 提供全向 PID Pure Pursuit 控制器和 acados MPC 控制器。
- 集成 Livox 雷达、串口通信、手柄调试和工业相机接口。
- 提供 Gazebo/RMOSS 仿真资源、点云适配工具和 RViz 配置。
- 配置 pre-commit 与核心包测试，覆盖地形分析、控制、决策和 JPS 模块。

## 仓库结构

```text
guganav/
├── src/
│   ├── guga_bringup/        # 实车/仿真 launch、Nav2 参数、地图、RViz 配置
│   ├── guga_interfaces/     # 自定义 msg/srv/action
│   ├── guga_description/    # 机器人 URDF/Xacro/SDF 相关描述
│   ├── guga_driver/         #…
