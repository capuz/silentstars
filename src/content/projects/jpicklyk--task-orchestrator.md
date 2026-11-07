---
repo: "jpicklyk/task-orchestrator"
name: "task-orchestrator"
description: "Server-enforced workflow discipline for AI agents. An MCP server providing persistent work items, dependency graphs, quality gates, and actor attribution. Schemas define what agents must produce — the server blocks the call if they don't. Works with any MCP-compatible client."
readmeQualityOk: true
url: "https://github.com/jpicklyk/task-orchestrator"
homepage: "https://github.com/jpicklyk/task-orchestrator/wiki"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [80]
topics: ["ai-coding-assistant", "ai-development", "ai-memory", "ai-tools", "claude", "claude-code", "claude-desktop", "context-persistence", "developer-tools", "mcp"]
stars: 214
forks: 25
openIssues: 1
closedIssues: 73
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-05-22T20:06:06Z"
lastCommitAt: "2026-11-07T16:11:31Z"
lastReleaseAt: "2026-03-22T16:47:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 43
maintainers: ["jpicklyk"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dbd03183b96bbeb9cdb4bd17fa16b23b89435227559d14779cd455a59c0e6d3/jpicklyk/task-orchestrator"
discussionCount: 6
---

# MCP Task Orchestrator

**Server-enforced workflow discipline for AI agents.**

Prompt-based frameworks hope the LLM follows instructions. This one blocks the call if it doesn't.

Task Orchestrator is an [MCP server](https://modelcontextprotocol.io) that gives AI coding agents a persistent work item graph with quality gates enforced by the server, not the prompt. It is built for developers running multi-agent or multi-session coding workflows: an orchestrator dispatching sub-agents, a fresh session picking up yesterday's work, or an autonomous loop draining a backlog. It ships as a Docker image, works with any MCP client, and has an optional [Claude Code plugin](#claude-code-plugin) that adds skills and hooks on top.

> **New here? Start with the [illustrated field guide](https://jpicklyk.github.io/task-orchestrator/field-guide/).** It explains the ideas on this page in short visual pages, several of them interactive: fire triggers at a phase gate, click a work breakdown through its dependencies, and watch a schema resolve.

---

## The Problem

Multi-agent workflows need infrastructure the model doesn't provide. When an orchestrator dispatches sub-agents across sessions, there's…
