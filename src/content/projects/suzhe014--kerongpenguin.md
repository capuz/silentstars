---
repo: "SUZHE014/KERONGPenguin"
name: "KERONGPenguin"
description: "A very simple MCQQ bot plugin"
originalDescription: "一个很简单的MCQQ机器人插件 "
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SUZHE014/KERONGPenguin"
language: "Python"
languages: ["Python", "Kotlin", "Java"]
languagePcts: [41, 31, 22]
stars: 6
forks: 3
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-21T17:29:07Z"
lastCommitAt: "2026-11-18T12:03:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["SUZHE014"]
openGraphImageUrl: "https://opengraph.githubassets.com/f781ae1e5465e634584393fefb793d4809b8d9f68259cb281f7e3324a9fb7565/SUZHE014/KERONGPenguin"
---

# 🤖 KERONG Penguin

> ⚠️ **This plugin is a heavily customized version based on an open-source QQ bot client solution** (the source code has been rewritten as a readable Kotlin project)

A Minecraft QQ bot plugin that enables deep interaction between QQ groups and the server through the official QQ Bot API.

## Design References

- **Image rendering UI design reference: BaiZhouziYou / 新亭泪** (source:
  <https://xintinglei.cn/>, template collection:
  <https://github.com/BaizhouziYou/easybot-image-templates/>)
  —— The frosted-glass dark style of /查信息卡片, /查在线列表, and the leaderboards. Early versions replicated the image templates this author published on the EasyBot resource marketplace (see
  [issue #1](https://github.com/SUZHE014/KERONGPenguin/issues/1)).
  The liquid-glass style of the /查性能卡片 (performance card) references the liquid-glass theme of the author's EasybotServerPerformanceTemplate-WebGL template. It was later unified with the other cards into a semi-transparent frosted-glass system (blur level controlled by render.blur-strength).
  Subsequent pagination, background, and avatar rendering are independent improvements made by this project.
