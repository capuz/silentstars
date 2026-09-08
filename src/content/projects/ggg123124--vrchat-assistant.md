---
repo: "ggg123124/vrchat-assistant"
name: "vrchat-assistant"
description: "Self-hosted VRChat friend activity monitor - real-time WebSocket tracking of friends' online status, world changes, avatar updates. Full MCP toolset for AI agents (Hermes), auto OTP login, VRCX-0 data migration, weekly gaming reports."
readmeQualityOk: true
url: "https://github.com/ggg123124/vrchat-assistant"
language: "JavaScript"
languages: ["JavaScript", "Vue"]
languagePcts: [71, 20]
topics: ["friends", "hermes", "hermes-agent", "mcp", "monitoring", "otp", "sqlite", "vrchat", "websocket"]
stars: 21
forks: 10
openIssues: 1
closedIssues: 27
watchers: 0
contributors: 13
recentReleases: 10
createdAt: "2026-08-07T04:13:54Z"
lastCommitAt: "2026-09-08T08:17:09Z"
lastReleaseAt: "2026-08-09T02:31:04Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["psenY", "nixi-agent", "ggg123124"]
openGraphImageUrl: "https://opengraph.githubassets.com/10f1f0cdaf5261b5f2ec6b6b31d3ed20c0c61bdf9b3838afae6a9ede3a6cd56a/ggg123124/vrchat-assistant"
discussionCount: 0
---

# VRChat 助手 (vrchat-assistant)

> 实时监控你的 VRChat 好友动态，让 AI 帮你社交、找图、管相册、做推荐。
> 技术栈：Node.js + SQLite + WebSocket + MCP

**中文 | [English](https://github.com/ggg123124/vrchat-assistant/blob/HEAD/README.en.md) | [日本語](https://github.com/ggg123124/vrchat-assistant/blob/HEAD/README.ja.md)**

---

## 这是什么？

一个**常驻后台服务**：通过 WebSocket 实时采集你 VRChat 好友的上下线、进房、换 Avatar、状态变化并存入本地数据库。所有能力通过 **MCP 接口**暴露给 AI Agent（如 Hermes），让 AI 替你完成社交互动、媒体管理、群组操作、智能推荐等任务——你不必亲手点 VRChat 客户端。

本项目是 **AI-first**：程序面向 AI Agent 使用与扩展，人类负责提需求、验收，开发由 AI 完成。详见下方文档导航。

## 核心能力

- 📡 **好友监控**：实时采集好友动态，断线自动重连，cookie 过期自动 OTP 邮箱取码登录，全链路无人值守
- 🤖 **智能推荐**：AI 好友推荐（熟悉度 + 收藏夹权重 + 房间场景），推荐当前最值得加入的房间；偏好可自然语言设置并自动学习
- 🗺 **地图推荐与查找**：世界检索（VRChat 官方 / PlanetVRC 日文目录 / 多源融合推荐）、新世界追踪、X 博主世界推荐聚合
- 💬 **社交互动**：戳戳（Boop）、邀请进房、请求加入、好友请求/删除、一键开房（命名管道直发 + API 回退），内置限流防封
- 🛍 **素材检索**：BOOTH（pixiv 数字商品平台）检索 VRChat 素材——avatar/衣装/3D 模型，含热度排行、详情、本地缓存与汉化展示
- 🖼 **媒体管理**：VRC+ 相册（Prints）/ 图库（Gallery）/ 自定义表情的上传、下载、删除
- 👥 **群组管理**：群组信息、群组房列表、加入/退出、公告窥探、群组热度
- 🗄 **数据与洞察**：事件历史、同屏交叉查询、上线规律分析、一周游戏周报、昵称映射、世界备注与变更历史
- 🛡 **运维自愈**：数据库自动备份（24h WAL 在线备份）、Hermes 插件托管（自动拉起 + 崩溃自愈）

## 快速开始

**前置条件**：Node.js ≥ 22、一个 VRChat 账号（开启邮箱 OTP 或 TOTP 两步验证）。仅用邮箱 OTP…
