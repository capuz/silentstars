---
repo: "while-coder/sbot"
name: "sbot"
description: "Self-hosted AI agent server. Multi-LLM (OpenAI/Claude/Ollama), MCP tools, long-term memory, multi-agent ReAct, Lark/Feishu, Wecom/Wechat, Web UI."
readmeQualityOk: true
url: "https://github.com/while-coder/sbot"
homepage: "https://while-coder.github.io/sbot/"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [62, 31]
topics: ["ai-agent", "chatbot", "long-term-memory", "multi-agent", "react-agent", "self-hosted", "typescript"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-03-13T02:18:24Z"
lastCommitAt: "2026-07-30T06:10:45Z"
lastReleaseAt: "2026-05-22T03:16:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 62
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/9579d3af125430ebfe3d8f0275709b69d3b006897e1f4d9f99e6653a30d36368/while-coder/sbot"
---

# sbot — Self-hosted AI Agent Server

**English** | [中文](https://github.com/while-coder/sbot/blob/main/README.zh.md)

**Open-source, self-hosted AI agent framework.** Modular by design: models, memory, tools, and channels are independent building blocks you mix and match to assemble agents — run on your own server with multi-channel integrations, MCP tool support, and a built-in web UI, no vendor lock-in.

📖 **[Full documentation →](https://while-coder.github.io/sbot/)**

---

## Quick Start

### npm

```bash
# Install
npm install -g @qingfeng346/sbot

# Start (foreground), then open http://localhost:5500
sbot

# Start in the background (survives terminal close)
sbot -d

# Start on a specific port (when 5500 is taken; -p and -d can be combined)
sbot -p 3000
sbot -d -p 3000

# Save the port only, do not start
sbot port 3000
```

Full command reference:

| Command | Description |
|---------|-------------|
| `sbot` | Start the service (foreground) |
| `sbot -d` / `--daemon` | Start in the background (survives terminal close) |
| `sbot -p <port>` / `--port` | Start on the given port, e.g. `sbot -p 3000` |
| `sbot port <port>` | Save the port without starting |
| `sbot stop` | Stop…
