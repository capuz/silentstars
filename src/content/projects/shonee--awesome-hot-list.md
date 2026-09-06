---
repo: "Shonee/awesome-hot-list"
name: "awesome-hot-list"
description: "记录新闻资讯热榜每小时更新，按天归档。"
readmeQualityOk: true
url: "https://github.com/Shonee/awesome-hot-list"
homepage: "https://shonee.github.io/awesome-hot-list/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [52, 48]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2024-10-27T13:23:49Z"
lastCommitAt: "2026-09-06T08:03:21Z"
lastReleaseAt: "2026-08-31T05:05:16Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 79
maintainers: ["github-actions[bot]", "Copilot", "Shonee"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e1fbe1475fb88da2d43a5a64586d471c79a0625e17c6efcb5843a8f4944bda6/Shonee/awesome-hot-list"
---

# awesome-hot-list

一个由 GitHub Actions 定时采集、以静态 JSON 和页面公开展示的热榜项目。仓库暂由个人维护，公开用于查看、浏览数据和 Fork，不运行常驻 API、数据库或任务服务。

源码和运行数据分离维护：`master` 保存代码，`data-pages` 保存最近 7 天 CSV 和完整 `site/`。`pages.yml` 从 `data-pages/site` 发布 GitHub Pages，无需 Node.js 或前端构建步骤。

## 页面与数据

`site/index.html` 包含三个视图：

- 今日报告：基于当天已有 CSV 时间片生成去重热点、词云、综合 Top 10、排名曲线和变化信号。
- 最新热榜：按本地配置展示渠道和渠道内多榜单，支持卡片、紧凑列表、渠道 Tabs、浅色/夜间主题。
- 历史报告：展示上一日完整报告，分析方法与今日一致。

主题、布局、单榜数量、渠道显隐和排序只保存在浏览器 `localStorage`，不会改动仓库配置。

## 渠道

| 渠道 | 榜单 | 默认采集 | 备注 |
| --- | --- | --- | --- |
| 哔哩哔哩 | 热门搜索、全站热门、视频排行 | 是 | 官方公开接口 |
| 抖音 | 热搜 | 是 | 公开接口可能调整 |
| 微博 | 热榜 | 是（1 小时） | 页面接口可能限制访问 |
| 知乎 | 热搜、热榜 | 特殊调度 | 需要 `ZHIHU_COOKIE`，默认 6 小时检查 |
| GitHub | 日/周/月趋势、语言榜 | 是（6 小时） | Trending 页面，Search API 兜底 |
| 掘金 | 热门文章 | 是 | 公开推荐接口 |
| 今日头条 | 热点榜 | 是 | 公开榜单接口 |
| RSS | 新闻/AI资讯 Feed | 是 | 默认 9 个公开源，每个源按时间取最多 5 条，可用 `HOTLIST_RSS_FEEDS` 覆盖 |
| AcFun | 日榜、三日榜、周榜 | 是 | 公开榜单接口 |
| IT之家 | 最新资讯 | 是 | RSS |
| 豆瓣 | 小组精选 | 是 | HTML 解析 |
| 虎扑 | 热榜 | 是 | 使用移动端服务端渲染数据，桌面入口可能被 WAF 拦截 |
| 36氪 | 热榜 | 是 | 公开榜单接口 |
| 同花顺 | 今日要闻 | 是 | HTML 解析，结构可能调整 |
| 脉脉 | 职场热议 | 特殊调度 | 需要 `MAIMAI_COOKIE`，默认 6 小时检查 |
| 雪球 | 热门话题 | 特殊调度 | 默认 6 小时检查，旧公开接口可能返回业务限制 |
| V2EX | 热门主题 | 是（3 小时） |…
