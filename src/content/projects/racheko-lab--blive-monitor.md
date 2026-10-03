---
repo: "racheko-lab/blive-monitor"
name: "blive-monitor"
description: "Bilibili/Douyin Live Streaming Monitoring + WeChat Push"
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
lastCommitAt: "2026-10-03T22:04:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/80ba2195a2843c2df7bb6087325f3b8a92b7d0b39bd8b2998a3c3c97ee836c8f/racheko-lab/blive-monitor"
---

# 📡 Bilibili/Douyin Live Streaming Monitoring + Multi-Channel Push

A lightweight live streaming status monitoring tool that supports Bilibili and Douyin platforms, automatically pushing notifications through multiple channels (Bark / ServerChan / Enterprise WeChat / PushPlus / Telegram) when broadcasting/new content is released.

## ✨ Features

- 🎬 **Multi-Platform Support**: Monitor Bilibili and Douyin live streams simultaneously
- 🔔 **Multi-Channel Push**: Push notifications through Bark / ServerChan / Enterprise WeChat / PushPlus / Telegram when broadcasting/new content is released
- 📊 **Streaming Duration Statistics**: Track streaming duration and last broadcast time
- 📝 **History Log**: Keep the latest 200 status change records
- 🔄 **Merged Push**: Merge into a single notification when multiple broadcasters go live simultaneously
- 📱 **Responsive Page**: Mobile-friendly monitoring page
- 🎵 **New Content Detection**: Support for detecting Douyin new content release (optional)

## 📋 Quick Start

### 1. Configure Monitored Rooms

Edit the `rooms.json` file to add broadcasters to monitor:

```json
[
  {
    "platform": "bilibili",
    "id": "1874913653",
    "name":…
