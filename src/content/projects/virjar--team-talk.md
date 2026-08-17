---
repo: "virjar/team-talk"
name: "team-talk"
description: "团队协作沟通软件，打算做成开源免费的钉钉/飞书，预期使用5年时间完成这个巨大的目标。"
readmeQualityOk: true
url: "https://github.com/virjar/team-talk"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
stars: 32
forks: 0
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-05-01T14:27:13Z"
lastCommitAt: "2026-08-17T04:20:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 51
maintainers: ["virjar"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fdc7fe8c41cd960aa82d1f2c385cf43913b0db0cb818a9479842bb4e8637c2c/virjar/team-talk"
---

# TeamTalk

> **官网**: [https://im.virjar.com](https://im.virjar.com) | **GitHub**: [https://github.com/virjar/team-talk](https://github.com/virjar/team-talk)

基于 Kotlin Multiplatform (KMP) + Jetpack Compose 的跨平台即时通讯与办公协作应用，包含完整的**自研服务端**（Ktor + Netty）和**跨平台客户端**（Android + Desktop），采用自定义二进制协议实现实时消息推送。

基于 KMP 技术将前后端开发语言收敛到 Kotlin 单一语言，开发者只需掌握一门语言即可维护整个项目。

## 项目定位

TeamTalk 的最终目标是实现一个对标钉钉、飞书的办公软件，面向中小型组织（用户规模一般不超过 1 万）。采用单体架构，几乎所有功能都可以用单机+内存的模型收敛到一个简单服务器上。无需考虑海量用户带来的系统复杂性，架构简单，对开发和运维友好。

### 项目优势

- **AI 原生项目**：本项目约 99% 的代码由 AI 编写，代码风格统一、结构清晰，天然适配 AI 辅助开发和维护。无论是部署、调试还是二次开发，都可以借助 AI 快速上手。
- **全栈 Kotlin**：前后端统一使用 Kotlin，配合详细的 `CLAUDE.md` 工程规范文件，AI 能够精准理解项目上下文并生成高质量代码。

## 功能特性

### 即时通讯

- 单聊 / 群聊（文本、图片、语音、视频、文件）
- 消息回复、转发、撤回、编辑（含「已编辑」标记）
- 富媒体消息：图片画廊、语音条、文件卡片、视频播放
- 消息已读回执、发送状态（发送中/已发送/已送达）
- 消息长按菜单（回复/编辑/撤回/转发/复制）

### 联系人与社交

- 好友管理：搜索用户、申请/接受/删除好友
- 用户资料：头像、显示名、手机号、个人简介
- 好友申请列表与红点提醒

### 群组管理

- 创建群组、邀请成员
- 群公告编辑与展示
- 群成员列表、角色管理（群主/管理员/成员）
- 群详情面板、退出/解散群组

### 会话管理

- 会话列表（按最后消息时间排序，置顶优先）
- 未读计数 Badge（会话级 + 应用图标级）
- 会话置顶/取消置顶
- 消息草稿（输入未发送 → 切换会话自动保存 → 显示[草稿]标记）
- 会话消息预览（最后一条消息摘要）

### 搜索

- 用户搜索（按用户名/显示名模糊匹配）
- 消息全文搜索（Lucene + IK 中文分词，服务端索引）

### 多设备与在线状态

- 多设备同时在线（每设备独立 token…
