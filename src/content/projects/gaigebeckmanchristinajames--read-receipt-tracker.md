---
repo: "gaigebeckmanChristinaJames/read-receipt-tracker"
name: "read-receipt-tracker"
description: "轻量级消息已读追踪服务，Python + C++ 双实现，支持 Termux / Linux / Docker 多环境部署。另有 WeKit 微信增强模块 APK（CI 自动构建，已修复DEX缓存更新问题）和 Java 插件版已读服务器，Releases 页直接下载使用。"
readmeQualityOk: true
url: "https://github.com/gaigebeckmanChristinaJames/read-receipt-tracker"
language: "Kotlin"
languages: ["Kotlin", "Java"]
languagePcts: [65, 26]
stars: 58
forks: 15
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-12T11:38:40Z"
lastCommitAt: "2026-08-18T04:06:41Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 4
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/9b61e983bf005a3c0ac4f10209a60d54a888d3bb03eaa10adb33054f9438146f/gaigebeckmanChristinaJames/read-receipt-tracker"
---

# WeKit - 微信增强模块 (含已读追踪)

> 基于 [WeKit](https://github.com/Ujhhgtg/WeKit) 的微信 Xposed 模块，新增已读追踪功能，支持消息已读状态监控、访客信息记录与公网隧道访问。

## 功能特性

### 已读追踪 (Read Receipt Tracker)
- **消息注册**: 为每条消息生成唯一追踪 ID，基于 SHA-256 算法
- **已读监控**: 通过透明追踪像素实时记录消息被阅读状态
- **访客追踪**: 记录访问者 IP 地址、地理位置（国家/地区/城市/运营商）、设备信息
- **公网隧道**: 内置 cloudflared 隧道，自动生成公网访问地址，无需额外服务器配置
- **Web 控制台**: 提供可视化界面，查看消息列表、已读统计、访客详情
- **本地存储**: 使用 SQLite 数据库，所有数据存储在本地设备
- **REST API**: 完整的 HTTP API，支持消息注册、查询、删除等操作

### 基础功能 (继承自 WeKit)
- 消息相关：防撤回、消息批量操作、语音转文字等
- 界面美化：主题自定义、气泡样式、导航栏替换等
- 群聊增强：群成员真实昵称、群聊分组、消息上下文菜单定制等
- 朋友圈：自动刷新、防删除、详情展示等
- 小程序：去广告、跳过启动页、调试功能等
- 系统级：平板模式、伪装环境、防检测等

## 下载安装

### CI 自动构建 (推荐)
每次推送到主分支都会自动构建 APK，可在 [Releases](https://github.com/gaigebeckmanChristinaJames/read-receipt-tracker/releases) 页面下载最新 CI 构建版本。

也可以在 [Actions](https://github.com/gaigebeckmanChristinaJames/read-receipt-tracker/actions) 页面下载任意提交的构建产物。

### 环境要求
- Android 9.0 (API 28) 及以上
- 已 root 设备，并安装 Xposed 框架（LSPosed / EdXposed 等）
- 或使用 Zygisk 模式（需 Magisk）
- 微信版本支持：8.0.65 - 8.0.76

## 独立已读服务器 (Java 插件版)

除了 WeKit 内置的已读追踪功能，本仓库还提供一个独立的 Java 插件版已读服务器，支持以 HChat 插件或 WeKit Java 脚本形式运行，无需编译 APK 即可使用。

- **位置**:…
