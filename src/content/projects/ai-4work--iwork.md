---
repo: "ai-4Work/iWork"
name: "iWork"
description: "自主办公智能体"
readmeQualityOk: true
url: "https://github.com/ai-4Work/iWork"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [59, 26]
topics: ["agent", "agent-skill", "memory", "muti-agent"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-17T02:40:21Z"
lastCommitAt: "2026-09-19T01:37:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 16
maintainers: ["lxxl-lxxl"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2cc43980795a281eca423b2feccdfa0534bbf86735c8e4278a4e84dd4422911/ai-4Work/iWork"
---

</p>

<h1 align="center">iWork</h1>

本工程采取C/S 模式开发，一句话概况「治理集中，执行本地」。需要统一管控的事情留在服务端，需要碰真实资源的事情放到用户机器上。判断标准是资源在哪儿 —— 你的代码、密钥、内网服务都在本地，让一个远端进程去直接读写它们既不安全也没必要；反过来，上下文、token 消耗、模型调用、审计这些需要集中治理的部分，一旦放到各人本地，就等于每个终端一套政策，管不住。

| | 服务端 | 客户端 |
|---|---|---|
| **角色** | 大脑 + 政策制定者 | 手 + 执行现场 |
| **负责** | Query Loop 编排、模型调用、上下文压缩、权限判定、会话持久化、审计与指标 | 对话界面、文件读写、shell 执行、MCP 子进程、沙箱、域名审批 |
| **不负责** | 不亲自执行文件与命令类工具，只判断该不该执行、要不要审批、要不要进沙箱，然后把决策下发 | 不调用模型、不管上下文与 token |

| Skill 中心 · Hub | MCP 中心 · Hub |
|---|---|
|  |  |

| 问答执行 | 专家团并行协作 |
|---|---|
|  |  |

## 一次完整交互

```mermaid
sequenceDiagram
    participant U as 用户
    participant C as 客户端
    participant S as 服务端
    participant L as 模型

    U->>C: 输入一句话
    C->>S: 发送消息（流式请求）
    S->>S: 入队并推送排队事件
    S->>S: 推送消息开始
    S->>L: 流式请求，带上工具定义
    L-->>S: 文本与推理增量
    S-->>C: 推送文本与推理增量
    C-->>U: 逐字渲染
    L-->>S: 请求调用工具，例如 bash
    S->>S: 权限判定，结论是需要审批
    S-->>C: 下发工具请求，标记需要审批
    C->>U: 弹出审批卡片
    U->>C: 点确认
    C->>C: 进程间执行，过沙箱与域名审批
    C->>S: 回投工具结果
    S->>L: 把工具结果交回模型
    L-->>S: 最终回答
    S-->>C: 推送消息完成
```

这条链路把 C/S 的分工讲全了：中间那次工具调用没有跨过进程边界，服务端只负责判断"这一步需要审批"，真正的执行与拦截都发生在客户端。

## 功能清单

| 模块 | 能做什么 |
|---|---|
| 会话与消息 | 1.…
