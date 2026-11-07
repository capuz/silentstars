---
repo: "acoyfellow/machinectl"
name: "machinectl"
description: "MCP server that lets AI control your machine — anywhere, from any device. Full audit logging, real-time activity feed, and cross-platform tools. Works with any MCP-compatible client."
readmeQualityOk: true
url: "https://github.com/acoyfellow/machinectl"
homepage: "https://coey.dev/projects/machinectl"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [70, 30]
topics: ["ai", "mcp"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-10T01:47:47Z"
lastCommitAt: "2026-11-07T13:55:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 25
maintainers: ["acoyfellow"]
openGraphImageUrl: "https://opengraph.githubassets.com/0df909786081bc569a9e74b48c16c2b9fb5f5ccf4464f9fff360736bb41be78e/acoyfellow/machinectl"
---

# machinectl

**Control your computer from a remote location. Control the agents on it too.**

`machinectl` is a small daemon. It makes your computer an authenticated MCP endpoint. It uses an outbound WebSocket connection. Your computer has no inbound listener. You need no tunnel to your desktop. You need no hosted service.

`machinectl` controls two layers:

| Layer | What you get |
|---|---|
| **The machine** | The shell, screen capture, screen recording, the mouse, the keyboard, grouped input, and macOS accessibility. |
| **The agents on it** | Find, start, prompt, steer, monitor, and stop the local agent sessions. This includes the sessions that already operate in a cmux workspace. |

A remote-desktop tool controls only the first layer. An agent tool does not connect to your computer. `machinectl` controls both layers. You control the agent, and the agent does the work.

[`pi`](https://github.com/badlogic/pi-mono) has its own adapter. One [ACP](https://agentclientprotocol.com) adapter controls the approximately 36 agents that speak the Agent Client Protocol. These agents include Codex, Claude, OpenCode, Gemini, and Amp. To add an agent, write an adapter.

This repository…
