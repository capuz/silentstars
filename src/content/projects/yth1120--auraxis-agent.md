---
repo: "yth1120/Auraxis-Agent"
name: "Auraxis-Agent"
description: "Auraxis - Desktop AI Agentic Workbench: Coding / Documents / Automation, multi-agent scheduling and plugin extensibility"
originalDescription: "Auraxis - Desktop AI Agentic Workbench: Coding / Documents / Automation, multi-agent scheduling and plugin extensibility"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yth1120/Auraxis-Agent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["agentic-ai", "cloud-connectors", "code-agent", "deepseek", "desktop-app", "document-tools", "electron", "llm", "mcp", "multi-agent"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-14T16:39:42Z"
lastCommitAt: "2026-10-09T18:55:31Z"
lastReleaseAt: "2026-09-18T01:12:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 51
maintainers: ["yth1120"]
openGraphImageUrl: "https://opengraph.githubassets.com/24972225137bd42ad228fff97d3a057ad7af62c7d293eb8b9158198a24f97091/yth1120/Auraxis-Agent"
---

# Auraxis

Auraxis is a desktop AI agent workbench built on Electron + React 19 + TypeScript. It provides a unified ReAct step engine, multi-agent scheduling, Code / Work modes, MCP connectors, document processing, a terminal, plugin extensions, and persistent project memory.

## Interface Preview

## Highlights

- Unified chat, multi-Agent, and Code Mode execution pipeline
- 71+ model tools with a complete permission, approval, and sandbox pipeline
- Three work modes: Chat / Work / Code
- MCP, Feishu/Lark, DeepSeek Harness, and other connectors
- Word, Excel, PPT, and PDF document skills
- TypeScript and Python SDKs
- Windows / macOS / Linux builds and E2E tests
- Local accounts, encrypted credentials, memory, and full-text search

## Requirements

- Node.js `>=24` (aligned with the Node 24 bundled in Electron 44)
- npm `>=10`
- Python `>=3.9` (only needed when using the Python SDK; on Windows you can use `winget install Python.Python.3.10`)

## Quick Start

```powershell
git clone https://github.com/yth1120/Auraxis-Agent.git
cd Auraxis
npm install
Copy-Item .env.example .env
npm run electron:dev
```

Before the first run, set `DEEPSEEK_API_KEY` in `.env`, or configure the model…
