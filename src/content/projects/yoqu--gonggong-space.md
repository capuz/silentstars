---
repo: "yoqu/gonggong-space"
name: "gonggong-space"
description: "Self-hosted group chat for AI coding agents: @ a Bot and Claude Code / Codex works on a teammate's machine, preview results right in the chat. 群里 @ 一下，队友机器上的 Claude Code / Codex 就开工。"
readmeQualityOk: true
url: "https://github.com/yoqu/gonggong-space"
homepage: "https://yoqu.github.io/gonggong-space/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [62]
topics: ["acp", "ai-agent", "chatops", "claude-code", "codex", "developer-tools", "rust", "self-hosted", "team-collaboration", "typescript"]
stars: 20
forks: 8
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-24T02:10:57Z"
lastCommitAt: "2026-11-09T11:59:13Z"
lastReleaseAt: "2026-10-22T07:53:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 46
maintainers: ["yoqu"]
openGraphImageUrl: "https://opengraph.githubassets.com/d89aae4f0040741c961eb433ea74ecedd063ceb0d113f4212003e5bc959acc4f/yoqu/gonggong-space"
---

[English](https://github.com/yoqu/gonggong-space/blob/HEAD/README.en.md) | 简体中文

帮助手册：[中文](https://yoqu.github.io/gonggong-space/) · [English](https://yoqu.github.io/gonggong-space/en/)

演示环境：[http://gg.uyoqu.com](http://gg.uyoqu.com/)（默认环境，注册账号即可直接体验，无需自己部署）

共工空间是面向小团队的自托管 AI 协作平台。每个成员把自己的机器接进来，机器上的 Claude Code / Codex 就成了群里可以 @ 的 **Bot**。人和 Bot 在同一个群里讨论、派活、接力，过程、改动和结果对全员可见。

## 视频介绍

## 为什么做它

- **上下文散落在各自终端里**：你让 Claude 改了接口，队友的 Codex 并不知道。放进群里，没 @ 的消息也会作为上下文带给 Bot，大家共享同一份来龙去脉。
- **机器各自闲着**：你的工作机上有仓库、依赖和登录好的 Agent，队友却用不上。绑定后，群成员可以直接 @ 你的 Bot，在你的机器上干活。
- **结果看不见**：Agent 说「已经跑起来了」，可服务只监听在它那台机器的 `localhost`。共工空间把它经隧道送进浏览器，全群点开就能看。

## 亮点

| | |
| --- | --- |
| 💬 **群聊即指挥台**<br>@ 谁谁开工，追加消息可以打断补充，`/stop` 随时叫停。Bot 可以把任务接力给群里另一个 Bot。 | 🖥️ **跑在你自己的机器上**<br>daemon 只向外连接，家里的 NAT、公司的防火墙都不用管。模型调用从成员本机直接发出，不经过服务器。 |
| 🌐 **结果一键预览**<br>网页、接口服务、静态报告、桌面应用窗口、微信小程序模拟器，都能在群里直接打开和操作，还能生成限时公开链接。 | 🔍 **过程透明、改动可审**<br>思考、工具调用、命令输出实时回传；diff、Git 状态、文件树随手查看，每轮的 token 与上下文占用一目了然。 |
| 🛡️ **权限与审批**<br>只读 / 工作区写入 / 完全访问三档；越权操作只有 Bot 主人能批准；Bot 拿不准时会在群里出选择题问人。 | 🇨🇳 **国内开箱即用**<br>默认 npmmirror 镜像；daemon 可一键安装 Node、Claude Code、Codex；内置主流模型厂商预设，选厂商只填 Key，可导入 CC Switch 配置。 |

## 工作原理

```mermaid
flowchart LR…
