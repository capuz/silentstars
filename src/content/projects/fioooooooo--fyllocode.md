---
repo: "Fioooooooo/FylloCode"
name: "FylloCode"
description: "Coding Agent 的治理层，让 Agent 遵守同一套可执行且持续演进的工程规范，全程可追溯"
readmeQualityOk: true
url: "https://github.com/Fioooooooo/FylloCode"
homepage: "https://fyllocode.cc"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["acp", "agent-client-protocol", "agentic-coding", "ai-agent", "ai-governance", "coding-agent", "developer-tools", "mcp", "mcp-server", "openspec"]
stars: 26
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-17T09:59:45Z"
lastCommitAt: "2026-08-04T06:09:36Z"
lastReleaseAt: "2026-06-01T05:32:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 47
maintainers: ["Fioooooooo"]
openGraphImageUrl: "https://opengraph.githubassets.com/669d6160c30768e52721c1062d49441dc029c5f0825697f4252af685ed8ab086/Fioooooooo/FylloCode"
---

</p>

<h1 align="center">FylloCode</h1>

  Coding Agent 的团队治理层<br/>
  让全队的 Agent 遵守同一套持续进化的规则、全程可追溯。<br/>
</p>

</p>

---

## 背景

每个 Agent 会话一结束，代码留下来了，决策却丢失了 ……

- **三天后不知道这行代码为什么改。** Agent 帮你动了 100+ 个文件，`git blame` 只告诉你谁提交的，不告诉你当时的决策背景。
- **两个月后没人知道方案的设计依据。** Agent 给出了一个架构方向，其他候选方案为什么被放弃——这些推理过程全消失在当时的聊天窗口里。
- **每个新会话都要从头建立上下文。** 相同的问题，每个 Agent、每次对话都要重新解释一遍项目约束、历史决策和禁忌操作。
- **全队的 Agent 各跑各的规则。** 没有统一的工程规范，没有跨 Agent、跨会话的一致性，靠个人习惯维系的代码风格在 Agent 时代加速崩解。

这几个问题的根源相同：**Agent 缺少一个持久的、结构化的项目治理层。** FylloCode 就是这个治理层。

---

## 核心机制

FylloCode 在你已有的代码库和研发工具链之上工作，不替代 IDE，不替代
CI/CD，不替代项目管理系统——它在这些系统上面加一层，专门解决"团队里如何持续用好 Agent"的问题。

```
研发系统（GitHub / 云效 / Jira ...）
        ↑ 回写任务结果
┌──────────────────────────────┐
│         FylloCode            │  ← 治理层
│  fyllo-specs · fyllo-cortex  │
└──────────────────────────────┘
        ↓ 约束 & 注入上下文
   Coding Agent（任意）
        ↓
      代码库
```

| 能力             | 说明                                                                                          |
| ---------------- | --------------------------------------------------------------------------------------------- |
| **统一规范**     | `fyllo-specs` MCP 服务器向所有 Agent 暴露项目级规范，跨会话、跨 Agent 持续生效…
