---
repo: "joylyboy/douyin-live-monitor"
name: "douyin-live-monitor"
description: "Douyin live room start/stop monitor"
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
lastCommitAt: "2026-10-21T23:35:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 42
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d37f389f662a768fba603323eafe953933dd2dc2459fe87005e20be9fdbb767/joylyboy/douyin-live-monitor"
---

# Douyin Live Room Start/Stop Monitor

Automatically monitors a list of Douyin live rooms. As soon as a room goes live or ends its broadcast, a notification is pushed to iPhone via Bark. Tapping the notification opens the Douyin app directly to the corresponding live room using the Douyin URL Scheme (`snssdk1128://live`).

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

Detection basis: the `liveStatus` field in Douyin's web SSR also returns `normal` for rooms that are currently live (unreliable). However, on offline room pages, the count of real stream addresses such as `m3u8/flv/pull_url` is 0, while live rooms have many. Therefore, "the page contains real stream addresses" is used as the reliable signal for being live. If the page cannot be fetched or an error occurs, no…
