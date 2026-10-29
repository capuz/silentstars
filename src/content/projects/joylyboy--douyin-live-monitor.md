---
repo: "joylyboy/douyin-live-monitor"
name: "douyin-live-monitor"
description: "Douyin live room go-live / go-offline monitoring"
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
lastCommitAt: "2026-10-29T14:07:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 40
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/26f0d3f23c4ea38bcca983652811d63dd932c57912cb7dde9046bba76db69546/joylyboy/douyin-live-monitor"
---

# Douyin live room go-live monitor

Automatically monitors a set of Douyin live rooms. Once a room goes live or ends its broadcast, a notification is pushed to iPhone via Bark. Tapping the notification uses the Douyin URL Scheme (`snssdk1128://live`) to open Douyin directly in the corresponding live room.

## How it works

```mermaid
flowchart LR
    A[External timer / GitHub Actions trigger] --> B[Run monitor.py]
    B --> C[Read rooms.txt]
    C --> D[Request live.douyin.com/room-id one by one]
    D --> E{Page contains m3u8/flv stream address?}
    E -- Yes --> F[Mark as live]
    E -- No --> G[Mark as offline]
    F & G --> H[Compare with last state]
    H --> I[If state changed, send Bark]
    I --> J[Tap notification to open Douyin live room]
```

Detection basis: the `liveStatus` field in Douyin's web SSR data also returns `normal` for rooms that are live (not reliable). However, offline room pages have zero real stream addresses such as `m3u8/flv/pull_url`, while live rooms have many. Therefore, "the page contains real stream addresses" is used as the reliable signal for being live. If the page cannot be fetched or an error occurs, no notification is sent for that check…
