---
repo: "panqing0313/dsh-plugin-weixin"
name: "dsh-plugin-weixin"
description: "WeChat (iLink) channel plugin: send messages to the DSH Agent in WeChat, run sessions on this machine, and send replies back to WeChat. Text, images, files and voice notes."
originalDescription: "微信（iLink）通道插件：在微信里给 DSH Agent 发消息，在本机跑会话并把回复发回微信。Text, images, files and voice notes."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/panqing0313/dsh-plugin-weixin"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["cordis-plugin", "dsh", "dsh-plugin", "ilink", "wechat", "weixin"]
stars: 8
forks: 2
openIssues: 5
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-14T05:01:51Z"
lastCommitAt: "2026-10-31T09:43:50Z"
lastReleaseAt: "2026-10-19T01:18:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 52
maintainers: ["panqing0313", "qianhaoq"]
openGraphImageUrl: "https://opengraph.githubassets.com/903de8ae06a310a7fdc71f7b14b3b50e5928291f85b8af944e609d652c9cc9d3/panqing0313/dsh-plugin-weixin"
---

# dsh-plugin-weixin

Turns **personal WeChat** into a remote control for DeepSeek Harness (DSH): send a message in WeChat, and the DSH Agent opens a local session to carry it out and sends the result back to you.

- **Want to get work done from WeChat** → [Install](#安装) → [Log in](#登录) → [Authorization (important)](#授权重要). After these three steps you can send messages.
- **Want to change behavior** → [Configuration](#配置) (each option is listed in the table below, and the same table appears in the settings card).
- **Want to see what changed in a version** → [CHANGELOG.md](https://github.com/panqing0313/dsh-plugin-weixin/blob/HEAD/CHANGELOG.md).
- **Want the notification bridge, away mode, shared list, and other switches** → [docs/extras.md](https://github.com/panqing0313/dsh-plugin-weixin/blob/HEAD/docs/extras.md).
- **Something went wrong** → `npm run doctor` (11-item health check), then follow the troubleshooting order in [Documentation](#文档).

## Contents

- [Highlights](#亮点) · [Current status](#当前状态) · [Directory structure](#目录结构)
- [Install](#安装) · [Log in](#登录) · [Authorization (important)](#授权重要) · [Configuration](#配置)
- [Sessions](#会话一个微信会话可以用多条-dsh-会话) · [Outbound…
