---
repo: "unnc-aim/aim-rookie-courses"
name: "aim-rookie-courses"
description: "Lectures designed for RM rookies & freshmen @ unnc-aim"
readmeQualityOk: true
url: "https://github.com/unnc-aim/aim-rookie-courses"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [80]
topics: ["cpp", "opencv", "python3", "ros2-humble", "ubuntu2204"]
stars: 20
forks: 7
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-08-27T18:25:03Z"
lastCommitAt: "2026-08-07T05:14:02Z"
status: "thriving"
tags: []
healthScore: 55
undervaluedScore: 23
maintainers: ["hnrobert"]
openGraphImageUrl: "https://opengraph.githubassets.com/968fbc449354b45a15c261821caa63ff7c2056764775a8b2ca928c66caf24639/unnc-aim/aim-rookie-courses"
discussionCount: 0
---

# RoboMaster 战队新成员培训课程

## 课程概述

本培训体系专为 RoboMaster 战队新成员设计，涵盖**算法/电控**和**机械**两大专业方向，旨在培养具备完整机器人开发能力的工程师。无论你选择哪个方向，都将获得扎实的理论基础和丰富的实践经验。

## 项目结构说明

本项目采用**路线/内容分离架构**，同时满足课程内容管理和学习路线指导的需求：

### `Contents/` - 课程内容库

存放所有教学资源和具体课程内容：

- `Python/` - Python 编程基础课程（3 节课）
- `Cpp/` - Cpp 编程基础课程
- `Linux/` - Linux 系统基础课程
- `OpenCV/` - 计算机视觉课程
- `ROS2/` - 机器人操作系统课程
- `Mechanic/` - 机械设计课程

### `Routes/` - 学习路线指南

按战队组别组织的个性化学习路径：

- `Computing/` - 算法/导航/控制方向学习路线
- `Computing/Algorithm` - 算法学习路线
- `Computing/Electronic` - 电控（嵌入式）学习路线
- `Mechanic/` - 机械方向学习路线

其中 `Computing/` 目录下的 `README.md` 文件会指导算法/导航/控制方向的同学需要共同学习的内容，依此类推

### 学习路线分支图

```mermaid
graph TD
    A[RoboMaster 战队培训] --> B[Computing 计算方向]
    A --> C[Mechanic 机械方向]
    B --> F[Algorithm 算法组]
    B --> G[Navigation 导航组]
    B --> E[Control 控制组]
    C --> D[Mechanic 机械组]
    
    C --> E

    F --> H[Aiming 自瞄系统]
    F --> I[Radar 雷达系统]
    G --> J[Behavior Tree 行为树]
    G --> K[Navigation 导航]
    E --> L[AIMEtherCat 以太猫]
    E --> M[STM32]
    D --> N[Inventor 画图]
    D --> O[Assembling 组装]
    
    
```

### 使用流程

1. **确定专业方向** → 进入对应的 `Routes/` 目录查看学习路线
2. **按路线学习** → 根据路线指导，进入 `Contents/` 目录学习具体课程
3. **专业深化** →…
