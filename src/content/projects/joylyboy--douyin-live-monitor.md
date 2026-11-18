---
repo: "joylyboy/douyin-live-monitor"
name: "douyin-live-monitor"
description: "Douyin live room start/stop monitoring"
originalDescription: "抖音直播间开播下播监控"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/joylyboy/douyin-live-monitor"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-17T06:16:28Z"
lastCommitAt: "2026-11-18T12:05:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 40
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d5c433e191df4da890852edf338863b3fc78d1880fcd798937f0d16501a6a6e/joylyboy/douyin-live-monitor"
---

# Douyin Live Room Start/Stop Monitor

Automatically monitors a batch of Douyin live rooms. Once a room goes live or ends, it pushes a notification to iPhone via Bark. Tapping the notification uses the Douyin URL Scheme (`snssdk1128://live`) to open Douyin directly into the corresponding live room.

## How It Works

```mermaid
flowchart LR
    A[External timer / GitHub Actions trigger] --> B[Run monitor.py]
    B --> C[Read rooms.txt]
    C --> D[Request live.douyin.com/room one by one]
    D --> E{Page contains m3u8/flv stream address?}
    E -- Yes --> F[Mark as live]
    E -- No --> G[Mark as offline]
    F & G --> H[Compare with last state]
    H --> I[Send Bark if state changed]
    I --> J[Tap notification to open Douyin live room]
```
