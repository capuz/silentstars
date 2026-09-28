---
repo: "racheko-lab/blive-monitor"
name: "blive-monitor"
description: "Bilibili/Douyin Live Stream Monitor + WeChat Notifications"
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
lastCommitAt: "2026-09-28T10:06:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e6938a8c61d9db241825714f5d4a845b052b3bc322c851f3febe665de3cbcb8a/racheko-lab/blive-monitor"
---

# 📡 Bilibili/Douyin Live Stream Monitor + Multi-Channel Notifications

A lightweight live stream status monitoring tool that supports Bilibili and Douyin platforms, and automatically sends notifications through multiple channels (Bark / Server酱 / WeChat for Work / PushPlus / Telegram) when broadcasts start or new works are published.

## ✨ Features

- 🎬 **Multi-Platform Support**: Monitor Bilibili and Douyin live streams simultaneously
- 🔔 **Multi-Channel Notifications**: Send notifications through Bark / Server酱 / WeChat for Work / PushPlus / Telegram when broadcasts start or new works are published
- 📊 **Live Stream Duration Statistics**: Track broadcast duration and last broadcast time
- 📝 **History Logs**: Keep the most recent 200 status change records
- 🔄 **Merged Notifications**: Combine notifications into one when multiple broadcasters start at the same time
- 📱 **Responsive Page**: Mobile-friendly monitoring page
- 🎵 **New Works Detection**: Support for detecting new Douyin work publications (optional)

## 📋 Quick Start

### 1. Configure Monitored Rooms

Edit the `rooms.json` file and add the broadcasters you want to monitor:

```json
[
  {
    "platform":…
