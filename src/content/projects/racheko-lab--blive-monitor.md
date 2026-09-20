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
lastCommitAt: "2026-09-20T08:46:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/2ef724d11f99d57f84f32254dfb11ecb1f080f574e8dbf51c0bca0d2a74f8b6e/racheko-lab/blive-monitor"
---

# 📡 Bilibili/Douyin Live Stream Monitoring + Multi-Channel Push Notifications

A lightweight live stream status monitoring tool that supports Bilibili and Douyin platforms. When going live or publishing new works, it automatically pushes notifications through multiple channels (Bark / Server酱 / Wecom / PushPlus / Telegram).

## ✨ Features

- 🎬 **Multi-platform Support**: Monitor Bilibili and Douyin live streams simultaneously
- 🔔 **Multi-Channel Push Notifications**: Send notifications through Bark / Server酱 / Wecom / PushPlus / Telegram when going live or publishing new works
- 📊 **Live Stream Duration Statistics**: Record stream duration and last broadcast time
- 📝 **History Logs**: Keep the latest 200 status change records
- 🔄 **Merged Notifications**: Merge multiple broadcasters' notifications into one when going live simultaneously
- 📱 **Responsive Page**: Mobile-friendly monitoring page
- 🎵 **New Works Detection**: Support for detecting new works published on Douyin (optional)

## 📋 Quick Start

### 1. Configure Monitored Rooms

Edit the `rooms.json` file and add the broadcasters you want to monitor:

```json
[
  {
    "platform": "bilibili",
    "id": "1874913653",…
