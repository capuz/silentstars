---
repo: "idoknow/Campux"
name: "Campux"
description: "“你一直在找的 QQ 校园墙自动化平台” ｜ 一键部署、自助开墙、自助投稿、网页审核、自动发说说、数据分析、多号管理｜万能墙、表白墙 自动化、QQ 空间、QQ 机器人、发说说"
url: "https://github.com/idoknow/Campux"
homepage: "https://campux.top"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["qq", "qzone"]
stars: 146
forks: 15
openIssues: 3
closedIssues: 44
watchers: 3
contributors: 9
recentReleases: 2
createdAt: "2024-04-01T06:48:20Z"
lastCommitAt: "2026-06-28T11:23:55Z"
lastReleaseAt: "2026-06-22T10:25:52Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 98
undervaluedScore: 49
maintainers: ["MrWoods1692", "fhzit", "RockChinQ"]
openGraphImageUrl: "https://opengraph.githubassets.com/501a6466faed2d0293d53a57f897250bd3e8b6e780753583e21721800aaef324/idoknow/Campux"
---

</p>

<h1 align="center">Campux</h1>

## 适合谁

主要面向**校园墙运营管理员**：自助开墙、配置机器人和发布目标、审核投稿、管理成员/公告/规则/封禁、查看统计。

- 审核员、投稿用户：在产品内按角色使用，无需阅读文档。
- 自托管系统维护者：部署、多租户生命周期、全局账号、域名与安全，见[系统维护手册](https://docs.campux.top/admin/overview)。

## 开始使用

官方服务入口 `https://app.campux.top`。从该域名访问即可用邮箱验证码注册**运营管理员**账号，然后在产品内：

1. 创建自己的校园墙
2. 添加墙号 Bot，复制 OneBot URL 到 NapCat 反向 WebSocket
3. 配置审核群、发布目标和 QZone cookies
4. 测试投稿 → 审核 → 发布闭环

完整步骤见 [自助开墙流程](https://docs.campux.top/operator/self-service-onboarding)。普通用户通过对应校园墙机器人注册，不走此入口。

## 核心功能

| 功能 | 简介 | 预览 |
| --- | --- | --- |
| **网页、私聊双重投稿渠道** | 网页端和 QQ 私聊墙号机器人均可投稿，两个入口统一进入同一条审核流程。 |  |
| **自动发表到空间，支持单条、多条稿件发布** | 稿件通过审核后自动发表到 QQ 空间，既支持单条即时发布，也支持多条稿件合并为一条说说发布；失败可重试，发布日志可追溯。 |  |
| **自动获取登录信息，省心快捷** | 协议自动获取与扫码登录两种方式维护 QZone 登录态，定时检测、失效自动刷新，无需手动抓取 cookies。 |  |
| **投稿量、访客量统计图表** | 统计看板以图表展示投稿量、空间访客量等运营数据，支持多时间范围切换，活跃度与发布质量一目了然。 |  |
| **评论同步展示、定时通知投稿人** | QQ 空间评论自动同步到站内稿件页展示；投稿人关注自己的稿件后，会定时收到新评论摘要的私聊通知。 |  |

此外还有：

- **OneBot v11 机器人接入**：墙号机器人私聊注册、重置密码、审核群命令、扫码登录、cookies 健康检查。
- **两种部署模式**：自用单墙（隐藏多租户，开箱即用）或多租户运营平台（多个运营者自助开墙）。
- **引导式初始化**：全新实例首次打开走「初始化向导」创建管理员，无需手动改库。
- **自托管友好**：单文件零依赖（SQLite + 本地存储）即可起跑，也支持 PostgreSQL + S3/MinIO + Docker Compose；启动自动建库 / 迁移。…
