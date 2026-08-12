---
repo: "shibing624/agentica"
name: "agentica"
description: "Build AI agents that run for hours, not seconds. Async-first Python harness: auto context-compaction, cost budgets & death-spiral guards, persistent cross-session memory, self-evolving SKILL.md, /goal long-task loop, 40+ tools, 20+ models, MCP/ACP. Ships a CLI + Web Gateway out of the box."
readmeQualityOk: true
url: "https://github.com/shibing624/agentica"
homepage: "https://shibing624.github.io/agentica/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["agent", "agents", "langchain", "llm", "multi-agent", "agentica", "agent-framework", "ai-agent", "cli", "mcp"]
stars: 345
forks: 49
openIssues: 1
closedIssues: 19
watchers: 9
contributors: 8
recentReleases: 0
createdAt: "2024-06-03T12:07:51Z"
lastCommitAt: "2026-08-12T05:13:29Z"
lastReleaseAt: "2025-12-21T14:30:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 40
maintainers: ["shibing624"]
openGraphImageUrl: "https://opengraph.githubassets.com/0593572a4bfd8ce851e86fa28172e12162348344a86f0fad3d3c6b8db7c3a462/shibing624/agentica"
---

[**🇨🇳中文**](https://github.com/shibing624/agentica/blob/main/README.md) | [**🌐English**](https://github.com/shibing624/agentica/blob/main/README_EN.md) | [**🇯🇵日本語**](https://github.com/shibing624/agentica/blob/main/README_JP.md)

  </a>
</div>

-----------------

# Agentica

**让 Agent 真正跑起来——跑得久、不跑飞、能干活、会进化。**
Async-first Python agent harness · 40+ 工具 · 20+ 模型 · MCP · CLI + Web Gateway

**Agentica** 不是套一层 LLM API 的聊天壳，而是一个 Async-First 的 agent harness——让 Agent 真正跑起来：调工具、跑长任务、多智能体协作、跨会话记忆，并持续自我进化。

|  | |
|------|------|
| **跑得久，不跑飞** | 专门 Agentic loop 驱动的 LLM ↔ Tool 长循环，内置上下文压缩、成本预算、死循环防护，长任务不断链 |
| **能干活，不只聊天** | 文件、执行、搜索、浏览器、MCP、多智能体、Workflow——真实动手，不绑定单一 IDE |
| **多会话协作** | 跨终端 peer 互发消息；`delegate` 另起完整进程（独立 context / cwd），`task` 便宜进程内 subagent——三种机制分工明确 |
| **记得住，会遗忘** | 记忆按条目存储、相关性召回、drift 防御；常驻规则写进 `users/{user_id}/AGENTS.md`（人与 agent 都能改） |
| **越用越强** | 工具失败 / 用户纠正 / 成功序列沉淀为经验卡片，自动编译成可复用的 `SKILL.md`，跨会话生效 |
| **全可换，不锁死** | 模型、工具、记忆、Skill、Guardrails、MCP 都是可替换部件，而非封闭 SaaS 黑盒 |

### 和其它框架对比

| | Agentica | LangChain | AutoGen / CrewAI | Pydantic AI |
|---|---|---|---|---|
| Async-first agentic loop | ✅ 内置压缩/预算/防死循环 | 片段拼装 | ✅ | ✅ |
| 自进化 Skill | ✅ 自动编译 `SKILL.md` | ❌ | ❌ | ❌…
