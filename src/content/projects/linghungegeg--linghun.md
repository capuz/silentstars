---
repo: "linghungegeg/Linghun"
name: "Linghun"
description: "AGI-oriented, hallucination-resistant AI coding runtime grounded in evidence, tools, memory, agents, and verification."
url: "https://github.com/linghungegeg/Linghun"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["agi", "ai", "ai-agent", "ai-coding", "coding-agent", "developer-tools", "evidence-first", "llm", "local-first", "multi-agent"]
stars: 81
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-14T17:55:56Z"
lastCommitAt: "2026-06-28T01:33:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 28
maintainers: ["linghungegeg"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e25727afc5acc8aa5e7da9f5f3b32911933dcf03149cf89737adba0a313ec9c/linghungegeg/Linghun"
---

# Linghun

**本地优先、证据优先的 AI 编程终端**

把大模型接到真实项目、真实工具、真实权限、真实验证和真实上下文里。

[English README](./README.en.md) · [中文白皮书](./WHITEPAPER.md) · [English Whitepaper](./WHITEPAPER.en.md) · [更新记录](./docs/updates.md) · [App Bridge](./docs/developers/capability-runtime-app-bridge.md)

</div>

```bash
npm install -g @linghun/cli
linghun
```

---

Linghun 可以理解成：给大模型装上一套工程化外骨骼。模型负责理解、推理和生成；Linghun 负责把模型接到真实项目、真实工具、真实权限、真实验证和真实上下文里。

普通聊天工具可以回答“应该怎么改”。Linghun 更关心另一件事：它有没有真的读过相关代码、有没有真的改对文件、有没有真的跑过验证、有没有把不确定的地方说清楚。

这就是 Linghun 反幻觉系统的价值：不是让模型少说错话那么简单，而是把“读事实、看证据、区分验证范围、拒绝空口完成、说明不确定性”变成运行时约束。模型仍然会推理和生成，但关键工程结论不能只靠模型自信。

## Novita x Harbor 榜单记录

Linghun 已完成 Novita x Harbor Agent Benchmark 四个公开 TB2.1 榜单的运行与提交：

| 榜单 | Harbor 记录 |
| --- | --- |
| File & Recovery | [f77879ac-b30f-47bb-8fb1-650108364fc0](https://hub.harborframework.com/jobs/f77879ac-b30f-47bb-8fb1-650108364fc0) |
| Systems & Security | [151a5351-bbf9-45c9-ae2f-1f8db1cd0619](https://hub.harborframework.com/jobs/151a5351-bbf9-45c9-ae2f-1f8db1cd0619) |
| Data & Science | [dc4a720b-79a5-49dd-b083-6fc40acd1079](https://hub.harborframework.com/jobs/dc4a720b-79a5-49dd-b083-6fc40acd1079) |
| Code & Debug |…
