---
repo: "manufosela/karajan-code"
name: "karajan-code"
description: "Local multi-agent coding orchestrator with 22 pipeline roles, TDD enforcement, SonarQube integration, and automated code review. Supports Claude, Codex, Gemini, OpenCode and Aider. MCP server included. No API costs, runs on your existing subscriptions."
readmeQualityOk: true
url: "https://github.com/manufosela/karajan-code"
homepage: "https://karajancode.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["ai-agent", "ai-orchestration", "orchestrator"]
stars: 31
forks: 5
openIssues: 2
closedIssues: 46
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-11T10:19:01Z"
lastCommitAt: "2026-07-30T06:06:52Z"
lastReleaseAt: "2026-03-29T20:11:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 45
maintainers: ["manufosela", "jorgecasar"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a3ed7f648ba07abdee694c5ea5c59ef4e80b179994c52e91ea624d5f6e7e901/manufosela/karajan-code"
---

</p>

<h1 align="center">Karajan Code</h1>

  The environment that governs AI-driven development — your agent orchestrates, Karajan governs.
</p>

</p>

</p>

---

Your AI agent (Claude Code, Codex, Gemini CLI, Cursor…) writes the code. **Karajan governs how it happens**: it installs a method your agent follows on every task, and enforces it with git gates that make a false green structurally impossible.

- **RAG before assuming** — `kj rag query` answers what your codebase does; no agent guesses. Works out of the box: local Ollama, or the built-in ONNX embedder when nothing can be installed; cloud embedders require an explicit sensitivity declaration and PII-redact every chunk.
- **Card first, on YOUR board** — every piece of work is tracked before it starts: kj's HU Board (`kj hu add|move|list`), the Planning Game, or the board the project already uses (Linear, Trello, Jira, GitHub Issues) via your agent's own MCP/tools. Declared, verified at install, never optional — Karajan does not run without a board. ADRs live in git (`kj adr add|list`).
- **Tests prove behavior** — the failing test exists first; the suite is never left red.
- **Deterministic first, then cross-AI review** —…
