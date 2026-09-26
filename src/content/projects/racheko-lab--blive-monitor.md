---
repo: "racheko-lab/blive-monitor"
name: "blive-monitor"
description: "Bilibili/Douyin Live Stream Monitoring + WeChat Push"
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
lastCommitAt: "2026-09-26T08:45:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/81ab81e0a340fc58e21acbfa4eda343a6d2f0a8160b8906bc2d27dad0c7f56f3/racheko-lab/blive-monitor"
---

# 📡 Bilibili/Douyin Live Stream Monitoring + Multi-Channel Push

A lightweight live stream status monitoring tool that supports Bilibili and Douyin platforms, automatically pushing notifications through multiple channels (Bark / Server Sauce / Enterprise WeChat / PushPlus / Telegram) when going live or releasing new works.

## ✨ Features

- 🎬 **Multi-platform Support**: Monitor Bilibili and Douyin live rooms simultaneously
- 🔔 **Multi-channel Push**: Push notifications through Bark / Server Sauce / Enterprise WeChat / PushPlus / Telegram when going live or releasing new works
- 📊 **Live Duration Statistics**: Record live duration and last broadcast time
- 📝 **History Logs**: Keep the last 200 status change records
- 🔄 **Merged Push**: Merge into one notification when multiple streamers go live simultaneously
- 📱 **Responsive Page**: Mobile-friendly monitoring page
- 🎵 **New Work Detection**: Support for detecting new Douyin work publishing (optional)

## 📋 Quick Start

### 1. Configure Monitoring Rooms

Edit the `rooms.json` file and add the streamers you want to monitor:

```json
[
  {
    "platform": "bilibili",
    "id": "1874913653",
    "name": "峰哥亡命天涯"
  },
  {…
