---
repo: "inkccc/Rc2026"
name: "Rc2026"
description: "ROBOCON2026深圳职业技术大学IISE战队R2上位机"
readmeQualityOk: true
url: "https://github.com/inkccc/Rc2026"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-25T05:24:33Z"
lastCommitAt: "2026-08-04T06:12:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 47
maintainers: ["inkccc", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/bda6453450d03bda4ca3551770d599fb483ba5fbb7cd37d1b05cef7e36d6c411/inkccc/Rc2026"
---

# 🤖 Rc2026 — R2 全自动机器人

> 🎓 深圳职业技术大学 SZPU IISE 战队 · 2026 Robocon "武林探秘"

## 🏆 获奖

</div>
---

## ✨ 项目简介

R2 是一台面向 2026 Robocon "崇武探幽"赛题的**全自动机器人**，需要在无人操控下完成：

- 🥋 **挑战赛 1**：武馆夹取 KFS → 梅林搜集 KFS → 安全撤离
- 🏔️ **挑战赛 2**：上坡进入对抗区 → 九宫格放置 KFS → 双机合体登顶 → 物理防守
- 🏆 **竞技赛**：三区串联（武馆 → 梅林 → 对抗区），4 分钟内完成全流程

---

## 📦 功能模块

> ~~删除线~~ 表示非本人编写。

### 🔧 驱动层

| 模块 | 简介 | 详细说明 |
|------|------|---------|
| `vehicle_driver` | 整车串口桥接 | 自定义 50Hz TX + 100Hz RX 双工协议，统一驱动底盘麦轮、升降机构、4DOF 机械臂（含逆运动学）、吸盘气泵、武器头舵机 |
| ~~`odin_ros_driver`~~ | Odin1 LiDAR 驱动 | C++ 封装 SDK，发布点云、高频里程计、RGB 图像三路数据 |

### 👁️ 感知层

| 模块 | 简介 | 详细说明 |
|------|------|---------|
| `kfs6d_detect` | KFS 6D 位姿估计 | D435i + Odin1 双相机管线，HSV 分割 → 深度分层 → RANSAC → PnP，多帧融合后检测成功率 92% |
| `kfs_tracker` | KFS 追踪记忆层 | 维护 12 台阶 KFS 状态数组，多帧确认 + 类型投票消除误检，2D→3D 台阶投影供规划使用 |
| `zone_detection` | 区域 LiDAR 定位 | 点云直方图地面检测 + PCA 方向估计，定位梅林前立面与九宫格中心，误差 < 5cm |

### 🎮 动作层

| 模块 | 简介 | 详细说明 |
|------|------|---------|
| `merlin_planning` | 梅林 BFS 路径规划 | BFS 搜索 12 台阶最优采集路径，局部视野决策，规划时间 < 50ms |
| `merlin_stairs` | 台阶越障 | ToF 闭环检测 → 光电触发 → 升降联动底盘，12 级连续跨越成功率 > 95%，误差 < 2cm |
| `arm_control` | 双臂状态机 | 左/右臂独立状态机（stow/ready/pick/place），IK 联动，拾放成功率 > 90% |
|…
