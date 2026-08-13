---
repo: "alib8b8/aflare"
name: "aflare"
description: "本地优先的自动化 Agent — ReAct 推理循环 · 300+ 技能模板 · 确定性工作流执行（DAG/WAL/Saga/幂等） · MCP 协议 · 10 类可插拔能力"
readmeQualityOk: true
url: "https://github.com/alib8b8/aflare"
homepage: "https://github.com/alib8b8/aflare"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["automation", "workflow", "llm", "mcp", "agent", "dag", "go", "local-first", "react", "saga"]
stars: 10
forks: 2
openIssues: 5
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2022-10-16T07:06:31Z"
lastCommitAt: "2026-08-13T05:18:32Z"
lastReleaseAt: "2026-08-07T14:38:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 78
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/3f62b548b2af45124feb9fb3008568c0aaf939c6b9cbd2f4cd2b1c42de3eb8f2/alib8b8/aflare"
discussionCount: 2
---

<h1>aflare</h1>
  <p>
    <strong>中文</strong> ·
  </p>
  <p><strong>让 AI 告别聊天，开始执行</strong></p>
  <p><em>ReAct 推理循环 · 300+ 技能模板 · 确定性工作流执行 · 10 类可插拔能力</em></p>

  <p>
    </a>
    </a>
    </a>
    </a>
  </p>
</div>

---

## 快速开始

```bash
# 安装
brew install alib8b8/tap/aflare
# 或: curl -fsSL https://raw.githubusercontent.com/alib8b8/aflare/main/install.sh | bash

# 可选：安装 bubblewrap 以获得完整沙箱隔离（code_interpreter 节点需要）
# Ubuntu/Debian: sudo apt install bubblewrap
# macOS:        brew install bubblewrap
# Fedora:       sudo dnf install bubblewrap
```

```bash
# 关键词生成工作流
aflare create "每 10 分钟检查 BTC 价格，超过 70000 发 Telegram 通知"
# 输出: 工作流已生成 → btc-monitor.yaml

# 运行工作流
aflare run btc-monitor.yaml

# 交互式 AI Agent 对话（ReAct Agent + 300+ 技能）
aflare chat
# 或者: aflare chat -p deepseek -m deepseek-chat

# 守护进程式 Agent（融合 stdin + 定时任务） + 可插拔能力
aflare agent -c reflection,bdi,utility
```

---

## 项目状态

aflare 目前处于 **v0.7 早期阶段**。核心 Runtime 能力（DAG 调度、WAL 崩溃恢复、Saga 事务补偿、幂等、重试/熔断）已实现并通过 CI 验证。部分高阶特性（信创芯片适配、宇树机器人）为实验性支持，欢迎试用和反馈。

---

## 这是什么？

aflare 是一个**本地优先的自动化 Agent**，也是**确定性工作流执行引擎**。两种模式共用同一核心：

```
对话式 Agent                    声明式工作流
─────────────────              ─────────────────
aflare chat…
