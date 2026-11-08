---
repo: "dzhioev/bro"
name: "bro"
description: "Build your team of AI agents without the pain of prompt chaos, wide-open keys, MCP overload, and a free-for-all on your machine. Declare each persona (bro) once, with its prompt, tools, secrets, procedures, and whom it may summon, and it comes to life in its own sandbox holding exactly that, on any harness, any model"
readmeQualityOk: true
url: "https://github.com/dzhioev/bro"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent-framework", "agentic-ai", "agents", "ai-agents", "anthropic", "claude", "claude-code", "harness", "llm", "mcp"]
stars: 12
forks: 0
openIssues: 120
closedIssues: 488
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-06T08:46:04Z"
lastCommitAt: "2026-11-08T10:41:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 45
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1324971151/2d4e17a4-554b-41f8-9d24-cd32b124107b"
---

# bro

> [!WARNING]
> **Early development.**
> Interfaces move without deprecation cycles and `master` carries breaking changes.
> Provided as-is, without warranty or support;
> use it at your own risk.

**Declare an agent once.
Run it on any harness[^harness] and any LLM[^llm].
Know exactly what it can reach.**

A bro is an agent persona declared in one place
— what it knows, which tools it holds, which secrets it may read, whom it may delegate to
— with nothing about it wired anywhere else.
The same declaration runs as a Claude Code session or under bro's own agent loop, one-shot or interactive, on whichever model you name at launch.
Wherever it runs, it runs inside a boundary that holds exactly what the declaration says:
a fresh container, a clone, the credentials it needs and no other, the bros it may summon and no other.
The rest of this page shows all of that on one made-up bro.

## Getting started

The way in is [`BOOTSTRAP.md`](https://github.com/dzhioev/bro/blob/HEAD/BOOTSTRAP.md), an executable checklist for an agent rather than a page for you.
On a macOS or Ubuntu host with Git and [uv](https://docs.astral.sh/uv/), open an agent session in the repository you want to…
