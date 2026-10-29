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
lastCommitAt: "2026-10-29T10:20:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 40
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b6fc0647380ff8839ad239e3d2eb2967a80ac146f87a99ac0f748c8e43bd97d/joylyboy/douyin-live-monitor"
---

# Douyin Live Room Start/Stop Monitor

Automatically monitors a batch of Douyin live rooms. Once a room goes live or ends its broadcast, it pushes a notification to iPhone via Bark. Tapping the notification opens the corresponding live room directly in Douyin using its URL Scheme (`snssdk1128://live`).

## How It Works

```mermaid
flowchart LR
    A[External timer / GitHub Actions trigger] --> B[Run monitor.py]
    B --> C[Read rooms.txt]
    C --> D[Request live.douyin.com/room one by one]
    D --> E{Page contains m3u8/flv stream address?}
    E -- Yes --> F[Mark as live]
    E -- No --> G[Mark as offline]
    F & G --> H[Compare with previous state]
    H --> I[If state changed, send Bark]
    I --> J[Tap notification to open Douyin live room]
```

Detection basis: Douyin's web SSR `liveStatus` field also returns `normal` for rooms that are currently live, so it is not reliable. However, offline room pages contain zero real stream addresses such as `m3u8/flv/pull_url`, while live rooms contain many. Therefore, 'page contains real stream addresses' is used as the reliable signal for a live room. If the page cannot be fetched or an error occurs, no notification is sent in that…
