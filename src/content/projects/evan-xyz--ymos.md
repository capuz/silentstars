---
repo: "Evan-XYZ/YMOS"
name: "YMOS"
description: "Agent时代一个支持自我进化的投资操作系统：帮你盯市场做投研，把你的策略沉淀成规则、把你的操盘变成流程、把你的决策留成证据，用真实结果反过来迭代自己。少犯错，活得久。"
readmeQualityOk: true
url: "https://github.com/Evan-XYZ/YMOS"
homepage: "https://yongmai.xyz/ymos-docs/"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [57, 43]
stars: 196
forks: 44
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-02-12T08:10:21Z"
lastCommitAt: "2026-08-09T04:47:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 15
maintainers: ["MmYYAIS"]
openGraphImageUrl: "https://opengraph.githubassets.com/902cc2d9ebb3ce1ad068c70785299b8bca43141afd33584fc642f4d4338d424f/Evan-XYZ/YMOS"
---

# YMOS V4 — 勇麦的投资操作系统（我给大家打个样）

**Yongmai Operating System** · Agent 时代一个支持自我进化的投资操作系统：帮你盯市场做投研，把你的策略沉淀成规则、把你的操盘变成流程、把你的决策留成证据，用真实结果反过来迭代自己。**少犯错，活得久。**

> 👀 **部署前先看看长什么样：** [打开 YMOS Console 浏览器 Demo](https://evan-xyz.github.io/YMOS/)
>
> Demo 可以体验 Reader、交易计划台和买卖决策台，只使用脱敏合成示例；草稿保存在当前浏览器，不读取持仓、Watchlist 或 API Key，也不会写入服务器或执行交易。完整 Markdown-first 工作流仍需按下方步骤在本地启动 Console。

**简单说，YMOS 是让 AI Agent 进入你日常投资流程的一套本地工作台：**

- 它替你持续看市场、跟踪持仓与关注，把新闻、价格和研究资料压缩成**市场洞察与投资雷达**；
- 它把你原本散在脑中、笔记和临场反应里的投资逻辑，整理成 Agent 能反复执行的 **Profile、SOP 和判断规则**；
- 当你真的要行动时，它用 **Reader、交易计划、买卖门禁和复盘留痕**，帮助你按自己事先定下的逻辑走完，而不是盘中重新发明规则。

你可以先只把它当作 AI 投研系统使用，之后再逐步装入自己的策略内核和操盘习惯，不需要第一天配置完整套系统。

> **边界只有一条：YMOS 提供研究、判断与纪律支持，不提供荐股信号，也不替你自动交易；所有榜单、报告和 Agent 结论都只是输入，最终决策与结果由你负责。**

🔄 **V4 的关键变化**：保留 V3 已经跑通的投研主链，把系统进一步抽象为**投研层、策略内核层、操盘层**；新增 Skills 数据触角、Reader 与操盘工作台、Strategy Profile 和证据反馈闭环，并把「共用框架」与「勇麦个人策略」彻底掰开。框架给所有人，策略需要你自己打磨。详见 [CHANGELOG](https://github.com/Evan-XYZ/YMOS/blob/HEAD/CHANGELOG.md)。

---

## 三层：研究清楚 → 按自己的逻辑判断 → 按计划操盘

```text
       投研层        →       策略内核层       →       操盘层
   看市场、做研究          形成自己的判断          计划、门禁、执行、留痕
  Eyes + Skills       Brain + Profile + 状态       Console + Human
```

| 层 | 相当于 |…
