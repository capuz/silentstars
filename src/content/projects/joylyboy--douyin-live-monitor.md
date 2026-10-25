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
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-17T06:16:28Z"
lastCommitAt: "2026-10-25T22:10:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 42
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/808100c5b938955c3b5461fa34f5751d16b3ca8711aaeb67b83460166ca3ca5f/joylyboy/douyin-live-monitor"
---

# Douyin Live Room Start/Stop Monitor

Automatically monitors a batch of Douyin live rooms. Once a room starts or ends a broadcast, a notification is pushed to iPhone via Bark. Tapping the notification opens Douyin directly through the URL Scheme (`snssdk1128://live`) and enters the corresponding live room.

## How It Works

```mermaid
flowchart LR
    A[External timer / GitHub Actions trigger] --> B[Run monitor.py]
    B --> C[Read rooms.txt]
    C --> D[Request live.douyin.com/room one by one]
    D --> E{Page contains m3u8/flv stream URL?}
    E -- Yes --> F[Mark as live]
    E -- No --> G[Mark as not live]
    F & G --> H[Compare with last state]
    H --> I[Send Bark if state changed]
    I --> J[Tap notification to open Douyin live room]
```

Detection basis: the `liveStatus` field in Douyin's web SSR also returns `normal` for rooms that are live (unreliable). However, on offline room pages, the count of real stream addresses such as `m3u8/flv/pull_url` is 0, while live rooms have many. Therefore, "the page contains real stream addresses" is used as the reliable signal for being live. If the page cannot be fetched or an error occurs, no notification is sent for that check…
