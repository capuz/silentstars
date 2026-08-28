---
repo: "racheko-lab/blive-monitor"
name: "blive-monitor"
description: "B站/抖音直播监控 + 微信推送"
readmeQualityOk: true
url: "https://github.com/racheko-lab/blive-monitor"
language: "Python"
languages: ["Python"]
languagePcts: [80]
stars: 5
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-28T09:44:10Z"
lastCommitAt: "2026-08-28T14:28:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/f3cc4ae89aa1a6c23e81328f0e74bbd9daf95e4c64fc21a96a9a7e2c654ef533/racheko-lab/blive-monitor"
---

# 📡 B站/抖音直播监控 + 多渠道推送

一个轻量级的直播状态监控工具，支持 B站 和 抖音 平台，开播 / 新作品时自动通过多渠道（Bark / Server酱 / 企业微信 / PushPlus / Telegram）推送通知。

## ✨ 功能特性

- 🎬 **多平台支持**：同时监控 B站 和 抖音 直播间
- 🔔 **多渠道推送**：开播 / 新作品时通过 Bark / Server酱 / 企业微信 / PushPlus / Telegram 推送通知
- 📊 **直播时长统计**：记录开播时长、上次开播时间
- 📝 **历史日志**：保留最近 200 条状态变更记录
- 🔄 **合并推送**：多个主播同时开播时合并为一条通知
- 📱 **响应式页面**：手机端友好的监控页面
- 🎵 **新作品检测**：支持检测抖音新作品发布（可选）

## 📋 快速开始

### 1. 配置监控房间

编辑 `rooms.json` 文件，添加要监控的主播：

```json
[
  {
    "platform": "bilibili",
    "id": "1874913653",
    "name": "峰哥亡命天涯"
  },
  {
    "platform": "douyin",
    "id": "83134194400",
    "name": "27～"
  }
]
```

**字段说明：**
- `platform`: 平台，`bilibili` 或 `douyin`
- `id`: 直播间 ID
  - B站：直播间号（URL 中的数字，如 `https://live.bilibili.com/1874913653`）
  - 抖音：直播间 web_rid（URL 中的字符串，如 `https://live.douyin.com/83134194400`）
- `name`: 主播名称（用于显示和推送通知）

### 2. 配置推送渠道（可选）

开播 / 新作品通知支持多渠道，通过环境变量 `BLIVE_CONFIG`（JSON）配置：

```bash
# Bark（iPhone，推荐）
export BLIVE_CONFIG='{"push": {"type": "bark", "url": "https://api.day.app/你的KEY", "group": "blive"}}'

# 或 企业微信群机器人（免费无限，推荐）
export BLIVE_CONFIG='{"push": {"type": "wecom", "webhook": "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxx"}}'

# 或…
