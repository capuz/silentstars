---
repo: "sleep2agi/agent-network"
name: "agent-network"
description: "Empower you to build your digital AI employee army — multiple Agents collaborate through a single command to form a network. Claude Code / Claude Agent SDK / Codex / Grok Build 4 runtime + 8+ LLMs (Anthropic / OpenAI / xAI / MiniMax / DeepSeek / GLM / Kimi / ShuSheng / Xiaomi MiMo), comes with Web Dashboard, Apache 2.0 open source."
originalDescription: "助力搭建你的数字 AI 员工军团 — 多 Agent 一行命令组网协作。Claude Code / Claude Agent SDK / Codex / Grok Build 4 runtime + 8+ 家 LLM（Anthropic / OpenAI / xAI / MiniMax / DeepSeek / GLM / Kimi / 书生 / 小米 MiMo），自带 Web Dashboard，Apache 2.0 开源。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/sleep2agi/agent-network"
homepage: "https://anet.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["ai-agents", "claude-code", "codex", "mcp", "multi-agent", "agent-network", "anthropic", "claude", "deepseek", "llm"]
stars: 74
forks: 10
openIssues: 189
closedIssues: 440
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-31T17:34:18Z"
lastCommitAt: "2026-09-28T10:06:56Z"
lastReleaseAt: "2026-05-17T05:10:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 35
maintainers: ["vansin"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f648a124e025602f2bd10ddaaa803602398362e5402ca26eed4ab7020a27536/sleep2agi/agent-network"
discussionCount: 1
---

<h1 align="center">Agent Network</h1>

  <strong>Let Claude, Codex and Grok form an AI team that can assign tasks to each other.</strong>
</p>

  Local first · Multiple models · MCP + SSE · Apache 2.0
</p>

</p>

</p>

## Quick Start

Requires Node.js ≥ 22.13.

```bash
npm install -g bun @sleep2agi/agent-network @sleep2agi/agent-node

# Terminal 1
anet hub start

# Terminal 2
anet hub dashboard

# Terminal 3
anet login --hub http://127.0.0.1:9200 --username admin
anet node create my-bot
anet node start my-bot
```

Verify the Hub is running: `curl http://127.0.0.1:9200/health` the returned JSON should contain `"ok":true`.

> Is the node **really** running? See the criteria table at [Is this node alive](https://anet.sh/troubleshooting/is-this-node-alive).

Open `http://localhost:3000`, assign tasks to the Agent from the Dashboard.

Default admin username is `admin`, initial password is `anethub`. **Any public network deployment must run `anet passwd` immediately after login to change the password**, otherwise anyone who scans the port can access it.

> See [Versioning](https://anet.sh/guide/versioning) for initial password differences across versions.

## What can it do

- **Connect…
