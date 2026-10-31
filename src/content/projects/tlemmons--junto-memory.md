---
repo: "tlemmons/junto-memory"
name: "junto-memory"
description: "Persistent shared memory and coordination MCP server for multi-agent AI workflows. The memory component of the Junto system. MongoDB + ChromaDB. Production-tested with 6+ agents over 500+ sessions."
readmeQualityOk: true
url: "https://github.com/tlemmons/junto-memory"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["agent-communication", "agent-coordination", "ai", "ai-agents", "ai-memory", "chromadb", "claude-code", "mcp", "mcp-server", "model-context-protocol"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-11T19:05:02Z"
lastCommitAt: "2026-10-31T18:56:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 51
maintainers: ["tlemmons"]
openGraphImageUrl: "https://opengraph.githubassets.com/f58a6564e430ead56f31087443986cd1a170a90000b820cb51c7e5c4ed905989/tlemmons/junto-memory"
discussionCount: 0
---

# MCP Shared Memory Server (`junto-memory`)

> The **memory** component of the **[Junto](https://github.com/tlemmons/junto-stack)** multi-agent coordination system. For a working stack with docker-compose + adopter walkthrough, start at [`junto-stack`](https://github.com/tlemmons/junto-stack).

**A shared memory and coordination server for multiple AI coding agents, built on the Model Context Protocol (MCP).**

> 📋 **Running a server already?** See [`CHANGELOG.md`](https://github.com/tlemmons/junto-memory/blob/HEAD/CHANGELOG.md) for release notes — the current release (1.39.0) changes how global guidelines are seeded and generalizes the `execute-don't-ask` default; each has an upgrade note.

> [!IMPORTANT]
> **This is meant to be set up by an AI agent, not installed by hand.** Junto exists to coordinate fleets of coding agents, so the install is written for one of those agents to read and run — clone the repo and hand it to a Claude Code (or any MCP-capable) session, and let it drive. The commands in this README and in [`AGENT_INSTALL.md`](https://github.com/tlemmons/junto-memory/blob/HEAD/AGENT_INSTALL.md) are there so you can follow along and so the agent has something exact to…
