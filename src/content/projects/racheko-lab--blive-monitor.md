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
lastCommitAt: "2026-09-24T08:41:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/89fc6c348484704ec2c62d0801eb9de587355252ff4eb9a25a133a223762474a/racheko-lab/blive-monitor"
---

# 📡 Bilibili/Douyin Live Stream Monitoring + Multi-Channel Push Notifications

A lightweight live stream status monitoring tool that supports Bilibili and Douyin platforms, automatically pushing notifications through multiple channels (Bark / Server酱 / WeChat for Enterprise / PushPlus / Telegram) when streaming goes live or new works are published.

## ✨ Features

- 🎬 **Multi-Platform Support**: Monitor Bilibili and Douyin live streams simultaneously
- 🔔 **Multi-Channel Push**: Push notifications through Bark / Server酱 / WeChat for Enterprise / PushPlus / Telegram when streaming goes live or new works are published
- 📊 **Live Stream Duration Statistics**: Record streaming duration and last streaming time
- 📝 **History Log**: Retain the latest 200 status change records
- 🔄 **Merged Push**: Merge into a single notification when multiple streamers go live simultaneously
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
