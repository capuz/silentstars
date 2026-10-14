---
repo: "getmodern-ai/graft"
name: "graft"
description: "Graft writes the API integration your agent is missing, on demand, and serves it over MCP. Connect Claude, ChatGPT, Hermes or OpenClaw; the model reads the vendor docs, writes and verifies a small tool, and the proxy injects the credential so it never reaches the code. Self-hostable with Docker and Postgres."
readmeQualityOk: true
url: "https://github.com/getmodern-ai/graft"
homepage: "https://getgraft.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agents", "ai-agents", "api", "chatgpt", "claude", "developer-tools", "integrations", "llm", "mcp", "mcp-server"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-09-08T20:00:41Z"
lastCommitAt: "2026-10-14T08:57:46Z"
lastReleaseAt: "2026-09-22T10:29:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 61
maintainers: ["atomovski"]
openGraphImageUrl: "https://opengraph.githubassets.com/be0805373be091c12e629254edf7e4676f42c3dec9b314e83a1285fb1a5aeea5/getmodern-ai/graft"
---

# Graft

**Graft gives an agent the integration it is missing. The basics of thirteen integrations are
ready-made; anything else is written on demand against the integration's real API, verified before
use, and handed to the agent as an MCP tool.**

Add Graft to Claude, Claude Code, Codex, ChatGPT, Hermes or OpenClaw as one MCP server. When the
agent hits a task no tool covers, it calls `find_tool`, and a ready-made tool for a connected
integration is one call from its list. When nothing fits, it calls `acquire`. Graft's own coding
model reads the integration's documentation, writes the smallest module that makes the call, checks
it, proves it with reads, publishes it, dry-runs it against the live API with every write stopped at
a proxy, and promotes it into that agent's tool list. The credential never enters the module, the
sandbox or the model. When the agent stops using a tool it leaves the list again, and stays in the
toolbox one call from coming back.

Four words are used exactly as [`CONTEXT.md`](https://github.com/getmodern-ai/graft/blob/HEAD/CONTEXT.md) defines them. A **harness** is the agent
software you run. A **person** is the account holder. An **integration** is a…
