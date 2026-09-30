---
repo: "racheko-lab/blive-monitor"
name: "blive-monitor"
description: "Bilibili/Douyin Live Broadcast Monitoring + WeChat Push"
originalDescription: "B站/抖音直播监控 + 微信推送"
descriptionLang: "zh"
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
lastCommitAt: "2026-09-30T09:56:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/bfc54eda81b393ad653f86f8c901cb18bd0f8321240239cf70190ca3b977d71a/racheko-lab/blive-monitor"
---

# 📡 Bilibili/Douyin Live Broadcast Monitoring + Multi-channel Push

A lightweight live broadcast monitoring tool that supports Bilibili and Douyin platforms, automatically sending notifications through multiple channels (Bark / Server Sauce / Enterprise WeChat / PushPlus / Telegram) when going live / releasing new works.

## ✨ Features

- 🎬 **Multi-platform Support**: Monitor Bilibili and Douyin livestreams simultaneously
- 🔔 **Multi-channel Push**: Send notifications through Bark / Server Sauce / Enterprise WeChat / PushPlus / Telegram when going live / releasing new works
- 📊 **Live Duration Statistics**: Record live duration and last broadcast time
- 📝 **History Logs**: Keep the latest 200 status change records
- 🔄 **Merged Push**: Merge multiple notifications into one when multiple anchors go live simultaneously
- 📱 **Responsive Page**: Mobile-friendly monitoring page
- 🎵 **New Works Detection**: Support for detecting new Douyin works publishing (optional)

## 📋 Quick Start

### 1. Configure Monitored Rooms

Edit the `rooms.json` file to add anchors you want to monitor:

```json
[
  {
    "platform": "bilibili",
    "id": "1874913653",
    "name": "峰哥亡命天涯"
  },
  {…
