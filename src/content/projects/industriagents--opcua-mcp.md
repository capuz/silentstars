---
repo: "IndustriAgents/OPCUA-MCP"
name: "OPCUA-MCP"
description: "MCP server that connects AI agents ( Claude, ChatGPT, Gemini, Cursor etc.) to OPC UA systems — read, browse, history, subscriptions, events and alarms. "
readmeQualityOk: true
url: "https://github.com/IndustriAgents/OPCUA-MCP"
homepage: "https://industriagents.com/connect/opcua-mcp"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [64, 21]
topics: ["ai-agents", "iiot", "industrial-automation", "industry-40", "mcp", "model-context-protocol", "opc-ua", "opcua", "plc", "python"]
stars: 27
forks: 10
openIssues: 14
closedIssues: 65
watchers: 0
contributors: 5
recentReleases: 5
createdAt: "2025-05-23T14:49:58Z"
lastCommitAt: "2026-09-26T08:47:41Z"
lastReleaseAt: "2026-09-22T05:30:17Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 73
maintainers: ["midhunxavier", "dependabot[bot]", "Sanjay-jat"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6f24f51a9f0518753df832d104ae746bdfb6463f6446d4ebed6c4bca75d8947/IndustriAgents/OPCUA-MCP"
discussionCount: 0
---

# 🏭 OPC UA MCP Server

**Let Claude, Codex, Gemini and any other MCP agent read sensors, browse the plant and — only when you allow it — control equipment on any OPC UA server.**

[Quick start](#quick-start) · [Connect your agent](#connect-your-agent) · [Tools](#tools) · [Production](#going-to-production) · [Docs](#documentation)

</div>

## Features

- 🔌 **Any OPC UA server** — PLC, SCADA gateway or historian. Nothing to install on the plant side.
- 🧰 **The whole operator toolkit** — read, browse, history and aggregates, subscriptions, events and alarms, writes and method calls.
- 🛡️ **Read-only by default** — writes and method calls need an explicit profile, an allowlist and a pinned server certificate, and every control call is audited.
- 🐍 **Python or Node** — two first-class runtimes with the same tools and the same answers. [Use whichever you have](https://github.com/IndustriAgents/OPCUA-MCP/blob/HEAD/docs/install.md#which-runtime-am-i-installing).
- 📦 **One-file Claude Desktop install** — a `.mcpb` bundle with nothing else to set up.

```mermaid
flowchart LR
    A["AI agent<br/>(Claude, Codex, Gemini, Cursor…)"] -->|MCP over stdio| B["OPC UA MCP Server<br/>(Python or…
