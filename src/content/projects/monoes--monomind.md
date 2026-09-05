---
repo: "monoes/monomind"
name: "monomind"
description: "Autonomous Claude Code orchestration with persistent memory, self-coordinating agent orgs, and a codebase knowledge graph."
readmeQualityOk: true
url: "https://github.com/monoes/monomind"
homepage: "https://monoes.github.io/monomind/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [49, 45]
topics: ["agent-harness", "agentic-framework", "agentic-os", "orchestration-systems"]
stars: 16
forks: 1
openIssues: 5
closedIssues: 161
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-26T21:57:29Z"
lastCommitAt: "2026-09-05T07:39:14Z"
lastReleaseAt: "2026-05-11T11:04:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 49
maintainers: ["nokhodian"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1221944165/d5d79ca5-11cb-48c7-aa80-999702abe17f"
discussionCount: 1
---

</p>

<h1 align="center">Monomind</h1>

  <strong>An open-source MCP server that extends Claude Code with a codebase knowledge graph, persistent memory, and multi-agent coordination.</strong><br/>
  Apache 2.0 licensed &middot; Your code and memory stay local — see [Trust & Security](#trust--security) for the network calls Monomind does make
</p>

</p>

</p>

---

## What is Monomind?

Monomind is an **open-source CLI and MCP server** that plugs into Claude Code, [OpenCode](https://opencode.ai), Antigravity, Kimi Code, and Codex via the standard [Model Context Protocol](https://modelcontextprotocol.io/). It adds capabilities these assistants don't ship with out of the box:

- **Codebase knowledge graph** — tree-sitter parses your code into a SQLite-backed graph of files, functions, classes, and their relationships. Query imports, callers, and blast radius before making changes.
- **Persistent memory** — a JSON pattern store with episodic recall that survives across sessions. Agents and orgs share context without re-prompting.
- **Multi-agent coordination** — in-session, spawn ad-hoc agent teams via Claude Code's Task tool; for persistent background work, `monomind org run` starts…
