---
repo: "AMag1c/astrbot_plugin_dailyhub"
name: "astrbot_plugin_dailyhub"
description: "一个AstrBot插件，聚合每日资讯与各平台热榜"
url: "https://github.com/AMag1c/astrbot_plugin_dailyhub"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-01T16:27:33Z"
lastCommitAt: "2026-06-27T06:23:07Z"
lastReleaseAt: "2026-06-11T10:28:25Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 30
maintainers: ["AMag1c"]
openGraphImageUrl: "https://opengraph.githubassets.com/40348336b891b38b1e5be16eaa9cb21cfe4bbc358da9c5069653b4cb54210a97/AMag1c/astrbot_plugin_dailyhub"
---

# astrbot_plugin_dailyhub · 每日资讯推送

> 一个 [AstrBot](https://github.com/AstrBotDevs/AstrBot) 插件，聚合每日资讯与各平台热榜：
> **60秒读懂世界 / AI 日报 / Epic 免费游戏 / 实时 IT 资讯 / IT 之家热榜 / 黄金价格 / 抖音 / 小红书 / 哔哩哔哩 / 微博**。
> 支持「指令手动获取」+「按源订阅定时推送」，每个源的图片/文字输出与推送频率均可独立配置。

## ✨ 功能

- **12 个数据源**：60s 系列（新闻/热榜/金价等）来自 [60s API](https://github.com/vikiboss/60s)；AI 日报走 RSS（[橘鸦 AI 日报](https://imjuya.github.io/juya-ai-daily/)）+ 可选 LLM 总结；**今日番剧**来自 [Bangumi 番组计划](https://bgm.tv)官方 API；**即将发售游戏**来自 [RAWG](https://rawg.io)（需免费 API Key）。
- **手动获取**：`/新闻`、`/微博`、`/epic` 等顶层指令，结果回显当前会话。
- **按源订阅 + 定时推送**：每个源在配置里是一张独立卡片，可订阅「全部」或「单个源」，推送频率独立可配，也可设为「只获取不推送」；并支持「一键把某会话加入/移出所有源」。
- **每源输出形式**：图片 / 文字 / 图文 三选一（文字带原文链接）。AI 日报默认推「标题 + 日报链接」，可选附 LLM 总结。
- **链接转短链（可选）**：接入自建 [Shlink](https://shlink.io/) 服务，把热榜长链转成短链（按源开关、只对前 N 条生效）。
- **AI 函数调用**：注册了 LLM 工具，用户与 AI 对话时（如「看看微博热搜」「今天金价」）AI 可自动调用并发送对应资讯卡片（图/文/图文按该源配置）。
- **出图失败兜底**：在线 `html_render` 出图，渲染服务故障/超时时自动回退纯文字，不影响内容送达。
- **多源容错**：60s 主源失败自动回退备用源，应对公共服务迁移。

## 📋 数据源与获取指令

> 指令大小写敏感；下表括号内为别名，与主指令等价。

| 源 | 获取指令（别名） | 来源 | 默认推送频率 |
|---|---|---|---|
| 📰 60秒读懂世界 | `/新闻`（60s、news、每日新闻） | `/v2/60s` | 每天 `daily_push_time`（默认 09:00） |
| 🤖 AI 日报 | `/ai`（AI、ai日报、AI日报、ainews、ai资讯、AI资讯）…
