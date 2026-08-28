---
repo: "fireinrain/github-trending"
name: "github-trending"
description: "Fetch github trending every day and push to telegram channel"
readmeQualityOk: true
url: "https://github.com/fireinrain/github-trending"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [68, 32]
stars: 21
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-02-29T15:11:48Z"
lastCommitAt: "2026-08-28T15:32:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 58
maintainers: ["fireinrain"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8f7caac5aca632d9d4b874b9fd91e599f6b3fb26707e0cefe99367e0b6dd2d1/fireinrain/github-trending"
---

# GitHub Trending

使用 [GitHub Actions](https://docs.github.com/cn/actions) 跟踪 [GitHub 趋势项目](https://github.com/trending)。

具体教程可以 [参考这里](https://github.com/aneasystone/weekly-practice/blob/main/notes/week018-tracking-github-trending/README.md)。

项目灵感来自 [bonfy/github-trending](https://github.com/bonfy/github-trending)。

关注 Github Trending 频道 谢谢喵！
[Github Trending](https://t.me/ghtrendings)

## 效果图

📊 固定统计页: [📊 GitHub Trending 数据统计](https://telegra.ph/GitHub-Trending-数据统计-08-28)
> 语言分布 · 各语言 ⭐Star/🔥上榜次数 Top 榜 · 每日自动更新  
> 最近数据更新: **2026-08-28**

## 功能
- 每日定时抓取多语言 GitHub Trending 榜单（All/Java/Python/Go/Javascript/Typescript/C/C++/C#/Rust/Html）
- 新上榜仓库实时推送到 Telegram 频道，附带 watch/fork/star 统计数据
- SQLite 数据库存档所有上榜记录（上榜次数、仓库统计、失效标记）
- 推送去重判断，防止 Telegram 消息重复推送
- 每日推送结束消息 + 随机祝福语
- 周末（周六、周日）自动汇总本周上榜仓库，生成 telegra.ph 媒体周报并推送频道；文章地址存入数据库，并附在当日的推送结束问候语中
- 每天更新一次固定的 telegra.ph 数据统计页（语言分布 + 各语言 Star/上榜次数 Top 榜，受 telegra.ph 64KB 限制自动缩减数量），页面原地刷新并展示数据更新日期；统计页地址自动回写到本 README（见下方「📊 固定统计页」区块）

## 环境变量

通过 GitHub Secrets（或本地环境变量）配置：

| 变量 | 说明 | 必填 |
| --- | --- | --- |
| `TG_CHAT_ID` | Telegram 频道/聊天 ID | 是 |
| `TG_BOT_TOKEN` | Telegram Bot Token | 是 |
| `GH_TOKEN` | GitHub Token（提升 API 限额） | 否 |…
