---
repo: "magisk317/xinyi-relay"
name: "xinyi-relay"
description: "Xinyi Relay: An Android SMS, app notification, and call notification forwarding tool that supports multi-channel forwarding, rule filtering, and automatic migration."
originalDescription: "信驿 Relay：Android 短信、应用通知与通话通知转发工具，支持多通道转发、规则过滤与自动迁移。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/magisk317/xinyi-relay"
homepage: "https://play.google.com/store/apps/details?id=io.github.magisk317.xinyi.relay"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [77]
topics: ["notifications", "sms", "bark", "dingtalk", "email", "feishu", "gotify", "lark", "ntfy", "pushplus"]
stars: 137
forks: 6
openIssues: 2
closedIssues: 20
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-03-05T16:13:46Z"
lastCommitAt: "2026-09-30T09:28:54Z"
lastReleaseAt: "2026-04-06T15:28:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 34
maintainers: ["magisk317"]
openGraphImageUrl: "https://opengraph.githubassets.com/70c7ef991a198b22c8615fc74601b3d6f2ed3cb1d2f232665f13f880bb0e6a82/magisk317/xinyi-relay"
discussionCount: 14
---

# Xinyi Relay

Xinyi Relay is a message forwarding and automatic verification code filling tool for Xposed/LSPosed, supporting unified processing from SMS, app notifications, incoming calls, and other sources.

The project currently consists of three main components:

- Mobile (Android): Responsible for local event collection, verification code parsing, automatic input, and Xposed Hook
- Backend: Responsible for multi-device binding, configuration snapshots, record reporting, and cloud Web console
- Desktop: Cross-platform desktop management tool with built-in local SQLite database, supporting independent offline operation and cloud synchronization

The old embedded WebUI has been removed from the Android main execution chain. The current official architecture is `Android Agent + Backend / Desktop` working in coordination.

[English Version](https://github.com/magisk317/xinyi-relay/blob/HEAD/README-EN.md)

# Application Screenshots

# Communication and Feedback
- [Telegram Group](https://t.me/+NR2QaQ4dlEgxYmNl)

## Mobile

The mobile is a runtime-adaptive Android Agent: when a valid Xposed/LSPosed runtime is detected, it enters Enhanced mode; when there is no Xposed, it uses the…
