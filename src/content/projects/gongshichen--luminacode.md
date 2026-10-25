---
repo: "GongShichen/LuminaCode"
name: "LuminaCode"
description: "Local AI agent with a Go runtime and TypeScript terminal UI. Tools, memory, MCP, and multi-agent workflows."
readmeQualityOk: true
url: "https://github.com/GongShichen/LuminaCode"
language: "Go"
languages: ["Go"]
languagePcts: [93]
stars: 9
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-16T14:06:14Z"
lastCommitAt: "2026-10-25T08:40:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 26
maintainers: ["GongShichen", "bugcat9"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ea4a970172700fb57901b8d29d73df0b3a64080612b154003aa88a302cbf677/GongShichen/LuminaCode"
---

# LuminaCode

[简体中文](https://github.com/GongShichen/LuminaCode/blob/HEAD/README.zh-CN.md)

LuminaCode is a local general-purpose Agent. It uses a Go backend and a
TypeScript TUI, with project context, tools, skills, MCP, memory, sessions, and
Agent Teams.

## Agent Capabilities

- Uses the launch directory as the default project root.
- Reads `LUMINA.md` / `AGENTS.md`, with user-level fallback under
  `<AppRoot>/config/instructions`.
- Loads project, user, and bundled skills.
- Runs file, shell, web, MCP, memory, and task tools with permission controls.
- Keeps resumable sessions with transcript, state, tasks, tool results, skill
  recovery, and session memory.
- Records runtime activity as ordered, replayable events with crash recovery and
  idempotent submit commands.
- Supports OpenAI-compatible and Anthropic-compatible streaming APIs.
- Keeps visible chat separate from tool payloads, tool results, and runtime
  records.
- Supports sub-agents, Agent Teams, headless mode, and benchmark harnesses.

## Architecture

The installed command is split into two processes:

- `lumina`: the TypeScript terminal frontend and default user entry point.
- `lumina-backend`: the Go runtime that…
