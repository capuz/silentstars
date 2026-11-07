---
repo: "kirayomato/vtb_dynamic_push"
name: "vtb_dynamic_push"
description: "Bilibili dynamic/live stream monitoring and Weibo monitoring push tool"
originalDescription: "B站动态/直播监测和微博监测推送工具"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kirayomato/vtb_dynamic_push"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [70, 30]
stars: 13
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-01-17T14:34:46Z"
lastCommitAt: "2026-11-07T13:55:17Z"
lastReleaseAt: "2024-09-13T12:39:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 58
maintainers: ["kirayomato"]
openGraphImageUrl: "https://opengraph.githubassets.com/24f619971f7da5efc3991e83a649100b21354cf079c749d556ddaf1b3208dd42/kirayomato/vtb_dynamic_push"
---

# vtb_dynamic_push
## Introduction

Periodically checks specified Bilibili accounts for dynamic updates, livestream starts, and Weibo updates. If a change is detected, it sends a push notification.

This project is based on [nfe-w](https://github.com/nfe-w)'s [bili_dynamic_push](https://github.com/nfe-w/bili_dynamic_push) and [weibo_dynamic_push](https://github.com/nfe-w/weibo_dynamic_push/). Before using this project, it is recommended to read the introduction of the original projects.

This project adds several features on top of the original project:

1. Supports entering a Cookie to retrieve followers-only content, and notifies you when the Cookie becomes invalid

    The method for checking whether the Weibo Cookie is valid: if the fetched Weibo list contains followers-only Weibo posts, the Cookie is valid. You need an account that has recently posted followers-only Weibo content.

    Currently, Bilibili dynamics require a Cookie to be fetched; querying livestreams does not require one for now.

2. Windows pop-up notifications, more convenient for desktop users. The effect is shown below:

    

    Clicking the message or the button below opens the corresponding…
