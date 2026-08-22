---
repo: "MCKRUZ/microsoft-agentic-harness"
name: "microsoft-agentic-harness"
description: "POC template for Microsoft Agent Framework agentic harness — skills, MCP, tools system modeled after Claude Code architecture"
readmeQualityOk: true
url: "https://github.com/MCKRUZ/microsoft-agentic-harness"
language: "C#"
languages: ["C#"]
languagePcts: [94]
stars: 13
forks: 6
openIssues: 45
closedIssues: 115
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-04T01:21:35Z"
lastCommitAt: "2026-08-22T04:07:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 50
maintainers: ["MCKRUZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/e92ea6667e47a2caf6d9b0e1a8c90095cd379bd6d98424b1737b95f9cb157604/MCKRUZ/microsoft-agentic-harness"
discussionCount: 1
---

# Microsoft Agentic Harness

If you've ever used [Claude Code](https://claude.ai/claude-code) and wondered *"how does this thing actually work under the hood?"* — this project is an answer to that question, built on the Microsoft stack.

The Agentic Harness is a proof-of-concept that reconstructs the architecture behind modern AI coding agents: the skills system that decides what an agent knows, the tool system that decides what it can do, the context budget that decides how much it can hold in its head at once, the orchestration loop that ties it all together, and the meta-harness that automatically improves the agent's own configuration over time. It runs on .NET 10, uses Clean Architecture, and speaks the same protocols (MCP, A2A) that the broader agent ecosystem is converging on.

It's not a chatbot wrapper. It's the plumbing that makes agents feel intelligent.

---

## The Problem

Most "agent" implementations are a prompt, an API call, and a prayer. They work for demos. They fall apart when you need an agent that can:

- **Use tools safely** — not just call functions, but do so within a security sandbox where file access is restricted to explicitly allowed paths and every…
