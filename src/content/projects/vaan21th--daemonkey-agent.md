---
repo: "Vaan21th/daemonkey-agent"
name: "daemonkey-agent"
description: "A local-first AI companion daemon — remembers you, grows with you, extends and repairs itself. 跑在你自己电脑上的 AI 搭档守护进程:会记住你、随你成长、能自加技能、能自我修复。"
readmeQualityOk: true
url: "https://github.com/Vaan21th/daemonkey-agent"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [55, 31]
topics: ["ai-agent", "ai-companion", "daemon", "llm", "local-first", "personal-assistant", "python", "self-hosted", "wechat"]
stars: 76
forks: 9
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-17T23:10:10Z"
lastCommitAt: "2026-08-17T04:16:51Z"
lastReleaseAt: "2026-07-30T06:58:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 35
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/af640afd7fe25d3560a0715c32a01235cc19a69b20c2769b0534cee00d9a6872/Vaan21th/daemonkey-agent"
---

# Daemonkey · 守护猴

**一个记住你、与你一起成长、有七十二变的本地 AI 搭档**
*A local-first AI companion that remembers you, grows with you, and has seventy-two transformations*

[中文](#中文) · [English](#english) · [架构 Architecture](#-架构总览--architecture) · [路线图 Roadmap](https://github.com/Vaan21th/daemonkey-agent/blob/HEAD/ROADMAP.md) · [更新历史 Changelog](https://github.com/Vaan21th/daemonkey-agent/blob/HEAD/CHANGELOG.md)

</div>

---

## 这是什么

**Daemonkey** 是一个跑在你自己电脑上的 AI 搭档守护进程（daemon）。它不是又一个聊天框——它是一个**会记住你、随你一起长大、能自己加技能、甚至能自己修自己**的本地智能体。

第一次打开时，它还是一颗"种子"：没有名字、还不认识你。你们的第一次对话（"相遇"），就是它认识你、和你成为搭档的开始。从此，**模型可以换、电脑可以换，但它一直是同一个"它"**。

> 别的 Agent 卖的是"技能"——记忆是关于*你的数据*。
> Daemonkey 卖的是"关系"——记忆是*你和它一起走过的路 + 它自己的成长*。

### 为什么不一样

- 🧠 **6 层记忆体系** —— 从模型权重到跨设备同步，逐层叠加。它"记得"你，不是靠每次重读一本说明书。
- 🏠 **本地优先 · 数据不出门** —— daemon 跑在你自己的机器上，对话、画像、记忆全部留在本地。
- 🔧 **七十二变 · 能力可自生长** —— Playbook / 出品工坊 App / MCP 服务器 / 自写 agent_tool / 导入外部 SKILL，五条路给它加本领；它还能**自己上网找能力**（能力发现引擎）。
- 🩹 **自愈 + 自升级** —— 把自己改崩了？双击维修台让它自己诊断修复，或一键回档。内核能从官方源增量升级，而**你自己长出来的功能不会被覆盖**。
- 📜 **产品宪法** —— 闭环范式 / NLP 优先 / 可追溯，三条根本原则写进它的"基因"，约束每一次判断。
- 🌐 **多载体** —— 网页 WebUI（现在）→ 终端 → 微信 / IM → 桌面机器人（路线图）。换壳不换魂。

---

## 🗺️ 架构总览 · Architecture

> 入口 → 核心引擎 → 工具（它的手）+…
