---
repo: "racheko-lab/blive-monitor"
name: "blive-monitor"
description: "Bilibili/Douyin Live Stream Monitoring + WeChat Push Notifications"
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
lastCommitAt: "2026-09-19T01:37:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4693e96e801300b18f4464843f86ec616ad9d923b66a5154d9c5129bb4cfa789/racheko-lab/blive-monitor"
---

# 📡 Bilibili/Douyin Live Stream Monitoring + Multi-Channel Push Notifications

A lightweight live stream status monitoring tool that supports Bilibili and Douyin platforms, automatically pushes notifications through multiple channels (Bark / Server Sauce / Enterprise WeChat / PushPlus / Telegram) when going live / new content.

## ✨ Features

- 🎬 **Multi-Platform Support**: Monitor Bilibili and Douyin live streams simultaneously
- 🔔 **Multi-Channel Push Notifications**: Send notifications through Bark / Server Sauce / Enterprise WeChat / PushPlus / Telegram when going live / new content
- 📊 **Live Stream Duration Statistics**: Record streaming duration and last broadcast time
- 📝 **Historical Logs**: Keep the last 200 status change records
- 🔄 **Merged Notifications**: Merge notifications into one when multiple broadcasters go live simultaneously
- 📱 **Responsive Page**: Mobile-friendly monitoring page
- 🎵 **New Content Detection**: Support detecting Douyin new content publication (optional)

## 📋 Quick Start

### 1. Configure Monitoring Rooms

Edit the `rooms.json` file to add broadcasters to monitor:

```json
[
  {
    "platform": "bilibili",
    "id": "1874913653",…
