---
repo: "xiayu1987/noobot"
name: "noobot"
description: "noobot  featuring multi-agent bot, tool calling, smart, and fast local deployment with a vue + element plus + nodejs"
url: "https://github.com/xiayu1987/noobot"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["agent", "bot", "openclaw", "smart", "noobot", "harness", "dynamic-workflow"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-04-17T16:34:22Z"
lastCommitAt: "2026-07-01T07:07:14Z"
lastReleaseAt: "2026-06-30T09:06:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["xiayu1987"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7d3eb24fc555806b484b9e300d277da9dc2493df28f75864438554cc674d876/xiayu1987/noobot"
---

# Noobot

[中文](./README.zh-CN.md) | English

Noobot is a full-stack AI chat system built with **Node.js + Vue**.

## Features

- Multi-user isolated workspace/session
- Agent tools + skill extension
- SSE streaming output + WebSocket long connection
- Agent proxy gateway for resilient WebSocket fanout/replay
- One-command deployment via `start.sh` (PM2 + Caddy)
- Connector support (database/terminal/email)
- MCP server integration
- Multi-model provider management with scenario-based routing

## Project Structure

```text
noobot/
├── agent/                    # Agent core (tools, context, execution flow)
├── service/                  # Node.js backend (Express 5 + WebSocket + LangChain)
├── agent-proxy/              # Agent proxy gateway (WebSocket fanout, replay, HTTP proxy)
├── model-proxy/              # Model proxy layer
├── plugin/                   # Built-in plugins (e.g. harness)
├── i18n/                     # Shared i18n package
├── client/noobot-chat/       # Vue 3 frontend (Vite)
├── docs/                     # Architecture / refactor docs
├── user-template/            # User workspace template
├── workspace/                # Runtime user data (sessions, files,…
