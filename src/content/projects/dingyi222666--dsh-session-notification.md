---
repo: "dingyi222666/dsh-session-notification"
name: "dsh-session-notification"
description: "Provides session-completion and other state notification responses for the Deepseek Harness across four states, supporting browser alerts and prompt words"
originalDescription: "为 Deepseek Harness 提供会话完成等四种状态的通知响应，支持浏览器提示和提示词"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/dingyi222666/dsh-session-notification"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["dsh-plugin"]
stars: 35
forks: 4
openIssues: 1
closedIssues: 9
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-12T18:19:59Z"
lastCommitAt: "2026-11-27T12:54:26Z"
lastReleaseAt: "2026-09-04T17:19:48Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 45
maintainers: ["dingyi222666", "j62268781-alt", "RushMove"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc16c3405e9678c085c5fec68875c072fe59a0f13906788bd346445798997a13/dingyi222666/dsh-session-notification"
---

# dsh-session-notification

English | [中文](https://github.com/dingyi222666/dsh-session-notification/blob/HEAD/README.zh.md)

A notification plugin for the dsh web GUI. When a session finishes, hits an error, asks you a question, or needs your permission, you get a heads-up: a sound plays, and when you step away from the tab a system notification keeps you in the loop.

## Screenshots

| The settings panel with the **Notifications** entry in the sidebar and the section content | The sound picker for each kind (the official dropdown) |
| --- | --- |
|  |  |

## Install

```sh
# Install from npm (requires dsh >= 0.2.3)
dsh plugin --profile web add @dingyi222666/dsh-session-notification
# Restart dsh web for it to take effect
dsh web
```

Everything lives in this plugin — no harness (host) changes:
