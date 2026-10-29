---
repo: "manufosela/karajan-code"
name: "karajan-code"
description: "Your AI writes the code; Karajan governs how it happens: TDD-first method, cross-AI review on every commit and git gates that make a false green impossible. Works with Claude, Codex, Gemini, OpenCode and Aider, on the subscriptions you already pay for. MCP server included."
readmeQualityOk: true
url: "https://github.com/manufosela/karajan-code"
homepage: "https://karajancode.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
topics: ["ai-agent", "ai-orchestration", "ai-code-review", "ai-governance", "claude-code", "code-review", "developer-tools", "git-hooks", "mcp", "mcp-server"]
stars: 41
forks: 8
openIssues: 26
closedIssues: 334
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-02-11T10:19:01Z"
lastCommitAt: "2026-10-29T10:36:15Z"
lastReleaseAt: "2026-03-29T20:11:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 49
maintainers: ["manufosela", "jorgecasar"]
openGraphImageUrl: "https://opengraph.githubassets.com/88b08b70184cf063457a6379debf2437fd055746817cda52852f262e2bc15df9/manufosela/karajan-code"
---

The environment that governs AI-driven development — your agent orchestrates, Karajan governs.

---

Your AI agent (Claude Code, Codex, Copilot, Antigravity, Cursor…) writes the code. **Karajan governs how it happens**: it installs a method your agent follows on every task, and enforces it with git gates that make a false green structurally impossible.

- **RAG before assuming** — `kj rag query` answers what your codebase does; no agent guesses. The install wires it as a native MCP tool (`kj_rag_query`) so querying the index is the agent's cheapest path. Works out of the box: local Ollama, or the built-in ONNX embedder when nothing can be installed; cloud embedders require an explicit sensitivity declaration and PII-redact every chunk. A distilled engineering canon rides along: `kj rag query --library` serves pattern cards (when it applies, when it does NOT, the canonical citation) so plans name a greenfield alternative instead of following the legacy line by inertia.
- **Card first, on YOUR board** — every piece of work is tracked before it starts: kj's HU Board (`kj hu add|move|list`), the Planning Game, or the board the project already uses (Linear, Trello, Jira, GitHub Issues)…
