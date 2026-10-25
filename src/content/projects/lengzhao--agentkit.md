---
repo: "lengzhao/agentkit"
name: "agentkit"
description: "A plugin-based agent written in Go, inspired by the deepseek harness implementation"
originalDescription: "参考deepseek的harness实现的一个golang版本的插件化agent"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lengzhao/agentkit"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-08-20T13:54:01Z"
lastCommitAt: "2026-10-25T02:46:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 47
maintainers: ["lengzhao", "ambergroup-io"]
openGraphImageUrl: "https://opengraph.githubassets.com/23dee3765fb4bcc1437b0b8c6c9a34a9d1e88899f85c515a95989510cf256eed/lengzhao/agentkit"
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
