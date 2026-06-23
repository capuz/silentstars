---
repo: "dcc-mcp/dcc-mcp-core"
name: "dcc-mcp-core"
description: "Core runtime and shared tooling for DCC-MCP: safe, skill-first MCP integration across Maya, Blender, Houdini, Photoshop, and custom DCC hosts."
url: "https://github.com/dcc-mcp/dcc-mcp-core"
homepage: "https://dcc-mcp.github.io/dcc-mcp-core/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [55, 38]
topics: ["ai-agents", "automation", "blender", "dcc", "houdini", "maya", "mcp", "model-context-protocol", "photoshop", "pyo3"]
stars: 28
forks: 1
openIssues: 1
closedIssues: 472
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-03-18T13:06:36Z"
lastCommitAt: "2026-06-23T01:24:41Z"
lastReleaseAt: "2025-04-07T05:45:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 63
maintainers: ["loonghao"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fdab33aadea4c8283d387bbd227fe3df28422e22d71e57c9c1eb1ad56aef162/dcc-mcp/dcc-mcp-core"
discussionCount: 0
---

# dcc-mcp-core

![dcc-mcp-core logo](docs/assets/brand/dcc-mcp-logo.png)

[中文](README_zh.md) | English

**Agent-first DCC control plane: one CLI, one gateway, every live creative host.**

`dcc-mcp-core` turns Maya, Blender, Houdini, Photoshop, and custom studio tools into discoverable, routable MCP endpoints. Agents stop guessing from shell output and start working with live scene state, scoped tool catalogs, structured results, viewport diagnostics, audit logs, and workflows that can survive real production constraints.

The default operator path is `dcc-mcp-cli`: local agent-control commands ensure the loopback gateway is available for Admin UI and IDE MCP clients, then use live DCC sessions from the shared FileRegistry and each selected instance's direct MCP endpoint; remote profiles route through a selected gateway. Endpoint/admin/update commands also ensure the local gateway when needed, so agents and CI scripts do not need a fragile preflight dance. The same stack powers the browser Admin UI, marketplace skill installs, package updates, Sentry/webhook/OTLP integration settings, and evidence panels for traces, calls, logs, and runtime health.

Under the hood it combines **MCP…
