---
repo: "icekale/vpush"
name: "vpush"
description: "自托管社交大V动态聚合订阅：雪球/微博/X 新帖与组合调仓，实时推送到 Telegram/飞书/企业微信。Docker 一键部署。"
readmeQualityOk: true
url: "https://github.com/icekale/vpush"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["docker", "feishu", "self-hosted", "subscription", "telegram-bot", "twitter", "wechat-miniprogram", "weibo", "xueqiu"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-05T06:26:37Z"
lastCommitAt: "2026-08-30T09:25:10Z"
lastReleaseAt: "2026-08-12T01:37:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["icekale"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c00ac9abaef9ecc9048906e58ae1f8f43738a7f150622cfaa18447531968348/icekale/vpush"
---

# V Push

自托管的社交大V动态聚合订阅系统：抓取 **雪球 / 微博 / X(Twitter)** 大V公开动态（含雪球组合调仓），新帖实时推送到 **Telegram / 飞书 / 企业微信**。支持多用户注册，每个用户自选订阅的大V与推送渠道，管理员在网页后台统一管理。

</div>

> 仅抓取公开可见的动态，不含任何平台会员/付费内容；自托管无订阅名额与推送次数限制。

## 产品截图

| | |
| --- | --- |
| <img src="docs/screenshots/home.png" width="420"><br>订阅广场 · 平台筛选与分类目录 | <img src="docs/screenshots/settings.png" width="420"><br>推送设置 · 多渠道状态与通道选择 |
| <img src="docs/screenshots/mysubs.png" width="420"><br>我的订阅 · 帖子/回复分订 | <img src="docs/screenshots/combinations.png" width="420"><br>组合订阅 · 雪球模拟仓调仓 |
| <img src="docs/screenshots/login.png" width="420"><br>登录注册 · 注册码邀请 | <img src="docs/screenshots/admin-stats.png" width="420"><br>管理后台 · 数据源与抓取状态 |

</div>

## 功能

- **多源聚合**：雪球帖子/回复、雪球组合调仓、微博、X、**ima 知识库**，自动去重、按发布时间顺序推送；带图动态文字+图片同卡送达（TG 相册 / 飞书卡片插图）；组合详情页提供实时净值/今日涨跌、当前持仓（权重条）与净值曲线（调仓卡自动附当日涨跌）
- **多用户**：注册码注册，用户自助订阅/退订，各自独立的动态流与推送
- **多通道推送**：Telegram（官方共享机器人或用户自建机器人）、飞书私聊/群、企业微信群机器人、Bark（iOS 自托管通知）、浏览器通知（Chrome / Edge Web Push，关掉标签页也能弹）；绑定多个渠道时可自选接收通道
- **关键词提醒**：设置关键词后，命中关键词的动态带 🔑 标记、并在免打扰时段实时穿透推送（适合只关心某个大V聊的特定话题）
- **特别关注**：把订阅的大V标星 ⭐，推送消息带星标标识、每日精选置顶；可在免打扰时段内选择「特别关注穿透」实时提醒
- **午夜免打扰**：设置免打扰时段（支持跨午夜），时段内不打扰，结束后一次性补一条汇总，不错过任何动态（可选配置 OpenAI 兼容 LLM 后，汇总自动生成…
