---
repo: "gudaoxuri/lottery_history"
name: "lottery_history"
description: "彩票历史数据收集器"
readmeQualityOk: true
url: "https://github.com/gudaoxuri/lottery_history"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 21
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-03-24T00:55:37Z"
lastCommitAt: "2026-08-30T00:42:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 58
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/bec7d1b90b4632ebcaf973c907bc60ed37d23b6282ea94eaff046390d9f255dd/gudaoxuri/lottery_history"
---

# 彩票历史数据收集器 (Lottery History)

_NOTE: 本项目主体代码由AI生成，人工修正及复核。_

这个项目用于自动抓取和维护中国福利彩票双色球和体育彩票超级大乐透的历史开奖数据。数据每天自动更新，保持最新状态。

## 项目特点

- 自动从官方网站抓取双色球和大乐透开奖数据
- 智能合并新旧数据，避免重复记录
- 支持按期号排序
- 数据以JSON格式存储，方便其他应用程序使用
- 使用GitHub Actions实现自动每日更新
- 基于历史数据的预测功能

## 数据格式

### 双色球数据

数据保存在 `data/ssq.json` 文件中，每条记录包含以下字段：

```json
{
  "issueNumber": "2023001",  // 期号
  "redBalls": [1, 7, 9, 16, 18, 29],  // 红球号码
  "blueBall": 7,  // 蓝球号码
  "drawDate": "2023-01-01"  // 开奖日期
}
```

### 大乐透数据

数据保存在 `data/dlt.json` 文件中，每条记录包含以下字段：

```json
{
  "issueNumber": "2023001",  // 期号
  "frontBalls": [1, 7, 9, 16, 18],  // 前区号码
  "backBalls": [7, 12],  // 后区号码
  "drawDate": "2023-01-01"  // 开奖日期
}
```

## 预测数据（beta）

程序会基于历史数据分析生成预测结果，保存在 `data/predict/` 目录下：

- `data/predict/ssq.txt` : 双色球预测数据
- `data/predict/dlt.txt` : 大乐透预测数据

每次预测会生成6组号码，每组号码基于历史数据频率分析和智能权重算法生成。预测结果包含时间戳，便于追踪预测效果。

## 如何使用

### 直接使用数据

您可以直接引用GitHub上的原始数据文件：

```
双色球数据：
https://raw.githubusercontent.com/gudaoxuri/lottery_history/main/data/ssq.json

大乐透数据：
https://raw.githubusercontent.com/gudaoxuri/lottery_history/main/data/dlt.json
```

### 本地运行

1. 克隆此仓库：

```bash
git clone https://github.com/gudaoxuri/lottery_history.git
cd…
