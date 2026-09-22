---
repo: "racheko-lab/blive-monitor"
name: "blive-monitor"
description: "Bilibili/Douyin Live Monitoring + WeChat Push"
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
lastCommitAt: "2026-09-22T08:45:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/cbd9974808c3293b882c5c9e7e1c27de756a906560f930c445341e04d9afdc52/racheko-lab/blive-monitor"
---

# 📡 Bilibili/Douyin Live Monitoring + Multi-channel Push

A lightweight live stream status monitoring tool that supports Bilibili and Douyin platforms, automatically sends notifications through multiple channels (Bark / Server-chan / WeChat Work / PushPlus / Telegram) when streaming starts / new works are published.

## ✨ Features

- 🎬 **Multi-platform support**: Monitor Bilibili and Douyin live rooms simultaneously
- 🔔 **Multi-channel push**: Send notifications through Bark / Server-chan / WeChat Work / PushPlus / Telegram when streaming starts / new works are published
- 📊 **Live duration statistics**: Record streaming duration, last streaming time
- 📝 **Historical logs**: Keep the last 200 status change records
- 🔄 **Merged push**: Combine multiple streamers' broadcasts into one notification when they go live simultaneously
- 📱 **Responsive pages**: Mobile-friendly monitoring interface
- 🎵 **New works detection**: Support detection of Douyin new works publication (optional)

## 📋 Quick Start

### 1. Configure monitored rooms

Edit the `rooms.json` file and add the streamers you want to monitor:

```json
[
  {
    "platform": "bilibili",
    "id": "1874913653",…
