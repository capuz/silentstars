---
repo: "nodecode-ai/nodecode"
name: "nodecode"
description: "A living agent organism in Lisp."
readmeQualityOk: true
url: "https://github.com/nodecode-ai/nodecode"
homepage: "https://nodecode.ai"
language: "Common Lisp"
languages: ["Common Lisp"]
languagePcts: [93]
topics: ["ai-agent", "coding-agent", "common-lisp", "lisp", "llm", "mcp", "sbcl", "agent-harness", "agentic-ai", "ai-agents"]
stars: 176
forks: 23
openIssues: 3
closedIssues: 15
watchers: 3
contributors: 8
recentReleases: 8
createdAt: "2025-08-21T19:24:33Z"
lastCommitAt: "2026-11-05T00:21:23Z"
lastReleaseAt: "2026-11-03T17:28:33Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 48
maintainers: ["ThomShark", "tryingET", "sirouk"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1042290287/fa882717-1e60-4dc4-8bf7-37aaa4dd90d3"
---

It becomes yours and evolves over time.

Nodecode is an agent that rewrites itself. It runs as one process in SBCL, a Common Lisp system, and shells attach to it. The model has one tool: it evaluates Lisp in the running program and keeps what it defines.

## Install

Linux and macOS:

```sh
curl -fsSL https://nodecode.ai/install.sh | sh
```

Windows, in PowerShell:

```powershell
irm https://nodecode.ai/install.ps1 | iex
```

Then run `nodecode`. The first launch opens setup. If another coding agent lives on the machine (Claude Code, Codex, Hermes Agent, OpenCode, Cursor CLI, Gemini CLI and 9 more), setup names it and asks before it reads anything; say Import and it brings over the agent's keys, instructions, memory, skills, MCP servers, bots and jobs, tick the agents one by one when it found several, or Skip and `/import` brings them over later. Then you pick a provider, a model and the reasoning effort. See [Quickstart](https://nodecode.ai/docs/quickstart) and [First run](https://nodecode.ai/docs/first-run).

## What's different

### Updates while it runs

An orchid opens new flowers while it keeps growing. An installed Nodecode updates itself the same way: most releases go live…
