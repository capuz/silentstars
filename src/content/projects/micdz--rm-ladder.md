---
repo: "MicDZ/RM_LADDER"
name: "RM_LADDER"
description: "RoboMaster 天梯榜"
readmeQualityOk: true
url: "https://github.com/MicDZ/RM_LADDER"
homepage: "https://www.micdz.cn/RM_LADDER/"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [65, 35]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-17T03:56:18Z"
lastCommitAt: "2026-08-08T04:33:58Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 49
maintainers: ["github-actions[bot]", "MicDZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/6203d99ac4c6d098067a42df4a4b9758b104b2eb16ecd5c888b04ab919c2467b/MicDZ/RM_LADDER"
---

# RM Ladder — RoboMaster 天梯榜

RoboMaster 超级对抗赛数据可视化工具，单页应用，无需构建。

## 功能

### 天梯排行

按兵种（步兵/英雄/工程/无人机/哨兵/雷达/飞镖）展示各战队数据排名，支持赛区筛选和年度切换。

### 战队对比

多战队并排对比，雷达图 + 数据表格。

### 战队详情

三种排名趋势切换展示：

 
 

 |

### 其他特性

- **论坛报告** — 自动抓取 RoboMaster BBS 上匹配战队+兵种的开源技术报告
- **年度切换** — 支持 2024、2025、2026 三个赛季数据

## 运行

纯静态项目，任意 HTTP 服务器即可：

```bash
python3 -m http.server 8000
```

然后打开 `http://localhost:8000`。

## 项目结构

```
├── index.html                        # 单文件 SPA（HTML + CSS + JS）
├── static/
│   ├── robot_data_2026.json          # 2026 赛季数据
│   ├── robot_data_2025.json          # 2025 赛季数据
│   ├── game_data_2024.json           # 2024 赛季数据
│   ├── score_history.json            # 积分榜历史（2020-2025）
│   ├── assessment_history.json       # 完整形态考核历史（2021-2026）
│   ├── goldcoin_history.json         # 初始金币历史（2022-2026）
│   ├── forum_reports_2026.json       # BBS 论坛技术报告
│   └── college_logos.json            # 高校 Logo URL 映射
├── logo/                             # 本地 Logo 文件
├── scripts/
│   ├── build_score_history.py        # 构建积分榜历史数据
│   ├── build_assessment_history.py   # 构建完整形态考核历史数据
│   ├── build_goldcoin_history.py     # 构建初始金币历史数据
│   └── fetch_forum_reports.py        # 抓取 BBS 论坛技术报告
└──…
