---
repo: "Mutx163/mikcb"
name: "mikcb"
description: "轻屿课表 — Android 课表应用，HyperOS 超级岛、教务导入、云同步"
readmeQualityOk: true
url: "https://github.com/Mutx163/mikcb"
homepage: "https://163366.xyz"
language: "Dart"
languages: ["Dart"]
languagePcts: [89]
topics: ["android", "dart", "flutter", "hyperos", "kotlin", "timetable", "education", "live-activities", "open-source", "university"]
stars: 41
forks: 4
openIssues: 0
closedIssues: 12
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-21T07:35:19Z"
lastCommitAt: "2026-09-06T08:03:29Z"
lastReleaseAt: "2026-03-22T16:14:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 42
maintainers: ["Mutx163", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a677c55534e717a0d46b7872192e6610e068fa171206822bd2cfaa648888f292/Mutx163/mikcb"
discussionCount: 1
---

# 轻屿课表

一个面向校园场景的 Android 课表应用。

🌐 官网：<https://163366.xyz> · [下载最新版本](https://github.com/Mutx163/mikcb/releases)

轻屿课表的重点不是单纯展示课程，而是把课表、提醒、通知、小组件和 HyperOS 超级岛串成一条完整链路。它关注的是“接下来要上什么课、现在这节课进行到哪、能不能不打开应用就知道状态”。

## 命名说明

| 名称 | 说明 |
|------|------|
| 仓库 `mikcb` | GitHub 仓库名 |
| Dart 包 `university_timetable` | 历史包名（pubspec），与仓库名不同 |
| Android 包名 `com.mutx163.qingyu` | 应用 ID |
| 产品名「轻屿课表」 | 用户可见名称 |

## 项目定位

- 面向 Android 维护，重点适配小米 / HyperOS 设备
- 适合希望把课程提醒接进系统通知体验的学生用户
- 支持一人维护多套课表，适合不同学期、身份或课程方案并行管理
- 支持教务系统网页登录导入、`.ics` 导入、完整备份导出与恢复

## 核心能力

- 周视图课表，支持左右滑动切周和一键回本周
- 日课表视图，与周视图并列切换，聚焦当天安排
- 多课表独立保存、快速切换，通知与超级岛跟随当前课表
- 课程增删改查，支持课程简称、颜色、单双周、备注等信息
- 时间模板系统，可按学校作息自定义节次时间
- 上课前、课中、下课前提醒分阶段配置
- 上课闹钟：基于系统时钟应用，按真实课表批量添加（适合早八）
- HyperOS / 小米超级岛、通知栏、焦点通知联动
- 今日桌面小组件与课程快照同步，另有课程统计 2×2 / 2×4 小组件
- 应用形态可选：经典界面 / 玻璃坞（液态玻璃底部导航）
- 自定义壁纸与液态玻璃质感，课程卡片支持真折射玻璃样式
- 课程统计：学期/周双视图、趋势、热力图、教师与教室排行、成就与多课表对比
- 二维码面对面传输（喷泉码多帧，无需网络）
- 教务系统网页登录导入、`.ics` 导入与导出、完整备份导出、恢复为当前课表或新课表
- 界面支持简体中文、繁体中文（台湾 / 香港）、英文、日文、韩文
- 关于页读取 GitHub Releases，支持应用内更新检测

## 教务导入与适配

- 当前应用已经支持一部分学校的教务系统网页登录导入，适配脚本来自 `qingyu_warehouse`
- 如果你的学校暂时还没有适配，仍然可以先走 `.ics` 导入或完整备份迁移
- 教务适配仓库：<https://github.com/Mutx163/qingyu_warehouse>
-…
