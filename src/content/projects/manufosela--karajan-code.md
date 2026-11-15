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
stars: 42
forks: 8
openIssues: 20
closedIssues: 1092
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-02-11T10:19:01Z"
lastCommitAt: "2026-11-15T11:20:18Z"
lastReleaseAt: "2026-03-29T20:11:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 51
maintainers: ["manufosela"]
openGraphImageUrl: "https://opengraph.githubassets.com/38e0608b38c35d778280be4d0a28431a8a2b8becf95a481c7e8150450a309851/manufosela/karajan-code"
discussionCount: 3
---

The environment that governs AI-driven development — your agent orchestrates, Karajan governs.

---

Your AI agent (Claude Code, Codex, Copilot, Antigravity, Cursor…) writes the code. **Karajan governs how it happens**: it installs a method your agent follows on every task, and enforces it with git gates that make a false green structurally impossible.

- **RAG before assuming** — `kj rag query` answers what your codebase does; no agent guesses. The install wires it as a native MCP tool (`kj_rag_query`) so querying the index is the agent's cheapest path. Works out of the box: local Ollama, or the built-in ONNX embedder when nothing can be installed; cloud embedders require an explicit sensitivity declaration and PII-redact every chunk. A distilled engineering canon rides along: `kj rag query --library` serves pattern cards (when it applies, when it does NOT, the canonical citation) so plans name a greenfield alternative instead of following the legacy line by inertia.
- **Card first, on YOUR board** — every piece of work is tracked before it starts: kj's HU Board (`kj hu add|move|list`), the Planning Game, or the board the project already uses (Linear, Trello, Jira, GitHub Issues)…
