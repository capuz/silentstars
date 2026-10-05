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
languagePcts: [81]
stars: 5
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-28T09:44:10Z"
lastCommitAt: "2026-10-05T10:47:13Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 64
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff8e797736cdd0fd5ec06ee533acbf7295bd39ad4db90f7f87c2dea0be26343f/racheko-lab/blive-monitor"
---

# 📡 Bilibili/Douyin Live Stream Monitoring + Multi-channel Push Notifications

A lightweight live stream status monitoring tool that supports Bilibili and Douyin platforms, automatically pushing notifications through multiple channels (Bark / Server Chan / Enterprise WeChat / PushPlus / Telegram) when streaming starts / new works are published.

## ✨ Features

- 🎬 **Multi-platform Support**: Monitor Bilibili and Douyin live streams simultaneously
- 🔔 **Multi-channel Push**: Send notifications through Bark / Server Chan / Enterprise WeChat / PushPlus / Telegram when streaming starts / new works are published
- 📊 **Stream Duration Statistics**: Record streaming duration and last broadcast time
- 📝 **History Logs**: Keep the latest 200 status change records
- 🔄 **Merged Notifications**: Merge into one notification when multiple streamers go live simultaneously
- 📱 **Responsive Page**: Mobile-friendly monitoring page
- 🎵 **New Works Detection**: Support for detecting Douyin new works publication (optional)

## 📋 Quick Start

### 1. Configure Monitoring Rooms

Edit the `rooms.json` file to add streamers to monitor:

```json
[
  {
    "platform": "bilibili",
    "id":…
