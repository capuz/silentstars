---
repo: "clairun/clai"
name: "clai"
description: "Control teams of AI agents. Local-first, open source, sandboxed. MCP-native tools, shared workspaces, scheduled runs."
readmeQualityOk: true
url: "https://github.com/clairun/clai"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [55, 38]
topics: ["ai-agents", "mcp", "rust", "agent-orchestration", "multi-agent", "agentic-ai", "llm", "llm-agents", "model-context-protocol", "agentic-workflows"]
stars: 9
forks: 1
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-10-30T23:24:08Z"
lastCommitAt: "2026-11-07T13:54:38Z"
lastReleaseAt: "2026-05-27T18:35:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 70
maintainers: ["juacker", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1086798116/5d54ce6e-28ad-4075-b76b-fdc537ccf8d5"
discussionCount: 1
---

Control teams of AI agents. Local-first, open source, sandboxed.

  and permissions, working in parallel, on your schedule, and reporting to you
  from one Fleet cockpit.</em>

## What it is

CLAI organizes work into **workspaces**. A workspace is an ongoing
conversation with a **main agent** — a configurable LLM that owns the
workspace's provider, tools, skills, and permissions. The main agent can:

- **Chat** with you in a surface that stays front and center
- **Use tools** through attached MCP servers and a local shell sandbox
- **Delegate** to helper agents in the same workspace, each with their own
  skills, tools, and execution policy
- **Persist context** — memories and artifacts it writes are inspectable from
  the workspace header
- **Run on a schedule** — periodic workspaces fire on their interval

The **Fleet** view supervises everything: scheduled workspaces float to the
top, anything needing attention (failed or blocked tasks, input prompts) is
flagged, and selecting a card slides in a live chat preview.

## Features

- **Workspace-local agent teams** — Add helpers (e.g. a Code Reviewer or SoW
  Tracker) with their own prompts, skills, MCP servers, providers, and…
