---
repo: "lengzhao/agentkit"
name: "agentkit"
description: "A plugin-based agent in Go, a Golang implementation inspired by DeepSeek's harness."
originalDescription: "参考deepseek的harness实现的一个golang版本的插件化agent"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lengzhao/agentkit"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-08-20T13:54:01Z"
lastCommitAt: "2026-10-29T14:07:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 50
maintainers: ["lengzhao", "ambergroup-io"]
openGraphImageUrl: "https://opengraph.githubassets.com/259a1fe4558a036f90542b7d29f500c38c2a4b2d1c0d43d8e741991d7231a5bc/lengzhao/agentkit"
---

# AgentKit

**English** | **[中文](https://github.com/lengzhao/agentkit/blob/HEAD/README.zh.md)**

Go Agent Harness runtime built on [pluginkit](https://github.com/lengzhao/pluginkit). Assemble Runner, Platform, Loop, Agent, tools, and policies from YAML. Supports interactive REPL, long-running autonomous loops, sub-agent delegation, MCP, Slack/Feishu/ACP integrations, and headless daemons.

## Features

- **Plugin assembly** — 79 registered plugin kinds; L0 defaults plus L1 overlays
- **Coding agent loop** — file I/O, shell, policy approval, JSONL session persistence
- **Autonomous runs** — turn continuation (`hook/turn-continue`), todo/finish, token compaction, crash recovery
- **Sub-agent delegation** — define sub-agents in `agents/*.md`; the main agent only sees summarized results
- **Self-learning** — `/learn` for `memory.md`, Grounded Dreaming, Skill Workshop proposals
- **Network tools** — HTTP fetch, Exa search, human-in-the-loop prompts
- **Integrations** — Slack, Feishu, HTTP chat API, Langfuse; multiplex several IM channels; expose AgentKit or call remote agents over ACP (e.g. Cursor CLI). See [presets —…
