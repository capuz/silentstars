---
repo: "Mutx163/mikcb"
name: "mikcb"
description: "轻屿课表 — Android 课表应用，HyperOS 超级岛、教务导入、云同步"
readmeQualityOk: true
url: "https://github.com/Mutx163/mikcb"
homepage: "https://mutx.ccwu.cc"
language: "Dart"
languages: ["Dart"]
languagePcts: [90]
topics: ["android", "dart", "flutter", "hyperos", "kotlin", "timetable", "education", "live-activities", "open-source", "university"]
stars: 32
forks: 4
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-21T07:35:19Z"
lastCommitAt: "2026-08-14T05:15:23Z"
lastReleaseAt: "2026-03-22T16:14:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 44
maintainers: ["Mutx163"]
openGraphImageUrl: "https://opengraph.githubassets.com/907a2e416da6c363febd79f45ae06708573e9f2725d72dceea27868be5062bf6/Mutx163/mikcb"
discussionCount: 1
---

# 轻屿课表

一个面向校园场景的 Android 课表应用。

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
- 多课表独立保存、快速切换，通知与超级岛跟随当前课表
- 课程增删改查，支持课程简称、颜色、单双周、备注等信息
- 时间模板系统，可按学校作息自定义节次时间
- 上课前、课中、下课前提醒分阶段配置
- HyperOS / 小米超级岛、通知栏、焦点通知联动
- 今日桌面小组件与课程快照同步
- 教务系统网页登录导入、`.ics` 导入、完整备份导出、恢复为当前课表或新课表
- 关于页读取 GitHub Releases，支持应用内更新检测

## 教务导入与适配

- 当前应用已经支持一部分学校的教务系统网页登录导入，适配脚本来自 `qingyu_warehouse`
- 如果你的学校暂时还没有适配，仍然可以先走 `.ics` 导入或完整备份迁移
- 教务适配仓库：<https://github.com/Mutx163/qingyu_warehouse>
- 如果你会网页调试、抓包、JavaScript 或愿意维护自己学校的教务系统，欢迎直接参与适配补充

## 为什么做这个

很多课表应用解决的是“录入课程”和“查看课程”，但真正高频的使用场景是：

- 还有多久上课
- 现在这节课上到哪了
- 下一节在哪
- 不打开应用能不能就看到

轻屿课表主要在解决这类问题，尤其把提醒链路做得更细，把系统通知体验和课表本身连起来。

## 下载与更新

- 发布页：<https://github.com/Mutx163/mikcb/releases>
- 正式包当前以 `arm64-v8a` 为主
- 应用内可读取 GitHub Releases，显示版本号、更新时间和下载入口
- 发行流程见…
