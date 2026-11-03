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
lastCommitAt: "2026-11-03T19:05:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 40
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c179ebe69bed2f63353f66265a144934566978216d142c437b9ddfb75d7799b/joylyboy/douyin-live-monitor"
---

# Douyin Live Room Start/Stop Monitor

Automatically monitors a batch of Douyin live rooms. Once a room goes live or ends, it sends a push notification to iPhone via Bark. Tapping the notification can open Douyin directly to the corresponding live room using the URL Scheme (`snssdk1128://live`).

## How It Works

```mermaid
flowchart LR
    A[External timer / GitHub Actions trigger] --> B[Run monitor.py]
    B --> C[Read rooms.txt]
    C --> D[Request live.douyin.com/room one by one]
    D --> E{Page contains m3u8/flv stream URL?}
    E -- Yes --> F[Judged as live]
    E -- No --> G[Judged as offline]
    F & G --> H[Compare with last state]
    H --> I[If state changed, send Bark]
    I --> J[Tap notification to open Douyin live room]
```

Basis for judgment: The `liveStatus` field in Douyin's web SSR also returns `normal` for rooms that are currently live (unreliable). However, on offline room pages, the count of real stream URLs such as `m3u8/flv/pull_url` is 0, while live rooms contain many. Therefore, "the page contains real stream URLs" is used as the reliable signal for being live. If the page cannot be fetched or an error occurs, no notification is sent in that run (to…
