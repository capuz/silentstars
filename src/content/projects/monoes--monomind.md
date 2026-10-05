---
repo: "monoes/monomind"
name: "monomind"
description: "Autonomous AI orchestration with persistent memory, self-coordinating agent orgs, and a codebase knowledge graph and more."
readmeQualityOk: true
url: "https://github.com/monoes/monomind"
homepage: "https://monoes.github.io/monomind/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [64, 33]
topics: ["agent-harness", "agentic-framework", "agentic-os", "orchestration-systems"]
stars: 21
forks: 3
openIssues: 3
closedIssues: 415
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-26T21:57:29Z"
lastCommitAt: "2026-10-05T10:47:13Z"
lastReleaseAt: "2026-05-11T11:04:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["nokhodian"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1221944165/d5d79ca5-11cb-48c7-aa80-999702abe17f"
discussionCount: 1
---

Apache 2.0 licensed &middot; Monomind keeps its own state on your machine; the AI tools it drives send prompts and code to their model providers — see [Trust & Security](#trust--security)

---

## What is Monomind?

Monomind is an **open-source CLI and MCP server** that plugs into Claude Code, [OpenCode](https://opencode.ai), Antigravity, Kimi Code, and Codex via the standard [Model Context Protocol](https://modelcontextprotocol.io/). It adds capabilities these assistants don't ship with out of the box:

- **Codebase knowledge graph** — tree-sitter parses your code into a SQLite-backed graph of files, functions, classes, and their relationships. Query imports, callers, and blast radius before making changes.
- **Persistent memory** — a JSON pattern store with episodic recall that survives across sessions. Agents and orgs share context without re-prompting.
- **Multi-agent coordination** — in-session, spawn ad-hoc agent teams via Claude Code's Task tool; for persistent background work, `monomind org run` starts a real SDK-backed daemon with policy-gated role agents and a live dashboard.
- **Agents, skills and picking** — ships 83 pickable agents, 82 skills and 376 Org skills, and…
