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
lastCommitAt: "2026-11-05T08:05:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 40
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9044d90c3a84e80e29a0cb6ce4fcef6d53478b274e6e96b154d5ccb7a91c4494/joylyboy/douyin-live-monitor"
---

# Douyin Live Room Start/Stop Monitor

Automatically monitors a batch of Douyin live rooms. Whenever a room goes live or ends its stream, it sends a push notification to iPhone via Bark. Tapping the notification opens the corresponding live room directly in Douyin through its URL Scheme (`snssdk1128://live`).

## How It Works

```mermaid
flowchart LR
    A[External timer / GitHub Actions trigger] --> B[Run monitor.py]
    B --> C[Read rooms.txt]
    C --> D[Request live.douyin.com/room one by one]
    D --> E{Page contains m3u8/flv stream address?}
    E -- Yes --> F[Judged live]
    E -- No --> G[Judged offline]
    F & G --> H[Compare with last state]
    H --> I[Send Bark if state changed]
    I --> J[Tap notification to open Douyin live room]
```

Detection basis: the `liveStatus` field in Douyin's web SSR data also returns `normal` for rooms that are live, so it is unreliable. However, offline room pages contain zero real stream addresses such as `m3u8/flv/pull_url`, while live rooms contain many. Therefore, “the page contains real stream addresses” is used as the reliable signal for live status. If the page cannot be fetched or an error occurs, no notification is sent in…
