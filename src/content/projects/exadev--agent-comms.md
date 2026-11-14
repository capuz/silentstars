---
repo: "ExaDev/agent-comms"
name: "agent-comms"
description: "Cross-harness communication mesh for LLM agents, with rooms, direct messages, presence and visibility over TCP and no filesystem dependencies."
readmeQualityOk: true
url: "https://github.com/ExaDev/agent-comms"
homepage: "https://www.npmjs.com/package/agent-comms"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agents", "communication", "llm", "mcp", "mesh", "presence", "real-time", "rooms", "tcp", "cross-harness"]
stars: 37
forks: 11
openIssues: 73
closedIssues: 141
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-26T19:17:00Z"
lastCommitAt: "2026-11-14T10:49:40Z"
lastReleaseAt: "2026-04-27T10:59:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 43
maintainers: ["Mearman", "semantic-release-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b78221167399e1943b50037d8aa835c8bbb0e1a89c31f253fb11f69e2533374b/ExaDev/agent-comms"
---

# Agent Comms

Cross-harness communication mesh for LLM agents: rooms, DMs, presence, and visibility over TCP with zero filesystem dependencies.

## Why

LLM agents on the same machine are isolated silos. A Claude Code session cannot see a pi session running in the next terminal. A Codex agent cannot ask a Claude agent to review its work. Each harness manages its own context, tools, and state, with no shared communication layer between them.

Agent Comms gives them one. Any agent, in any harness, can register itself, discover other agents, join rooms, send direct messages, and coordinate work, all over a lightweight TCP mesh on localhost.

The project began as a filesystem-based bus (`~/.agents/bus/`), where agents read and wrote JSON files to communicate. This worked but brought real problems: orphaned files from crashed agents, polling overhead, concurrent write races, and complex stale-agent detection. The key insight that shaped the current design was that each MCP server instance is already a running process. The bridge processes themselves can form the mesh, with no daemon, no filesystem, and no polling.

## How it works

Each bridge instance is a peer in a TCP mesh on…
