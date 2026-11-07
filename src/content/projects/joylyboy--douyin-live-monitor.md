---
repo: "joylyboy/douyin-live-monitor"
name: "douyin-live-monitor"
description: "Douyin live room go-live/go-offline monitoring"
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
lastCommitAt: "2026-11-07T22:50:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 40
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/effcaccf368138f855338d209e2e87175d3e6d394d5fd6664c07777352ffe164/joylyboy/douyin-live-monitor"
---

# Douyin Live Room Start/End Monitor

Automatically monitors a batch of Douyin live rooms. Once a room goes live or goes offline, it pushes a notification to iPhone via Bark. Tapping the notification opens Douyin directly through its URL Scheme (`snssdk1128://live`) and enters the corresponding live room.

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
    H --> I[If state changed, send Bark]
    I --> J[Tap notification to open Douyin live room]
```

Detection basis: the `liveStatus` field in Douyin's web SSR also returns `normal` for rooms that are live, so it is unreliable. For offline rooms, however, the count of real stream addresses such as `m3u8/flv/pull_url` on the page is 0, while live rooms contain many. Therefore, "the page contains real stream addresses" is used as the reliable signal for being live. If the page cannot be fetched or is abnormal, no notification is sent…
