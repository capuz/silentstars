---
repo: "manufosela/karajan-code"
name: "karajan-code"
description: "Local multi-agent coding orchestrator with 22 pipeline roles, TDD enforcement, SonarQube integration, and automated code review. Supports Claude, Codex, Gemini, OpenCode and Aider. MCP server included. No API costs, runs on your existing subscriptions."
readmeQualityOk: true
url: "https://github.com/manufosela/karajan-code"
homepage: "https://karajancode.com"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [55, 35]
topics: ["ai-agent", "ai-orchestration", "orchestrator"]
stars: 35
forks: 6
openIssues: 10
closedIssues: 61
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-02-11T10:19:01Z"
lastCommitAt: "2026-09-18T08:27:41Z"
lastReleaseAt: "2026-03-29T20:11:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 46
maintainers: ["manufosela"]
openGraphImageUrl: "https://opengraph.githubassets.com/363e90e456cfbc42a644deb5db79e609f6fbcbe84e8e22b726422c8964e4eda3/manufosela/karajan-code"
---

</p>

<h1 align="center">Karajan Code</h1>

  The environment that governs AI-driven development — your agent orchestrates, Karajan governs.
</p>

</p>

</p>

---

Your AI agent (Claude Code, Codex, Copilot, Antigravity, Cursor…) writes the code. **Karajan governs how it happens**: it installs a method your agent follows on every task, and enforces it with git gates that make a false green structurally impossible.

- **RAG before assuming** — `kj rag query` answers what your codebase does; no agent guesses. The install wires it as a native MCP tool (`kj_rag_query`) so querying the index is the agent's cheapest path. Works out of the box: local Ollama, or the built-in ONNX embedder when nothing can be installed; cloud embedders require an explicit sensitivity declaration and PII-redact every chunk. A distilled engineering canon rides along: `kj rag query --library` serves pattern cards (when it applies, when it does NOT, the canonical citation) so plans name a greenfield alternative instead of following the legacy line by inertia.
- **Card first, on YOUR board** — every piece of work is tracked before it starts: kj's HU Board (`kj hu add|move|list`), the Planning Game, or the board…
